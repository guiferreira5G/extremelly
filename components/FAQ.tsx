"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Vocês enviam para todo o Brasil?",
    a: "Sim! Enviamos para qualquer estado brasileiro pelos Correios e transportadoras parceiras. Após a confirmação do pedido via WhatsApp, informamos o prazo e o custo do frete para a sua região.",
  },
  {
    q: "Qual produto é indicado para cabelo com química?",
    a: "Para cabelos com química (coloração, descoloração ou alisamento), recomendamos nossas linhas de Reconstrução e Hidratação Profunda. Mas o ideal é falar com nossa equipe pelo WhatsApp — a gente analisa o seu caso e indica o produto certo para o seu tipo de fio.",
  },
  {
    q: "Em quanto tempo o pedido chega?",
    a: "O prazo varia de acordo com a sua localização. Para cidades do Paraná, costuma ser de 2 a 5 dias úteis. Para demais estados, de 5 a 10 dias úteis. Confirmaremos o prazo exato no momento do pedido.",
  },
  {
    q: "Posso trocar se não gostar?",
    a: "Trabalhamos com produtos de qualidade comprovada, mas entendemos que cada cabelo é diferente. Em caso de dúvida sobre trocas ou devoluções, entre em contato com nossa equipe pelo WhatsApp — resolvemos de forma rápida e humana.",
  },
  {
    q: "Tenho um salão. Como faço pedido no atacado?",
    a: "Ótimo! Atendemos profissionais e salões com condições especiais de atacado, direto da fábrica. Manda uma mensagem no WhatsApp informando que você é profissional e nossa equipe te passa todas as informações sobre valores, mínimo de pedido e formas de pagamento.",
  },
  {
    q: "Como sei qual produto é certo para mim?",
    a: "A forma mais rápida é falar com a nossa equipe pelo WhatsApp. Conta para a gente como é seu cabelo (tipo, se tem química, qual é seu maior problema), e em minutos te indicamos o produto ideal. Não tem bot, não tem formulário complicado — é atendimento humano de verdade.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-pink-pale/40 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-dark text-sm sm:text-base pr-4">
          {q}
        </span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E91E8C]/10 flex items-center justify-center">
          {open ? (
            <Minus size={14} className="text-[#E91E8C]" />
          ) : (
            <Plus size={14} className="text-[#E91E8C]" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-5">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-sm text-gray-mid leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            Ainda tem dúvida?
          </h2>
          <p className="mt-4 text-gray-mid">
            Respondemos as perguntas mais comuns aqui. Se a sua não está na
            lista, é só chamar no WhatsApp.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100">
          <p className="font-semibold text-gray-dark">
            Não encontrou o que procurava?
          </p>
          <p className="text-sm text-gray-mid mt-1">
            Nossa equipe responde em minutos pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar com a equipe agora
          </a>
        </div>
      </div>
    </section>
  );
}
