import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-brand-600">
        <p>
          {siteConfig.name} · {siteConfig.crp}
        </p>
        <p className="mt-1">
          Atendimento online e presencial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
