import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { categorias, getCategoriaBySlug } from "@/lib/produtos";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categorias.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoriaBySlug(slug);
  if (!cat) return { title: "Página não encontrada" };
  return {
    title: `${cat.nome} | Extremelly For Hair`,
    description: cat.descricao,
  };
}

const WA_BASE = "https://wa.me/5542999135813?text=";

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoriaBySlug(slug);
  if (!cat) notFound();

  const outrasCategs = categorias.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs text-gray-mid" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#E91E8C] transition-colors">Início</Link>
              <span>/</span>
              <Link href="/produtos" className="hover:text-[#E91E8C] transition-colors">Produtos</Link>
              <span>/</span>
              <span className="text-gray-dark font-medium">{cat.nome}</span>
            </nav>
          </div>
        </div>

        {/* Hero da categoria */}
        <section className={`bg-gradient-to-br ${cat.gradiente} py-16 md:py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-mid hover:text-gray-dark transition-colors mb-6"
                >
                  <ArrowLeft size={13} />
                  Todos os produtos
                </Link>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark leading-tight">
                  {cat.nome}
                </h1>
                <p
                  className="text-lg font-semibold mt-2"
                  style={{ color: cat.cor }}
                >
                  {cat.tagline}
                </p>
                <p className="mt-5 text-gray-mid leading-relaxed max-w-lg">
                  {cat.descricao}
                </p>

                <a
                  href={`${WA_BASE}${cat.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
                  style={{ backgroundColor: cat.cor }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Pedir esta linha
                </a>
              </div>

              {/* Category visual card */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden relative shadow-2xl border border-white/60">
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cat.cor}10 0%, ${cat.cor}20 100%)` }} />
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: `radial-gradient(${cat.cor} 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: cat.cor }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-dark text-lg">{cat.nome}</p>
                      <p className="text-sm text-gray-mid mt-1">{cat.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {cat.produtos.map((p) => (
                        <span key={p} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border" style={{ color: cat.cor, borderColor: `${cat.cor}30`, backgroundColor: `${cat.cor}08` }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefícios list */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-7">
                  Por que escolher esta linha?
                </h2>
                <ul className="space-y-4">
                  {cat.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: cat.cor }}
                      />
                      <span className="text-gray-dark text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Produtos desta linha */}
              <div>
                <h2 className="text-2xl font-bold text-gray-dark mb-7">
                  Produtos desta linha
                </h2>
                <div className="space-y-4">
                  {cat.produtos.map((p, i) => (
                    <div
                      key={p}
                      className="flex items-center gap-4 bg-off-white rounded-2xl p-4 border border-gray-100"
                    >
                      {/* Product image placeholder */}
                      <div
                        className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: cat.cor + "20" }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={cat.cor} strokeWidth="1.5">
                          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-dark text-sm">{p}</p>
                        <p className="text-xs text-gray-mid mt-0.5">
                          {cat.nome} · Produto {i + 1}
                        </p>
                      </div>
                      <a
                        href={`${WA_BASE}${cat.waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
                        style={{ color: cat.cor, borderColor: cat.cor + "40" }}
                      >
                        Pedir
                      </a>
                    </div>
                  ))}
                </div>

                {/* WA CTA */}
                <div className="mt-6 bg-off-white rounded-2xl p-5 border border-gray-100">
                  <p className="text-sm font-semibold text-gray-dark">
                    Quer saber mais sobre esta linha?
                  </p>
                  <p className="text-xs text-gray-mid mt-1 mb-4">
                    Nossa equipe tira qualquer dúvida e indica o produto ideal para o seu cabelo.
                  </p>
                  <a
                    href={`${WA_BASE}${cat.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E91E8C] hover:bg-[#c91278] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Falar com especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outras categorias */}
        <section className="py-16 bg-off-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-dark">Outras categorias</h2>
              <Link
                href="/produtos"
                className="text-sm font-semibold text-[#E91E8C] hover:text-[#c91278] flex items-center gap-1 transition-colors"
              >
                Ver todas <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {outrasCategs.map((c) => (
                <Link
                  key={c.slug}
                  href={`/produtos/${c.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E91E8C]/30 hover:shadow-lg transition-all"
                >
                  <p className="font-semibold text-gray-dark text-sm group-hover:text-[#E91E8C] transition-colors">
                    {c.nome}
                  </p>
                  <p className="text-xs text-gray-mid mt-1">{c.tagline}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#E91E8C]">
                    Ver linha <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
