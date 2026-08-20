import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, site, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setAberto(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Licita<span className="text-gold">Comigo</span>
          </span>
          <span className="text-[0.8rem] tracking-[0.14em] text-muted-foreground uppercase">
            Inteligência aplicada em licitações
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-2.5 py-2 text-base text-graphite transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild className="bg-navy text-navy-foreground hover:bg-navy/90">
            <Link to="/contato">Solicitar proposta</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy/30 text-foreground hover:bg-secondary"
          >
            <a href={waLink("geral")} target="_blank" rel="noreferrer">
              WhatsApp
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
                className="border-b border-border/60 py-3.5 text-base text-graphite last:border-0"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/mentoria"
              onClick={() => setAberto(false)}
              className="border-t border-border/60 py-3.5 text-base text-graphite"
            >
              Mentoria
            </Link>
            <Link
              to="/contato"
              onClick={() => setAberto(false)}
              className="mt-3 rounded-md bg-navy px-4 py-3 text-center text-base font-medium text-navy-foreground"
            >
              Solicitar proposta
            </Link>
            <a
              href={waLink("geral")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 mb-3 rounded-md border border-navy/30 px-4 py-3 text-center text-base font-medium text-foreground"
            >
              Falar no WhatsApp — {site.whatsappExibicao}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
