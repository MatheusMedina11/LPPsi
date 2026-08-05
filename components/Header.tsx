import Link from "next/link";
import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

const links = [
  { href: "#para-voce", label: "Para você" },
  { href: "#diferenciais", label: "Por que a TCC" },
  { href: "#servicos", label: "Atendimentos" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#top" className="leading-tight">
          <span className="block font-serif text-lg text-brand-900">
            {siteConfig.name}
          </span>
          <span className="block text-[11px] uppercase tracking-widest text-brand-500">
            {siteConfig.title}
          </span>
        </Link>

        <nav className="hidden gap-7 text-sm text-brand-700 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-brand-800"
        >
          Conversar no WhatsApp
        </a>
      </div>
    </header>
  );
}
