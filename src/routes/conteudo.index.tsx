import { createFileRoute } from "@tanstack/react-router";
import { artigos } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { ArticleCard } from "@/components/site/Cards";

const titulo = "Conteúdo sobre licitações e contratos públicos | Licita Comigo";
const descricao =
  "Artigos práticos sobre a Lei 14.133/2021, participação em licitações e gestão de contratos, escritos por quem atuou dentro da Administração Pública.";

export const Route = createFileRoute("/conteudo/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Conteudo,
});

function Conteudo() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdo"
        titulo="Licitação explicada em português claro"
        descricao="Categorias: Nova Lei na prática, participar de licitação e gestão de contratos. Conteúdo informativo, que não substitui análise do caso concreto."
      />
      <Section eyebrow="Artigos" titulo="Publicações recentes">
        <div className="grid gap-6 md:grid-cols-3">
          {artigos.map((a) => (
            <ArticleCard key={a.slug} artigo={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
