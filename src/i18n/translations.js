export const SUPPORTED_LANGS = ['pt', 'en'];

export const TRANSLATIONS = {
  pt: {
    brand: {
      name: 'Tradutor em Izumo',
    },
    meta: {
      title: 'Tradutor em Izumo: Lucas Catuyama',
      description:
        'Interpretação e tradução (português, japonês e inglês) no Japão com Lucas Catuyama. Apoio em hospitais, prefeituras e documentos.',
    },
    language: {
      label: 'Idioma',
      pt: 'PT',
      en: 'EN',
    },
    nav: {
      home: 'Início',
      services: 'Serviços',
      situations: 'Situações',
      testimonials: 'Depoimentos',
      faq: 'FAQ',
      contact: 'Entre em contato',
    },
    hero: {
      title: 'Interpretação PT ⇄ JP no Japão',
      p1Before: 'Olá! Me chamo',
      p1After:
        'e ajudo brasileiros no Japão com interpretação presencial e tradução — com clareza, calma e discrição.',
      p2: 'Me diga sua situação no WhatsApp e eu te explico o melhor caminho.',
      cta: 'Chamar no WhatsApp',
      imageAlt: 'Intérprete e tradutor no Japão',
      badges: ['JLPT N1', 'Atendimento humanizado', 'Sigilo e respeito', 'Izumo/Shimane (consulte)'],
    },
    process: {
      title: 'Como funciona',
      steps: [
        { title: '1) Mensagem', text: 'Você chama no WhatsApp e descreve a situação (local, data e urgência).' },
        { title: '2) Alinhamento', text: 'Confirmamos detalhes, documentos e como você prefere ser atendido.' },
        { title: '3) Atendimento', text: 'Eu acompanho e interpreto com precisão, mantendo você no controle.' },
      ],
    },
    proof: {
      title: 'Por que confiar no meu trabalho',
      items: [
        { title: 'JLPT N1', description: 'Proficiência avançada em japonês para evitar mal-entendidos.' },
        { title: 'Contexto local', description: 'Vivência no Japão e sensibilidade cultural no atendimento.' },
        { title: 'Clareza sob pressão', description: 'Ajudo você a entender e ser entendido em momentos importantes.' },
        { title: 'Discrição', description: 'Respeito e cuidado com informações médicas e pessoais.' },
      ],
    },
    services: {
      title: 'Serviços Prestados',
      items: [
        {
          title: 'Acompanhamento ao médico',
          description: 'Tradução e apoio durante consultas, exames e atendimentos hospitalares.',
        },
        {
          title: 'Acompanhamento a órgãos públicos',
          description: 'Apoio em prefeitura, imigração, correios e outros serviços públicos.',
        },
        {
          title: 'Tradução de documentos',
          description: 'Tradução de certificados, contratos, formulários e documentos oficiais.',
        },
      ],
    },
    situations: {
      title: 'Escolha sua situação (e já me chame no WhatsApp)',
      subtitle:
        'Clique em uma situação para enviar uma mensagem pronta. Se preferir, escreva com suas palavras — eu te ajudo a organizar tudo.',
      chipsLabel: 'Situações comuns',
      checklistTitle: 'O que preparar',
      cards: [
        {
          id: 'hospital',
          title: 'Hospital / Clínica',
          description: 'Consultas, exames, internações, gravidez, odontologia.',
          bring: ['Cartão do seguro', 'Remédios atuais', 'Exames anteriores', 'Anotações dos sintomas'],
        },
        {
          id: 'cityhall',
          title: 'Prefeitura / Imigração',
          description: 'Mudança de endereço, visto, impostos, benefícios, documentos.',
          bring: ['Zairyū card', 'Passaporte', 'Cartas recebidas', 'Carimbo/inkan (se tiver)'],
        },
        {
          id: 'workschool',
          title: 'Trabalho / Escola',
          description: 'Entrevistas, reuniões, avisos, suporte com comunicação.',
          bring: ['Informações do local', 'Horários', 'Documentos solicitados', 'Perguntas que você quer fazer'],
        },
        {
          id: 'documents',
          title: 'Documentos',
          description: 'Tradução de certificados, contratos e formulários oficiais.',
          bring: ['Arquivo/foto legível', 'Finalidade (para quê)', 'Prazo', 'Nome/endereços corretos'],
        },
      ],
      ctaHint: 'Toque para enviar a mensagem',
    },
    about: {
      title: 'Sobre mim',
      steps: [
        {
          title: 'Alfabetização no Japão',
          text: 'Fui alfabetizado no Japão, vivenciando desde cedo a cultura e o idioma no dia a dia.',
        },
        {
          title: 'JLPT N1',
          text: 'Alcancei a certificação máxima do japonês (N1), comprovando domínio avançado da língua.',
        },
        {
          title: 'Experiência Profissional',
          text: 'Atuei como tradutor em uma empresa japonesa com foco na expansão para o Brasil.',
        },
      ],
    },
    reasons: {
      title: 'Por que me escolher',
      items: [
        {
          title: 'Fluência em Japonês',
          description: 'Certificação JLPT N1 com nota máxima em gramática e vocabulário.',
        },
        {
          title: 'Vivência no Japão',
          description: 'Alfabetizado e criado no Japão, com conhecimento profundo da cultura e do idioma.',
        },
        {
          title: 'Experiência como Professor',
          description: 'Atuação em sala de aula com foco em clareza e didática.',
        },
        {
          title: 'Tradutor com visão técnica',
          description: 'Experiência em tradução com sensibilidade linguística e precisão.',
        },
        {
          title: 'Formação Acadêmica',
          description:
            'Graduado em Administração e cursando Engenharia de Software no Brasil, com domínio da língua portuguesa.',
        },
        {
          title: 'Atendimento Humanizado',
          description: 'Empatia, paciência e compromisso em cada atendimento, pensando no bem-estar do cliente.',
        },
      ],
    },
    testimonials: {
      title: 'O que os meus clientes dizem?',
    },
    price: {
      title: 'Valores (resumo)',
      firstSuffix: 'as primeiras 3 horas',
      afterSuffix: 'por hora após a terceira hora',
      noteBefore: 'Primeira conversa:',
      free: 'gratuita',
    },
    cta: {
      title: 'Tradução humana, empática e eficiente',
      p1:
        'Tenha apoio profissional de um tradutor em qualquer situação no Japão. Conte com um atendimento acolhedor, ágil e inteiramente em português.',
      p2: 'Vamos conversar sobre sua necessidade.',
      button: 'Conversar no WhatsApp',
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'Você atende apenas em Izumo?',
          a: 'Atendo principalmente a região de Izumo/Shimane, e também posso combinar suporte remoto dependendo do caso.',
        },
        {
          q: 'Você faz atendimento de última hora?',
          a: 'Se eu estiver disponível, sim. Me chame no WhatsApp com o máximo de detalhes (local, horário e urgência).',
        },
        {
          q: 'Como funciona o pagamento?',
          a: 'Explico os valores e combinamos antes do atendimento. Se houver deslocamento ou tempo extra, tudo é alinhado com transparência.',
        },
        {
          q: 'As conversas são confidenciais?',
          a: 'Sim. Trato as informações com discrição e respeito, especialmente em situações médicas e legais.',
        },
        {
          q: 'Quais idiomas você atende?',
          a: 'Português e Japonês (site em PT/EN).',
        },
      ],
    },
    stickyCta: {
      title: 'Precisa de ajuda agora?',
      subtitle: 'Toque para abrir o WhatsApp com uma mensagem pronta.',
      button: 'WhatsApp',
    },
    footer: {
      rights: 'Todos os direitos reservados',
      brand: 'Tradução em Izumo.',
    },
    whatsapp: {
      defaultMessage: 'Olá! Quero saber mais sobre o Tsuyaku.',
      situationMessage:
        'Olá! Preciso de ajuda com {{situation}} no Japão. Local: {{location}}. Data/horário: {{datetime}}. Detalhes: {{details}}',
      situationShort: 'Olá! Preciso de ajuda com {{situation}} no Japão.',
    },
  },

  en: {
    brand: {
      name: 'Interpreter in Izumo',
    },
    meta: {
      title: 'Interpreter in Izumo: Lucas Catuyama',
      description:
        'Portuguese–Japanese–English interpretation and translation in Japan. Support for hospitals, city hall, immigration, and documents with Lucas Catuyama.',
    },
    language: {
      label: 'Language',
      pt: 'PT',
      en: 'EN',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      situations: 'Situations',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Portuguese ⇄ Japanese interpretation in Japan',
      p1Before: "Hi! I'm",
      p1After:
        'and I help Brazilians in Japan with in-person interpretation and translation — with clarity, calm, and discretion.',
      p2: 'Message me on WhatsApp and I’ll guide you through the best next step.',
      cta: 'Message on WhatsApp',
      imageAlt: 'Interpreter and translator in Japan',
      badges: ['JLPT N1', 'Human support', 'Confidential', 'Izumo/Shimane (ask)'],
    },
    process: {
      title: 'How it works',
      steps: [
        { title: '1) Message', text: 'You message me on WhatsApp with the situation (place, date, urgency).' },
        { title: '2) Align', text: 'We confirm details, documents, and your preferences.' },
        { title: '3) Support', text: 'I interpret accurately while keeping you informed and in control.' },
      ],
    },
    proof: {
      title: 'Why you can trust my work',
      items: [
        { title: 'JLPT N1', description: 'Advanced Japanese proficiency to avoid misunderstandings.' },
        { title: 'Local context', description: 'Japan experience and cultural sensitivity.' },
        { title: 'Clear under pressure', description: 'Help when the situation is urgent or stressful.' },
        { title: 'Discreet', description: 'Careful handling of medical and personal information.' },
      ],
    },
    services: {
      title: 'Services',
      items: [
        { title: 'Medical appointments', description: 'Interpretation and support during consultations, exams, and hospital visits.' },
        { title: 'Government offices', description: 'Help at city hall, immigration, post office, and other public services.' },
        { title: 'Document translation', description: 'Translation for certificates, contracts, forms, and official documents.' },
      ],
    },
    situations: {
      title: 'Pick your situation (and message me on WhatsApp)',
      subtitle:
        'Tap a situation to send a prefilled message. If you prefer, write in your own words — I’ll help you organize everything.',
      chipsLabel: 'Common situations',
      checklistTitle: 'What to prepare',
      cards: [
        {
          id: 'hospital',
          title: 'Hospital / Clinic',
          description: 'Appointments, exams, hospitalization, pregnancy, dental.',
          bring: ['Health insurance card', 'Current medications', 'Previous exam results', 'Symptom notes'],
        },
        {
          id: 'cityhall',
          title: 'City hall / Immigration',
          description: 'Address changes, visa, taxes, benefits, paperwork.',
          bring: ['Residence card', 'Passport', 'Letters you received', 'Hanko/inkan (if any)'],
        },
        {
          id: 'workschool',
          title: 'Work / School',
          description: 'Interviews, meetings, notices, communication support.',
          bring: ['Place details', 'Schedule', 'Requested documents', 'Questions you want to ask'],
        },
        {
          id: 'documents',
          title: 'Documents',
          description: 'Translation of certificates, contracts, and official forms.',
          bring: ['Clear file/photo', 'Purpose', 'Deadline', 'Correct names/addresses'],
        },
      ],
      ctaHint: 'Tap to send the message',
    },
    about: {
      title: 'About me',
      steps: [
        { title: 'Raised in Japan', text: 'I grew up in Japan, learning the culture and language from early on.' },
        { title: 'JLPT N1', text: 'I hold JLPT N1, the highest Japanese proficiency certification.' },
        { title: 'Professional experience', text: 'I worked as a translator for a Japanese company focused on expansion to Brazil.' },
      ],
    },
    reasons: {
      title: 'Why choose me',
      items: [
        { title: 'Japanese fluency', description: 'JLPT N1 with strong grammar and vocabulary.' },
        { title: 'Local context', description: 'Deep understanding of language, culture, and everyday situations in Japan.' },
        { title: 'Teaching experience', description: 'Clear, structured communication when things get stressful.' },
        { title: 'Precision mindset', description: 'Accurate translation with attention to nuance.' },
        { title: 'Academic background', description: 'Strong Portuguese communication alongside Japanese proficiency.' },
        { title: 'Human-centered support', description: 'Empathy, patience, and commitment in every appointment.' },
      ],
    },
    testimonials: {
      title: 'What clients say',
    },
    price: {
      title: 'Pricing (quick view)',
      firstSuffix: 'for the first 3 hours',
      afterSuffix: 'per hour after the 3rd hour',
      noteBefore: 'First chat:',
      free: 'free',
    },
    cta: {
      title: 'Human, empathetic, and efficient interpretation',
      p1:
        'Get professional support in any situation in Japan. Fast, welcoming service — with clear communication from start to finish.',
      p2: 'Let’s talk about what you need.',
      button: 'Chat on WhatsApp',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Do you only work in Izumo?', a: 'I mainly cover Izumo/Shimane, and can also do remote support depending on the case.' },
        { q: 'Can you help last-minute?', a: 'If I’m available, yes. Message me with place, time, and urgency.' },
        { q: 'How does payment work?', a: 'We confirm pricing before the appointment. Any extra time/travel is aligned transparently.' },
        { q: 'Is it confidential?', a: 'Yes. I handle information discreetly, especially for medical and legal situations.' },
        { q: 'Which languages do you support?', a: 'Portuguese and Japanese (website in PT/EN).' },
      ],
    },
    stickyCta: {
      title: 'Need help now?',
      subtitle: 'Tap to open WhatsApp with a ready message.',
      button: 'WhatsApp',
    },
    footer: {
      rights: 'All rights reserved',
      brand: 'Tradução em Izumo.',
    },
    whatsapp: {
      defaultMessage: "Hi! I'd like to know more about Tsuyaku.",
      situationMessage:
        "Hi! I need help with {{situation}} in Japan. Location: {{location}}. Date/time: {{datetime}}. Details: {{details}}",
      situationShort: 'Hi! I need help with {{situation}} in Japan.',
    },
  },
};

export function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function interpolate(template, vars) {
  if (typeof template !== 'string') return template;
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, k) => {
    const v = vars?.[k];
    return v == null ? '' : String(v);
  });
}

export function tFor(lang, key, vars) {
  const base = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  const fallback = TRANSLATIONS.pt;
  const value = getByPath(base, key) ?? getByPath(fallback, key);
  return interpolate(value, vars);
}


