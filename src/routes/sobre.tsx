import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { trajetoria, site } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";

const titulo = "Sobre Artur Moura dos Reis — Licita Comigo";
const descricao =
  "Advogado OAB-SP 356.893, pós-graduado em Direito Público e com 15+ anos em licitações e contratos públicos: de pregoeiro a Diretor de Licitação e Contratos.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        titulo="Quem entende licitação por dentro escreve edital, julga proposta e fiscaliza contrato."
        descricao={`${site.responsavel}, advogado (${site.oab}), pós-graduado em Direito Público e criador do Licita Comigo. Quinze anos de atuação em compras públicas, sempre do lado de quem decide.`}
      />

      <Section eyebrow="Bio em três atos" titulo="Da operação à estratégia">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow text-gold">Ato 1 · Operacional</p>
            <h3 className="mt-3 text-lg font-bold text-card-foreground">A sessão pública</h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Comecei conduzindo pregões como pregoeiro municipal. Foi ali que vi, sessão após sessão,
              boas empresas saírem da disputa por documento vencido, planilha inconsistente ou leitura
              apressada do edital.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow text-gold">Ato 2 · Tático</p>
            <h3 className="mt-3 text-lg font-bold text-card-foreground">O processo</h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Como analista, chefe de setor e presidente de comissão, passei a instruir processos,
              escrever e revisar editais, julgar habilitação e responder impugnações e recursos. A
              visão deixou de ser da sessão e passou a ser do processo inteiro.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow text-gold">Ato 3 · Estratégico</p>
            <h3 className="mt-3 text-lg font-bold text-card-foreground">A gestão</h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Na direção de Licitação e Contratos e depois na Gestão de Contratos, o foco virou
              planejamento das contratações, adequação à Lei 14.133/2021 e execução contratual —
              onde o contrato realmente se ganha ou se perde.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="sand" eyebrow="Trajetória" titulo="Linha do tempo">
        <ol className="space-y-4">
          {trajetoria.map((etapa) => (
            <li
              key={etapa.cargo}
              className="rounded-lg border border-border bg-card p-6 md:flex md:gap-8"
            >
              <p className="text-xs font-semibold tracking-wide text-gold uppercase md:w-40 md:shrink-0">
                {etapa.periodo}
              </p>
              <div className="mt-2 md:mt-0">
                <h3 className="text-base font-bold text-card-foreground">{etapa.cargo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Formação e diferencial" titulo="Por que a visão de insider importa">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base font-bold text-card-foreground">Formação</h3>
            <ul className="mt-4 space-y-2 text-sm text-graphite">
              <li>Bacharel em Direito — advogado inscrito na {site.oab}</li>
              <li>Pós-graduação em Direito Público</li>
              <li>Atuação continuada em licitações e contratos administrativos</li>
              <li>Criador do Licita Comigo, projeto de conteúdo sobre compras públicas</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gold/40 bg-card p-6">
            <h3 className="text-base font-bold text-card-foreground">Diferencial</h3>
            <p className="mt-4 text-sm leading-relaxed text-graphite">
              Quem só assessora licitante conhece metade do jogo. Eu escrevi edital, julguei proposta,
              respondi recurso e fiscalizei contrato. Sei qual documento a comissão realmente confere,
              o que faz um pregoeiro abrir diligência e o que leva à desclassificação. Essa leitura de
              dentro é o que transformo em estratégia para quem vende — e em segurança para quem
              compra.
            </p>
          </div>
        </div>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          Falar com o Artur <ArrowRight className="size-4" />
        </Link>
      </Section>
    </>
  );
}
