export type Language = 'pt' | 'en' | 'fr' | 'de' | 'es' | 'lb'

export const languageNames: Record<Language, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  lb: 'Lëtzebuergesch',
}

export type T = {
  header: {
    nav: { about: string; books: string; product: string; watch: string; contact: string }
    cta: string
  }
  hero: {
    label: string
    headline: string
    subtext: string
    cta1: string
    cta2: string
  }
  about: {
    title: string
    p1: string
    p2Pre: string
    p2Post: string
    p3: string
    p4Pre: string
    p4Post: string
    p5: string
    p6: string
  }
  results: {
    title: string
    statLabels: [string, string, string, string]
    mindcodexDesc: string
    mindcodexLinks: { site: string; book: string; video: string }
    famoors: { title: string; desc: string }
    formation: { title: string; desc: string }
  }
  books: {
    title: string
    subtitle: string
    amazon: string
    categories: {
      personalDev: string
      romance: string
      romanceFactual: string
      sciFi: string
      poetryPT: string
      poetryEN: string
    }
  }
  product: {
    sectionTitle: string
    badge: string
    name: string
    desc: string
    cta: string
  }
  video: {
    title: string
    textBefore: string
    textAfter: string
    watchBtn: string
    subscribe: string
  }
  newsletter: {
    sectionTitle: string
    headline: string
    desc: string
    placeholder: string
    cta: string
    privacy: string
    successTitle: string
    successText: string
    footerText: string
    footerCta: string
    footerSuccess: string
  }
  connect: {
    title: string
    text: string
    contactTitle: string
    siteLabel: string
    emailLabel: string
    whatsappLabel: string
    signoff: string
  }
}

