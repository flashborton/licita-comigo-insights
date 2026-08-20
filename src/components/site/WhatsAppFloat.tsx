import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("geral")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-navy px-5 py-3.5 text-base font-medium text-navy-foreground shadow-lg transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5 text-gold" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
