const differentials = [
  {
    title: "Acolhimento sem julgamentos",
    description: "Um ambiente seguro para você se expressar livremente.",
  },
  {
    title: "Abordagem baseada em evidências",
    description: "Métodos reconhecidos cientificamente para resultados reais.",
  },
  {
    title: "Flexibilidade de horários",
    description: "Agenda com horários variados, incluindo fim de tarde.",
  },
  {
    title: "Sigilo garantido",
    description: "Confidencialidade total conforme o código de ética profissional.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl text-brand-900">Diferenciais</h2>
        <p className="mt-3 max-w-2xl text-brand-700">
          O que torna o acompanhamento com {"a Dra. Marina"} diferente.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {differentials.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 font-serif text-brand-700">
                ✓
              </span>
              <div>
                <h3 className="font-medium text-brand-900">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
