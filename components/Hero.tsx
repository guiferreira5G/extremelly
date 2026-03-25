import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

const WA_LINK =
  "https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20conhecer%20os%20produtos.";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative bg-off-white overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #E91E8C 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #1A3A8F 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white border border-pink-100 shadow-sm rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#E91E8C]" />
              <span className="text-xs font-semibold text-[#E91E8C] tracking-wide">
                13 anos de resultado comprovado
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-dark leading-[1.1] tracking-tight">
              Chega de frizz.{" "}
              <span className="text-[#E91E8C]">Começa o cabelo</span>{" "}
              que você sempre quis.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-gray-mid leading-relaxed max-w-lg">
              Cosméticos profissionais direto da fábrica — com 13 anos de
              resultados reais. Para você e para o seu salão.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-sm text-gray-mid">
                <ShieldCheck size={16} className="text-[#E91E8C]" />
                Distribuidor Oficial
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-mid">
                <Truck size={16} className="text-[#E91E8C]" />
                Envio para todo o Brasil
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A", "J", "C", "R"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ["#E91E8C", "#c91278", "#a50f63", "#E91E8C"][i] }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-mid">
                <span className="font-bold text-gray-dark">+10 mil</span>{" "}
                clientes satisfeitas
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#categorias"
                className="group inline-flex items-center justify-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-pink-md hover:shadow-pink-lg"
              >
                Ver produtos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#E91E8C] text-[#E91E8C] hover:bg-pink-pale font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-colors duration-200"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — visual brand card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">

              {/* Main visual card */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCE7F3] via-white to-pink-100" />

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(#E91E8C 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Center brand content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  <div className="w-20 h-20 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-pink-lg">
                    <span className="text-white font-bold text-2xl tracking-tight">ee</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-dark">extremelly</p>
                    <p className="text-xs font-semibold text-gray-mid uppercase tracking-[0.2em] mt-1">for hair</p>
                  </div>
                  <div className="w-12 h-0.5 bg-[#E91E8C]/30 rounded-full" />
                  <p className="text-sm text-gray-mid text-center leading-relaxed max-w-[200px]">
                    Cosméticos profissionais direto da fábrica
                  </p>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-pink-50/60 to-transparent" />
              </div>

              {/* Floating card — resultado */}
              <div className="absolute -bottom-5 -left-5 md:-left-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-50">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-dark">Resultado visível</p>
                  <p className="text-[10px] text-gray-mid">desde a 1ª aplicação</p>
                </div>
              </div>

              {/* Floating card — clientes */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-[#E91E8C] rounded-2xl shadow-xl px-5 py-3 text-center">
                <p className="text-2xl font-bold text-white leading-none">+10k</p>
                <p className="text-[10px] text-pink-100 mt-0.5 font-medium">clientes</p>
              </div>

              {/* Floating card — anos */}
              <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white rounded-2xl shadow-lg px-4 py-2.5 text-center border border-gray-50">
                <p className="text-lg font-bold text-gray-dark leading-none">13</p>
                <p className="text-[10px] text-gray-mid font-medium">anos</p>
              </div>

              <div aria-hidden="true" className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 rounded-full bg-pink-100/60 blur-3xl" />
              <div aria-hidden="true" className="absolute -z-10 -top-8 -left-8 w-32 h-32 rounded-full bg-blue-100/40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
