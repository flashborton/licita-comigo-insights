import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { SocialLinks } from "@/components/site/SocialLinks";

const titulo = "Contato | Licita Comigo";
const descricao =
  "Fale com Artur Moura dos Reis sobre consultoria, mentoria, treinamentos e palestras em licitações e contratos públicos.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        titulo="Conte o seu cenário em poucas linhas"
        descricao="Consultoria, mentoria, treinamento in company ou palestra. O retorno vem com um primeiro direcionamento técnico."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <LeadForm origem="contato" botao="Enviar mensagem" />

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-base font-bold text-card-foreground">Canais diretos</h2>
              <ul className="mt-4 space-y-3 text-sm text-graphite">
                <li>
                  WhatsApp:{" "}
                  <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hover:text-gold">
                    {site.whatsapp}
                  </a>
                </li>
                <li>E-mail: {site.email}</li>
                <li>Grupo de WhatsApp: {site.whatsappGrupo}</li>
                <li>Redes sociais: {site.arroba}</li>
              </ul>
              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-sand p-6 text-sm leading-relaxed text-graphite">
              <p className="font-semibold text-foreground">Atendimento</p>
              <p className="mt-2">
                Atendimento remoto para todo o Brasil e presencial conforme agenda. Não divulgamos
                endereço residencial.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
