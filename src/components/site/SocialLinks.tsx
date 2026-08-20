import { Instagram, Linkedin, Youtube, Music2, MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";

const redes = [
  { nome: "Instagram", href: site.instagram, Icone: Instagram },
  { nome: "TikTok", href: site.tiktok, Icone: Music2 },
  { nome: "YouTube", href: site.youtube, Icone: Youtube },
  { nome: "LinkedIn", href: site.linkedin, Icone: Linkedin },
];

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {redes.map(({ nome, href, Icone }) => (
        <li key={nome}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={nome}
            title={nome}
            className={
              tone === "light"
                ? "inline-flex size-10 items-center justify-center rounded-md border border-white/20 text-navy-foreground transition-colors hover:border-gold hover:text-gold"
                : "inline-flex size-10 items-center justify-center rounded-md border border-border text-graphite transition-colors hover:border-gold hover:text-gold"
            }
          >
            <Icone className="size-5" />
          </a>
        </li>
      ))}
      <li>
        <a
          href={waLink("geral")}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className={
            tone === "light"
              ? "inline-flex size-10 items-center justify-center rounded-md border border-white/20 text-navy-foreground transition-colors hover:border-gold hover:text-gold"
              : "inline-flex size-10 items-center justify-center rounded-md border border-border text-graphite transition-colors hover:border-gold hover:text-gold"
          }
        >
          <MessageCircle className="size-5" />
        </a>
      </li>
    </ul>
  );
}
