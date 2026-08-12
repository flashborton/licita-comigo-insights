import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            Licita<span className="text-gold">Comigo</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-navy-foreground/75">
            {site.responsavel} — advogado, {site.oab}. Licitações e contratos públicos com quem já
            atuou dos dois lados do processo.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-foreground/80 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>
              WhatsApp:{" "}
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hover:text-gold">
                {site.whatsapp}
              </a>
            </li>
            <li>E-mail: {site.email}</li>
            <li>Grupo de WhatsApp: {site.whatsappGrupo}</li>
            <li>Redes: {site.arroba}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Conteúdo informativo, não constitui consulta
            jurídica.
          </p>
          <Link to="/privacidade" className="hover:text-gold">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
