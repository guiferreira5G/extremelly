import { CheckCircle2, ArrowRight } from "lucide-react";

const WA_B2B =
  "https://wa.me/5542999135813?text=Ol%C3%A1!%20Sou%20profissional%20de%20sal%C3%A3o%20e%20quero%20saber%20sobre%20condi%C3%A7%C3%B5es%20de%20atacado.";

const perks = [
  "Preço de atacado direto da fábrica",
  "Linha completa para salão e barbearia",
  "Atendimento especializado para profissionais",
  "Entrega para todo o Brasil",
  "Participação em formações e eventos (SENAC)",
];

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function B2BSection() {
  return (
    <section id="profissionais" className="py-20 md:py-28 bg-[#1A3A8F] overflow-hidden relative">
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div aria-hidden="true" className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                Para profissionais
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Você é cabeleireiro ou{" "}
              <span className="text-[#F5C518]">dono de salão?</span>
            </h2>

            <p className="mt-5 text-blue-100 text-base leading-relaxed">
              Condições especiais para profissionais. Compre direto da fábrica
              com preço de atacado — os mesmos produtos que mais de 10 mil salões
              já escolheram no Brasil.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#F5C518] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100 text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_B2B}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-gray-dark font-bold text-sm px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
            >
              <WhatsAppIcon />
              Quero condições especiais
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              {/* Brand card */}
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-white/20">
                <div className="absolute inset-0 bg-white/5" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white text-base">Para Profissionais</p>
                    <p className="text-blue-200 text-sm mt-1">Atacado direto da fábrica</p>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {["Salões", "Barbearias", "Cabeleireiros"].map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-blue-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">+10k</p>
                  <p className="text-xs text-blue-200 mt-1">salões atendidos</p>
                </div>
                <div className="bg-[#F5C518]/10 border border-[#F5C518]/30 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#F5C518]">13</p>
                  <p className="text-xs text-blue-200 mt-1">anos no mercado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
