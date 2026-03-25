import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Extremelly For Hair | Cosméticos Profissionais em Guarapuava/PR",
  description:
    "Distribuidora oficial de cosméticos capilares profissionais com 13 anos de mercado. Mais de 10 mil salões e clientes atendidos. Envio para todo o Brasil. Compre direto da fábrica.",
  keywords:
    "cosméticos capilares profissionais, shampoo anti-frizz, kit capilar salão, Extremelly Cosmetics, Guarapuava PR, distribuidor cosméticos",
  openGraph: {
    title: "Extremelly For Hair | Referência em Cosméticos Profissionais",
    description:
      "13 anos cuidando do seu cabelo. Distribuidora oficial, preço de fábrica, envio para todo o Brasil.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body className="font-sora bg-off-white antialiased">{children}</body>
    </html>
  );
}
