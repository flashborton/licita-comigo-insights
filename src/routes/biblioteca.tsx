import { createFileRoute } from "@tanstack/react-router";
import { artigos, materiaisGratuitos, produtos } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { ArticleCard, ProductCard, ResourceCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";

const titulo = "Biblioteca: materiais, cursos e conteúdo | Licita Comigo";
const descricao =
  "Materiais gratuitos sobre licitações, cursos e e-books em produção e conteúdo técnico sobre a Lei 14.133/2021.";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  return (
    <>
      <PageHero
        eyebrow="Biblioteca"
        titulo="Material técnico para estudar e aplicar"
        descricao="Materiais gratuitos, formações e conteúdo. Os materiais estão em produção — deixe seu contato e receba cada liberação. [LINK DE DOWNLOAD PENDENTE]"
      />

      <Section eyebrow="Materiais gratuitos" titulo="Downloads em produção">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {materiaisGratuitos.map((m) => (
            <ResourceCard
              key={m.slug}
              titulo={m.titulo}
              beneficio={m.beneficio}
              formato={m.formato}
            />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Cursos e e-books" titulo="Formações em produção">
        <div className="grid gap-6 md:grid-cols-2">
          {produtos.map((p) => (
            <ProductCard key={p.titulo} {...p} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Conteúdo" titulo="Artigos técnicos">
        <div className="grid gap-6 md:grid-cols-3">
          {artigos.map((a) => (
            <ArticleCard key={a.slug} artigo={a} />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Receber" titulo="Entrar na lista dos materiais">
        <div className="max-w-2xl">
          <LeadForm
            origem="biblioteca"
            titulo="Quero receber os materiais"
            descricao="Você recebe cada material assim que for liberado, além dos avisos de novos conteúdos."
            mostrarMensagem={false}
            botao="Quero receber"
          />
        </div>
      </Section>
    </>
  );
}