const pt: T = {
  header: {
    nav: { about: 'Sobre', books: 'Livros', product: 'Produto', watch: 'Assista', contact: 'Contato' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Empresária, Escritora, Pesquisadora da Mente Humana',
    headline: 'Transformo ciência, mente e espiritualidade em métodos, experiências e negócios que expandem pessoas e marcas.',
    subtext: 'Sou fundadora da Famoors, criadora do Mindcodex Method e autora de múltiplos livros. Desenvolvo produtos digitais, projetos editoriais, experiências terapêuticas e soluções B2B unindo comportamento, consciência, estratégia e transformação.',
    cta1: 'Assistir no YouTube',
    cta2: 'Conheça minha história',
  },
  about: {
    title: 'O que eu faço',
    p1: 'Crio métodos, livros, produtos digitais e experiências que unem mente, comportamento, energia e estratégia. Atuo no desenvolvimento pessoal, em terapias energéticas, em projetos editoriais e em soluções B2B, ajudando pessoas e marcas a desenvolver clareza, posicionamento, transformação e crescimento com profundidade e direção.',
    p2Pre: 'Eu sou Athanís Mesmerri, empresária, empreendedora digital, escritora, parapsicóloga e fundadora/CEO da ',
    p2Post: '.',
    p3: 'Meus negócios são produtos digitais, desenvolvimento pessoal, terapias energéticas e projetos editoriais, incluindo livros e materiais práticos.',
    p4Pre: 'Sou criadora do ',
    p4Post: ' e autora de múltiplos livros publicados na Amazon, abrangendo desenvolvimento pessoal, romance e ficção científica baseada em fatos reais.',
    p5: 'A Famoors e o Institut Pathé convergem na NeuroVyn, uma metodologia própria de reprogramação avançada e regulação neuroemocional integrativa, desenvolvida para apoiar clareza mental, equilíbrio do sistema nervoso e transformação humana profunda.',
    p6: 'Minha jornada explora os mistérios da mente humana, integrando ciência, comportamento e espiritualidade para promover bem-estar, transformação profunda e crescimento pessoal e empresarial.',
  },
  results: {
    title: 'Atuação',
    statLabels: ['Livros publicados na Amazon', 'Canais no YouTube', 'Empreendimentos fundados', 'Anos em hipnose clínica e parapsicologia'],
    mindcodexDesc: 'Sistema exclusivo que integra neurociência, hipnose clínica e parapsicologia para reprogramar padrões mentais inconscientes e promover transformação duradoura.',
    mindcodexLinks: { site: 'Site Oficial', book: 'Livro na Amazon', video: 'Vídeo no YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Fundadora da Famoors e cofundadora do NeuroVyn — empreendimentos que desenvolvem soluções inovadoras em produtos digitais, desenvolvimento pessoal e terapias energéticas.' },
    formation: { title: 'Formação Multidisciplinar', desc: 'Hipnose clínica, neurociência, parapsicologia e diversas abordagens terapêuticas. Idealizadora do Institut Pathé na Europa. Autora de ficção e não-ficção em português e inglês.' },
  },
  books: {
    title: 'Livros Publicados',
    subtitle: 'Disponíveis na Amazon em português e inglês — desenvolvimento pessoal, romance e ficção científica baseada em fatos reais.',
    amazon: 'Ver na Amazon →',
    categories: {
      personalDev: 'Desenvolvimento Pessoal',
      romance: 'Romance',
      romanceFactual: 'Romance baseado em fatos reais',
      sciFi: 'Ficção Científica',
      poetryPT: 'Poemas metafísicos e políticos que atravessam a alma e inquietam a consciência',
      poetryEN: 'Poemas metafísicos e políticos que inquietam a consciência',
    },
  },
  product: {
    sectionTitle: 'Produto Digital',
    badge: 'Método exclusivo',
    name: 'Método 7 Dias de Clareza e Decisão',
    desc: 'Um programa intensivo de 7 dias para eliminar a névoa mental, recuperar clareza e tomar decisões com confiança — integrando neurociência, hipnose e parapsicologia.',
    cta: 'Acessar o Método',
  },
  video: {
    title: 'Assista',
    textBefore: 'Compartilho conteúdo sobre mente, transformação e espiritualidade no ',
    textAfter: '.',
    watchBtn: 'Assista no YouTube',
    subscribe: 'Inscreva-se para conteúdo semanal sobre mente, hipnose, espiritualidade e transformação.',
  },
  newsletter: {
    sectionTitle: 'Lista Exclusiva',
    headline: 'Carta da Athanís',
    desc: 'Reflexões, insights e novidades sobre mente, comportamento, energia, espiritualidade, livros e transformação pessoal — direto para o seu e-mail, com intenção e cuidado.',
    placeholder: 'seu@email.com',
    cta: 'Quero acompanhar',
    privacy: 'Sem spam. Apenas conteúdo com profundidade. Você pode sair quando quiser.',
    successTitle: 'Obrigada por entrar na lista.',
    successText: 'Em breve você receberá a primeira carta.',
    footerText: 'Receba reflexões sobre mente, energia e transformação.',
    footerCta: 'Entrar na lista',
    footerSuccess: 'Obrigada — você está na lista. Até a próxima carta.',
  },
  connect: {
    title: 'Conecte-se',
    text: 'Estou sempre aberta a conversas e colaborações que gerem transformação.',
    contactTitle: 'Contato direto',
    siteLabel: 'Site da Famoors',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Com amor, Athanís Mesmerri',
  },
}

const en: T = {
  header: {
    nav: { about: 'About', books: 'Books', product: 'Product', watch: 'Watch', contact: 'Contact' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Entrepreneur, Writer, Researcher of the Human Mind',
    headline: 'I transform science, mind and spirituality into methods, experiences and businesses that expand people and brands.',
    subtext: 'I am founder of Famoors, creator of Mindcodex Method and author of multiple books. I develop digital products, editorial projects, therapeutic experiences and B2B solutions uniting behavior, consciousness, strategy and transformation.',
    cta1: 'Watch on YouTube',
    cta2: 'Discover my story',
  },
  about: {
    title: 'What I do',
    p1: 'I create methods, books, digital products and experiences that unite mind, behavior, energy and strategy. I work in personal development, energy therapies, editorial projects and B2B solutions, helping people and brands develop clarity, positioning, transformation and growth with depth and direction.',
    p2Pre: 'I am Athanís Mesmerri, businesswoman, digital entrepreneur, writer, parapsychologist and founder/CEO of ',
    p2Post: '.',
    p3: 'My businesses encompass digital products, personal development, energy therapies and editorial projects, including books and practical materials.',
    p4Pre: 'I am the creator of ',
    p4Post: ' and author of multiple books published on Amazon, covering personal development, romance and science fiction based on true events.',
    p5: 'Famoors and Institut Pathé converge in NeuroVyn, a proprietary methodology of advanced reprogramming and integrative neuroemotional regulation, developed to support mental clarity, nervous system balance and profound human transformation.',
    p6: 'My journey explores the mysteries of the human mind, integrating science, behavior and spirituality to promote well-being, profound transformation and personal and business growth.',
  },
  results: {
    title: 'Expertise',
    statLabels: ['Books published on Amazon', 'YouTube channels', 'Founded ventures', 'Years in clinical hypnosis and parapsychology'],
    mindcodexDesc: 'Exclusive system that integrates neuroscience, clinical hypnosis and parapsychology to reprogram unconscious mental patterns and promote lasting transformation.',
    mindcodexLinks: { site: 'Official Website', book: 'Book on Amazon', video: 'Video on YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Founder of Famoors and co-founder of NeuroVyn — ventures developing innovative solutions in digital products, personal development and energy therapies.' },
    formation: { title: 'Multidisciplinary Training', desc: 'Clinical hypnosis, neuroscience, parapsychology and various therapeutic approaches. Creator of Institut Pathé in Europe. Author of fiction and non-fiction in Portuguese and English.' },
  },
  books: {
    title: 'Published Books',
    subtitle: 'Available on Amazon in Portuguese and English — personal development, romance and science fiction based on true events.',
    amazon: 'View on Amazon →',
    categories: {
      personalDev: 'Personal Development',
      romance: 'Romance',
      romanceFactual: 'Romance based on true events',
      sciFi: 'Science Fiction',
      poetryPT: 'Metaphysical and political poems that cross the soul and disturb the conscience',
      poetryEN: 'Metaphysical and political poems that stir the soul and disturb the conscience',
    },
  },
  product: {
    sectionTitle: 'Digital Product',
    badge: 'Exclusive method',
    name: '7-Day Clarity and Decision Method',
    desc: 'An intensive 7-day program to eliminate mental fog, regain clarity and make decisions with confidence — integrating neuroscience, hypnosis and parapsychology.',
    cta: 'Access the Method',
  },
  video: {
    title: 'Watch',
    textBefore: 'I share content on mind, transformation and spirituality on ',
    textAfter: '.',
    watchBtn: 'Watch on YouTube',
    subscribe: 'Subscribe for weekly content on mind, hypnosis, spirituality and transformation.',
  },
  newsletter: {
    sectionTitle: 'Exclusive List',
    headline: 'Letter from Athanís',
    desc: 'Reflections, insights and updates on mind, behavior, energy, spirituality, books and personal transformation — straight to your inbox, with intention and care.',
    placeholder: 'your@email.com',
    cta: 'I want to follow',
    privacy: 'No spam. Only content with depth. You can unsubscribe anytime.',
    successTitle: 'Thank you for joining.',
    successText: 'You will receive the first letter soon.',
    footerText: 'Receive reflections on mind, energy and transformation.',
    footerCta: 'Join the list',
    footerSuccess: 'Thank you — you are on the list. Until the next letter.',
  },
  connect: {
    title: 'Connect',
    text: 'I am always open to conversations and collaborations that generate transformation.',
    contactTitle: 'Direct contact',
    siteLabel: 'Famoors Website',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'With love, Athanís Mesmerri',
  },
}

const fr: T = {
  header: {
    nav: { about: 'À propos', books: 'Livres', product: 'Produit', watch: 'Regarder', contact: 'Contact' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Entrepreneuse, Écrivaine, Chercheuse de l\'Esprit Humain',
    headline: 'Je transforme la science, l\'esprit et la spiritualité en méthodes, expériences et entreprises qui développent les personnes et les marques.',
    subtext: 'Je suis fondatrice de Famoors, créatrice du Mindcodex Method et auteure de plusieurs livres. Je développe des produits numériques, des projets éditoriaux, des expériences thérapeutiques et des solutions B2B unissant comportement, conscience, stratégie et transformation.',
    cta1: 'Regarder sur YouTube',
    cta2: 'Découvrir mon parcours',
  },
  about: {
    title: 'Ce que je fais',
    p1: 'Je crée des méthodes, des livres, des produits numériques et des expériences qui unissent l\'esprit, le comportement, l\'énergie et la stratégie. J\'œuvre dans le développement personnel, les thérapies énergétiques, les projets éditoriaux et les solutions B2B, aidant les personnes et les marques à développer clarté, positionnement, transformation et croissance avec profondeur et direction.',
    p2Pre: 'Je suis Athanís Mesmerri, femme d\'affaires, entrepreneuse digitale, écrivaine, parapsychologue et fondatrice/PDG de ',
    p2Post: '.',
    p3: 'Mes activités comprennent des produits numériques, le développement personnel, les thérapies énergétiques et des projets éditoriaux, incluant des livres et des matériaux pratiques.',
    p4Pre: 'Je suis la créatrice du ',
    p4Post: ' et auteure de plusieurs livres publiés sur Amazon, couvrant le développement personnel, le roman et la science-fiction basée sur des faits réels.',
    p5: 'Famoors et l\'Institut Pathé convergent dans NeuroVyn, une méthodologie propriétaire de reprogrammation avancée et de régulation neuroémotionnelle intégrative, développée pour soutenir la clarté mentale, l\'équilibre du système nerveux et la transformation humaine profonde.',
    p6: 'Mon parcours explore les mystères de l\'esprit humain, intégrant science, comportement et spiritualité pour promouvoir le bien-être, la transformation profonde et la croissance personnelle et entrepreneuriale.',
  },
  results: {
    title: 'Expertise',
    statLabels: ['Livres publiés sur Amazon', 'Chaînes YouTube', 'Entreprises fondées', 'Ans en hypnose clinique et parapsychologie'],
    mindcodexDesc: 'Système exclusif qui intègre neurosciences, hypnose clinique et parapsychologie pour reprogrammer les schémas mentaux inconscients et promouvoir une transformation durable.',
    mindcodexLinks: { site: 'Site Officiel', book: 'Livre sur Amazon', video: 'Vidéo sur YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Fondatrice de Famoors et cofondatrice de NeuroVyn — entreprises développant des solutions innovantes en produits numériques, développement personnel et thérapies énergétiques.' },
    formation: { title: 'Formation Multidisciplinaire', desc: 'Hypnose clinique, neurosciences, parapsychologie et diverses approches thérapeutiques. Conceptrice de l\'Institut Pathé en Europe. Auteure de fiction et de non-fiction en portugais et en anglais.' },
  },
  books: {
    title: 'Livres Publiés',
    subtitle: 'Disponibles sur Amazon en portugais et en anglais — développement personnel, roman et science-fiction basée sur des faits réels.',
    amazon: 'Voir sur Amazon →',
    categories: {
      personalDev: 'Développement Personnel',
      romance: 'Roman',
      romanceFactual: 'Roman basé sur des faits réels',
      sciFi: 'Science-Fiction',
      poetryPT: 'Poèmes métaphysiques et politiques qui traversent l\'âme et perturbent la conscience',
      poetryEN: 'Poèmes métaphysiques et politiques qui éveillent l\'âme et perturbent la conscience',
    },
  },
  product: {
    sectionTitle: 'Produit Numérique',
    badge: 'Méthode exclusive',
    name: 'Méthode 7 Jours de Clarté et Décision',
    desc: 'Un programme intensif de 7 jours pour éliminer le brouillard mental, retrouver la clarté et prendre des décisions avec confiance — intégrant neurosciences, hypnose et parapsychologie.',
    cta: 'Accéder à la Méthode',
  },
  video: {
    title: 'Regarder',
    textBefore: 'Je partage du contenu sur l\'esprit, la transformation et la spiritualité sur ',
    textAfter: '.',
    watchBtn: 'Regarder sur YouTube',
    subscribe: 'Abonnez-vous pour du contenu hebdomadaire sur l\'esprit, l\'hypnose, la spiritualité et la transformation.',
  },
  newsletter: {
    sectionTitle: 'Liste Exclusive',
    headline: 'Lettre d\'Athanís',
    desc: 'Réflexions, insights et actualités sur l\'esprit, le comportement, l\'énergie, la spiritualité, les livres et la transformation personnelle — directement dans votre boîte mail, avec intention et soin.',
    placeholder: 'votre@email.com',
    cta: 'Je veux suivre',
    privacy: 'Pas de spam. Uniquement du contenu approfondi. Vous pouvez vous désabonner à tout moment.',
    successTitle: 'Merci de rejoindre la liste.',
    successText: 'Vous recevrez la première lettre bientôt.',
    footerText: 'Recevez des réflexions sur l\'esprit, l\'énergie et la transformation.',
    footerCta: 'Rejoindre la liste',
    footerSuccess: 'Merci — vous êtes sur la liste. À la prochaine lettre.',
  },
  connect: {
    title: 'Connectez-vous',
    text: 'Je suis toujours ouverte aux conversations et aux collaborations qui génèrent de la transformation.',
    contactTitle: 'Contact direct',
    siteLabel: 'Site de Famoors',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Avec amour, Athanís Mesmerri',
  },
}

const de: T = {
  header: {
    nav: { about: 'Über mich', books: 'Bücher', product: 'Produkt', watch: 'Anschauen', contact: 'Kontakt' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Unternehmerin, Autorin, Forscherin des menschlichen Geistes',
    headline: 'Ich transformiere Wissenschaft, Geist und Spiritualität in Methoden, Erfahrungen und Unternehmen, die Menschen und Marken erweitern.',
    subtext: 'Ich bin Gründerin von Famoors, Schöpferin der Mindcodex Method und Autorin mehrerer Bücher. Ich entwickle digitale Produkte, Verlagsprojekte, therapeutische Erfahrungen und B2B-Lösungen, die Verhalten, Bewusstsein, Strategie und Transformation vereinen.',
    cta1: 'Auf YouTube ansehen',
    cta2: 'Meine Geschichte entdecken',
  },
  about: {
    title: 'Was ich tue',
    p1: 'Ich schaffe Methoden, Bücher, digitale Produkte und Erfahrungen, die Geist, Verhalten, Energie und Strategie vereinen. Ich arbeite in der persönlichen Entwicklung, Energietherapien, Verlagsprojekten und B2B-Lösungen und helfe Menschen und Marken, Klarheit, Positionierung, Transformation und Wachstum mit Tiefe und Richtung zu entwickeln.',
    p2Pre: 'Ich bin Athanís Mesmerri, Unternehmerin, digitale Entrepreneurin, Schriftstellerin, Parapsychologin und Gründerin/CEO von ',
    p2Post: '.',
    p3: 'Meine Geschäfte umfassen digitale Produkte, persönliche Entwicklung, Energietherapien und Verlagsprojekte, einschließlich Bücher und praktischer Materialien.',
    p4Pre: 'Ich bin die Schöpferin der ',
    p4Post: ' und Autorin mehrerer bei Amazon veröffentlichter Bücher, die persönliche Entwicklung, Liebesromane und auf wahren Begebenheiten basierende Science-Fiction abdecken.',
    p5: 'Famoors und das Institut Pathé konvergieren in NeuroVyn, einer proprietären Methodik der fortgeschrittenen Umprogrammierung und integrativen neuroemotionalen Regulierung, entwickelt zur Förderung mentaler Klarheit, des Gleichgewichts des Nervensystems und tiefer menschlicher Transformation.',
    p6: 'Meine Reise erkundet die Geheimnisse des menschlichen Geistes und verbindet Wissenschaft, Verhalten und Spiritualität, um Wohlbefinden, tiefe Transformation sowie persönliches und unternehmerisches Wachstum zu fördern.',
  },
  results: {
    title: 'Expertise',
    statLabels: ['Bücher auf Amazon veröffentlicht', 'YouTube-Kanäle', 'Gegründete Unternehmen', 'Jahre in klinischer Hypnose und Parapsychologie'],
    mindcodexDesc: 'Exklusives System, das Neurowissenschaft, klinische Hypnose und Parapsychologie integriert, um unbewusste mentale Muster umzuprogrammieren und dauerhafte Transformation zu fördern.',
    mindcodexLinks: { site: 'Offizielle Website', book: 'Buch auf Amazon', video: 'Video auf YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Gründerin von Famoors und Mitgründerin von NeuroVyn — Unternehmen, die innovative Lösungen in digitalen Produkten, persönlicher Entwicklung und Energietherapien entwickeln.' },
    formation: { title: 'Multidisziplinäre Ausbildung', desc: 'Klinische Hypnose, Neurowissenschaft, Parapsychologie und verschiedene therapeutische Ansätze. Schöpferin des Institut Pathé in Europa. Autorin von Fiktion und Sachbüchern auf Portugiesisch und Englisch.' },
  },
  books: {
    title: 'Veröffentlichte Bücher',
    subtitle: 'Erhältlich bei Amazon auf Portugiesisch und Englisch — persönliche Entwicklung, Liebesromane und Science-Fiction basierend auf wahren Begebenheiten.',
    amazon: 'Auf Amazon ansehen →',
    categories: {
      personalDev: 'Persönlichkeitsentwicklung',
      romance: 'Liebesroman',
      romanceFactual: 'Liebesroman nach wahren Begebenheiten',
      sciFi: 'Science-Fiction',
      poetryPT: 'Metaphysische und politische Gedichte, die die Seele durchdringen und das Bewusstsein erschüttern',
      poetryEN: 'Metaphysische und politische Gedichte, die die Seele bewegen und das Bewusstsein erschüttern',
    },
  },
  product: {
    sectionTitle: 'Digitales Produkt',
    badge: 'Exklusive Methode',
    name: '7-Tage-Methode für Klarheit und Entscheidung',
    desc: 'Ein intensives 7-Tage-Programm zur Beseitigung mentaler Unklarheit, zur Wiedererlangung von Klarheit und zur selbstsicheren Entscheidungsfindung — kombiniert Neurowissenschaft, Hypnose und Parapsychologie.',
    cta: 'Methode aufrufen',
  },
  video: {
    title: 'Anschauen',
    textBefore: 'Ich teile Inhalte über Geist, Transformation und Spiritualität auf ',
    textAfter: '.',
    watchBtn: 'Auf YouTube ansehen',
    subscribe: 'Abonnieren Sie für wöchentliche Inhalte über Geist, Hypnose, Spiritualität und Transformation.',
  },
  newsletter: {
    sectionTitle: 'Exklusive Liste',
    headline: 'Brief von Athanís',
    desc: 'Reflexionen, Einsichten und Neuigkeiten über Geist, Verhalten, Energie, Spiritualität, Bücher und persönliche Transformation — direkt in Ihren Posteingang, mit Absicht und Sorgfalt.',
    placeholder: 'ihre@email.com',
    cta: 'Ich möchte folgen',
    privacy: 'Kein Spam. Nur tiefgründige Inhalte. Sie können sich jederzeit abmelden.',
    successTitle: 'Danke, dass Sie sich eingetragen haben.',
    successText: 'Sie erhalten bald den ersten Brief.',
    footerText: 'Erhalten Sie Reflexionen über Geist, Energie und Transformation.',
    footerCta: 'Liste beitreten',
    footerSuccess: 'Danke — Sie sind auf der Liste. Bis zum nächsten Brief.',
  },
  connect: {
    title: 'Verbinden',
    text: 'Ich bin immer offen für Gespräche und Kooperationen, die Transformation erzeugen.',
    contactTitle: 'Direktkontakt',
    siteLabel: 'Famoors Website',
    emailLabel: 'E-Mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Mit Liebe, Athanís Mesmerri',
  },
}

const es: T = {
  header: {
    nav: { about: 'Sobre mí', books: 'Libros', product: 'Producto', watch: 'Ver', contact: 'Contacto' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Empresaria, Escritora, Investigadora de la Mente Humana',
    headline: 'Transformo ciencia, mente y espiritualidad en métodos, experiencias y negocios que expanden personas y marcas.',
    subtext: 'Soy fundadora de Famoors, creadora del Mindcodex Method y autora de múltiples libros. Desarrollo productos digitales, proyectos editoriales, experiencias terapéuticas y soluciones B2B uniendo comportamiento, conciencia, estrategia y transformación.',
    cta1: 'Ver en YouTube',
    cta2: 'Conoce mi historia',
  },
  about: {
    title: 'Lo que hago',
    p1: 'Creo métodos, libros, productos digitales y experiencias que unen mente, comportamiento, energía y estrategia. Actúo en el desarrollo personal, en terapias energéticas, en proyectos editoriales y en soluciones B2B, ayudando a personas y marcas a desarrollar claridad, posicionamiento, transformación y crecimiento con profundidad y dirección.',
    p2Pre: 'Soy Athanís Mesmerri, empresaria, emprendedora digital, escritora, parapsicóloga y fundadora/CEO de ',
    p2Post: '.',
    p3: 'Mis negocios son productos digitales, desarrollo personal, terapias energéticas y proyectos editoriales, incluyendo libros y materiales prácticos.',
    p4Pre: 'Soy creadora del ',
    p4Post: ' y autora de múltiples libros publicados en Amazon, abarcando desarrollo personal, romance y ciencia ficción basada en hechos reales.',
    p5: 'Famoors y el Institut Pathé convergen en NeuroVyn, una metodología propia de reprogramación avanzada y regulación neuroemocional integrativa, desarrollada para apoyar la claridad mental, el equilibrio del sistema nervioso y la transformación humana profunda.',
    p6: 'Mi camino explora los misterios de la mente humana, integrando ciencia, comportamiento y espiritualidad para promover el bienestar, la transformación profunda y el crecimiento personal y empresarial.',
  },
  results: {
    title: 'Expertise',
    statLabels: ['Libros publicados en Amazon', 'Canales de YouTube', 'Emprendimientos fundados', 'Años en hipnosis clínica y parapsicología'],
    mindcodexDesc: 'Sistema exclusivo que integra neurociencia, hipnosis clínica y parapsicología para reprogramar patrones mentales inconscientes y promover una transformación duradera.',
    mindcodexLinks: { site: 'Sitio Oficial', book: 'Libro en Amazon', video: 'Video en YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Fundadora de Famoors y cofundadora de NeuroVyn — emprendimientos que desarrollan soluciones innovadoras en productos digitales, desarrollo personal y terapias energéticas.' },
    formation: { title: 'Formación Multidisciplinar', desc: 'Hipnosis clínica, neurociencia, parapsicología y diversos enfoques terapéuticos. Idealizadora del Institut Pathé en Europa. Autora de ficción y no-ficción en portugués e inglés.' },
  },
  books: {
    title: 'Libros Publicados',
    subtitle: 'Disponibles en Amazon en portugués e inglés — desarrollo personal, romance y ciencia ficción basada en hechos reales.',
    amazon: 'Ver en Amazon →',
    categories: {
      personalDev: 'Desarrollo Personal',
      romance: 'Romance',
      romanceFactual: 'Romance basado en hechos reales',
      sciFi: 'Ciencia Ficción',
      poetryPT: 'Poemas metafísicos y políticos que atraviesan el alma e inquietan la conciencia',
      poetryEN: 'Poemas metafísicos y políticos que conmueven el alma e inquietan la conciencia',
    },
  },
  product: {
    sectionTitle: 'Producto Digital',
    badge: 'Método exclusivo',
    name: 'Método 7 Días de Claridad y Decisión',
    desc: 'Un programa intensivo de 7 días para eliminar la niebla mental, recuperar la claridad y tomar decisiones con confianza — integrando neurociencia, hipnosis y parapsicología.',
    cta: 'Acceder al Método',
  },
  video: {
    title: 'Ver',
    textBefore: 'Comparto contenido sobre mente, transformación y espiritualidad en ',
    textAfter: '.',
    watchBtn: 'Ver en YouTube',
    subscribe: 'Suscríbete para contenido semanal sobre mente, hipnosis, espiritualidad y transformación.',
  },
  newsletter: {
    sectionTitle: 'Lista Exclusiva',
    headline: 'Carta de Athanís',
    desc: 'Reflexiones, insights y novedades sobre mente, comportamiento, energía, espiritualidad, libros y transformación personal — directo a tu correo, con intención y cuidado.',
    placeholder: 'tu@email.com',
    cta: 'Quiero seguir',
    privacy: 'Sin spam. Solo contenido con profundidad. Puedes salir cuando quieras.',
    successTitle: 'Gracias por unirte.',
    successText: 'Pronto recibirás la primera carta.',
    footerText: 'Recibe reflexiones sobre mente, energía y transformación.',
    footerCta: 'Unirse a la lista',
    footerSuccess: 'Gracias — estás en la lista. Hasta la próxima carta.',
  },
  connect: {
    title: 'Conéctate',
    text: 'Siempre estoy abierta a conversaciones y colaboraciones que generen transformación.',
    contactTitle: 'Contacto directo',
    siteLabel: 'Sitio de Famoors',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Con amor, Athanís Mesmerri',
  },
}

const lb: T = {
  header: {
    nav: { about: 'Iwwer mech', books: 'Bicher', product: 'Produkt', watch: 'Kucken', contact: 'Kontakt' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Unternehmerin, Autorin, Fuerscherin vum mënschleche Geescht',
    headline: 'Ech transforméieren Wëssenschaft, Geescht a Spiritualitéit a Methoden, Erfarungen a Geschäfter, déi Mënschen a Marken erweideren.',
    subtext: 'Ech sinn d\'Grënnerin vun der Famoors, d\'Schëpferin vun der Mindcodex Method an Autorin vu verschiddene Bicher. Ech entwéckelen digital Produiten, editorial Projeten, therapeutesch Erfarungen a B2B-Léisungen, déi Verhalen, Bewosstsinn, Strategie a Transformatioun verbannen.',
    cta1: 'Op YouTube kucken',
    cta2: 'Meng Geschicht entdecken',
  },
  about: {
    title: 'Wat ech maachen',
    p1: 'Ech schafen Methoden, Bicher, digital Produiten an Erfarungen, déi Geescht, Verhalen, Energie a Strategie verbannen. Ech schaffen am perséinleche Beräich, an Energietherapien, a Verlagsprojeten a B2B-Léisungen, a hëllefe Mënschen a Marken, Kloerheet, Positiounéierung, Transformatioun a Wuesstem mat Déift a Richtung ze entwéckelen.',
    p2Pre: 'Ech sinn Athanís Mesmerri, Ënnernehmerin, digital Entrepreneuse, Schrëftstellerin, Parapsychologin an Grënnerin/CEO vun ',
    p2Post: '.',
    p3: 'Meng Geschäfter ëmfaassen digital Produiten, perséinlech Entwécklung, Energietherapien a Verlagsprojeten, inklusiv Bicher a praktescht Material.',
    p4Pre: 'Ech sinn d\'Schëpferin vun der ',
    p4Post: ' an Autorin vu verschiddene Bicher, déi op Amazon verëffentlecht goufen, an déi perséinlech Entwécklung, Romantik a Wëssenschaftsfantasi baséiert op wuere Fakter ofdecken.',
    p5: 'Famoors an d\'Institut Pathé konvergéieren an der NeuroVyn, enger eegener Methodologie fir fortgeschratt Umprogramméierung an integrativer neuroemotionaler Reguléierung, entwéckelt fir mental Kloerheet, Gläichgewiicht vum Nervesystem a déif mënschlech Transformatioun z\'ënnerstëtzen.',
    p6: 'Meng Rees erfuerscht d\'Geheimnisser vum mënschleche Geescht, integréiert Wëssenschaft, Verhalen a Spiritualitéit fir Wuelbefannen, déif Transformatioun a perséinleches a betrieblechem Wuesstem ze förderen.',
  },
  results: {
    title: 'Expertise',
    statLabels: ['Bicher op Amazon verëffentlecht', 'YouTube-Kanäl', 'Gegrënnte Venture', 'Joer a klinescher Hypnose a Parapsychologie'],
    mindcodexDesc: 'Exklusivt System dat Neurowëssenschaft, klinescher Hypnose a Parapsychologie integréiert fir ëndbewosst mental Muster ëmzeprogramméieren a dauerhaft Transformatioun ze förderen.',
    mindcodexLinks: { site: 'Offiziell Websäit', book: 'Buch op Amazon', video: 'Video op YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Grënnerin vun der Famoors a Matgrënnerin vun der NeuroVyn — Venture déi innovativ Léisungen a digitale Produiten, perséinlecher Entwécklung an Energietherapien entwéckelen.' },
    formation: { title: 'Multidisziplinär Ausbildung', desc: 'Klinescher Hypnose, Neurowëssenschaft, Parapsychologie a verschidde therapeutesch Approchen. Schëpferin vum Institut Pathé an Europa. Autorin vu Fiktion an Non-Fiktion a Portugisescher a Englesch.' },
  },
  books: {
    title: 'Verëffentlecht Bicher',
    subtitle: 'Disponibel op Amazon op Portugisescher an Englesch — perséinlech Entwécklung, Romantik a Wëssenschaftsfantasi baséiert op wuere Tatsaachen.',
    amazon: 'Op Amazon gesinn →',
    categories: {
      personalDev: 'Perséinlech Entwécklung',
      romance: 'Romantik',
      romanceFactual: 'Romantik baséiert op wuere Fakter',
      sciFi: 'Wëssenschaftsfantasi',
      poetryPT: 'Metaphysesch a politesch Gedichter déi d\'Séil duerchdréngen an d\'Bewosstsinn erschütteren',
      poetryEN: 'Metaphysesch a politesch Gedichter déi d\'Séil beweegen an d\'Bewosstsinn erschütteren',
    },
  },
  product: {
    sectionTitle: 'Digital Produkt',
    badge: 'Exklusiv Method',
    name: '7-Deeg Method fir Kloerheet a Entscheedung',
    desc: 'E 7-Deeg intensivt Programm fir mental Niwwel ze eliminéieren, Kloerheet ze recuperéieren a Entscheedungen mat Vertrauen ze treffen — integréiert Neurowëssenschaft, Hypnose a Parapsychologie.',
    cta: 'Method opruffen',
  },
  video: {
    title: 'Kucken',
    textBefore: 'Ech deelen Inhalt iwwer Geescht, Transformatioun a Spiritualitéit op ',
    textAfter: '.',
    watchBtn: 'Op YouTube kucken',
    subscribe: 'Abonnéiert fir wöchentlech Inhalt iwwer Geescht, Hypnose, Spiritualitéit a Transformatioun.',
  },
  newsletter: {
    sectionTitle: 'Exklusiv Lëscht',
    headline: 'Bréif vun Athanís',
    desc: 'Reflexiounen, Abreeten a Neiegkeeten iwwer Geescht, Verhalen, Energie, Spiritualitéit, Bicher a perséinlech Transformatioun — direkt an Äre Postfach, mat Intentioun a Suerg.',
    placeholder: 'är@email.com',
    cta: 'Ech wëll suivéieren',
    privacy: 'Kee Spam. Nëmme Inhalt mat Déift. Dir kënnt jidderéier austrieden.',
    successTitle: 'Merci fir d\'Abonnement.',
    successText: 'Dir kritt geschwënn den éischte Bréif.',
    footerText: 'Kritt Reflexiounen iwwer Geescht, Energie a Transformatioun.',
    footerCta: 'D\'Lëscht bäitrieden',
    footerSuccess: 'Merci — Dir sidd op der Lëscht. Bis zum nächste Bréif.',
  },
  connect: {
    title: 'Verbënnt Iech',
    text: 'Ech sinn ëmmer op fir Gespréicher a Kollaboratiounen déi Transformatioun generéieren.',
    contactTitle: 'Direktkontakt',
    siteLabel: 'Famoors Websäit',
    emailLabel: 'E-Mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Mat Léift, Athanís Mesmerri',
  },
}

export const translations: Record<Language, T> = { pt, en, fr, de, es, lb }
