"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Quanto custa a sessão?",
    answer:
      "O valor é informado no primeiro contato pelo WhatsApp, junto com os horários disponíveis. Trabalho com valores acessíveis e converso abertamente sobre isso antes de qualquer agendamento — sem surpresas.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer:
      "Depende dos seus objetivos. A TCC costuma ser um processo mais focado e estruturado do que outras abordagens, com metas definidas desde o início. Muitas pessoas percebem mudanças nas primeiras semanas, mas o tempo total é sempre individual.",
  },
  {
    question: "Como sei se preciso de terapia?",
    answer:
      "Você não precisa estar em crise para buscar ajuda. Se algo está te incomodando, se repetindo ou atrapalhando sua rotina, já é motivo suficiente. Na primeira conversa avaliamos juntos se faz sentido seguir.",
  },
  {
    question: "O atendimento é online ou presencial?",
    answer:
      "Os dois. Você escolhe o formato mais confortável e pode alternar entre eles conforme sua rotina. O atendimento presencial acontece em Porto Alegre.",
  },
  {
    question: "A terapia online funciona tanto quanto a presencial?",
    answer:
      "Sim. Diversos estudos mostram que a terapia online tem eficácia equivalente à presencial para a maioria das demandas. O que muda é o meio, não o cuidado nem a estrutura do processo.",
  },
  {
    question: "Qual a duração e a frequência das sessões?",
    answer:
      "As sessões duram cerca de 50 minutos e costumam ser semanais. A frequência é ajustada conforme sua necessidade e o momento do processo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito por sessão, via Pix ou transferência, e os detalhes são combinados no primeiro contato.",
  },
  {
    question: "Vocês emitem recibo para reembolso do plano de saúde?",
    answer:
      "Sim. Emito recibo com todas as informações necessárias para você solicitar reembolso junto ao seu plano de saúde.",
  },
  {
    question: "O que eu falo é confidencial?",
    answer:
      "Sim. Tudo o que é dito em sessão é protegido pelo sigilo profissional, previsto no Código de Ética Profissional do Psicólogo.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
          Dúvidas frequentes
        </p>
        <h2 className="mt-4 font-serif text-3xl leading-snug text-brand-900 md:text-4xl">
          Ainda com dúvidas? É normal.
        </h2>
        <p className="mt-4 text-brand-600">
          Reuni aqui as perguntas que mais recebo antes da primeira sessão.
        </p>

        <div className="mt-12 divide-y divide-sand-200 border-y border-sand-200">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-brand-600"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-brand-900 transition-colors group-hover:text-brand-700">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-brand-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-relaxed text-brand-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
