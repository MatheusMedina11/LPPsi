import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: `Atendimento psicológico com foco em desenvolvimento emocional, ${siteConfig.attendance.toLowerCase()} em ${siteConfig.location}. Agende sua sessão com ${siteConfig.name}.`,
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
