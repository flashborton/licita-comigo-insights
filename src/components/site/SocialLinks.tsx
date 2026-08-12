import { Instagram, Linkedin, Youtube, Music2 } from "lucide-react";
import { site } from "@/lib/site";

const redes = [
  { label: "Instagram", href: site.instagram, Icon: Instagram },
  { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
  { label: "YouTube", href: site.youtube, Icon: Youtube },
  { label: "TikTok", href: site.tiktok, Icon: Music2 },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {redes.map(({ label, href, Icon }) => {
        const placeholder = href.startsWith("[");
        return (
          <li key={label}>
            {placeholder ? (
              <span
                title={`${label}: ${href}`}
                className="flex size-9 items-center justify-center rounded-md border border-current/25 opacity-60"
                aria-label={`${label} — link pendente`}
              >
                <Icon className="size-4" />
              </span>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-md border border-current/25 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
