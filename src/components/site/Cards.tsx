import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileDown } from "lucide-react";
import type { Artigo } from "@/lib/site";

export function ServiceCard({
  titulo,
  resumo,
  itens,
}: {
  titulo: string;
  resumo: string;
  itens: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-graphite">{resumo}</p>
      <ul className="mt-4 space-y-2 text-sm text-graphite">
        {itens.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ResourceCard({
  titulo,
  texto,
  formato,
}: {
  titulo: string;
  texto: string;
  formato: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <FileDown className="size-6 text-gold" />
      <h3 className="mt-4 text-base font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">{texto}</p>
      <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
        {formato} · gratuito
      </p>
      <Link
        to="/recursos"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold"
      >
        Receber material <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}

export function ProductCard({
  titulo,
  texto,
  status,
  link,
  preco,
}: {
  titulo: string;
  texto: string;
  status: string;
  link: string;
  preco: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <span className="w-fit rounded-full bg-sand px-3 py-1 text-xs font-semibold text-graphite">
        {status}
      </span>
      <h3 className="mt-4 text-lg font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">{texto}</p>
      <dl className="mt-4 space-y-1 text-sm text-graphite">
        <div className="flex gap-2">
          <dt className="font-semibold">Investimento:</dt>
          <dd>{preco}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold">Link:</dt>
          <dd className="break-all">{link}</dd>
        </div>
      </dl>
    </article>
  );
}

export function ArticleCard({ artigo }: { artigo: Artigo }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <p className="text-xs tracking-wide text-muted-foreground uppercase">{artigo.leitura}</p>
      <h3 className="mt-3 text-lg font-bold text-card-foreground">{artigo.titulo}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">{artigo.resumo}</p>
      <Link
        to="/conteudo/$slug"
        params={{ slug: artigo.slug }}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold"
      >
        Ler artigo <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
