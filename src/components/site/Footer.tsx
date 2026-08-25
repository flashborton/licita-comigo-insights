import { Link } from "@tanstack/react-router";
import { footerLinks, site, temGrupoWhatsApp, waLink } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">
            Licita<span className="text-gold">Comigo</span>
          </p>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-navy-foreground/85">
            {site.linhaMarca}
          </p>
          <p className="mt-2 max-w-xs text-base text-gold">{site.mantra}</p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-base">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-foreground/85 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacidade" className="text-navy-foreground/85 hover:text-gold">
                Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-3 text-base text-navy-foreground/85">
            <li>
              <a
                href={waLink("geral")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                WhatsApp {site.whatsappExibicao}
              </a>
            </li>
            <li>E-mail em breve</li>
            <li>
              {temGrupoWhatsApp ? (
                <a
                  href={site.whatsappGrupo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Grupo no WhatsApp
                </a>
              ) : (
                <span className="text-navy-foreground/60">Grupo no WhatsApp — em breve</span>
              )}
            </li>
            <li>Redes: {site.arroba}</li>
          </ul>
          <div className="mt-6">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Solicitar proposta
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-navy-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Consultoria e capacitação em contratações
            públicas. Conteúdo informativo, não substitui análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
