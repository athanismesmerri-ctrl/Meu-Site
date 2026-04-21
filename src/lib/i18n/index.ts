export type Language = 'pt' | 'en' | 'fr' | 'de'

export const languageNames: Record<Language, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
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
    nav: { about: 'Sobre', books: 'Obra', product: 'Método', watch: 'Conteúdo', contact: 'Contacto' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Escritora · Pesquisadora · Criadora · Empresária',
    headline: 'Entre a escrita e o método, entre a mente e o símbolo — uma marca construída com profundidade.',
    subtext: 'Autora publicada na Amazon, fundadora da Famoors e criadora do Mindcodex Method.',
    cta1: 'Assistir no YouTube',
    cta2: 'Sobre Athanís',
  },
  about: {
    title: 'Sobre Athanís',
    p1: 'Sou Athanís Mesmerri — escritora, pesquisadora e empresária. Minha trajetória une escrita autoral, investigação da mente humana e criação de projetos voltados à transformação pessoal e profissional.',
    p2Pre: 'Como fundadora e CEO da ',
    p2Post: ', desenvolvo iniciativas digitais, editoriais, B2B e estratégicas que conectam consciência, comportamento e negócio.',
    p3: 'A escrita ocupa um lugar central na minha marca. Sou autora publicada na Amazon, com obras em ficção, poesia metafísica e não ficção, desenvolvidas a partir de uma linguagem simbólica, introspectiva e autoral, marcada pela reflexão sobre a condição humana, a consciência e os processos de transformação interior.',
    p4Pre: 'Sou criadora do ',
    p4Post: '. Em parceria com o Institut Pathé, cofundamos a NeuroVyn, uma iniciativa desenvolvida para a Europa, voltada à integração entre neurociência, hipnose clínica, parapsicologia e regulação neuroemocional.',
    p5: '',
    p6: '',
  },
  results: {
    title: 'Autoridade',
    statLabels: ['Livros publicados na Amazon', 'Canais no YouTube', 'Empreendimentos fundados', 'Anos em hipnose clínica e parapsicologia'],
    mindcodexDesc: 'Sistema exclusivo que integra neurociência, hipnose clínica e parapsicologia para reprogramar padrões mentais inconscientes e promover transformação duradoura.',
    mindcodexLinks: { site: 'Site Oficial', book: 'Livro na Amazon', video: 'Vídeo no YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Fundadora da Famoors e cofundadora do NeuroVyn — projetos que desenvolvem soluções em produtos digitais, desenvolvimento pessoal e terapias energéticas.' },
    formation: { title: '', desc: '' },
  },
  books: {
    title: 'Obra Publicada',
    subtitle: 'Ficção, poesia metafísica e não-ficção — disponíveis na Amazon em português e inglês.',
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
    sectionTitle: 'Método',
    badge: 'MindCodex Method™',
    name: 'Método 7 Dias de Clareza e Decisão',
    desc: 'Um programa intensivo de 7 dias para eliminar a névoa mental, recuperar clareza e tomar decisões com confiança — integrando neurociência, hipnose e parapsicologia.',
    cta: 'Acessar o Método',
  },
  video: {
    title: 'Conteúdo',
    textBefore: 'Partilho reflexões sobre mente, transformação e espiritualidade no ',
    textAfter: '.',
    watchBtn: 'Assistir no YouTube',
    subscribe: 'Inscreva-se para conteúdo semanal sobre mente, consciência, espiritualidade e transformação.',
  },
  newsletter: {
    sectionTitle: 'Lista Exclusiva',
    headline: 'Carta da Athanís',
    desc: 'Reflexões, insights e novidades sobre mente, comportamento, energia, espiritualidade, livros e transformação — direto para o seu e-mail, com intenção e cuidado.',
    placeholder: 'seu@email.com',
    cta: 'Quero receber',
    privacy: 'Sem spam. Apenas conteúdo com profundidade. Pode sair quando quiser.',
    successTitle: 'Obrigada por entrar na lista.',
    successText: 'Em breve receberá a primeira carta.',
    footerText: 'Receba reflexões sobre mente, escrita e transformação.',
    footerCta: 'Entrar na lista',
    footerSuccess: 'Obrigada — está na lista. Até à próxima carta.',
  },
  connect: {
    title: 'Conecte-se',
    text: 'Estou sempre aberta a conversas e colaborações que gerem transformação.',
    contactTitle: 'Contacto direto',
    siteLabel: 'Site da Famoors',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp Business',
    signoff: 'Com amor, Athanís Mesmerri',
  },
}

