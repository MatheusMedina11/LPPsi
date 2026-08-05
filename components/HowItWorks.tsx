import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";

const steps = [
  {
    number: "01",
    title: "Você manda uma mensagem",
    description:
      "Pelo WhatsApp, sem compromisso. Você conta brevemente o que procura e tira suas dúvidas sobre valores e horários.",
  },
  {
    number: "02",
    title: "Agendamos a primeira sessão",
    description:
      "Escolhemos juntos o melhor dia, horário e formato — online ou presencial.",
  },
  {
    number: "03",
    title: "Primeira conversa",
    description:
      "Um encontro para entender sua história e o que te trouxe até aqui. Sem pressão para ter todas as respostas.",
  },
  {
    number: "04",
    title: "Definimos os objetivos",
    description:
      "Traçamos juntos o que você quer trabalhar e com que frequência, com metas claras desde o começo.",
  },
  {
    number: "05",
    title: "Acompanhamento contínuo",
    description:
      "Sessões regulares, revisando a evolução e ajustando o caminho conforme você avança.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Processo
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Como funciona, do primeiro contato ao acompanhamento
          </h2>
          <p className="mt-4 max-w-xl text-brand-600">
            Saber o que esperar torna o primeiro passo muito mais leve.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <li className="relative list-none">
                <span className="font-serif text-4xl text-brand-300">
                  {step.number}
                </span>
                <h3 className="mt-3 font-medium leading-snug text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-14">
            <WhatsappButton message="Olá, Milena! Vim pelo site e gostaria de dar o primeiro passo.">
              Dar o primeiro passo
            </WhatsappButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
