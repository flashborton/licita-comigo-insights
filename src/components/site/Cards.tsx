import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileDown, Quote } from "lucide-react";
import type { Artigo } from "@/lib/site";

export function SolutionCard({
  titulo,
  resumo,
  paraQuem,
  itens,
  href,
  hrefLabel = "Ver detalhes",
}: {
  titulo: string;
  resumo: string;
  paraQuem: string;
  itens: string[];
  href?: "/mentoria" | "/plataforma" | "/capacitacao" | "/contato";
  hrefLabel?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <h3 className="text-xl font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-3 text-base leading-relaxed text-graphite">{resumo}</p>
      <p className="mt-4 text-base text-graphite">
        <span className="font-semibold text-foreground">Para quem:</span> {paraQuem}
      </p>
      <ul className="mt-5 space-y-2.5 text-base text-graphite">
        {itens.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check className="mt-1 size-4 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-4 pt-1">
        {href && (
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
          >
            {hrefLabel} <ArrowRight className="size-4" />
          </Link>
        )}
        <Link
          to="/contato"
          className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
        >
          Solicitar proposta <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function InvestmentCard({
  titulo,
  paraQuem,
  inclui,
  investimento,
}: {
  titulo: string;
  paraQuem: string;
  inclui: string[];
  investimento: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <h3 className="text-xl font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-3 text-base text-graphite">
        <span className="font-semibold text-foreground">Para quem:</span> {paraQuem}
      </p>
      <ul className="mt-4 flex-1 space-y-2.5 text-base text-graphite">
        {inclui.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check className="mt-1 size-4 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-md bg-sand px-4 py-3 text-base font-medium text-foreground">
        {investimento}
      </p>
      <Link
        to="/contato"
        className="mt-5 inline-flex w-fit items-center justify-center rounded-md bg-navy px-5 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
      >
        Solicitar proposta
      </Link>
    </article>
  );
}

export function ResourceCard({
  titulo,
  beneficio,
  formato,
  onSelecionar,
}: {
  titulo: string;
  beneficio: string;
  formato: string;
  onSelecionar?: () => void;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <FileDown className="size-6 text-gold" />
      <h3 className="mt-5 text-lg font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-graphite">{beneficio}</p>
      <p className="mt-4 text-base tracking-wide text-muted-foreground">{formato} · gratuito</p>
      {onSelecionar ? (
        <button
          type="button"
          onClick={onSelecionar}
          className="mt-5 inline-flex w-fit items-center justify-center rounded-md bg-navy px-5 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          Receber grátis
        </button>
      ) : (
        <Link
          to="/biblioteca"
          className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
        >
          Receber grátis <ArrowRight className="size-4" />
        </Link>
      )}
    </article>
  );
}

export function ProductCard({
  titulo,
  texto,
  status,
  link,
  tipo,
}: {
  titulo: string;
  texto: string;
  status: string;
  link: string;
  tipo: string;
}) {
  const linkPendente = link.startsWith("[");
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <div className="flex flex-wrap gap-2">
        <span className="w-fit rounded-full bg-sand px-3 py-1 text-base font-semibold text-graphite">
          {tipo}
        </span>
        <span className="w-fit rounded-full border border-gold/50 px-3 py-1 text-base font-semibold text-graphite">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-graphite">{texto}</p>
      {linkPendente ? (
        <p className="mt-5 rounded-md bg-sand px-4 py-3 text-base text-graphite">
          Link de acesso: {link}
        </p>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center justify-center rounded-md bg-navy px-5 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          Acessar
        </a>
      )}
    </article>
  );
}

export function ArticleCard({ artigo }: { artigo: Artigo }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <p className="eyebrow">{artigo.categoria}</p>
      <h3 className="mt-4 text-lg font-bold text-card-foreground">{artigo.titulo}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-graphite">{artigo.resumo}</p>
      <p className="mt-4 text-base text-muted-foreground">{artigo.leitura}</p>
      <Link
        to="/conteudo/$slug"
        params={{ slug: artigo.slug }}
        className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-gold"
      >
        Ler artigo <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}

export function TestimonialCard({ texto, autor }: { texto: string; autor: string }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <Quote className="size-6 text-gold" />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-graphite">
        “{texto}”
      </blockquote>
      <figcaption className="mt-5 text-base font-semibold text-foreground">{autor}</figcaption>
    </figure>
  );
}

export function CaseCard({
  setor,
  porte,
  uf,
  desafio,
  intervencao,
  resultado,
}: {
  setor: string;
  porte: string;
  uf: string;
  desafio: string;
  intervencao: string;
  resultado: string;
}) {
  return (
    <article className="h-full rounded-lg border border-border bg-card p-7">
      <p className="eyebrow">
        {setor} · {porte} · {uf}
      </p>
      <dl className="mt-5 space-y-4 text-base leading-relaxed text-graphite">
        <div>
          <dt className="font-semibold text-foreground">Desafio</dt>
          <dd className="mt-1">{desafio}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Intervenção</dt>
          <dd className="mt-1">{intervencao}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Resultado observável</dt>
          <dd className="mt-1">{resultado}</dd>
        </div>
      </dl>
    </article>
  );
}

export function MetricStrip({
  itens,
  tone = "navy",
}: {
  itens: { valor: string; rotulo: string }[];
  tone?: "navy" | "light";
}) {
  return (
    <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {itens.map((item) => (
        <div key={item.rotulo}>
          <dt className="sr-only">{item.rotulo}</dt>
          <dd>
            <span className="font-display block text-3xl font-bold text-gold">{item.valor}</span>
            <span
              className={
                tone === "navy"
                  ? "mt-2 block text-base leading-relaxed text-navy-foreground/85"
                  : "mt-2 block text-base leading-relaxed text-graphite"
              }
            >
              {item.rotulo}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
