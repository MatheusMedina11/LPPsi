import { buildWhatsappLink } from "@/lib/site-config";

export default function Cta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand-700 px-6 py-14 text-center text-white">
        <h2 className="font-serif text-3xl">
          Dê o primeiro passo para o seu bem-estar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">
          Fale agora comigo pelo WhatsApp e agende sua primeira sessão. Vamos
          encontrar juntos o caminho para uma vida mais leve.
        </p>
        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-brand-700 shadow-sm transition hover:bg-brand-50"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
