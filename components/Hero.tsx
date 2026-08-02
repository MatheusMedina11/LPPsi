import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-brand-500">
          Psicologia clínica • {siteConfig.crp}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
          Um espaço de escuta para você se reencontrar
        </h1>
        <p className="mt-6 text-lg text-brand-700">
          Atendimento psicológico individual e para casais, presencial e
          online, para quem busca lidar com ansiedade, autoestima,
          relacionamentos e momentos de transição na vida.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700"
          >
            Agendar minha primeira sessão
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-brand-300 px-6 py-3 text-sm font-medium text-brand-700 transition hover:bg-brand-100"
          >
            Conhecer o trabalho
          </a>
        </div>
      </div>

      <div className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl bg-brand-200/60" />
    </section>
  );
}
