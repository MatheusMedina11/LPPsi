import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Marina Alves | Psicóloga Clínica",
  description:
    "Atendimento psicológico individual e para casais, presencial e online. Agende sua primeira sessão com a Dra. Marina Alves.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-sand-50 text-brand-900 antialiased">
        {children}
      </body>
    </html>
  );
}
