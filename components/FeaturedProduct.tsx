import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const WA_PRODUCT =
  "https://wa.me/5542999135813?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Xnano%20Caviar.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F";

const benefits = [
  "Alisamento profissional sem danos aos fios",
  "Brilho intenso desde a primeira aplicação",
  "Tecnologia de microesferas com liberação gradual",
  "Resultado que dura semanas",
  "Indicado para uso em casa e em salão",
];

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function FeaturedProduct() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Produto em destaque
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            O preferido das clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual — product card */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Product visual */}
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 relative">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A8F]/5 via-blue-50 to-[#1A3A8F]/10" />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "radial-gradient(#1A3A8F 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A3A8F] flex items-center justify-center shadow-lg">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#1A3A8F] text-lg">Xnano Caviar</p>
                    <p className="text-xs text-gray-mid mt-1">Linha Premium</p>
                  </div>
                  <div className="w-10 h-0.5 bg-[#1A3A8F]/20 rounded-full" />
                  <p className="text-xs text-gray-mid text-center leading-relaxed max-w-[160px]">
                    Tecnologia de microesferas para resultado profissional
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-[#1A3A8F] text-white rounded-2xl px-4 py-2 text-center shadow-lg">
                <p className="text-xs font-medium text-blue-200">Linha</p>
                <p className="text-sm font-bold">Premium</p>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#E91E8C]/6 blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#F5C518] fill-[#F5C518]" />
              ))}
              <span className="text-sm text-gray-mid ml-1">Favorito das profissionais</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-dark leading-tight">
              Xnano Caviar
            </h3>
            <p className="text-[#1A3A8F] font-semibold text-lg mt-1">
              Liso perfeito com brilho de salão
            </p>

            <p className="mt-4 text-gray-mid leading-relaxed">
              A nossa linha premium que combina tecnologia de microesferas com
              ingredientes de alta performance para entregar o resultado que você
              sempre quis: fios lisos, brilhosos e saudáveis — de verdade.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#E91E8C] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-dark">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-off-white rounded-2xl p-4 border-l-4 border-[#E91E8C]">
              <p className="text-sm text-gray-dark italic leading-relaxed">
                &ldquo;O Xnano Caviar mudou minha relação com o meu cabelo. Apliquei
                uma vez e o resultado durou mais de três semanas.&rdquo;
              </p>
              <p className="text-xs font-semibold text-gray-mid mt-2">
                — Juliana M., Curitiba/PR
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WA_PRODUCT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold px-7 py-4 rounded-full transition-colors duration-200 shadow-pink-md"
              >
                <WhatsAppIcon />
                Quero esse produto
              </a>
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 text-gray-dark hover:text-[#E91E8C] font-semibold text-sm px-4 py-4 transition-colors"
              >
                Ver todos os produtos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
