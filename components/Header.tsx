import Link from "next/link";
import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-serif text-lg text-brand-800">
          {siteConfig.name}
        </span>

        <nav className="hidden gap-8 text-sm text-brand-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          Agendar no WhatsApp
        </a>
      </div>
    </header>
  );
}
