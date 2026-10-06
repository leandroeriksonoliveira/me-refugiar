export const siteConfig = {
  name: "Me Refugiar",
  tagline: "Encontro com Deus para Mulheres",
  speaker: "Renata Vitorino Coelho",
  congressLine:
    "Um final de semana dedicado a você, mulher, que deseja um encontro mais profundo com Deus! Dias de renovo, descanso, restauração e liberdade.",
  description:
    "Um final de semana dedicado a você, mulher, que deseja um encontro mais profundo com Deus. Dias de renovo, descanso, restauração e liberdade. Idealizado e ministrado por Renata Vitorino Coelho.",
  verse: {
    text: "Andarei em liberdade, pois tenho buscado os teus preceitos.",
    ref: "Salmos 119:45",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://merefugiar.com.br",
  locale: "pt_BR",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5531992898159",
  whatsappMessage:
    "Olá! Gostaria de saber mais sobre o Me Refugiar Mulheres.",
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdjw-k38nle3g8WTEVvj9UY_R_k29k1uYDX2lTVN3BcvjErFg/viewform",
  whatsappGroupUrl:
    "https://chat.whatsapp.com/FURcmkmd5vb0zPCeYkSh8z?s=sh&p=a&ilr=1",
  social: {
    instagram: "https://www.instagram.com/renatavco/",
    youtube: "https://youtube.com/@merefugiar",
    facebook: "https://facebook.com/merefugiar",
  },
  venue: {
    name: "Sítio Recanto do Quero-quero",
    address: "Serra Azul",
    city: "Mateus Leme",
    state: "MG",
    note: "De fácil acesso, próximo ao centro de Mateus Leme e a 60 km de Belo Horizonte.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=S%C3%ADtio+Recanto+do+Quero-quero+Serra+Azul+Mateus+Leme+MG",
  },
  edition: {
    title: "Edição 2027",
    dates: "5 e 6 de junho de 2027",
    shortDates: "5–6 JUN 2027",
    theme: "Mais Profundo Nele",
    startYmd: "2027-06-05",
    endYmd: "2027-06-06",
  },
} as const;

const ticketBenefits = [
  "Hospedagem no sítio",
  "4 refeições diárias",
  "12 ministrações",
] as const;

export const tickets = [
  {
    id: "lote-1",
    name: "1º lote",
    description: "Valor especial para quem garante a vaga primeiro.",
    price: 420,
    badge: "Vagas limitadas",
    featured: true,
    benefits: ticketBenefits,
  },
  {
    id: "lote-2",
    name: "2º lote",
    description: "A experiência completa do final de semana no sítio.",
    price: 450,
    badge: "Últimas vagas",
    featured: false,
    benefits: ticketBenefits,
  },
] as const;

export type TicketId = (typeof tickets)[number]["id"];

export const stats = [
  { value: "+100", label: "Vidas impactadas" },
  { value: "5", label: "Edições realizadas" },
  { value: "+150", label: "Horas de ministração em 5 anos" },
] as const;

export const schedule = {
  title: "Um final de semana para ir mais profundo Nele",
  note: "A programação detalhada é enviada às pessoas inscritas na semana do evento. Prepare-se para o extraordinário de Deus.",
  days: [
    { day: "Sábado", date: "5 de junho", time: "A partir das 9h" },
    { day: "Domingo", date: "6 de junho", time: "Encerramento às 15h" },
  ],
} as const;

export const galleryImages = [
  {
    src: "/images/edicoes/comunhao.jpg",
    alt: "Grupo de mulheres sorrindo juntas no Me Refugiar",
    caption: "Comunhão",
  },
  {
    src: "/images/edicoes/oracao.jpg",
    alt: "Mulheres em oração, uma ao lado da outra",
    caption: "Oração",
  },
  {
    src: "/images/edicoes/drive-11.jpg",
    alt: "Abraço de restauração ao ar livre",
    caption: "Abraço",
  },
  {
    src: "/images/edicoes/drive-8.jpg",
    alt: "Adoração com mãos levantadas no pavilhão",
    caption: "Adoração",
  },
  {
    src: "/images/edicoes/drive-7.jpg",
    alt: "Cuidado e serviço entre as mulheres",
    caption: "Cuidado",
  },
  {
    src: "/images/edicoes/acolhimento.jpg",
    alt: "Mesa de acolhimento com a palavra de Deus",
    caption: "Acolhimento",
  },
  {
    src: "/images/edicoes/drive-1.jpg",
    alt: "Palavra e Bíblia no encontro",
    caption: "Palavra",
  },
  {
    src: "/images/edicoes/refugio.jpg",
    alt: "Casa de retiro ao entardecer",
    caption: "Refúgio",
  },
  {
    src: "/images/edicoes/drive-10.jpg",
    alt: "Encontro das mulheres na natureza",
    caption: "Encontro",
  },
  {
    src: "/images/edicoes/encontro.jpg",
    alt: "Encontro simbólico de restauração e identidade",
    caption: "Identidade",
  },
  {
    src: "/images/edicoes/drive-13.jpg",
    alt: "Semente e palavras de identidade em Deus",
    caption: "Recomeçar",
  },
  {
    src: "/images/edicoes/celebracao.jpg",
    alt: "Celebração com balões no pavilhão",
    caption: "Celebração",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Não tenho palavras para descrever tudo o que foi feito ali, simplesmente sobrenatural.",
  },
  {
    quote: "Foi maravilhoso… tremendo, eu amei.",
  },
  {
    quote:
      "Que tempo precioso, eu estou como quem sonha. Daqui pra frente, se Deus quiser, não perderei nenhum encontro. Sei que verei os frutos de todo ensino, de cada semente lançada em meu coração, germinar e dar muitos frutos pra honra e glória do Senhor. O Me Refugiar Mulheres é tremendo.",
  },
  {
    quote: "Uma renovação para o novo tempo.",
  },
  {
    quote: "Batismo de Renovação!!! Novos ciclos.",
  },
  {
    quote:
      "Como sempre, em todos a presença de Deus é real. Cada ministração, cada detalhe — e o sentimento é que fomos escolhidas, acolhidas, e o Espírito Santo falou em especial com cada mulher nos detalhes. Meu terceiro, e já estou contando os dias para o próximo… Deus é maravilhoso.",
  },
  {
    quote:
      "Foi ótima, tudo que eu precisava: ouvir, sentir. O Senhor sabe de toda a nossa necessidade, e usa pessoas moldadas e escolhidas por Ele para nos ajudar, nos moldar pra melhor para servi-Lo.",
  },
  {
    quote:
      "Experiência maravilhosa e inesquecível. Acrescentou muito em minha vida e modificou minha visão sobre algumas coisas. E, mais importante: me impulsionou a tentar ser uma pessoa melhor. Agradeço imensamente à Renata, Érika e Fernanda. Deus as abençoe infinitamente.",
  },
  {
    quote:
      "Chega a ser inexplicável o tanto que eu senti o Espírito Santo em todas as dinâmicas. Eu precisava ouvir tudo aquilo, precisava saber que Deus tá me vendo o tempo todo.",
  },
] as const;

export const luare = {
  name: "LUARE Semi Joias",
  slogan: "Estilo que reflete sua essência",
  coupon: "REFUGIAR7%OFF",
  url: "https://luaresemijoias.com.br",
  flyer: "/images/parcerias/luare-cupom.jpg",
  description:
    "Parceria para quem deseja contribuir com o crescimento do ministério: semi joias com 7% off no site, com o cupom exclusivo do Me Refugiar.",
} as const;

export const faqs = [
  {
    question: "Até quando posso me inscrever?",
    answer:
      "As inscrições permanecem abertas até o preenchimento das vagas ou até o dia 20 de maio de 2027. O 1º lote se esgota primeiro. Recomendamos garantir sua vaga com antecedência.",
  },
  {
    question: "O que devo levar?",
    answer:
      "Próximo ao evento, as inscritas receberão a programação e o regulamento com as orientações.",
  },
  {
    question: "Onde acontece o encontro?",
    answer:
      "No Sítio Recanto do Quero-quero, Serra Azul, Mateus Leme — MG. De fácil acesso, próximo ao centro de Mateus Leme e a 60 km de Belo Horizonte.",
  },
  {
    question: "Há hospedagem no local?",
    answer: "Sim.",
  },
  {
    question: "As refeições estão inclusas?",
    answer: "Sim, 4 refeições diárias.",
  },
  {
    question: "O evento é apenas para mulheres?",
    answer:
      "Sim. O Me Refugiar é um encontro exclusivo para mulheres adultas. É um espaço seguro, acolhedor e dedicado à restauração feminina.",
  },
  {
    question: "Quando recebo as informações do encontro?",
    answer:
      "Você receberá pelo WhatsApp a programação e o regulamento com as orientações 1 mês antes do evento.",
  },
  {
    question: "Há transporte por parte do evento?",
    answer:
      "Não. A responsabilidade do deslocamento é da inscrita. Nossa equipe pode apoiar nas possibilidades de carona entre as inscritas.",
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
