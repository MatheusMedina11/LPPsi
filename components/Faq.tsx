"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "As sessões são presenciais ou online?",
    answer:
      "Ambas as opções estão disponíveis. Você escolhe o formato que for mais confortável para você.",
  },
  {
    question: "Qual a duração e frequência das sessões?",
    answer:
      "As sessões têm cerca de 50 minutos, geralmente com frequência semanal, ajustada conforme sua necessidade.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito por sessão ou pacote mensal, via Pix ou cartão. Os detalhes são combinados no primeiro contato.",
  },
  {
    question: "Vocês emitem recibo para reembolso pelo plano de saúde?",
    answer:
      "Sim, emitimos recibo com todas as informações necessárias para solicitação de reembolso.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl text-brand-900">
          Perguntas frequentes
        </h2>

        <div className="mt-8 divide-y divide-brand-100 border-t border-brand-100">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-brand-900">
                    {item.question}
                  </span>
                  <span className="text-xl text-brand-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-brand-700">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
