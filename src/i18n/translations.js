export const SUPPORTED_LANGS = ['pt', 'ja', 'en'];

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
      ja: '日本語',
      en: 'EN',
    },
    nav: {
      home: 'Início',
      services: 'Serviços',
      situations: 'Situações',
      about: 'Sobre mim',
      testimonials: 'Depoimentos',
      price: 'Preços',
      faq: 'FAQ',
      contact: 'Entre em contato',
    },
    hero: {
      title: 'Quebre a barreira do idioma no Japão',
      p1Before: 'Olá! Me chamo',
      p1After:
        'e ofereço tradução profissional e acompanhamento presencial para brasileiros que vivem no Japão. Conte com apoio em hospitais, prefeituras e qualquer situação em que a comunicação clara seja essencial.',
      p2: 'Atendimento humano, rápido e com empatia. Vamos conversar e entender sua necessidade.',
      cta: 'Conversar no WhatsApp',
      imageAlt: 'Tradução e suporte no Japão',
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
      title: 'Preços',
      firstSuffix: 'as primeiras 3 horas',
      afterSuffix: 'por hora após a terceira hora',
      noteBefore: 'A ligação para agendamento é',
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
          a: 'Português, Japonês e Inglês.',
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

  ja: {
    brand: {
      name: '出雲の通訳',
    },
    meta: {
      title: '出雲の通訳・翻訳：Lucas Catuyama',
      description:
        '日本でのポルトガル語・日本語・英語の通訳／翻訳。病院・役所・書類のサポートをLucas Catuyamaが対応します。',
    },
    language: {
      label: '言語',
      pt: 'PT',
      ja: '日本語',
      en: 'EN',
    },
    nav: {
      home: 'ホーム',
      services: 'サービス',
      situations: 'シーン',
      about: '自己紹介',
      testimonials: 'お客様の声',
      price: '料金',
      faq: 'FAQ',
      contact: 'お問い合わせ',
    },
    hero: {
      title: '日本での言葉の壁を一緒に解決します',
      p1Before: 'こんにちは、',
      p1After:
        'です。日本で暮らす方のために、通訳（同行）と翻訳を提供しています。病院・役所・各種手続きなど、正確なコミュニケーションが必要な場面でサポートします。',
      p2: '丁寧で迅速、そして寄り添う対応。まずは状況をお聞かせください。',
      cta: 'WhatsAppで相談する',
      imageAlt: '日本での通訳・サポート',
    },
    services: {
      title: '提供サービス',
      items: [
        {
          title: '病院同行通訳',
          description: '診察・検査・入院など、医療現場での通訳とサポート。',
        },
        {
          title: '役所・公的機関の同行',
          description: '市役所、入管、郵便局などでの手続きサポート。',
        },
        {
          title: '書類翻訳',
          description: '証明書、契約書、申請書など各種書類の翻訳。',
        },
      ],
    },
    situations: {
      title: '状況を選んで、そのままWhatsAppで連絡',
      subtitle:
        '状況をクリックすると、メッセージが自動で作成されます。自由に書いていただいても大丈夫です。',
      chipsLabel: 'よくあるシーン',
      checklistTitle: '持ち物・準備',
      cards: [
        {
          id: 'hospital',
          title: '病院／クリニック',
          description: '診察、検査、入院、妊娠、歯科など。',
          bring: ['保険証', '服用中の薬', '過去の検査結果', '症状メモ'],
        },
        {
          id: 'cityhall',
          title: '市役所／入管',
          description: '住所変更、在留、税金、給付、書類関連。',
          bring: ['在留カード', 'パスポート', '届いた手紙', '印鑑（あれば）'],
        },
        {
          id: 'workschool',
          title: '仕事／学校',
          description: '面接、打ち合わせ、連絡事項、コミュニケーション支援。',
          bring: ['場所の情報', '日時', '必要書類', '聞きたいことリスト'],
        },
        {
          id: 'documents',
          title: '書類',
          description: '証明書・契約書・申請書などの翻訳。',
          bring: ['読みやすい画像/ファイル', '目的', '締切', '正式な氏名/住所'],
        },
      ],
      ctaHint: 'タップで送信',
    },
    about: {
      title: '自己紹介',
      steps: [
        {
          title: '日本での教育',
          text: '日本で育ち、日常の中で文化と言語を身につけました。',
        },
        {
          title: 'JLPT N1',
          text: '日本語能力試験N1を取得し、高い日本語運用力を証明しています。',
        },
        {
          title: '実務経験',
          text: '日系企業でブラジル展開に関わる翻訳業務を担当しました。',
        },
      ],
    },
    reasons: {
      title: '選ばれる理由',
      items: [
        { title: '高い日本語力', description: 'JLPT N1取得。文法・語彙にも強みがあります。' },
        { title: '日本での生活経験', description: '文化や慣習を理解し、誤解のない通訳を心がけます。' },
        { title: '教える経験', description: '分かりやすさを重視した説明が得意です。' },
        { title: '技術的な視点', description: '細部の正確さとニュアンスの再現を大切にします。' },
        { title: '学術的背景', description: 'ポルトガル語の表現にも配慮して翻訳します。' },
        { title: '寄り添う対応', description: '不安な場面でも落ち着いてサポートします。' },
      ],
    },
    testimonials: {
      title: 'お客様の声',
    },
    price: {
      title: '料金',
      firstSuffix: '最初の3時間',
      afterSuffix: '3時間以降（1時間あたり）',
      noteBefore: '事前相談の通話は',
      free: '無料',
    },
    cta: {
      title: '人に寄り添う、丁寧で効率的な通訳',
      p1:
        '日本でのどんな場面でも、専門的にサポートします。スピーディーで温かい対応を大切にしています。',
      p2: 'まずは状況をお聞かせください。',
      button: 'WhatsAppで相談する',
    },
    faq: {
      title: 'よくある質問',
      items: [
        { q: '出雲以外も対応できますか？', a: '主に出雲・島根周辺ですが、内容によってはリモート対応も可能です。' },
        { q: '急ぎの依頼は可能ですか？', a: '空きがあれば可能です。場所・時間・緊急度を添えてご連絡ください。' },
        { q: '支払いはどうなりますか？', a: '事前に料金をご説明し、合意の上で進めます。追加がある場合も透明にご案内します。' },
        { q: '内容は秘密にしてもらえますか？', a: 'はい。医療・法的な内容も含め、守秘と配慮を徹底します。' },
        { q: '対応言語は？', a: 'ポルトガル語、日本語、英語です。' },
      ],
    },
    stickyCta: {
      title: '今すぐ相談しますか？',
      subtitle: 'タップするとWhatsAppが開きます。',
      button: 'WhatsApp',
    },
    footer: {
      rights: 'All rights reserved',
      brand: 'Tradução em Izumo.',
    },
    whatsapp: {
      defaultMessage: 'こんにちは。通訳・翻訳について相談したいです。',
      situationMessage:
        'こんにちは。日本で{{situation}}のサポートが必要です。場所：{{location}}。日時：{{datetime}}。詳細：{{details}}',
      situationShort: 'こんにちは。日本で{{situation}}のサポートが必要です。',
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
      ja: '日本語',
      en: 'EN',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      situations: 'Situations',
      about: 'About',
      testimonials: 'Testimonials',
      price: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Break the language barrier in Japan',
      p1Before: "Hi! I'm",
      p1After:
        'and I provide professional interpretation and translation for people living in Japan. Get support for hospitals, city hall, immigration, and any situation where clarity matters.',
      p2: 'Human support, fast and empathetic. Let’s talk and understand what you need.',
      cta: 'Chat on WhatsApp',
      imageAlt: 'Interpretation and support in Japan',
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
      title: 'Pricing',
      firstSuffix: 'for the first 3 hours',
      afterSuffix: 'per hour after the 3rd hour',
      noteBefore: 'The scheduling call is',
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
        { q: 'Which languages do you support?', a: 'Portuguese, Japanese, and English.' },
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


