import { siteConfig } from "@/lib/site-config";

const credentials = [
  "Graduação em Psicologia",
  "Especialização em Terapia Cognitivo-Comportamental",
  "+8 anos de experiência clínica",
  "Atendimento presencial e online",
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="mx-auto aspect-square w-full max-w-sm rounded-3xl bg-brand-100 md:order-1" />

        <div>
          <h2 className="font-serif text-3xl text-brand-900">Sobre {siteConfig.name}</h2>
          <p className="mt-6 text-brand-700">
            Sou psicóloga clínica e acredito que a terapia é um processo de
            construção conjunta, feito de escuta atenta e acolhimento sem
            julgamentos. Meu trabalho é ajudar você a entender seus
            sentimentos, romper padrões que já não fazem sentido e encontrar
            caminhos mais leves para viver.
          </p>
          <ul className="mt-6 space-y-2 text-brand-700">
            {credentials.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
