-- ============================================================
-- CHEGORA — Schema completo
-- Cola este SQL inteiro no Supabase SQL Editor e executa
-- ============================================================

-- EXTENSÕES
create extension if not exists "uuid-ossp";

-- ============================================================
-- PERFIS DOS CANDIDATOS
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  nationality text,
  current_country text,
  target_country text default 'Luxembourg',
  languages text[] default '{}',
  sectors text[] default '{}',
  experience_years int default 0,
  education_level text,
  linkedin_url text,
  avatar_url text,
  bio text,
  plan text not null default 'free',
  plan_expires_at timestamptz,
  stripe_customer_id text,
  onboarding_completed bool default false,
  preferred_language text default 'pt',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- EMPRESAS
-- ============================================================
create table public.companies (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  description text,
  website text,
  logo_url text,
  sector text,
  size text,
  country text default 'Luxembourg',
  city text,
  plan text not null default 'free',
  plan_expires_at timestamptz,
  stripe_customer_id text,
  verified bool default false,
  created_at timestamptz default now()
);

alter table public.companies enable row level security;

create policy "Company owners can manage their company"
  on public.companies for all
  using (auth.uid() = user_id);

create policy "Anyone can view verified companies"
  on public.companies for select
  using (verified = true);

-- ============================================================
-- VAGAS
-- ============================================================
create table public.jobs (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade,
  title text not null,
  slug text unique,
  description text,
  requirements text,
  benefits text,
  sector text,
  job_type text default 'full_time',
  location text default 'Luxembourg',
  remote bool default false,
  salary_min int,
  salary_max int,
  salary_currency text default 'EUR',
  required_languages text[] default '{}',
  experience_min int default 0,
  education_required text,
  application_url text,
  status text not null default 'active',
  featured bool default false,
  views_count int default 0,
  applications_count int default 0,
  expires_at timestamptz default (now() + interval '60 days'),
  published_at timestamptz default now(),
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.jobs enable row level security;

create policy "Anyone can view active jobs"
  on public.jobs for select
  using (status = 'active');

create policy "Company owners can manage their jobs"
  on public.jobs for all
  using (
    exists (
      select 1 from public.companies
      where companies.id = jobs.company_id
      and companies.user_id = auth.uid()
    )
  );

create policy "Admins can manage all jobs"
  on public.jobs for all
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.plan = 'admin'
    )
  );

-- ============================================================
-- CVS
-- ============================================================
create table public.cvs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null default 'Meu CV',
  language text default 'pt',
  content jsonb default '{}',
  pdf_url text,
  is_translated bool default false,
  source_language text,
  target_language text,
  adapted_for_market text default 'Luxembourg',
  ai_generated bool default false,
  version int default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.cvs enable row level security;

create policy "Users can manage own CVs"
  on public.cvs for all
  using (auth.uid() = user_id);

-- ============================================================
-- CANDIDATURAS
-- ============================================================
create table public.applications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  job_id uuid references public.jobs(id) on delete cascade,
  cv_id uuid references public.cvs(id),
  cover_letter text,
  status text not null default 'sent',
  applied_at timestamptz default now(),
  unique(user_id, job_id)
);

alter table public.applications enable row level security;

create policy "Users can manage own applications"
  on public.applications for all
  using (auth.uid() = user_id);

create policy "Company owners can view applications to their jobs"
  on public.applications for select
  using (
    exists (
      select 1 from public.jobs
      join public.companies on companies.id = jobs.company_id
      where jobs.id = applications.job_id
      and companies.user_id = auth.uid()
    )
  );

-- ============================================================
-- ASSINATURAS
-- ============================================================
create table public.subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  stripe_subscription_id text unique,
  stripe_price_id text,
  plan text not null,
  status text not null default 'active',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end bool default false,
  created_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscriptions"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- ============================================================
-- LOG DE USO DE IA (controlo de custos)
-- ============================================================
create table public.ai_generations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  type text not null,
  input_tokens int default 0,
  output_tokens int default 0,
  model text,
  cost_eur numeric(10,4) default 0,
  created_at timestamptz default now()
);

alter table public.ai_generations enable row level security;

create policy "Users can view own AI usage"
  on public.ai_generations for select
  using (auth.uid() = user_id);

-- ============================================================
-- ÍNDICES (performance)
-- ============================================================
create index idx_jobs_status on public.jobs(status);
create index idx_jobs_sector on public.jobs(sector);
create index idx_jobs_required_languages on public.jobs using gin(required_languages);
create index idx_profiles_plan on public.profiles(plan);
create index idx_applications_user on public.applications(user_id);
create index idx_applications_job on public.applications(job_id);
create index idx_cvs_user on public.cvs(user_id);

-- ============================================================
-- SEED: 5 vagas iniciais (curadoria manual)
-- ============================================================
insert into public.jobs (title, slug, description, sector, job_type, location, required_languages, salary_min, salary_max, application_url, created_by)
values
  ('Cozinheiro/a', 'cozinheiro-luxemburgo-2025', 'Restaurante em Luxemburgo procura cozinheiro/a com experiência. Contrato de longa duração, refeições incluídas.', 'restauracao', 'full_time', 'Luxembourg City', array['pt','fr'], 2200, 2800, null, null),
  ('Operador/a de Armazém', 'operador-armazem-luxemburgo-2025', 'Empresa de logística procura operadores de armazém. Experiência em empilhador preferencial. Turnos rotativos.', 'logistica', 'full_time', 'Bettembourg', array['pt','fr','en'], 2000, 2500, null, null),
  ('Empregado/a de Mesa', 'empregado-mesa-luxemburgo-2025', 'Café no centro de Luxemburgo procura empregado/a de mesa. Horário a combinar, boas gorjetas.', 'restauracao', 'part_time', 'Luxembourg City', array['pt','fr','en'], 1800, 2200, null, null),
  ('Ajudante de Cozinha', 'ajudante-cozinha-luxemburgo-2025', 'Hotel de 4 estrelas procura ajudante de cozinha. Sem experiência necessária, formação incluída.', 'restauracao', 'full_time', 'Kirchberg', array['pt','fr'], 1900, 2300, null, null),
  ('Trabalhador/a de Construção Civil', 'construcao-civil-luxemburgo-2025', 'Empresa de construção procura trabalhadores. Experiência em obras preferencial. Alojamento pode ser providenciado.', 'construcao', 'full_time', 'Luxembourg', array['pt','fr'], 2300, 3000, null, null);
