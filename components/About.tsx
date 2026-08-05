import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";

const credentials = [
  { label: "Registro profissional", value: siteConfig.crp },
  { label: "Abordagem", value: "Terapia Cognitivo-Comportamental" },
  { label: "Atendimento", value: `${siteConfig.location} · online e presencial` },
  { label: "Foco", value: "Desenvolvimento emocional" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-16">
        <Reveal className="md:order-1">
          <div className="mx-auto aspect-square w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-brand-100 to-brand-200" />
        </Reveal>

        <Reveal delay={80}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Quem vai te atender
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Prazer, sou {siteConfig.name}
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-brand-700">
            <p>
              Sou psicóloga clínica e trabalho com Terapia
              Cognitivo-Comportamental, uma abordagem prática e estruturada,
              com eficácia comprovada por décadas de pesquisa.
            </p>
            <p>
              Meu trabalho não é te dizer o que fazer. É te ajudar a enxergar
              com clareza os padrões de pensamento que sustentam o que você
              sente, para que você possa escolher caminhos diferentes — com
              mais consciência e menos peso.
            </p>
            <p>
              Acredito que terapia não é só para momentos de crise. É também
              um espaço para se conhecer, se cuidar e construir uma vida mais
              leve e com sentido.
            </p>
          </div>

          <dl className="mt-8 grid gap-5 border-t border-sand-200 pt-8 sm:grid-cols-2">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-brand-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-brand-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
