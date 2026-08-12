import { createFileRoute } from "@tanstack/react-router";
import { recursos } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { ResourceCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";

const titulo = "Materiais gratuitos sobre licitações | Licita Comigo";
const descricao =
  "Checklist de documentos, guia da primeira licitação e os erros que mais desclassificam propostas. Materiais gratuitos em produção.";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Recursos,
});

function Recursos() {
  return (
    <>
      <PageHero
        eyebrow="Recursos gratuitos"
        titulo="Material prático, sem contrapartida escondida"
        descricao="Os materiais estão em produção. Deixe seu contato e você recebe cada um assim que for liberado — o link de download será enviado por e-mail. [LINK DE DOWNLOAD PENDENTE]"
      />

      <Section eyebrow="Biblioteca" titulo="O que está a caminho">
        <div className="grid gap-6 md:grid-cols-3">
          {recursos.map((r) => (
            <ResourceCard key={r.slug} titulo={r.titulo} texto={r.texto} formato={r.formato} />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Receber" titulo="Entrar na lista dos materiais">
        <div className="max-w-2xl">
          <LeadForm
            origem="recursos"
            titulo="Quero receber os materiais"
            descricao="Sem envio diário e sem venda disfarçada: você recebe o material e avisos de novos conteúdos."
            mostrarMensagem={false}
            botao="Quero receber"
          />
        </div>
      </Section>
    </>
  );
}
