# Instruções fixas do projeto

## Objetivo
Este projeto é o site oficial de Athanís Mesmerri.  
O foco é manter uma presença profissional, elegante, clara e fiel à identidade da autora, empresária e fundadora/CEO da Famoors.

## Regras permanentes
- Não resumir a bio sem pedir.
- Não alterar o nome "Athanís Mesmerri".
- Não escrever o nome em minúsculas.
- Não remover acentos.
- Não substituir textos reais por versões genéricas de marketing.
- Não alterar o layout geral sem autorização.
- Não remover seções existentes sem autorização.
- Preservar a identidade visual e a estrutura principal do site.
- Sempre verificar se imagem, vídeo e links estão funcionando antes de concluir.
- Sempre validar localmente antes de encerrar a tarefa.
- Sempre informar quais arquivos foram alterados.

## Identidade oficial
Nome exibido corretamente: Athanís Mesmerri

Bio oficial:
Eu sou Athanís Mesmerri, empresária, empreendedora digital, escritora, parapsicóloga e fundadora/CEO da Famoors.
Meus negócios são produtos digitais, desenvolvimento pessoal, terapias energéticas e projetos editoriais, incluindo livros e materiais práticos.
Meu histórico: sou criadora do Mindcodex Method e autora de múltiplos livros publicados na Amazon, abrangendo desenvolvimento pessoal, romance e ficção científica baseada em fatos reais. Tenho experiência em hipnose clínica, neurociência, parapsicologia e diversas abordagens terapêuticas. Sou idealizadora do Institut Pathé na Europa e, em parceria com a Famoors, cofundadora do NeuroVyn. Minha jornada explora os mistérios da mente humana, integrando ciência, comportamento e espiritualidade para promover bem-estar, transformação profunda e crescimento pessoal e empresarial.

## Links fixos
Site Famoors: https://www.famoors.com
MindCodex Method: https://www.mindcodexmethod.com
Email: mailto:info@athanismesmerri.com
WhatsApp Business: https://wa.me/351925126637

## Regras de mídia
- Usar a foto oficial de Athanís Mesmerri, nunca imagens herdadas de projetos anteriores.
- Remover qualquer referência residual a Oleg, oleeeg ou projeto-base anterior.
- Verificar favicon, metadata, Open Graph, social preview, ícones e avatars.
- Verificar se o vídeo possui áudio funcional; se não possuir faixa de áudio, informar claramente.

## Links extras
Vídeo hover do site: https://www.youtube.com/watch?v=ZyYAmmCXbPo
Vídeo MindCodex Method: https://www.youtube.com/watch?v=dr9qsrd5GQU&t=43s

## Entrega esperada
Ao finalizar qualquer tarefa:
- informar quais arquivos foram alterados;
- validar no localhost;
- confirmar o que foi corrigido;
- não mexer em partes não solicitadas.

---

## Tech Stack
- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Analytics:** Vercel Analytics + Speed Insights
- **Deployment:** Vercel — repositório: https://github.com/athanismesmerri-ctrl/Meu-Site.git

### Dev Commands
```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
vercel --prod  # Deploy para produção
```

### Estrutura do site (seções em ordem)
1. **Hero** — `hero-section.tsx` — nome, foto, label, CTAs
2. **Sobre** — `about-section.tsx` — bio completa
3. **Atuação** — `results-section.tsx` — stats + cards com links
4. **Livros** — `books-section.tsx` — 9 livros com links Amazon
5. **Produto** — `product-section.tsx` — Método 7 Dias de Clareza e Decisão
6. **Vídeo** — `video-section.tsx` — overlay hover + botão mobile
7. **Newsletter** — `newsletter-section.tsx` — Carta da Athanís
8. **Conecte-se** — `connect-section.tsx` — redes + contato direto + rodapé
9. **Header** — `header.tsx` — nav flutuante

### Arquivos de mídia em `/public`
- `image-1776622785668.jpeg` — foto principal (hero)
- `video de apresentação athanis e famoors.mp4` — vídeo de apresentação (sem faixa de áudio — muted por design)
