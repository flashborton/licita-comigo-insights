import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { portfolio } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";

const titulo = "Portfólio e atuação | Licita Comigo";
const descricao =
  "Palestras, treinamentos e experiência institucional em licitações e contratos públicos: CREF4/SP, SEADESP, CREF-PR e CREF-MS, Arnold South America 2023.";

const metricas = [
  { valor: "15+", rotulo: "anos em licitações e contratos públicos" },
  { valor: "6", rotulo: "anos de direção de licitações e gestão contratual" },
  { valor: "Desde 2015", rotulo: "consultoria para empresas e órgãos" },
  { valor: "Desde 2023", rotulo: "treinamentos sobre a Lei 14.133/2021" },
];

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
        titulo="Atuação verificável, sem cliente inventado"
        descricao="Aqui estão palestras, treinamentos e experiência institucional. Nomes de clientes privados não são divulgados por confidencialidade."
      />

      <div className="border-b border-border bg-sand">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m) => (
            <div key={m.rotulo}>
              <p className="font-display text-2xl font-bold text-navy">{m.valor}</p>
              <p className="mt-1 text-sm text-graphite">{m.rotulo}</p>
            </div>
          ))}
        </div>
      </div>

      <Section eyebrow="Experiência institucional" titulo="Onde a prática foi construída">
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.titulo} className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">{item.periodo}</p>
              <h3 className="mt-3 text-base font-bold text-card-foreground">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{item.texto}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Palestras" titulo="Eventos e apresentações">
        <article className="max-w-3xl rounded-lg border border-border bg-card p-6">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">2023</p>
          <h3 className="mt-3 text-lg font-bold text-card-foreground">Arnold South America</h3>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Palestra sobre a Nova Lei de Licitações e o planejamento de compras aplicado a
            secretarias de esportes, com foco em como estruturar contratações de forma juridicamente
            segura e operacionalmente viável.
          </p>
        </article>
      </Section>

      <Section eyebrow="Treinamentos" titulo="Capacitações realizadas">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              p: "Desde 2024",
              t: "SEADESP",
              d: "Capacitações continuadas em licitações e contratos administrativos.",
            },
            {
              p: "2023",
              t: "CREF-PR e CREF-MS",
              d: "Treinamentos sobre a Lei 14.133/2021 e sua aplicação prática nos conselhos.",
            },
            {
              p: "Programa recorrente",
              t: "Fiscais e gestores de contrato",
              d: "Capacitação de equipes responsáveis por fiscalização e gestão contratual.",
            },
          ].map((item) => (
            <article key={item.t} className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">{item.p}</p>
              <h3 className="mt-3 text-base font-bold text-card-foreground">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{item.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Consultoria" titulo="Empresas e órgãos desde 2015">
        <p className="max-w-2xl text-navy-foreground/80">
          Atendimento a empresas licitantes e a órgãos públicos em análise de editais, elaboração de
          peças, estruturação de processos de contratação e gestão contratual. Por confidencialidade,
          nomes e logotipos de clientes não são divulgados.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/mentoria"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold/90"
          >
            Quero mentoria <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold hover:border-gold hover:text-gold"
          >
            Solicitar treinamento
          </Link>
        </div>
      </Section>
    </>
  );
}
