import Reveal from "./Reveal";

const situations = [
  {
    title: "Ansiedade e preocupação constante",
    description:
      "A mente não desliga, o corpo vive em alerta e o cansaço vira rotina.",
  },
  {
    title: "Autocobrança e perfeccionismo",
    description:
      "Nada parece suficiente, mesmo quando você entrega o seu melhor.",
  },
  {
    title: "Autoestima e autoconfiança",
    description:
      "A voz interna crítica fala mais alto do que o seu próprio reconhecimento.",
  },
  {
    title: "Relacionamentos e limites",
    description:
      "Dificuldade de dizer não, de se posicionar ou de lidar com conflitos.",
  },
  {
    title: "Momentos de transição",
    description:
      "Mudanças de carreira, término, luto ou fases em que tudo parece incerto.",
  },
  {
    title: "Falta de sentido e propósito",
    description:
      "A sensação de estar no automático, sem saber para onde está indo.",
  },
];

export default function ForYou() {
  return (
    <section id="para-voce" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Para você
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Se você se reconhece em alguma destas situações, a terapia pode
            ajudar
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="border-l-2 border-brand-200 pl-5">
                <h3 className="font-medium text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
