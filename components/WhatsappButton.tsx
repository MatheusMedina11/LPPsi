import { buildWhatsappLink } from "@/lib/site-config";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:shadow-md",
  secondary:
    "border border-brand-300 text-brand-800 hover:bg-brand-100 hover:shadow-sm",
  light:
    "bg-white text-brand-800 shadow-sm hover:bg-sand-100 hover:shadow-md",
};

export default function WhatsappButton({
  children,
  message,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:scale-[1.03] ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
