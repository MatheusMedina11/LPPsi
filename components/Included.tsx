import Reveal from "./Reveal";

const included = [
  "Sessões de 50 minutos, com horário reservado só para você",
  "Plano terapêutico construído junto com você",
  "Ferramentas práticas de TCC para usar no dia a dia",
  "Recibo para solicitação de reembolso no plano de saúde",
  "Sigilo profissional conforme o Código de Ética",
  "Flexibilidade para alternar entre online e presencial",
];

export default function Included() {
  return (
    <section className="bg-brand-900 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
            O que está incluso
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug md:text-4xl">
            O que você recebe ao iniciar o acompanhamento
          </h2>
          <p className="mt-5 leading-relaxed text-brand-200">
            Transparência desde o começo: você sabe exatamente o que esperar
            antes mesmo da primeira sessão.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="leading-relaxed text-brand-100">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
