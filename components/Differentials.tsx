import Reveal from "./Reveal";

const differentials = [
  {
    title: "Abordagem com base científica",
    description:
      "A Terapia Cognitivo-Comportamental é uma das abordagens mais estudadas do mundo, com eficácia comprovada para ansiedade e autoestima.",
  },
  {
    title: "Objetivos claros desde o início",
    description:
      "Você sabe o que estamos trabalhando e por quê. Nada de processo sem direção — definimos metas juntas e acompanhamos a evolução.",
  },
  {
    title: "Ferramentas para o dia a dia",
    description:
      "Você sai das sessões com recursos práticos para usar fora do consultório, no momento em que realmente precisa.",
  },
  {
    title: "Espaço livre de julgamentos",
    description:
      "Um ambiente seguro para falar do que for necessário, no seu tempo e sem pressão para ter todas as respostas.",
  },
  {
    title: "Sigilo profissional garantido",
    description:
      "Tudo o que é dito em sessão é confidencial, conforme o Código de Ética Profissional do Psicólogo.",
  },
  {
    title: "Online com a mesma qualidade",
    description:
      "Sessões por videochamada com o mesmo cuidado do presencial, para você fazer terapia de onde estiver.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Por que a TCC
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Um processo estruturado, com direção e resultados que você percebe
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-sand-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-5 font-medium text-brand-900">
                  {item.title}
                </h3>
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
