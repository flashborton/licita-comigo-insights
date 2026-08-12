import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const titulo = "Obrigado pelo contato | Licita Comigo";
const descricao =
  "Recebemos suas informações. Em breve o Artur retorna com um primeiro direcionamento sobre o seu caso.";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="mx-auto size-12 text-gold" />
        <h1 className="font-display mt-6 text-3xl font-bold">Recebemos o seu contato</h1>
        <p className="mt-4 text-base leading-relaxed text-graphite">
          Suas informações foram registradas. O retorno é feito por e-mail ou WhatsApp, com um
          primeiro direcionamento sobre o seu cenário.
        </p>
        <div className="mt-8 rounded-lg border border-border bg-sand p-6 text-left text-sm text-graphite">
          <p className="font-semibold text-foreground">Enquanto isso</p>
          <p className="mt-2">
            Materiais gratuitos serão enviados assim que publicados. Link de download:{" "}
            [LINK DE DOWNLOAD PENDENTE]
          </p>
          <p className="mt-2">Grupo de WhatsApp: {site.whatsappGrupo}</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/conteudo"
            className="inline-flex items-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90"
          >
            Ler os artigos
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-input px-5 py-3 text-sm font-semibold hover:bg-secondary"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
