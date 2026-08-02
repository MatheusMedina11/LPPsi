import { buildWhatsappLink } from "@/lib/site-config";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition hover:bg-brand-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.46 1.29 4.9L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.15.82.84-3.07-.19-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.5 3.67-8.17 8.18-8.17 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.67 8.24-8.12 8.24Zm4.48-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.37 1 2.53c.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
