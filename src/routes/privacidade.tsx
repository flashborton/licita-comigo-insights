import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { PageHero, Section } from "@/components/site/Section";

const titulo = "Política de Privacidade | Licita Comigo";
const descricao =
  "Como o Licita Comigo coleta, usa e protege os dados enviados pelos formulários do site, conforme a LGPD (Lei 13.709/2018).";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Privacidade,
});

const blocos = [
  {
    t: "1. Quem é o controlador",
    p: [
      `Os dados coletados neste site são tratados por ${site.responsavel} (${site.oab}), responsável pelo projeto ${site.nome}. Contato para assuntos de privacidade: ${site.email}.`,
    ],
  },
  {
    t: "2. Quais dados coletamos",
    p: [
      "Coletamos apenas os dados informados voluntariamente nos formulários do site: nome, e-mail, telefone/WhatsApp, perfil (empresa ou agente público), objetivo do contato e a mensagem enviada.",
      "Registramos também a origem do formulário preenchido e a data do envio, para organizar o atendimento.",
    ],
  },
  {
    t: "3. Para que usamos os dados",
    p: [
      "Os dados são usados exclusivamente para responder ao contato, enviar os materiais solicitados e apresentar informações sobre serviços, mentoria, cursos e conteúdos do Licita Comigo.",
      "Não vendemos, alugamos nem compartilhamos dados com terceiros para fins publicitários.",
    ],
  },
  {
    t: "4. Base legal",
    p: [
      "O tratamento ocorre com fundamento no consentimento do titular, manifestado no momento do envio do formulário, e no legítimo interesse para responder solicitações de contato, nos termos da Lei 13.709/2018 (LGPD).",
    ],
  },
  {
    t: "5. Armazenamento e segurança",
    p: [
      "Os dados são armazenados em banco de dados com acesso restrito, hospedado em infraestrutura de nuvem com controles de segurança. O acesso é limitado ao responsável pelo atendimento.",
    ],
  },
  {
    t: "6. Seus direitos",
    p: [
      "Você pode solicitar, a qualquer momento, confirmação do tratamento, acesso, correção, portabilidade, anonimização, revogação do consentimento ou exclusão dos seus dados.",
      `Para exercer esses direitos, envie a solicitação para ${site.email}.`,
    ],
  },
  {
    t: "7. Retenção",
    p: [
      "Os dados são mantidos enquanto necessários para o atendimento e para o cumprimento de obrigações legais. Após esse período, são eliminados ou anonimizados.",
    ],
  },
  {
    t: "8. Atualizações desta política",
    p: [
      "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A versão vigente é sempre a publicada nesta página.",
    ],
  },
];

function Privacidade() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        titulo="Política de Privacidade"
        descricao="Transparência sobre quais dados coletamos nos formulários, por que coletamos e como você pode solicitar exclusão."
      />
      <Section>
        <div className="max-w-3xl space-y-8">
          {blocos.map((b) => (
            <div key={b.t}>
              <h2 className="text-lg font-bold text-foreground">{b.t}</h2>
              {b.p.map((texto) => (
                <p key={texto} className="mt-3 text-sm leading-relaxed text-graphite">
                  {texto}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
