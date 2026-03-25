"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20conhecer%20os%20produtos.";

const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Profissionais", href: "/#profissionais" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "FAQ", href: "/faq" },
];

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Logo = () => (
  <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
    <div className="w-9 h-9 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-sm group-hover:shadow-pink-sm transition-shadow">
      <span className="text-white font-bold text-[13px] tracking-tight select-none">ee</span>
    </div>
    <div className="leading-none">
      <span className="block text-[15px] font-bold text-gray-dark tracking-tight">
        extremelly
      </span>
      <span className="block text-[9px] font-semibold text-gray-mid uppercase tracking-[0.18em] mt-0.5">
        for hair
      </span>
    </div>
  </Link>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Top benefit bar ──────────────────────────── */}
      <div className="bg-gray-dark text-white text-xs text-center py-2 px-4 font-sora tracking-wide">
        <span className="hidden sm:inline">
          Envio para todo o Brasil &nbsp;·&nbsp; Distribuidor Oficial &nbsp;·&nbsp; Atendimento de seg. a sáb.
        </span>
        <span className="sm:hidden">
          Envio para todo o Brasil · Distribuidor Oficial
        </span>
      </div>

      {/* ── Main header ──────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-gray-mid hover:text-[#E91E8C] transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right slot */}
            <div className="flex items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-pink-sm hover:shadow-pink-md"
              >
                <WhatsAppIcon size={16} />
                Falar no WhatsApp
              </a>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden p-2 -mr-1 text-gray-dark hover:text-[#E91E8C] transition-colors rounded-lg"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile drawer ──────────────────────────── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 pt-3">
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-medium text-gray-dark hover:text-[#E91E8C] transition-colors py-2.5 border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-[#E91E8C] text-white text-sm font-semibold px-5 py-3.5 rounded-full"
              >
                <WhatsAppIcon size={17} />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
