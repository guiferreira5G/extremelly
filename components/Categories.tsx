import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "anti-frizz",
    name: "Anti-frizz e Alisamento",
    tagline: "Diga tchau ao volume descontrolado.",
    color: "from-[#E91E8C]/10 to-pink-50",
    accent: "#E91E8C",
    placeholder: "Produtos anti-frizz e alisamento",
  },
  {
    id: "hidratacao",
    name: "Hidratação Profunda",
    tagline: "Para fios que pedem socorro.",
    color: "from-blue-50 to-blue-100",
    accent: "#1A3A8F",
    placeholder: "Produtos de hidratação capilar",
  },
  {
    id: "tratamento",
    name: "Tratamento e Reconstrução",
    tagline: "Restaura o que o tempo e a química levaram.",
    color: "from-amber-50 to-yellow-100",
    accent: "#B45309",
    placeholder: "Produtos de tratamento e reconstrução",
  },
  {
    id: "kits",
    name: "Kits Completos",
    tagline: "Tudo que seu cabelo precisa, num só pedido.",
    color: "from-purple-50 to-violet-100",
    accent: "#7C3AED",
    placeholder: "Kits capilares completos",
  },
  {
    id: "masculina",
    name: "Linha Masculina",
    tagline: "Cuidado capilar de verdade para homens.",
    color: "from-gray-100 to-slate-100",
    accent: "#374151",
    placeholder: "Premium Barber — linha masculina",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Nossos produtos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            Encontre o tratamento ideal{" "}
            <span className="text-[#E91E8C]">para o seu cabelo</span>
          </h2>
          <p className="mt-4 text-gray-mid max-w-xl mx-auto">
            Cada linha foi desenvolvida para resolver um problema real. Escolha
            a sua e descubra o produto certo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/produtos/${cat.id}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#E91E8C]/30 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${cat.color} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center opacity-20"
                  style={{ backgroundColor: cat.accent }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-dark text-base leading-tight group-hover:text-[#E91E8C] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-mid mt-1.5 leading-relaxed">
                  {cat.tagline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#E91E8C] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Explorar</span>
                  <ArrowRight size={15} />
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: cat.accent }}
              />
            </a>
          ))}

          {/* Wide card CTA */}
          <a
            href={`https://wa.me/5542999135813?text=Ol%C3%A1!%20Quero%20ver%20todos%20os%20produtos%20dispon%C3%ADveis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group sm:col-span-2 lg:col-span-3 bg-[#E91E8C] hover:bg-[#c91278] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors duration-200"
          >
            <div>
              <p className="text-white font-bold text-lg">
                Não sabe por onde começar?
              </p>
              <p className="text-pink-100 text-sm mt-1">
                Nossa equipe indica o produto certo para o seu tipo de cabelo.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-[#E91E8C] font-semibold text-sm px-6 py-3 rounded-full flex-shrink-0 group-hover:shadow-lg transition-shadow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com especialista
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
