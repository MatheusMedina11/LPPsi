import { siteConfig } from "@/lib/site-config";
import WhatsappButton from "./WhatsappButton";

const badges = [
  siteConfig.crp,
  "Terapia Cognitivo-Comportamental",
  `${siteConfig.location} · Online e presencial`,
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Psicóloga · {siteConfig.crp}
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-[1.15] text-brand-900 md:text-5xl">
            Terapia para você entender o que sente e viver com mais leveza
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-brand-700">
            Atendimento psicológico individual com Terapia
            Cognitivo-Comportamental, para quem convive com ansiedade,
            autocobrança ou se sente travado em algum ponto da vida. Um espaço
            para desenvolver clareza emocional e construir uma vida com mais
            sentido.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <WhatsappButton message="Olá, Milena! Vim pelo site e gostaria de tirar algumas dúvidas sobre a terapia.">
              Tirar minhas dúvidas no WhatsApp
            </WhatsappButton>
            <a
              href="#como-funciona"
              className="inline-block rounded-full border border-brand-300 px-7 py-3.5 text-sm font-medium text-brand-800 transition-all duration-200 hover:scale-[1.03] hover:bg-brand-100"
            >
              Ver como funciona
            </a>
          </div>

          <p className="mt-4 text-sm text-brand-500">
            Sem compromisso — você tira suas dúvidas antes de decidir.
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-sand-200 pt-6 text-sm text-brand-600">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] w-full rounded-[2rem] bg-gradient-to-b from-brand-100 to-brand-200" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-sand-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur sm:block">
            <p className="font-serif text-sm text-brand-900">
              {siteConfig.name}
            </p>
            <p className="mt-0.5 text-xs text-brand-500">
              {siteConfig.title} · {siteConfig.crp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
