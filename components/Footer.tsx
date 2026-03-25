const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Para Profissionais", href: "/#profissionais" },
  { label: "Sobre a marca", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#E91E8C] flex items-center justify-center">
                <span className="text-white font-bold text-sm">ee</span>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-white">
                  extremelly
                </span>
                <span className="block text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                  for hair
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Cosméticos capilares profissionais com 13 anos de resultado
              comprovado. Distribuidora oficial e loja de fábrica — direto para
              você e para o seu salão.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+5542999135813"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1.21h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.13 6.13l1.95-1.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                (42) 99913-5813
              </a>
              <a
                href="tel:+5542988071731"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1.21h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.13 6.13l1.95-1.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                (42) 98807-1731
              </a>
            </div>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/extremellyforhair/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#E91E8C] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @extremellyforhair
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + WhatsApp */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Onde nos encontrar
            </h3>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              Rua XV de Novembro, 6311
              <br />
              Centro, Guarapuava/PR
              <br />
              CEP 85065-000
            </address>

            <a
              href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20conhecer%20os%20produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 Extremelly Cosmetics. Todos os direitos reservados.
          </p>
          <a
            href="/contato"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
