import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getArtigo } from "@/lib/site";

export const Route = createFileRoute("/conteudo/$slug")({
  loader: ({ params }) => {
    const artigo = getArtigo(params.slug);
    if (!artigo) throw notFound();
    return { artigo };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo não encontrado | Licita Comigo" }, { name: "robots", content: "noindex" }],
      };
    }
    const { artigo } = loaderData;
    const t = `${artigo.titulo} | Licita Comigo`;
    return {
      meta: [
        { title: t },
        { name: "description", content: artigo.resumo },
        { property: "og:title", content: t },
        { property: "og:description", content: artigo.resumo },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArtigoPage,
  notFoundComponent: ArtigoNaoEncontrado,
});

function ArtigoNaoEncontrado() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
      <Link to="/conteudo" className="mt-4 inline-block text-sm font-semibold hover:text-gold">
        Ver todos os artigos
      </Link>
    </div>
  );
}

function ArtigoPage() {
  const { artigo } = Route.useLoaderData();

  return (
    <article>
      <div className="bg-navy text-navy-foreground">
        <div className="container-page py-16 md:py-20">
          <Link
            to="/conteudo"
            className="inline-flex items-center gap-1.5 text-sm text-navy-foreground/70 hover:text-gold"
          >
            <ArrowLeft className="size-4" /> Conteúdo
          </Link>
          <h1 className="font-display mt-6 max-w-3xl text-3xl leading-tight font-bold md:text-4xl">
            {artigo.titulo}
          </h1>
          <p className="mt-4 text-sm text-navy-foreground/70">
            {new Date(artigo.data).toLocaleDateString("pt-BR")} · {artigo.leitura}
          </p>
        </div>
      </div>

      <div className="container-page py-14">
        <div className="max-w-2xl space-y-5">
          {artigo.paragrafos.map((p) => (
            <p key={p} className="text-base leading-relaxed text-graphite">
              {p}
            </p>
          ))}
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90"
          >
            Falar sobre o meu caso
          </Link>
        </div>
      </div>
    </article>
  );
}
