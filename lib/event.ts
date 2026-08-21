export const siteConfig = {
  name: "Me Refugiar",
  tagline: "Congresso para Mulheres",
  speaker: "Renata Vitorino Coelho",
  congressLine:
    "Um congresso para mulheres encontrarem refúgio em Deus, restaurarem a identidade e renovarem a esperança.",
  description:
    "Um congresso para mulheres encontrarem refúgio em Deus, restaurarem a identidade e renovarem a esperança. Idealizado e ministrado por Renata Vitorino Coelho.",
  verse: {
    text: "Andarei em liberdade, pois tenho buscado os teus preceitos.",
    ref: "Salmos 119:45",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://merefugiar.com.br",
  locale: "pt_BR",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5531992898159",
  whatsappMessage:
    "Olá! Gostaria de saber mais sobre o Congresso Me Refugiar.",
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
    dates: "4, 5 e 6 de junho de 2027",
    shortDates: "4–6 JUN 2027",
    theme: "Mais Profundo Nele",
    startYmd: "2027-06-04",
    endYmd: "2027-06-06",
    sessions: 12,
  },
} as const;

const ticketBenefits = [
  "Hospedagem no sítio",
  "4 refeições diárias",
  "12 ministrações",
  "Grupo de WhatsApp após a inscrição",
] as const;

export const tickets = [
  {
    id: "lote-antecipado",
    name: "Lote antecipado",
    description: "Valor especial. Esgota primeiro — garanta sua vaga com antecedência.",
    price: 350,
    badge: "Vagas limitadas",
    featured: true,
    benefits: ticketBenefits,
  },
  {
    id: "lote-regular",
    name: "Lote regular",
    description: "A experiência completa do congresso no sítio.",
    price: 380,
    badge: "Aberto",
    featured: false,
    benefits: ticketBenefits,
  },
  {
    id: "lote-ultimo",
    name: "Último lote",
    description: "Últimas vagas para viver dias intensos na Presença do Pai.",
    price: 400,
    badge: "Últimas vagas",
    featured: false,
    benefits: ticketBenefits,
  },
] as const;

export type TicketId = (typeof tickets)[number]["id"];

export const stats = [
  { value: "5", label: "Edições realizadas", suffix: "" },
  { value: "100", label: "Vidas impactadas", suffix: "+" },
  { value: "3", label: "Estados representados", suffix: "" },
  { value: "5", label: "Anos de ministério", suffix: "" },
] as const;

export const schedule = {
  note: "A programação será liberada na semana do evento. Se prepare para viver dias intensos, cheios da Presença do Pai.",
  days: [
    { day: "Sexta-feira", date: "4 de junho" },
    { day: "Sábado", date: "5 de junho" },
    { day: "Domingo", date: "6 de junho" },
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

export const videos = [
  {
    id: "edicao-anterior",
    src: "/videos/edicao-anterior.mp4",
    title: "Edições anteriores",
    description:
      "Um recorte dos encontros: palavra, comunhão e o que Deus já fez no Me Refugiar.",
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

export const brandedProducts = [
  {
    name: "Crachá",
    description:
      "Identidade no peito: palestrante e encontrista, com a oliveira e a libélula em vinho e blush.",
    src: "/images/produtos/cracha.jpg",
    alt: "Crachás personalizados Me Refugiar — palestrante e encontrista",
  },
  {
    name: "Garrafa",
    description:
      "Leve o refúgio no dia a dia. Três cores da paleta — terracota, vinho e areia — com a marca completa.",
    src: "/images/produtos/garrafa.jpg",
    alt: "Garrafas personalizadas Me Refugiar em vinho, areia e blush",
  },
  {
    name: "Bag",
    description:
      "A bag do ministério: tecido no vinho profundo, logo em creme e o motivo botânico em toda a peça.",
    src: "/images/produtos/bag.jpg",
    alt: "Bag personalizada Me Refugiar Mulheres",
  },
] as const;

export const luare = {
  name: "LUARE Semi Joias",
  slogan: "Estilo que reflete sua essência",
  coupon: "REFUGIAR7%OFF",
  url: "https://luaresemijoias.com.br",
  flyer: "/images/parcerias/luare-cupom.jpg",
  description:
    "Parceria para quem deseja levar um pedaço do encontro no corpo: semi joias com 7% off no site, com o cupom exclusivo do Me Refugiar.",
} as const;

export const faqs = [
  {
    question: "Até quando posso me inscrever?",
    answer:
      "As inscrições permanecem abertas até o preenchimento das vagas ou até o dia 20 de maio de 2027. O lote antecipado se esgota primeiro. Recomendamos garantir sua vaga com antecedência.",
  },
  {
    question: "O que devo levar?",
    answer:
      "Traga Bíblia, roupas confortáveis, itens de higiene pessoal, roupa de cama e banho, protetor solar, repelente e um coração disposto. Lembre-se: você estará em um sítio.",
  },
  {
    question: "Onde acontece o congresso?",
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
    question: "Qual é a política de cancelamento?",
    answer:
      "Cancelamentos com até 30 dias de antecedência têm reembolso de 50% do valor pago. Entre 14 e 7 dias, o crédito pode ser transferido para outra participante. Após esse prazo, não há reembolso, mas a vaga pode ser cedida mediante aviso.",
  },
  {
    question: "O evento é apenas para mulheres?",
    answer:
      "Sim. O Me Refugiar é um congresso exclusivo para mulheres adultas. É um espaço seguro, acolhedor e dedicado à restauração feminina.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Você pode pagar via PIX (QR Code dinâmico ou copia e cola). A confirmação do PIX é automática assim que o banco liquida a cobrança. E também parcelado no cartão.",
  },
  {
    question: "Quando recebo as informações do congresso?",
    answer:
      "Você receberá todas as informações necessárias em até 15 dias antes do congresso. Assim que fizer a inscrição, entre no grupo de WhatsApp das participantes para acompanhar os avisos.",
  },
  {
    question: "Como entro no grupo do WhatsApp?",
    answer:
      "O grupo é das inscritas no congresso, não o WhatsApp de dúvidas. O convite está na seção de inscrição e também no rodapé do site, em “Entrar no grupo”.",
  },
  {
    question: "Posso enviar um pedido de oração?",
    answer:
      "Sim. Qualquer pessoa pode deixar um pedido confidencial na página de oração. Somente a organização do Me Refugiar lê os pedidos — eles não são publicados no site.",
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
