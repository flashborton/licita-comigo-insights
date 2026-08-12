import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  artigos,
  credenciais,
  passos,
  portfolio,
  produtos,
  publicos,
  recursos,
  servicos,
  site,
} from "@/lib/site";
import { Section } from "@/components/site/Section";
import { ArticleCard, ProductCard, ResourceCard, ServiceCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";
import { SocialLinks } from "@/components/site/SocialLinks";

const titulo = "Licita Comigo — licitações e contratos públicos com visão de insider";
const descricao =
  "Artur Moura dos Reis, advogado (OAB-SP 356.893) com 15+ anos em licitações e contratos públicos. Consultoria, mentoria e treinamento para empresas e órgãos.";

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
          <p className="eyebrow">Simplificando a compra, qualificando a venda</p>
          <h1 className="font-display mt-5 max-w-3xl text-3xl leading-tight font-bold md:text-5xl">
            Licitação deixa de ser sorte quando você entende como o outro lado decide.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
            Passei 15 anos dentro da Administração Pública — como pregoeiro, presidente de comissão e
            diretor de licitações e contratos. Hoje uso essa leitura de dentro para preparar empresas
            que querem vender ao governo e para dar segurança a quem compra.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Sou empresa <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/servicos"
              hash="apoio-a-administracao"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Sou agente público
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-sand">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {credenciais.map((item) => (
            <div key={item.rotulo}>
              <p className="font-display text-lg font-bold text-navy">{item.valor}</p>
              <p className="mt-1 text-sm text-graphite">{item.rotulo}</p>
            </div>
          ))}
        </div>
      </div>

      <Section
        eyebrow="Para quem é"
        titulo="Três cenários, abordagens diferentes"
        descricao="O caminho de quem nunca licitou não é o mesmo de quem já disputa e perde por detalhe — nem de quem está do lado da Administração."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {publicos.map((p) => (
            <article key={p.titulo} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-card-foreground">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{p.texto}</p>
              <Link
                to="/contato"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold"
              >
                {p.cta} <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Problema → solução" titulo="O erro raramente está no preço">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs font-semibold tracking-wide text-destructive uppercase">
              O que costuma acontecer
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-graphite">
              <li>Edital lido pela metade, na véspera da sessão.</li>
              <li>Certidão vencida descoberta no momento da habilitação.</li>
              <li>Planilha de custos que não fecha com o valor global.</li>
              <li>Prazo de recurso perdido por falta de acompanhamento.</li>
              <li>Contrato assinado sem controle de reajuste e prorrogação.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gold/40 bg-card p-6">
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">
              O que fazemos juntos
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-graphite">
              <li>Leitura técnica do edital com mapa de riscos antes de decidir participar.</li>
              <li>Controle de documentação com checklist por certame.</li>
              <li>Revisão de proposta e planilha antes do envio.</li>
              <li>Acompanhamento de sessão, diligências e prazos recursais.</li>
              <li>Gestão do contrato do primeiro dia até o encerramento.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Como funciona" titulo="Um método em quatro etapas">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo) => (
            <li key={passo.numero} className="rounded-lg border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gold">{passo.numero}</span>
              <h3 className="mt-3 text-base font-bold text-card-foreground">{passo.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Mentoria</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Acompanhamento individual para a sua empresa entrar e permanecer nas licitações
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/80">
              Encontros de trabalho sobre casos reais da sua empresa: edital em análise, proposta em
              montagem, contrato em execução. Sem aula genérica.
            </p>
          </div>
          <Link
            to="/mentoria"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Conhecer a mentoria <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Serviços"
        titulo="Frentes de atuação"
        descricao="Empresas licitantes e órgãos públicos, com o mesmo rigor técnico."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {servicos.slice(0, 4).map((s) => (
            <ServiceCard key={s.slug} titulo={s.titulo} resumo={s.resumo} itens={s.itens} />
          ))}
        </div>
      </Section>

      <Section
        tone="sand"
        eyebrow="Trajetória"
        titulo="Experiência real, sem invenção"
        descricao="Nenhum nome de cliente privado é divulgado. O que está aqui é atuação institucional verificável."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.titulo} className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">{item.periodo}</p>
              <h3 className="mt-3 text-base font-bold text-card-foreground">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{item.texto}</p>
            </article>
          ))}
        </div>
        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold"
        >
          Ver portfólio completo <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section
        eyebrow="Recursos gratuitos"
        titulo="Material prático para começar hoje"
        descricao="Materiais em produção. Deixe seu contato e receba assim que forem liberados."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {recursos.map((r) => (
            <ResourceCard key={r.slug} titulo={r.titulo} texto={r.texto} formato={r.formato} />
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="Conteúdo" titulo="Licitação explicada sem juridiquês">
        <div className="grid gap-6 md:grid-cols-3">
          {artigos.map((a) => (
            <ArticleCard key={a.slug} artigo={a} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Produtos" titulo="Cursos e materiais">
        <div className="grid gap-6 md:grid-cols-2">
          {produtos.map((p) => (
            <ProductCard key={p.titulo} {...p} />
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Canais" titulo="Onde acompanhar o Licita Comigo">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-navy-foreground/80">
              Conteúdo diário sobre licitações em {site.arroba}.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
          <div className="rounded-lg border border-white/15 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck className="size-4 text-gold" /> Grupo de WhatsApp
            </p>
            <p className="mt-2 text-sm text-navy-foreground/75">
              Avisos de conteúdo novo e materiais gratuitos: {site.whatsappGrupo}
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Contato" titulo="Vamos conversar sobre o seu caso">
        <div className="max-w-2xl">
          <LeadForm
            origem="home"
            titulo="Formulário rápido"
            descricao="Responda em um minuto. O retorno vem com um primeiro direcionamento, não com discurso de venda."
            mostrarMensagem={false}
            botao="Quero falar com o Artur"
          />
        </div>
      </Section>
    </>
  );
}
