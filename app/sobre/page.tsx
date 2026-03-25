import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a Extremelly For Hair | 13 anos de resultado capilar",
  description:
    "Conheça a Extremelly Cosmetics — distribuidora oficial de cosméticos capilares profissionais em Guarapuava/PR. 13 anos de mercado, +10 mil clientes satisfeitos.",
};

const values = [
  {
    title: "Resultado de verdade",
    text: "Não vendemos promessa. Cada produto é testado antes de chegar até você.",
  },
  {
    title: "Preço justo",
    text: "Somos distribuidores oficiais e loja de fábrica — sem intermediário, sem margem inflada.",
  },
  {
    title: "Atendimento humano",
    text: "Nossa equipe responde de verdade. Sem bot, sem tempo de espera longo.",
  },
  {
    title: "Para todos os cabelos",
    text: "B2C ou B2B, consumidora final ou salão — temos o produto certo para cada necessidade.",
  },
];

const timeline = [
  { year: "2012", text: "Fundação da Extremelly em Guarapuava/PR com foco em cosméticos profissionais." },
  { year: "2015", text: "Primeiro milhar de salões atendidos. Expansão para outros estados do Sul." },
  { year: "2018", text: "Lançamento de linhas próprias com fórmulas desenvolvidas para o cabelo brasileiro." },
  { year: "2019", text: "Certificação como Distribuidor Oficial. Abertura da loja física no Centro de Guarapuava." },
  { year: "2022", text: "Participação no SENAC com formações para cabeleireiros parceiros." },
  { year: "2025", text: "Mais de 10 mil salões e clientes em todo o Brasil. Envio nacional consolidado." },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-off-white pt-16 pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
              Nossa história
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark leading-tight">
              Quem é a <span className="text-[#E91E8C]">Extremelly</span>
            </h1>
            <p className="mt-5 text-gray-mid text-lg max-w-2xl mx-auto leading-relaxed">
              Nascemos em Guarapuava/PR com um propósito simples: levar resultado
              de salão para quem realmente precisa. Treze anos depois, seguimos o
              mesmo caminho.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-14 bg-white border-y border-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                {[
                  { value: "13", label: "anos de mercado" },
                  { value: "+10k", label: "clientes atendidos" },
                  { value: "Brasil", label: "entregamos para todo o país" },
                  { value: "Oficial", label: "distribuidor certificado" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-[#E91E8C]">{s.value}</p>
                    <p className="text-sm text-gray-mid mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Timeline */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-8">
                  Nossa trajetória
                </h2>
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#E91E8C]/10 border-2 border-[#E91E8C]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[10px] font-bold text-[#E91E8C]">
                            {item.year}
                          </span>
                        </div>
                        {i < timeline.length - 1 && (
                          <div className="w-px flex-1 bg-gray-100 mt-2" />
                        )}
                      </div>
                      <div className="pt-2 pb-6">
                        <p className="text-sm text-gray-dark leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values + team placeholder */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-8">
                  O que nos move
                </h2>
                <div className="space-y-5">
                  {values.map((v) => (
                    <div key={v.title} className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-[#E91E8C] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-dark text-sm">{v.title}</p>
                        <p className="text-sm text-gray-mid mt-0.5 leading-relaxed">{v.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Team visual */}
                <div className="mt-10 rounded-2xl overflow-hidden aspect-[4/3] relative border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-pale via-white to-pink-50" />
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(#E91E8C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                    <div className="w-14 h-14 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-pink-sm">
                      <span className="text-white font-bold text-base">ee</span>
                    </div>
                    <p className="font-bold text-gray-dark text-sm">Extremelly For Hair</p>
                    <p className="text-xs text-gray-mid">Guarapuava/PR — desde 2012</p>
                    <div className="flex gap-2 flex-wrap justify-center mt-1">
                      {["Tradição", "Resultado", "Confiança"].map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-[#E91E8C] bg-pink-pale px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Address block */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-dark mb-2">Onde nos encontrar</h2>
            <p className="text-gray-mid">
              Rua XV de Novembro, 6311 — Centro, Guarapuava/PR · CEP 85065-000
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20Sobre%20e%20quero%20falar%20com%20a%20equipe."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Falar com a equipe
              </a>
              <a
                href="tel:+5542999135813"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#E91E8C] text-gray-dark font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                (42) 99913-5813
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
