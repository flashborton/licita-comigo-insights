import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { servicos } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";

const titulo = "Serviços em licitações e contratos públicos | Licita Comigo";
const descricao =
  "Consultoria para empresas licitantes, impugnações e recursos, gestão de contratos e apoio técnico à Administração Pública sob a Lei 14.133/2021.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        titulo="Apoio técnico em cada etapa da contratação pública"
        descricao="Da decisão de participar até o encerramento do contrato. Para empresas que vendem ao governo e para órgãos que precisam contratar com segurança."
      />

      <Section>
        <div className="space-y-8">
          {servicos.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 rounded-lg border border-border bg-card p-6 md:p-8"
            >
              <div className="md:flex md:items-start md:gap-10">
                <div className="md:w-2/5">
                  <h2 className="text-xl font-bold text-card-foreground">{s.titulo}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{s.resumo}</p>
                  <Link
                    to="/contato"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold"
                  >
                    Solicitar proposta <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="mt-6 md:mt-0 md:flex-1">
                  <p className="eyebrow">O que inclui</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.itens.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-graphite">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold">Não sabe qual frente é a sua?</h2>
            <p className="mt-3 text-navy-foreground/80">
              Descreva o cenário em poucas linhas. Se o seu caso não for para mim, eu digo isso
              antes de qualquer proposta.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Falar com o Artur <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
