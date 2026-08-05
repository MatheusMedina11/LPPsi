export const siteConfig = {
  name: "Milena Goldani",
  title: "Psicóloga | TCC",
  crp: "CRP 07/42552",
  location: "Porto Alegre",
  attendance: "Online e presencial",
  instagram: "https://www.instagram.com/psico.milenagoldani",
  instagramHandle: "@psico.milenagoldani",
  whatsappNumber: "5551981596780",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
};

export function buildWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
