import { createFileRoute } from "@tanstack/react-router";
import {
  capacitacaoProgramas,
  capacitacaoPublicosComplementares,
  microcopyRetorno,
  waLink,
} from "@/lib/site";
import { SolutionCard } from "@/components/site/Cards";
import { PageHero, Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";

const titulo = "Capacitação e treinamento in company em licitações | Licita Comigo";
const descricao =
  "Treinamentos, palestras e imersões sobre a Lei 14.133/2021 para gestores públicos, agentes de contratação, fiscais de contrato e equipes comerciais.";

export const Route = createFileRoute("/capacitacao")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Capacitacao,
});

function Capacitacao() {
  return (
    <>
      <PageHero
        eyebrow="Capacitação"
        titulo="Treinamento técnico para quem compra e para quem vende"
        descricao="Programas construídos sobre a rotina real da organização, com aplicação prática da Lei 14.133/2021 e dos normativos correlatos."
      >
        <a
          href={waLink("capacitacao")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
        >
          Solicitar programa
        </a>
      </PageHero>

      <Section eyebrow="Programas" titulo="Programas de capacitação da Licita Comigo">
        <div className="grid gap-6 md:grid-cols-2">
          {capacitacaoProgramas.map((p) => (
            <SolutionCard
              key={p.titulo}
              titulo={p.titulo}
              resumo="Programa conduzido pela nossa metodologia, com aplicação prática da Lei 14.133/2021 na rotina da organização."
              paraQuem={p.paraQuem}
              itens={p.itens}
              href="/contato"
              hrefLabel="Solicitar programa"
            />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Públicos complementares" titulo="Também atendemos">
        <div className="grid gap-6 md:grid-cols-2">
          {capacitacaoPublicosComplementares.map((p) => (
            <article key={p.titulo} className="rounded-lg border border-border bg-card p-7">
              <h3 className="text-lg font-bold text-card-foreground">{p.titulo}</h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">{p.texto}</p>
            </article>
          ))}
        </div>
      </Section>


      <Section eyebrow="Contato" titulo="Solicitar orçamento de capacitação" descricao={microcopyRetorno}>
        <div className="max-w-2xl">
          <LeadForm
            origem="capacitacao"
            titulo="Quero um programa para a minha equipe"
            descricao="Informe o público, a carga horária pretendida e o número aproximado de participantes."
            botao="Solicitar orçamento"
          />
        </div>
      </Section>
    </>
  );
}