const en: T = {
  header: {
    nav: { about: 'About', books: 'Works', product: 'Method', watch: 'Content', contact: 'Contact' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Author · Creator · Entrepreneur',
    headline: 'Between writing and method, between mind and symbol — a brand built with depth.',
    subtext: 'Published author on Amazon, founder of Famoors and creator of Mindcodex Method.',
    cta1: 'Watch on YouTube',
    cta2: 'About Athanís',
  },
  about: {
    title: 'About Athanís',
    p1: 'I am Athanís Mesmerri — writer, parapsychologist and entrepreneur. My presence moves between authorial writing, research of the human mind and founding projects that transform people and brands.',
    p2Pre: 'Founder and CEO of ',
    p2Post: ' — I develop digital products, energy therapies, editorial projects and B2B solutions that unite behavior, consciousness and strategy.',
    p3: 'Writing is a central pillar of my brand. I have published multiple books on Amazon in fiction, metaphysical poetry and non-fiction — with a distinctive authorial voice, between the philosophical and the introspective.',
    p4Pre: 'I am the creator of ',
    p4Post: ' and founder of Institut Pathé in Europe — methodologies integrating neuroscience, clinical hypnosis, parapsychology and integrative neuroemotional regulation.',
    p5: '',
    p6: '',
  },
  results: {
    title: 'Authority',
    statLabels: ['Books published on Amazon', 'YouTube channels', 'Founded ventures', 'Years in clinical hypnosis and parapsychology'],
    mindcodexDesc: 'Exclusive system that integrates neuroscience, clinical hypnosis and parapsychology to reprogram unconscious mental patterns and promote lasting transformation.',
    mindcodexLinks: { site: 'Official Website', book: 'Book on Amazon', video: 'Video on YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Founder of Famoors and co-founder of NeuroVyn — ventures developing solutions in digital products, personal development and energy therapies.' },
    formation: { title: '', desc: '' },
  },
  books: {
    title: 'Published Works',
    subtitle: 'Fiction, metaphysical poetry and non-fiction — available on Amazon in Portuguese and English.',
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
    sectionTitle: 'Method',
    badge: 'MindCodex Method™',
    name: '7-Day Clarity and Decision Method',
    desc: 'An intensive 7-day program to eliminate mental fog, regain clarity and make decisions with confidence — integrating neuroscience, hypnosis and parapsychology.',
    cta: 'Access the Method',
  },
  video: {
    title: 'Content',
    textBefore: 'I share reflections on mind, transformation and spirituality on ',
    textAfter: '.',
    watchBtn: 'Watch on YouTube',
    subscribe: 'Subscribe for weekly content on mind, consciousness, spirituality and transformation.',
  },
  newsletter: {
    sectionTitle: 'Exclusive List',
    headline: 'Letter from Athanís',
    desc: 'Reflections, insights and updates on mind, behavior, energy, spirituality, books and transformation — straight to your inbox, with intention and care.',
    placeholder: 'your@email.com',
    cta: 'I want to receive',
    privacy: 'No spam. Only content with depth. You can unsubscribe anytime.',
    successTitle: 'Thank you for joining.',
    successText: 'You will receive the first letter soon.',
    footerText: 'Receive reflections on mind, writing and transformation.',
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
    nav: { about: 'À propos', books: 'Œuvre', product: 'Méthode', watch: 'Contenu', contact: 'Contact' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Auteure · Créatrice · Entrepreneuse',
    headline: 'Entre l\'écriture et la méthode, entre l\'esprit et le symbole — une marque construite avec profondeur.',
    subtext: 'Auteure publiée sur Amazon, fondatrice de Famoors et créatrice du Mindcodex Method.',
    cta1: 'Regarder sur YouTube',
    cta2: 'À propos d\'Athanís',
  },
  about: {
    title: 'À propos d\'Athanís',
    p1: 'Je suis Athanís Mesmerri — écrivaine, parapsychologue et entrepreneuse. Ma présence se déplace entre l\'écriture auctoriale, la recherche de l\'esprit humain et la fondation de projets qui transforment personnes et marques.',
    p2Pre: 'Fondatrice et PDG de ',
    p2Post: ' — je développe des produits numériques, des thérapies énergétiques, des projets éditoriaux et des solutions B2B qui unissent comportement, conscience et stratégie.',
    p3: 'L\'écriture est un axe central de ma marque. J\'ai publié plusieurs livres sur Amazon en fiction, poésie métaphysique et non-fiction — avec une voix auctoriale distincte, entre le philosophique et l\'introspectif.',
    p4Pre: 'Je suis la créatrice du ',
    p4Post: ' et fondatrice de l\'Institut Pathé en Europe — des méthodologies intégrant neurosciences, hypnose clinique, parapsychologie et régulation neuroémotionnelle intégrative.',
    p5: '',
    p6: '',
  },
  results: {
    title: 'Autorité',
    statLabels: ['Livres publiés sur Amazon', 'Chaînes YouTube', 'Entreprises fondées', 'Ans en hypnose clinique et parapsychologie'],
    mindcodexDesc: 'Système exclusif qui intègre neurosciences, hypnose clinique et parapsychologie pour reprogrammer les schémas mentaux inconscients et promouvoir une transformation durable.',
    mindcodexLinks: { site: 'Site Officiel', book: 'Livre sur Amazon', video: 'Vidéo sur YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Fondatrice de Famoors et cofondatrice de NeuroVyn — projets développant des solutions en produits numériques, développement personnel et thérapies énergétiques.' },
    formation: { title: '', desc: '' },
  },
  books: {
    title: 'Œuvre Publiée',
    subtitle: 'Fiction, poésie métaphysique et non-fiction — disponibles sur Amazon en portugais et en anglais.',
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
    sectionTitle: 'Méthode',
    badge: 'MindCodex Method™',
    name: 'Méthode 7 Jours de Clarté et Décision',
    desc: 'Un programme intensif de 7 jours pour éliminer le brouillard mental, retrouver la clarté et prendre des décisions avec confiance — intégrant neurosciences, hypnose et parapsychologie.',
    cta: 'Accéder à la Méthode',
  },
  video: {
    title: 'Contenu',
    textBefore: 'Je partage des réflexions sur l\'esprit, la transformation et la spiritualité sur ',
    textAfter: '.',
    watchBtn: 'Regarder sur YouTube',
    subscribe: 'Abonnez-vous pour du contenu hebdomadaire sur l\'esprit, la conscience, la spiritualité et la transformation.',
  },
  newsletter: {
    sectionTitle: 'Liste Exclusive',
    headline: 'Lettre d\'Athanís',
    desc: 'Réflexions, insights et actualités sur l\'esprit, le comportement, l\'énergie, la spiritualité, les livres et la transformation — directement dans votre boîte mail, avec intention et soin.',
    placeholder: 'votre@email.com',
    cta: 'Je veux recevoir',
    privacy: 'Pas de spam. Uniquement du contenu approfondi. Vous pouvez vous désabonner à tout moment.',
    successTitle: 'Merci de rejoindre la liste.',
    successText: 'Vous recevrez la première lettre bientôt.',
    footerText: 'Recevez des réflexions sur l\'esprit, l\'écriture et la transformation.',
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
    nav: { about: 'Über mich', books: 'Werk', product: 'Methode', watch: 'Inhalt', contact: 'Kontakt' },
    cta: 'YouTube',
  },
  hero: {
    label: 'Autorin · Schöpferin · Unternehmerin',
    headline: 'Zwischen Schrift und Methode, zwischen Geist und Symbol — eine Marke mit Tiefe.',
    subtext: 'Auf Amazon veröffentlichte Autorin, Gründerin von Famoors und Schöpferin der Mindcodex Method.',
    cta1: 'Auf YouTube ansehen',
    cta2: 'Über Athanís',
  },
  about: {
    title: 'Über Athanís',
    p1: 'Ich bin Athanís Mesmerri — Schriftstellerin, Parapsychologin und Unternehmerin. Meine Präsenz bewegt sich zwischen der auktorialen Schrift, der Erforschung des menschlichen Geistes und der Gründung von Projekten, die Menschen und Marken transformieren.',
    p2Pre: 'Gründerin und CEO von ',
    p2Post: ' — ich entwickle digitale Produkte, Energietherapien, Verlagsprojekte und B2B-Lösungen, die Verhalten, Bewusstsein und Strategie vereinen.',
    p3: 'Das Schreiben ist ein zentraler Pfeiler meiner Marke. Ich habe mehrere Bücher auf Amazon veröffentlicht — Fiktion, metaphysische Poesie und Sachbücher — mit einer unverwechselbaren auktorialen Stimme, zwischen dem Philosophischen und dem Introspektiven.',
    p4Pre: 'Ich bin die Schöpferin der ',
    p4Post: ' und Gründerin des Institut Pathé in Europa — Methoden, die Neurowissenschaft, klinische Hypnose, Parapsychologie und integrative neuroemotionale Regulierung vereinen.',
    p5: '',
    p6: '',
  },
  results: {
    title: 'Autorität',
    statLabels: ['Bücher auf Amazon veröffentlicht', 'YouTube-Kanäle', 'Gegründete Unternehmen', 'Jahre in klinischer Hypnose und Parapsychologie'],
    mindcodexDesc: 'Exklusives System, das Neurowissenschaft, klinische Hypnose und Parapsychologie integriert, um unbewusste mentale Muster umzuprogrammieren und dauerhafte Transformation zu fördern.',
    mindcodexLinks: { site: 'Offizielle Website', book: 'Buch auf Amazon', video: 'Video auf YouTube' },
    famoors: { title: 'Famoors & NeuroVyn', desc: 'Gründerin von Famoors und Mitgründerin von NeuroVyn — Projekte, die Lösungen in digitalen Produkten, persönlicher Entwicklung und Energietherapien entwickeln.' },
    formation: { title: '', desc: '' },
  },
  books: {
    title: 'Veröffentlichtes Werk',
    subtitle: 'Fiktion, metaphysische Poesie und Sachbücher — auf Amazon auf Portugiesisch und Englisch erhältlich.',
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
    sectionTitle: 'Methode',
    badge: 'MindCodex Method™',
    name: '7-Tage-Methode für Klarheit und Entscheidung',
    desc: 'Ein intensives 7-Tage-Programm zur Beseitigung mentaler Unklarheit, zur Wiedererlangung von Klarheit und zur selbstsicheren Entscheidungsfindung — kombiniert Neurowissenschaft, Hypnose und Parapsychologie.',
    cta: 'Methode aufrufen',
  },
  video: {
    title: 'Inhalt',
    textBefore: 'Ich teile Reflexionen über Geist, Transformation und Spiritualität auf ',
    textAfter: '.',
    watchBtn: 'Auf YouTube ansehen',
    subscribe: 'Abonnieren Sie für wöchentliche Inhalte über Geist, Bewusstsein, Spiritualität und Transformation.',
  },
  newsletter: {
    sectionTitle: 'Exklusive Liste',
    headline: 'Brief von Athanís',
    desc: 'Reflexionen, Einsichten und Neuigkeiten über Geist, Verhalten, Energie, Spiritualität, Bücher und Transformation — direkt in Ihren Posteingang, mit Absicht und Sorgfalt.',
    placeholder: 'ihre@email.com',
    cta: 'Ich möchte empfangen',
    privacy: 'Kein Spam. Nur tiefgründige Inhalte. Sie können sich jederzeit abmelden.',
    successTitle: 'Danke, dass Sie sich eingetragen haben.',
    successText: 'Sie erhalten bald den ersten Brief.',
    footerText: 'Erhalten Sie Reflexionen über Geist, Schrift und Transformation.',
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

export const translations: Record<Language, T> = { pt, en, fr, de }
