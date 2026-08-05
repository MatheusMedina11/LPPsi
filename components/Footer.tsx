import Link from "next/link";
import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#para-voce", label: "Para você" },
  { href: "#diferenciais", label: "Por que a TCC" },
  { href: "#servicos", label: "Atendimentos" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#sobre", label: "Sobre" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-brand-900">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-brand-500">
              {siteConfig.title} · {siteConfig.crp}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-600">
              Construindo uma vida mais leve e com sentido.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-brand-400">
              Navegação
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-sm text-brand-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-brand-400">
              Atendimento
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-600">
              <li>{siteConfig.location}</li>
              <li>{siteConfig.attendance}</li>
              <li>Segunda a sexta, com horários flexíveis</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-brand-600 transition-all duration-200 hover:scale-105 hover:border-brand-300 hover:text-brand-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.46 1.29 4.9L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.15.82.84-3.07-.19-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.5 3.67-8.17 8.18-8.17 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.67 8.24-8.12 8.24Zm4.48-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.37 1 2.53c.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-brand-600 transition-all duration-200 hover:scale-105 hover:border-brand-300 hover:text-brand-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-sand-200 pt-8 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.crp}
          </p>
          <p>
            Este site tem caráter informativo e não substitui uma consulta
            profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
