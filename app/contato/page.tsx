import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contato | Extremelly For Hair — Guarapuava/PR",
  description:
    "Entre em contato com a Extremelly Cosmetics. WhatsApp, telefone, e-mail e loja física em Guarapuava/PR. Atendemos de segunda a sábado.",
};

const canais = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    titulo: "WhatsApp",
    subtitulo: "Resposta em minutos",
    valor: "(42) 99913-5813",
    href: "https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda.",
    cor: "#25D366",
    externo: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1.21h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.13 6.13l1.95-1.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    titulo: "Telefone",
    subtitulo: "Tele-vendas",
    valor: "(42) 99913-5813 / 98807-1731",
    href: "tel:+5542999135813",
    cor: "#E91E8C",
    externo: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    titulo: "Instagram",
    subtitulo: "Acompanhe os lançamentos",
    valor: "@extremellyforhair",
    href: "https://www.instagram.com/extremellyforhair/",
    cor: "#E91E8C",
    externo: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    titulo: "Loja Física",
    subtitulo: "Guarapuava/PR — Centro",
    valor: "Rua XV de Novembro, 6311",
    href: "https://maps.google.com/?q=Rua+XV+de+Novembro,+6311,+Centro,+Guarapuava,+PR",
    cor: "#1A3A8F",
    externo: true,
  },
];

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-off-white pt-16 pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
              Atendimento
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">
              Fale com a <span className="text-[#E91E8C]">Extremelly</span>
            </h1>
            <p className="mt-5 text-gray-mid text-lg max-w-xl mx-auto">
              Sem bot, sem fila. Nossa equipe atende de verdade — pelo WhatsApp,
              telefone ou na loja física em Guarapuava/PR.
            </p>
          </div>
        </section>

        {/* Canais de contato */}
        <section className="py-8 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {canais.map((canal) => (
                <a
                  key={canal.titulo}
                  href={canal.href}
                  target={canal.externo ? "_blank" : undefined}
                  rel={canal.externo ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-3 bg-off-white hover:bg-white border border-gray-100 hover:border-[#E91E8C]/20 hover:shadow-lg rounded-2xl p-5 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: canal.cor }}
                  >
                    {canal.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-dark text-sm">{canal.titulo}</p>
                    <p className="text-xs text-gray-mid mt-0.5">{canal.subtitulo}</p>
                    <p className="text-xs font-semibold mt-2" style={{ color: canal.cor }}>
                      {canal.valor}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Horário + mapa */}
        <section className="py-16 bg-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-6">
                  Informações da loja
                </h2>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-2">
                      Endereço
                    </p>
                    <p className="text-gray-dark text-sm leading-relaxed">
                      Rua XV de Novembro, 6311<br />
                      Centro — Guarapuava/PR<br />
                      CEP 85065-000
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-2">
                      Horário de atendimento
                    </p>
                    <div className="space-y-1.5 text-sm">
                      {[
                        { dia: "Segunda a Sexta", hora: "08h – 18h", aberto: true },
                        { dia: "Sábado",          hora: "08h – 12h", aberto: true },
                        { dia: "Domingo",          hora: "Fechado",   aberto: false },
                      ].map(({ dia, hora, aberto }) => (
                        <div key={dia} className="flex justify-between items-center">
                          <span className={aberto ? "text-gray-dark" : "text-gray-mid"}>{dia}</span>
                          <span className={`font-semibold text-xs px-2.5 py-0.5 rounded-full ${aberto ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                            {hora}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-2">
                      Tele-vendas
                    </p>
                    <div className="space-y-2">
                      <a href="tel:+5542999135813" className="flex items-center gap-2 text-sm text-gray-dark hover:text-[#E91E8C] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
                        (42) 99913-5813
                      </a>
                      <a href="tel:+5542988071731" className="flex items-center gap-2 text-sm text-gray-dark hover:text-[#E91E8C] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" />
                        (42) 98807-1731
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-6">
                  Localização
                </h2>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-[4/3] bg-gray-100 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.7!2d-51.46!3d-25.395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef2b6b1e1e1e1b%3A0x1e1e1e1e1e1e1e1e!2sRua%20XV%20de%20Novembro%2C%206311%20-%20Centro%2C%20Guarapuava%20-%20PR%2C%2085065-000!5e0!3m2!1spt-BR!2sbr!4v1711000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Extremelly — Guarapuava/PR"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+XV+de+Novembro,+6311,+Centro,+Guarapuava,+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E91E8C] hover:text-[#c91278] transition-colors"
                >
                  Abrir no Google Maps
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* B2B CTA */}
        <section className="py-14 bg-[#1A3A8F]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-lg font-bold text-white">
              Você tem um salão ou barbearia?
            </p>
            <p className="text-blue-200 mt-2 mb-7 text-sm">
              Condições especiais de atacado, direto da fábrica. Fale com nossa equipe.
            </p>
            <a
              href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Sou%20profissional%20de%20sal%C3%A3o%20e%20quero%20saber%20sobre%20condi%C3%A7%C3%B5es%20de%20atacado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-gray-dark font-bold px-8 py-4 rounded-full transition-colors"
            >
              Quero condições especiais
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
