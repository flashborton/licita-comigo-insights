import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  casesAnonimizados,
  depoimentosAnonimizados,
  experienciaVerificavel,
  numerosAtuacao,
} from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { CaseCard, MetricStrip, TestimonialCard } from "@/components/site/Cards";

const titulo = "Portfólio e experiência em contratações públicas | Licita Comigo";
const descricao =
  "Experiência institucional verificável em licitações e contratos: direção de licitações e contratos, docência, capacitações e palestras sobre a Lei 14.133/2021.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        titulo="Experiência verificável, sem cliente inventado"
        descricao="Reunimos aqui atuação institucional, capacitações e palestras. Por confidencialidade, nomes de contratantes privados não são divulgados."
      />

      <Section tone="navy" eyebrow="Números de atuação">
        <MetricStrip itens={numerosAtuacao} />
      </Section>

      <Section eyebrow="Experiência institucional" titulo="Onde a prática foi construída">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experienciaVerificavel.map((item) => (
            <article key={item.titulo} className="rounded-lg border border-border bg-card p-7">
              <p className="eyebrow">{item.periodo}</p>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{item.titulo}</h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">{item.texto}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="sand"
        eyebrow="Casos anonimizados"
        titulo="Intervenções e resultados observáveis"
        descricao="Casos reais descritos por setor, porte e UF. Nenhum nome de organização é divulgado."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {casesAnonimizados.map((c) => (
            <CaseCard key={c.desafio} {...c} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Prova social" titulo="Relatos anonimizados">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depoimentosAnonimizados.map((d) => (
            <TestimonialCard key={d.texto} {...d} />
          ))}
        </div>
        <Link
          to="/contato"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          Falar com a Licita Comigo <ArrowRight className="size-4" />
        </Link>
      </Section>
    </>
  );
}
