const results = [
  { label: "Xnano Caviar",       description: "Fios lisos e com brilho intenso",              color: "#1A3A8F", icon: "✨" },
  { label: "Sossega Menina",     description: "Volume controlado desde a 1ª aplicação",        color: "#E91E8C", icon: "🌸" },
  { label: "Super Trat Jara",   description: "Sedosidade que dura semanas",                   color: "#B45309", icon: "🌿" },
  { label: "Kit Mandioca",       description: "Reconstrução de fios danificados",              color: "#7C3AED", icon: "🍃" },
  { label: "Açaí e Cupuaçu",    description: "Hidratação profunda e pontas recuperadas",      color: "#E91E8C", icon: "💜" },
  { label: "Sossega Menina",     description: "Resultado duradouro sem química",               color: "#1A3A8F", icon: "⭐" },
];

function ResultCard({
  label,
  description,
  color,
  icon,
  placeholder,
}: {
  label: string;
  description: string;
  color: string;
  icon: string;
  placeholder: string;
}) {
  void placeholder; // reserved for future image swap
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Visual area */}
      <div className="relative aspect-[3/4] flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}08 0%, ${color}18 100%)` }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
          }}
        />

        {/* Center */}
        <div className="relative z-10 flex flex-col items-center gap-3 p-4 text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
            style={{ backgroundColor: `${color}15` }}
          >
            {icon}
          </div>
          <div
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color }}
          >
            {label}
          </div>
        </div>

        {/* Before/After labels */}
        <div className="absolute inset-x-0 top-0 flex">
          <div className="flex-1 py-1 text-center">
            <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded-br-lg"
              style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
              ANTES
            </span>
          </div>
          <div className="w-px bg-white/40" />
          <div className="flex-1 py-1 text-center">
            <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded-bl-lg"
              style={{ backgroundColor: `${color}cc` }}>
              DEPOIS
            </span>
          </div>
        </div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/40" />
      </div>

      {/* Info */}
      <div className="bg-white px-4 py-3">
        <p className="text-xs font-semibold" style={{ color }}>{label}</p>
        <p className="text-xs text-gray-mid mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Resultados reais
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            Cabelos reais.{" "}
            <span className="text-[#E91E8C]">Resultados reais.</span>
          </h2>
          <p className="mt-4 text-gray-mid max-w-lg mx-auto">
            Sem filtro, sem photoshop. Só o produto fazendo o que promete.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {results.map((r) => (
            <ResultCard key={r.description} {...r} placeholder={r.label} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/extremellyforhair/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-dark hover:text-[#E91E8C] font-semibold text-sm transition-colors border-b border-dashed border-gray-300 hover:border-[#E91E8C] pb-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Ver mais resultados no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
