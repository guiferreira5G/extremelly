import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { categorias } from "@/lib/produtos";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos | Extremelly For Hair — Cosméticos Capilares Profissionais",
  description:
    "Explore toda a linha de cosméticos capilares profissionais da Extremelly: anti-frizz, hidratação, reconstrução, kits completos e linha masculina. Distribuidor oficial — preço de fábrica.",
};

const destaque = {
  nome: "Xnano Caviar",
  descricao: "Nosso carro-chefe. Alisamento profissional com brilho intenso e tecnologia de microesferas.",
  wa: "https://wa.me/5542999135813?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Xnano%20Caviar.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
};

export default function ProdutosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-off-white pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark leading-tight">
              Encontre o produto <span className="text-[#E91E8C]">certo para você</span>
            </h1>
            <p className="mt-5 text-gray-mid text-lg max-w-2xl mx-auto">
              Cosméticos profissionais direto da fábrica. Selecione sua categoria ou
              fale com nossa equipe para uma indicação personalizada.
            </p>
          </div>
        </section>

        {/* Produto destaque */}
        <section className="bg-white border-y border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-pink-50 to-white rounded-3xl p-8 border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1A3A8F]/10 flex items-center justify-center flex-shrink-0">
                  <Star size={24} className="text-[#1A3A8F]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-0.5">
                    Carro-chefe
                  </p>
                  <p className="text-xl font-bold text-gray-dark">{destaque.nome}</p>
                  <p className="text-sm text-gray-mid mt-0.5">{destaque.descricao}</p>
                </div>
              </div>
              <a
                href={destaque.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
              >
                Quero esse produto
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Categorias grid */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-dark mb-10">
              Categorias
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorias.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produtos/${cat.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#E91E8C]/30 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300"
                >
                  {/* Color header */}
                  <div
                    className={`h-36 bg-gradient-to-br ${cat.gradiente} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center opacity-20"
                      style={{ backgroundColor: cat.cor }}
                    />
                    {/* Product count badge */}
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-dark">
                      {cat.produtos.length} produtos
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-dark text-base leading-tight group-hover:text-[#E91E8C] transition-colors">
                      {cat.nome}
                    </h3>
                    <p className="text-sm text-gray-mid mt-1.5 leading-relaxed">
                      {cat.tagline}
                    </p>

                    {/* Product list */}
                    <ul className="mt-4 space-y-1">
                      {cat.produtos.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-gray-mid">
                          <span className="w-1 h-1 rounded-full bg-[#E91E8C]" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#E91E8C]">
                      <span>Ver categoria</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-lg font-bold text-gray-dark">
              Não sabe qual produto é certo para o seu cabelo?
            </p>
            <p className="text-gray-mid mt-2 mb-8">
              Nossa equipe faz a indicação certa para você — sem bot, sem formulário complicado.
            </p>
            <a
              href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Estou%20vendo%20os%20produtos%20e%20preciso%20de%20uma%20indica%C3%A7%C3%A3o%20para%20o%20meu%20tipo%20de%20cabelo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-pink-md"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
