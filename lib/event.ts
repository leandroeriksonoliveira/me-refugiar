export const siteConfig = {
  name: "Me Refugiar",
  tagline: "Congresso para Mulheres",
  speaker: "Renata Vitorino Coelho",
  description:
    "Um congresso para mulheres encontrarem refúgio em Deus, restaurarem a identidade e renovarem a esperança. Idealizado e ministrado por Renata Vitorino Coelho.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://merefugiar.com.br",
  locale: "pt_BR",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999",
  whatsappMessage:
    "Olá! Gostaria de saber mais sobre o Congresso Me Refugiar.",
  social: {
    instagram: "https://www.instagram.com/renatavco/",
    youtube: "https://youtube.com/@merefugiar",
    facebook: "https://facebook.com/merefugiar",
  },
  venue: {
    name: "Espaço Refúgio",
    address: "Rua das Oliveiras, 120",
    neighborhood: "Jardim das Graças",
    city: "São Paulo",
    state: "SP",
    zip: "01452-000",
    mapsUrl: "https://maps.google.com/?q=São+Paulo+SP",
  },
  edition: {
    title: "Edição 2026",
    dates: "12, 13 e 14 de setembro de 2026",
    shortDates: "12–14 SET 2026",
    theme: "Encontre o teu refúgio",
  },
} as const;

export const tickets = [
  {
    id: "lote-antecipado",
    name: "Lote Antecipado",
    description: "Inscrição com valor especial enquanto houver vagas.",
    price: 197,
    badge: "Vagas limitadas",
    featured: false,
    benefits: [
      "Acesso a todos os encontros",
      "Material de apoio digital",
      "Certificado de participação",
    ],
  },
  {
    id: "lote-regular",
    name: "Lote Regular",
    description: "A experiência completa do congresso.",
    price: 247,
    badge: "Mais escolhido",
    featured: true,
    benefits: [
      "Acesso a todos os encontros",
      "Material impresso + digital",
      "Coffee break nos três dias",
      "Certificado de participação",
    ],
  },
  {
    id: "lote-vip",
    name: "Lote VIP",
    description: "Cuidado especial do primeiro ao último encontro.",
    price: 397,
    badge: "Experiência premium",
    featured: false,
    benefits: [
      "Assentos reservados na frente",
      "Kit exclusivo Me Refugiar",
      "Coffee break + almoço no sábado",
      "Encontro de oração com a equipe",
    ],
  },
] as const;

export type TicketId = (typeof tickets)[number]["id"];

export const stats = [
  { value: "8", label: "Edições realizadas", suffix: "" },
  { value: "2400", label: "Vidas impactadas", suffix: "+" },
  { value: "12", label: "Estados representados", suffix: "" },
  { value: "10", label: "Anos de ministério", suffix: "" },
] as const;

export const schedule = [
  {
    day: "Sexta-feira",
    date: "12 de setembro",
    items: [
      { time: "18h30", title: "Recepção e acomodação", description: "Acolhida, credenciamento e um tempo para respirar." },
      { time: "19h30", title: "Abertura oficial", description: "Louvor, comunhão e a primeira palavra da edição." },
      { time: "21h30", title: "Ministério de oração", description: "Um espaço íntimo para entregar o que pesa o coração." },
    ],
  },
  {
    day: "Sábado",
    date: "13 de setembro",
    items: [
      { time: "09h00", title: "Encontro da manhã", description: "Adoração e ensino sobre identidade e refúgio." },
      { time: "11h00", title: "Rodas de partilha", description: "Conversas guiadas em grupos pequenos e acolhedores." },
      { time: "14h30", title: "Palavra com Renata Vitorino Coelho", description: "O coração do congresso: cura, descanso e propósito." },
      { time: "19h00", title: "Noite de restauração", description: "Louvor estendido e ministério pessoal." },
    ],
  },
  {
    day: "Domingo",
    date: "14 de setembro",
    items: [
      { time: "09h00", title: "Santa Ceia e encerramento", description: "Renovação da aliança e envio das mulheres." },
      { time: "11h00", title: "Bênção final", description: "Um último abraço, um novo começo." },
    ],
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
    alt: "Mulheres reunidas em comunhão durante o congresso",
    caption: "Comunhão",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    alt: "Momento de oração e silêncio",
    caption: "Oração",
  },
  {
    src: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1600&q=80",
    alt: "Luz dourada em um ambiente de retiro",
    caption: "Presença",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    alt: "Paisagem de descanso e natureza",
    caption: "Descanso",
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b4?auto=format&fit=crop&w=1600&q=80",
    alt: "Adoração e mãos levantadas",
    caption: "Adoração",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    alt: "Caminho entre árvores ao entardecer",
    caption: "Caminho",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    alt: "Flores em tons quentes e suaves",
    caption: "Beleza",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    alt: "Horizonte dourado ao nascer do sol",
    caption: "Esperança",
  },
] as const;

export const videos = [
  {
    id: "aqz-KE-bpKQ",
    title: "Melhores momentos — Edição anterior",
    description: "Um recorte da adoração, das palavras e dos abraços que marcaram o último congresso.",
  },
  {
    id: "eRsGyueVLvQ",
    title: "Testemunhos de restauração",
    description: "Mulheres compartilham o que Deus fez depois de se refugiarem nEle.",
  },
] as const;

export const faqs = [
  {
    question: "Até quando posso me inscrever?",
    answer:
      "As inscrições permanecem abertas até o preenchimento das vagas ou até o dia 5 de setembro de 2026. O lote antecipado se esgota primeiro. Recomendamos garantir sua vaga com antecedência.",
  },
  {
    question: "O que devo levar?",
    answer:
      "Traga Bíblia, caderno, caneta, uma peça de roupa confortável e o coração disposto. Se estiver no Lote VIP, o kit e as refeições já estão inclusos. Água e coffee break estarão disponíveis para todas.",
  },
  {
    question: "Onde acontece o congresso?",
    answer:
      "No Espaço Refúgio, em São Paulo — SP. O endereço completo e o mapa ficam no rodapé do site. Enviaremos também um e-mail com indicações de estacionamento e hospedagem próximas.",
  },
  {
    question: "Há hospedagem no local?",
    answer:
      "O congresso não inclui pernoite. Indicamos hotéis e pousadas parceiras a poucos minutos do espaço. Escreva no WhatsApp se quiser a lista atualizada.",
  },
  {
    question: "Qual é a política de cancelamento?",
    answer:
      "Cancelamentos com até 15 dias de antecedência têm reembolso de 80% do valor pago. Entre 14 e 7 dias, o crédito pode ser transferido para outra participante. Após esse prazo, não há reembolso, mas a vaga pode ser cedida mediante aviso.",
  },
  {
    question: "O evento é apenas para mulheres?",
    answer:
      "Sim. O Me Refugiar é um congresso exclusivo para mulheres adultas. É um espaço seguro, acolhedor e dedicado à restauração feminina.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Você pode pagar via PIX (QR Code dinâmico ou copia e cola) ou cartão de crédito, inclusive parcelado. A confirmação do PIX é automática assim que o banco liquida a cobrança.",
  },
] as const;

export const brazilStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

export function getTicket(id: string) {
  return tickets.find((ticket) => ticket.id === id);
}

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
