import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "2012", text: "Fundação em Guarapuava/PR com foco em cosméticos profissionais." },
  { year: "2015", text: "Primeiro milhar de salões atendidos no Sul do Brasil." },
  { year: "2019", text: "Certificação como Distribuidor Oficial e abertura da loja física no Centro." },
  { year: "2025", text: "+10 mil salões e clientes em todo o Brasil." },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Visual card */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-xl shadow-pink-50">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-pale via-white to-pink-50" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(#E91E8C 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                <div className="w-16 h-16 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-pink-md">
                  <span className="text-white font-bold text-xl">ee</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-dark text-base">Guarapuava/PR</p>
                  <p className="text-sm text-gray-mid mt-1">Desde 2012</p>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                  {[
                    { val: "13", label: "anos" },
                    { val: "+10k", label: "clientes" },
                    { val: "BR", label: "nacional" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/70 rounded-xl p-2.5 text-center border border-pink-100">
                      <p className="font-bold text-gray-dark text-sm">{s.val}</p>
                      <p className="text-[10px] text-gray-mid">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-6 bg-[#E91E8C] text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold leading-none">13</p>
              <p className="text-xs text-pink-100 mt-0.5">anos de mercado</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
              Nossa história
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark leading-tight">
              Quem é a <span className="text-[#E91E8C]">Extremelly</span>
            </h2>

            <p className="mt-6 text-gray-mid leading-relaxed">
              A Extremelly nasceu em Guarapuava/PR com um propósito simples:
              levar resultado de salão para quem realmente precisa. Em 13 anos,
              atendemos mais de 10 mil salões e clientes em todo o Brasil —
              sempre com produtos que a gente usa, testa e acredita.
            </p>
            <p className="mt-4 text-gray-mid leading-relaxed">
              Somos distribuidores oficiais e loja de fábrica: qualidade
              garantida e preço justo. Do interior do Paraná para o Brasil inteiro.
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#E91E8C]/10 border-2 border-[#E91E8C]/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E91E8C]" />
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-4 bg-gray-100 mt-1" />
                    )}
                  </div>
                  <div className="pt-1 pb-4">
                    <span className="text-xs font-bold text-[#E91E8C] mr-2">{m.year}</span>
                    <span className="text-sm text-gray-dark">{m.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-[#E91E8C] hover:text-[#c91278] font-semibold text-sm transition-colors"
            >
              Conheça nossa história completa <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
