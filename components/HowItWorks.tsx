const steps = [
  {
    number: "01",
    title: "Escolha",
    description:
      "Navegue pelas nossas categorias ou fale com nossa equipe. Vamos te indicar o produto certo para o seu tipo de cabelo.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Aplique",
    description:
      "Receita simples, resultado profissional. Cada produto vem com instruções claras. Sem complicação.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Transforme",
    description:
      "Veja a diferença desde a primeira lavagem. Fios alinhados, brilhosos e sem frizz. Resultado de salão, na sua casa.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
            É simples. É rápido. É resultado.
          </h2>
          <p className="mt-4 text-gray-mid max-w-lg mx-auto">
            Não precisa ser cabeleireira para usar. Qualquer pessoa consegue.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-[#E91E8C]/20 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number + icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#E91E8C]/20 flex items-center justify-center shadow-lg shadow-pink-50">
                  <div className="text-[#E91E8C]">{step.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#E91E8C] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-dark">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-mid leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20conhecer%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E91E8C] hover:text-[#c91278] font-semibold text-sm transition-colors"
          >
            Ainda tem dúvida? Fale com a nossa equipe
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
