import { createFileRoute } from "@tanstack/react-router";
import {
  solucoes,
  formatosInvestimento,
  microcopyProposta,
  metodo,
  problemaSolucao,
} from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { InvestmentCard, SolutionCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";

const titulo = "Soluções em licitações e contratos públicos | Licita Comigo";
const descricao =
  "Consultoria para empresas e órgãos, pareceres técnicos, mentoria, capacitação e plataforma em desenvolvimento. Método aplicado à Lei 14.133/2021.";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Solucoes,
});

function Solucoes() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        titulo="Frentes de atuação da Licita Comigo"
        descricao="Cada frente parte de um diagnóstico técnico do cenário. O escopo é definido por escrito antes do início do trabalho."
      />

      <Section eyebrow="Portfólio de serviços" titulo="O que a Licita Comigo entrega">
        <div className="grid gap-6 md:grid-cols-2">
          {solucoes.map((s) => (
            <SolutionCard
              key={s.slug}
              titulo={s.titulo}
              resumo={s.resumo}
              paraQuem={s.paraQuem}
              itens={s.itens}
              {...(s.rota ? { href: s.rota as "/mentoria" | "/plataforma" | "/capacitacao" } : {})}
            />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Método" titulo="Como o trabalho é conduzido">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {metodo.map((etapa) => (
            <li key={etapa.numero} className="rounded-lg border border-border bg-card p-7">
              <span className="font-display text-3xl font-bold text-gold">{etapa.numero}</span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{etapa.titulo}</h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Transparência de investimento"
        titulo="Formatos de contratação e investimento"
        descricao={microcopyProposta}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formatosInvestimento.map((f) => (
            <InvestmentCard key={f.titulo} {...f} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-graphite">
          {problemaSolucao.ressalva}
        </p>
      </Section>

      <Section tone="sand" eyebrow="Contato" titulo="Solicitar uma proposta">
        <div className="max-w-2xl">
          <LeadForm
            origem="solucoes"
            titulo="Solicitar proposta"
            descricao="Descreva o cenário da sua organização. Retornamos com um primeiro direcionamento técnico."
            botao="Solicitar proposta"
          />
        </div>
      </Section>
    </>
  );
}
