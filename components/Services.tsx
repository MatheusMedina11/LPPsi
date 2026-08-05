import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";

const services = [
  {
    title: "Terapia individual",
    benefit: "Para entender o que sente e retomar o controle",
    description:
      "Acompanhamento semanal em TCC para trabalhar ansiedade, autoestima, autocobrança e autoconhecimento, no seu ritmo.",
    items: [
      "Sessões de 50 minutos",
      "Plano terapêutico definido junto com você",
      "Ferramentas práticas para o dia a dia",
    ],
  },
  {
    title: "Atendimento online",
    benefit: "Para fazer terapia de onde você estiver",
    description:
      "Sessões por videochamada, com a mesma estrutura do presencial. Ideal para quem tem rotina corrida ou mora longe.",
    items: [
      "Link seguro enviado antes da sessão",
      "Horários flexíveis",
      "Sem deslocamento",
    ],
  },
  {
    title: "Atendimento presencial",
    benefit: `Para quem prefere o encontro cara a cara em ${siteConfig.location}`,
    description:
      "Sessões em consultório acolhedor, pensado para você se sentir à vontade desde a primeira conversa.",
    items: [
      `Consultório em ${siteConfig.location}`,
      "Ambiente reservado e acolhedor",
      "Agendamento com horário garantido",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Atendimentos
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Escolha o formato que faz mais sentido para a sua rotina
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-sand-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50">
                <h3 className="font-serif text-xl text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-600">
                  {service.benefit}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-sand-200 pt-6 text-sm text-brand-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <WhatsappButton
              variant="secondary"
              message="Olá, Milena! Gostaria de saber mais sobre valores e horários disponíveis."
            >
              Consultar valores e horários
            </WhatsappButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
