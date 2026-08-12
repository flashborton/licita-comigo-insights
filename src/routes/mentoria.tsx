import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const titulo = "Mentoria em licitações para empresas | Licita Comigo";
const descricao =
  "Acompanhamento individual para sua empresa participar de licitações com método: análise de edital, proposta, sessão e execução do contrato.";

const faq = [
  {
    q: "A mentoria serve para quem nunca licitou?",
    a: "Sim. Nesse caso começamos pela organização documental, cadastro nos portais e escolha dos primeiros objetos compatíveis com o seu porte.",
  },
  {
    q: "É curso gravado?",
    a: "Não. São encontros de trabalho sobre casos reais da sua empresa: o edital que está aberto, a proposta em montagem, o contrato em execução.",
  },
  {
    q: "Quanto tempo até o primeiro resultado?",
    a: "Depende do setor e da maturidade documental da empresa. Não prometo prazo de vitória — prometo participação tecnicamente correta, que é o que torna a vitória possível.",
  },
  {
    q: "A mentoria substitui advogado?",
    a: "A mentoria é orientação técnica e estratégica. Peças como impugnação, recurso e defesa em sanção são contratadas como serviço específico.",
  },
  {
    q: "Como funciona o investimento?",
    a: "O valor depende do formato e da duração definidos após a conversa inicial. [VALOR A DEFINIR]",
  },
];

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Mentoria,
});

function Mentoria() {
  return (
    <>
      <PageHero
        eyebrow="Mentoria"
        titulo="Pare de participar por tentativa e erro."
        descricao="Acompanhamento individual para a sua empresa entrar nas licitações com processo, documentação em ordem e leitura correta do edital — orientada por quem já julgou proposta do outro lado da mesa."
      />

      <Section eyebrow="Perfil" titulo="Para quem é e para quem não é">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gold/40 bg-card p-6">
            <p className="eyebrow text-gold">É para você se</p>
            <ul className="mt-4 space-y-3 text-sm text-graphite">
              {[
                "Sua empresa já vende no mercado privado e quer abrir o canal público.",
                "Você participa de licitações, mas perde por detalhe formal.",
                "Você quer entender o edital em vez de terceirizar a decisão.",
                "Você tem tempo para aplicar o que combinamos entre os encontros.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Não é para você se</p>
            <ul className="mt-4 space-y-3 text-sm text-graphite">
              {[
                "Você busca garantia de contrato ou atalho para ganhar licitação.",
                "Você quer terceirizar 100% do processo sem participação da equipe.",
                "Sua empresa não tem regularidade fiscal e não pretende regularizar.",
                "Você espera resultado sem organizar documentação interna.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sand" eyebrow="Método" titulo="Como conduzimos o trabalho">
        <ol className="grid gap-6 md:grid-cols-2">
          {[
            {
              n: "01",
              t: "Diagnóstico documental e comercial",
              d: "Objeto social, certidões, atestados, capacidade de entrega e histórico de participação.",
            },
            {
              n: "02",
              t: "Mapa de oportunidades",
              d: "Quais órgãos compram o que você vende, em qual faixa de valor e por qual modalidade.",
            },
            {
              n: "03",
              t: "Treino de leitura de edital",
              d: "Análise conjunta de editais reais, identificando riscos, exigências críticas e prazos.",
            },
            {
              n: "04",
              t: "Proposta e sessão",
              d: "Revisão de planilha e proposta, preparação para diligências e acompanhamento da disputa.",
            },
            {
              n: "05",
              t: "Pós-vitória",
              d: "Rotina de gestão do contrato: prazos, aditivos, reajuste e comunicação com a fiscalização.",
            },
            {
              n: "06",
              t: "Revisão de ciclo",
              d: "O que funcionou, o que desclassificou e ajuste da estratégia para os próximos certames.",
            },
          ].map((p) => (
            <li key={p.n} className="rounded-lg border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gold">{p.n}</span>
              <h3 className="mt-3 text-base font-bold text-card-foreground">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{p.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Dúvidas" titulo="Perguntas frequentes">
        <Accordion type="single" collapsible className="max-w-3xl">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-graphite">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section tone="sand" eyebrow="Candidatura" titulo="Solicitar uma conversa inicial">
        <div className="max-w-2xl">
          <LeadForm
            origem="mentoria"
            titulo="Quero avaliar a mentoria"
            descricao="Conte o cenário atual da empresa. Se fizer sentido, marcamos uma conversa de diagnóstico."
            botao="Enviar candidatura"
          />
        </div>
      </Section>
    </>
  );
}
