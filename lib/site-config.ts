export const siteConfig = {
  name: "Dra. Marina Alves",
  crp: "CRP 06/123456",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
};

export function buildWhatsappLink(message: string = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
