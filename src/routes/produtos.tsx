import { createFileRoute } from "@tanstack/react-router";
import { produtos } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { ProductCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";

const titulo = "Cursos e e-books sobre licitações | Licita Comigo";
const descricao =
  "Curso em vídeo e e-books sobre licitações e contratos públicos, com método aplicável a empresas de qualquer porte. Lançamentos em breve.";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        titulo="Cursos e materiais para estudar no seu ritmo"
        descricao="Formações em produção. Os links de compra serão publicados aqui no lançamento."
      />

      <Section eyebrow="Cursos e e-books" titulo="Em breve">
        <div className="grid gap-6 md:grid-cols-2">
          {produtos.map((p) => (
            <ProductCard key={p.titulo} {...p} />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Lista de espera" titulo="Avise-me no lançamento">
        <div className="max-w-2xl">
          <LeadForm
            origem="produtos"
            titulo="Entrar na lista de espera"
            descricao="Você recebe o aviso de abertura e as condições de lançamento."
            mostrarMensagem={false}
            botao="Entrar na lista"
          />
        </div>
      </Section>
    </>
  );
}
