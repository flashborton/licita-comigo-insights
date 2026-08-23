import { createFileRoute } from "@tanstack/react-router";
import { plataformaAviso, plataformaEmpresa, plataformaOrgao } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { Check } from "lucide-react";

const titulo = "Plataforma Licita Comigo — em desenvolvimento";
const descricao =
  "Software com inteligência artificial e humano no loop para apoiar o ciclo de contratações públicas. Lista de interesse aberta.";

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Plataforma,
});

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-base leading-relaxed text-graphite">
      {itens.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check className="mt-1 size-4 shrink-0 text-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Plataforma() {
  return (
    <>
      <PageHero
        eyebrow="Plataforma · em breve"
        titulo="Inteligência aplicada ao ciclo de contratações públicas"
        descricao="Estamos desenvolvendo uma plataforma de apoio à análise, com inteligência artificial e revisão humana em cada etapa crítica."
      />

      <Section eyebrow="Escopo previsto" titulo="Dois módulos, dois lados do processo">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-7">
            <h3 className="text-xl font-bold text-card-foreground">Para órgãos públicos</h3>
            <Lista itens={plataformaOrgao} />
          </article>
          <article className="rounded-lg border border-border bg-card p-7">
            <h3 className="text-xl font-bold text-card-foreground">Para empresas licitantes</h3>
            <Lista itens={plataformaEmpresa} />
          </article>
        </div>
        <p className="mt-8 max-w-3xl rounded-md bg-sand px-5 py-4 text-base leading-relaxed text-graphite">
          {plataformaAviso}
        </p>
      </Section>

      <Section tone="sand" eyebrow="Lista de interesse" titulo="Entrar na lista de espera">
        <div className="max-w-2xl">
          <LeadForm
            origem="plataforma"
            titulo="Quero acompanhar o lançamento"
            descricao="Você recebe as novidades do desenvolvimento e a abertura dos primeiros acessos."
            mostrarMensagem={false}
            botao="Entrar na lista"
          />
        </div>
      </Section>
    </>
  );
}
