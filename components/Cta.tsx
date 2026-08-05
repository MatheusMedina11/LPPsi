import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";

export default function Cta() {
  return (
    <section id="contato" className="bg-white pb-24 pt-8 md:pb-32">
      <Reveal>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-sand-200 bg-sand-50 px-6 py-16 text-center md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
            Primeiro passo
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
            Você não precisa resolver tudo sozinho
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-brand-600">
            Me mande uma mensagem no WhatsApp. A gente conversa sobre o que
            você está buscando, tira suas dúvidas sobre valores e horários, e
            você decide com calma se quer seguir.
          </p>

          <div className="mt-9">
            <WhatsappButton message="Olá, Milena! Vim pelo site e gostaria de conversar sobre iniciar a terapia.">
              Conversar no WhatsApp
            </WhatsappButton>
          </div>

          <p className="mt-5 text-sm text-brand-500">
            Resposta em até 24h · Sem compromisso · {siteConfig.attendance}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
