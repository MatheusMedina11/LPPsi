import { siteConfig } from "@/lib/site-config";

const services = [
  {
    title: "Terapia individual (TCC)",
    description:
      "Acompanhamento com base na Terapia Cognitivo-Comportamental para ansiedade, autoestima e autoconhecimento.",
  },
  {
    title: "Desenvolvimento emocional",
    description:
      "Espaço para entender e regular emoções, construindo uma relação mais leve consigo mesmo.",
  },
  {
    title: "Atendimento online",
    description:
      "Sessões por videochamada com a mesma qualidade do presencial, de onde você estiver.",
  },
  {
    title: "Atendimento presencial",
    description: `Sessões presenciais em ${siteConfig.location}, em consultório acolhedor.`,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl text-brand-900">Serviços</h2>
        <p className="mt-3 max-w-2xl text-brand-700">
          Atendimento personalizado para diferentes momentos e necessidades.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-xl text-brand-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-brand-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
