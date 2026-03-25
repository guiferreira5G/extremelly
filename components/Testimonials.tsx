import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    city: "Curitiba/PR",
    product: "Xnano Caviar",
    text: "Eu tinha o cabelo cheio de frizz e já tinha tentado de tudo. O Xnano Caviar foi o primeiro produto que realmente funcionou pra mim. Já são 3 semanas e o cabelo continua liso e brilhoso.",
    stars: 5,
  },
  {
    name: "Renata M.",
    city: "São Paulo/SP",
    product: "Sossega Menina",
    text: "Comprei pelo WhatsApp, foi super fácil. O produto chegou rápido e bem embalado. O Sossega Menina é perfeito pra mim que tenho cabelo com volume sem controle. Virei cliente fiel.",
    stars: 5,
  },
  {
    name: "Carla Duarte",
    city: "Londrina/PR",
    product: "Super Trat Jara Brasileira",
    text: "Sou cabeleireira e uso a Extremelly no meu salão há mais de 2 anos. As clientes adoram o resultado. O Super Trat é um dos meus preferidos — dura semanas e o feedback é sempre ótimo.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    city: "Guarapuava/PR",
    product: "Kit Folhas de Mandioca",
    text: "Comprei o kit completo pra minha filha que tem cabelo muito ressecado. Em duas semanas o cabelo dela estava transformado. Produto bom demais, super recomendo para todas.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            O que nossas clientes dizem{" "}
            <span className="text-[#E91E8C]">(e mostram)</span>
          </h2>
          <p className="mt-4 text-gray-mid max-w-xl mx-auto">
            Mais de 10 mil salões e consumidoras em todo o Brasil já escolheram
            a Extremelly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-off-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[#E91E8C]/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-[#E91E8C]/30" />

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#F5C518] fill-[#F5C518]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-dark leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product tag */}
              <div className="inline-flex">
                <span className="text-xs font-medium text-[#E91E8C] bg-pink-pale px-3 py-1 rounded-full">
                  {t.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#E91E8C]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-mid">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof counter */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-off-white border border-gray-100 rounded-full px-6 py-3">
            <div className="flex -space-x-1.5">
              {["A", "B", "C", "D", "E"].map((l) => (
                <div
                  key={l}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-300 to-pink-100 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-[8px] font-bold text-[#E91E8C]">
                    {l}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-mid">
              <span className="font-bold text-gray-dark">+10.000</span> clientes
              satisfeitas em todo o Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
