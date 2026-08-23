import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  artigos,
  capacitacaoFormatos,
  depoimentosAnonimizados,
  formatosInvestimento,
  materiaisGratuitos,
  metodo,
  microcopyProposta,
  numerosAtuacao,
  problemaSolucao,
  publicos,
  site,
  solucoes,
  waLink,
} from "@/lib/site";
import { Section } from "@/components/site/Section";
import {
  ArticleCard,
  InvestmentCard,
  MetricStrip,
  ResourceCard,
  SolutionCard,
  TestimonialCard,
} from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";
import { SocialLinks } from "@/components/site/SocialLinks";

const titulo = "Licita Comigo — inteligência aplicada em licitações";
const descricao =
  "Consultoria, capacitação e plataforma em contratações públicas. Método de quem já operou do lado de dentro da Administração Pública. Lei 14.133/2021.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow">{site.mantra}</p>
          <h1 className="font-display mt-6 max-w-4xl text-[2.5rem] leading-[1.1] font-bold md:text-[3rem]">
            Contratações públicas conduzidas com método, não com tentativa e erro.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/85">
            {site.linhaMarca} {site.fraseMae} Atuamos com empresas licitantes e com órgãos públicos
            na aplicação prática da Lei 14.133/2021.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Ver soluções <ArrowRight className="size-4" />
            </Link>
            <a
              href={waLink("geral")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Section tone="navy" className="border-t border-white/10" eyebrow="Credibilidade">
        <MetricStrip itens={numerosAtuacao} />
      </Section>

      <Section
        eyebrow="Para quem é"
        titulo="Três cenários, abordagens diferentes"
        descricao="O caminho de quem nunca licitou não é o mesmo de quem já disputa e perde por detalhe formal — nem de quem está do lado da Administração."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {publicos.map((p) => (
            <article key={p.titulo} className="rounded-lg border border-border bg-card p-7">
              <h3 className="text-xl font-bold text-card-foreground">{p.titulo}</h3>
              <p className="mt-4 text-base leading-relaxed text-graphite">{p.texto}</p>
              <p className="mt-4 text-base leading-relaxed text-graphite">
                <span className="font-semibold text-foreground">O que entregamos:</span>{" "}
                {p.entrega}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Problema e solução" titulo="O risco raramente está no preço">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow text-destructive">O que costuma acontecer</p>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-graphite">
              {problemaSolucao.problemas.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-gold/40 bg-card p-7">
            <p className="eyebrow text-gold">Como a Licita Comigo atua</p>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-graphite">
              {problemaSolucao.solucoes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-graphite">
          {problemaSolucao.ressalva}
        </p>
      </Section>

      <Section eyebrow="Soluções" titulo="Frentes de atuação">
        <div className="grid gap-6 md:grid-cols-2">
          {solucoes.slice(0, 4).map((s) => (
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
        <Link
          to="/solucoes"
          className="mt-10 inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
        >
          Ver todas as soluções <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section tone="navy" eyebrow="Plataforma · em breve">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[2rem] leading-tight font-bold md:text-[2.25rem]">
              Plataforma de apoio ao ciclo de contratações, com humano no loop
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-foreground/85">
              Inteligência artificial aplicada ao planejamento, à análise de editais e à gestão
              contratual — com revisão humana em cada etapa crítica. Lista de interesse aberta.
            </p>
          </div>
          <Link
            to="/plataforma"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Entrar na lista <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section eyebrow="Método" titulo="Como o trabalho é conduzido">
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
        tone="sand"
        eyebrow="Capacitação"
        titulo="Treinamento técnico para equipes"
        descricao="Programas para gestores públicos, agentes de contratação, fiscais de contrato e equipes comerciais."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capacitacaoFormatos.map((f) => (
            <article key={f.titulo} className="rounded-lg border border-border bg-card p-7">
              <h3 className="text-lg font-bold text-card-foreground">{f.titulo}</h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">{f.texto}</p>
            </article>
          ))}
        </div>
        <Link
          to="/capacitacao"
          className="mt-10 inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
        >
          Ver programas de capacitação <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section eyebrow="Prova social" titulo="Relatos anonimizados">
        <div className="grid gap-6 md:grid-cols-3">
          {depoimentosAnonimizados.map((d) => (
            <TestimonialCard key={d.texto} {...d} />
          ))}
        </div>
        <Link
          to="/portfolio"
          className="mt-10 inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
        >
          Ver portfólio completo <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section
        tone="sand"
        eyebrow="Transparência de investimento"
        titulo="Formatos de contratação e investimento"
        descricao={microcopyProposta}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formatosInvestimento.slice(0, 3).map((f) => (
            <InvestmentCard key={f.titulo} {...f} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Biblioteca"
        titulo="Material prático para começar"
        descricao="Materiais em produção. Deixe seu contato e receba assim que forem liberados."
      >
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

      <Section tone="sand" eyebrow="Conteúdo" titulo="Licitação explicada com rigor técnico">
        <div className="grid gap-6 md:grid-cols-3">
          {artigos.map((a) => (
            <ArticleCard key={a.slug} artigo={a} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Canais" titulo="Onde acompanhar a Licita Comigo">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-graphite">
              Conteúdo técnico sobre contratações públicas em {site.arroba}.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
            <p className="mt-6 text-base text-graphite">
              Grupo de WhatsApp: {site.whatsappGrupo}
            </p>
          </div>
          <LeadForm
            origem="home"
            titulo="Falar com a Licita Comigo"
            descricao="Descreva o cenário da sua organização. Retornamos em até 1 dia útil."
            botao="Enviar contato"
          />
        </div>
      </Section>
    </>
  );
}
