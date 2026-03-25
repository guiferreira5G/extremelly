import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center px-4 text-center">
      {/* Logo mark */}
      <div className="w-16 h-16 rounded-full bg-[#E91E8C] flex items-center justify-center mb-8">
        <span className="text-white font-bold text-lg">ee</span>
      </div>

      <p className="text-sm font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
        Página não encontrada
      </p>

      <h1 className="text-5xl font-bold text-gray-dark mb-4">404</h1>

      <p className="text-gray-mid max-w-md leading-relaxed mb-10">
        Essa página não existe ou foi movida. Mas a gente está aqui para
        ajudar — explore nossos produtos ou fale direto com nossa equipe.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#E91E8C] hover:bg-[#c91278] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
        >
          Voltar ao início
        </Link>
        <a
          href="https://wa.me/5542999135813?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border-2 border-[#E91E8C] text-[#E91E8C] hover:bg-pink-pale font-semibold px-7 py-3.5 rounded-full transition-colors"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
