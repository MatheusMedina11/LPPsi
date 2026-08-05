import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const description = `Psicóloga em ${siteConfig.location} com Terapia Cognitivo-Comportamental. Atendimento online e presencial para ansiedade, autoestima e desenvolvimento emocional. Agende sua sessão.`;

export const metadata: Metadata = {
  title: `${siteConfig.name} | Psicóloga TCC em ${siteConfig.location}`,
  description,
  keywords: [
    "psicóloga",
    "terapia cognitivo-comportamental",
    "TCC",
    siteConfig.location,
    "terapia online",
    "ansiedade",
    "autoestima",
  ],
  openGraph: {
    title: `${siteConfig.name} | Psicóloga TCC em ${siteConfig.location}`,
    description,
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: siteConfig.name,
  description,
  areaServed: siteConfig.location,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location,
    addressRegion: "RS",
    addressCountry: "BR",
  },
  sameAs: [siteConfig.instagram],
  knowsAbout: [
    "Terapia Cognitivo-Comportamental",
    "Ansiedade",
    "Autoestima",
    "Desenvolvimento emocional",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-sand-50 text-brand-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
