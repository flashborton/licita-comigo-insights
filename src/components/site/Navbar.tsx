import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setAberto(false)}>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Licita<span className="text-gold">Comigo</span>
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            Licitações e contratos públicos
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-2.5 py-2 text-sm text-graphite transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="bg-navy text-navy-foreground hover:bg-navy/90">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setAberto(false)}
                className="border-b border-border/60 py-3 text-sm text-graphite last:border-0"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-3 mb-2 rounded-md bg-navy px-4 py-2.5 text-center text-sm font-medium text-navy-foreground"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
