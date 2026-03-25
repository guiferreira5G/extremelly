import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Extremelly For Hair",
  description:
    "Tire suas dúvidas sobre frete, prazos, produtos, trocas e condições especiais para salões. Extremelly Cosmetics — Guarapuava/PR.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-off-white pt-16 pb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold text-[#E91E8C] uppercase tracking-widest mb-3">
              Tire suas dúvidas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">
              Perguntas Frequentes
            </h1>
            <p className="mt-5 text-gray-mid">
              Não encontrou o que procurava? Nossa equipe responde pelo WhatsApp em minutos.
            </p>
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
