const steps = [
  {
    number: "01",
    title: "Contato inicial",
    description: "Você entra em contato pelo WhatsApp e agenda seu horário.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    description: "Conversamos sobre sua história e o que te trouxe até aqui.",
  },
  {
    number: "03",
    title: "Plano terapêutico",
    description: "Definimos juntos os objetivos e a frequência das sessões.",
  },
  {
    number: "04",
    title: "Acompanhamento contínuo",
    description: "Sessões regulares para apoiar sua evolução ao longo do tempo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl text-brand-900">Como funciona</h2>
        <p className="mt-3 max-w-2xl text-brand-700">
          Do primeiro contato ao acompanhamento contínuo, em poucos passos.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-serif text-3xl text-brand-300">
                {step.number}
              </span>
              <h3 className="mt-2 font-medium text-brand-900">{step.title}</h3>
              <p className="mt-1 text-sm text-brand-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
