export const site = {
  nome: "Licita Comigo",
  responsavel: "Artur Moura dos Reis",
  oab: "OAB-SP 356.893",
  url: "https://licitacomigo.com.br",
  whatsapp: "https://wa.me/55[PLACEHOLDER]",
  whatsappGrupo: "[LINK DO GRUPO DE WHATSAPP]",
  email: "[E-MAIL PLACEHOLDER]",
  instagram: "https://instagram.com/licitacomigo",
  linkedin: "[LINK DO LINKEDIN]",
  youtube: "[LINK DO YOUTUBE]",
  tiktok: "[LINK DO TIKTOK]",
  arroba: "@licitacomigo",
};

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/mentoria", label: "Mentoria" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/recursos", label: "Recursos" },
  { to: "/produtos", label: "Produtos" },
  { to: "/conteudo", label: "Conteúdo" },
  { to: "/contato", label: "Contato" },
] as const;

export const credenciais = [
  { valor: site.oab, rotulo: "Advogado inscrito na OAB de São Paulo" },
  { valor: "15+ anos", rotulo: "Licitações e contratos públicos" },
  { valor: "Ex-Diretor", rotulo: "Licitação e Contratos (CREF4/SP, 2019–2025)" },
  { valor: "Lei 14.133/21", rotulo: "Nova Lei de Licitações na prática" },
];

export const trajetoria = [
  {
    periodo: "Início da carreira",
    cargo: "Pregoeiro municipal",
    texto:
      "Condução de pregões e análise de propostas do lado da Administração, com contato direto com as dúvidas e os erros mais comuns dos licitantes.",
  },
  {
    periodo: "Sequência",
    cargo: "Analista e Chefe de setor",
    texto:
      "Instrução de processos, elaboração de editais e pareceres, controle de prazos e formalização de contratações.",
  },
  {
    periodo: "Comissões",
    cargo: "Presidente de Comissão de Licitação",
    texto:
      "Julgamento de habilitação e propostas, condução de sessões e resposta a impugnações e recursos.",
  },
  {
    periodo: "2019–2025",
    cargo: "Diretor de Licitação e Contratos — CREF4/SP",
    texto:
      "Responsável pela área de licitações e contratos do Conselho, incluindo planejamento das contratações, editais, gestão contratual e adequação à Lei 14.133/2021.",
  },
  {
    periodo: "2025",
    cargo: "Diretor de Gestão de Contratos",
    texto:
      "Foco em fiscalização, execução e continuidade dos contratos administrativos, com ênfase em prevenção de falhas e sanções.",
  },
];

export const publicos = [
  {
    titulo: "Empresário que quer começar",
    texto:
      "Você ouviu que o governo compra de tudo, mas não sabe por onde começar: cadastro, documentação, portais, tipos de licitação.",
    cta: "Quero começar a licitar",
  },
  {
    titulo: "Empresa que já licita",
    texto:
      "Você participa, mas perde por detalhe: proposta desclassificada, documento vencido, prazo perdido, recurso mal fundamentado.",
    cta: "Quero ganhar mais licitações",
  },
  {
    titulo: "Agente público",
    texto:
      "Você instrui processos, elabora editais ou fiscaliza contratos e precisa de segurança para decidir sem travar a Administração.",
    cta: "Quero apoio técnico",
  },
];

export const servicos = [
  {
    slug: "consultoria-licitacoes",
    titulo: "Consultoria para empresas licitantes",
    resumo:
      "Acompanhamento na leitura do edital, checagem de documentos, estratégia de proposta e participação em sessões.",
    itens: [
      "Análise de edital e mapa de riscos da participação",
      "Checklist de habilitação jurídica, técnica, fiscal e econômica",
      "Revisão de proposta e planilha de custos",
      "Apoio durante a sessão pública e diligências",
    ],
  },
  {
    slug: "impugnacoes-e-recursos",
    titulo: "Impugnações, recursos e representações",
    resumo:
      "Peças técnicas para corrigir editais restritivos e reverter decisões que prejudicam a sua empresa.",
    itens: [
      "Impugnação e pedidos de esclarecimento",
      "Recurso administrativo e contrarrazões",
      "Representação a órgãos de controle",
      "Defesa em processos de aplicação de sanções",
    ],
  },
  {
    slug: "gestao-de-contratos",
    titulo: "Gestão e execução de contratos públicos",
    resumo:
      "Do contrato assinado ao encerramento: reajuste, repactuação, prorrogação, aditivos e prevenção de penalidades.",
    itens: [
      "Reequilíbrio econômico-financeiro e reajuste",
      "Aditivos, prorrogações e apostilamentos",
      "Comunicação formal com a fiscalização",
      "Prevenção e resposta a notificações",
    ],
  },
  {
    slug: "apoio-a-administracao",
    titulo: "Apoio técnico à Administração Pública",
    resumo:
      "Suporte a setores de compras, comissões e fiscais de contrato na aplicação da Lei 14.133/2021.",
    itens: [
      "Revisão de editais, termos de referência e ETP",
      "Fluxos e checklists internos de contratação",
      "Capacitação de equipes e comissões",
      "Orientação em gestão e fiscalização contratual",
    ],
  },
];

export const passos = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto: "Entendemos o que a sua empresa vende, para quem já vendeu e o que falta para licitar com segurança.",
  },
  {
    numero: "02",
    titulo: "Plano de ação",
    texto: "Definimos documentos, portais, órgãos-alvo e o tipo de licitação mais compatível com o seu porte.",
  },
  {
    numero: "03",
    titulo: "Execução acompanhada",
    texto: "Leitura de edital, montagem de proposta e participação nas sessões com acompanhamento técnico.",
  },
  {
    numero: "04",
    titulo: "Contrato e continuidade",
    texto: "Ganhou? A atenção vira execução: prazos, aditivos, reajuste e relacionamento com a fiscalização.",
  },
];

export const portfolio = [
  {
    titulo: "Direção de Licitação e Contratos — CREF4/SP",
    periodo: "2019–2025",
    texto:
      "Condução da área de licitações e contratos de um conselho profissional, com planejamento anual de contratações, elaboração e revisão de editais e gestão do portfólio de contratos.",
  },
  {
    titulo: "Transição para a Lei 14.133/2021",
    periodo: "2021–2024",
    texto:
      "Adequação de fluxos, documentos e modelos internos à nova Lei de Licitações, incluindo estudo técnico preliminar, termo de referência e novos procedimentos auxiliares.",
  },
  {
    titulo: "Atuação como pregoeiro e presidente de comissão",
    periodo: "Trajetória pública",
    texto:
      "Condução de sessões públicas, julgamento de habilitação e propostas e resposta a impugnações e recursos — experiência que hoje orienta a estratégia de quem participa.",
  },
];

export const recursos = [
  {
    slug: "checklist-documentos",
    titulo: "Checklist de documentos para licitar",
    texto: "Lista organizada dos documentos de habilitação exigidos com mais frequência, por categoria.",
    formato: "PDF",
  },
  {
    slug: "guia-primeira-licitacao",
    titulo: "Guia da primeira licitação",
    texto: "Passo a passo do cadastro nos portais até o envio da proposta, em linguagem direta.",
    formato: "PDF",
  },
  {
    slug: "erros-que-desclassificam",
    titulo: "7 erros que desclassificam propostas",
    texto: "Os erros que mais aparecem nas sessões e como evitar cada um deles.",
    formato: "PDF",
  },
];

export const produtos = [
  {
    titulo: "Curso: Licitações do zero ao contrato",
    texto:
      "Formação em vídeo para empresas que querem participar de licitações com método, do cadastro à execução contratual.",
    status: "Em breve",
    link: "[LINK HOTMART]",
    preco: "[VALOR A DEFINIR]",
  },
  {
    titulo: "E-book: Como ler um edital",
    texto:
      "Material prático para interpretar edital e termo de referência sem se perder em jargão jurídico.",
    status: "Em breve",
    link: "[LINK DO E-BOOK]",
    preco: "[VALOR A DEFINIR]",
  },
];

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  leitura: string;
  paragrafos: string[];
};

export const artigos: Artigo[] = [
  {
    slug: "como-comecar-a-licitar",
    titulo: "Como começar a licitar: os primeiros passos reais",
    resumo:
      "Antes de sonhar com o contrato, é preciso resolver cadastro, documentação e escolha de órgão. Este é o caminho na ordem correta.",
    data: "2026-01-15",
    leitura: "6 min de leitura",
    paragrafos: [
      "A maior parte das empresas que desiste de licitar não desiste por falta de capacidade técnica. Desiste porque começou pela etapa errada: foi atrás de um edital antes de organizar a própria documentação.",
      "O ponto de partida é simples. Verifique se o objeto social da empresa cobre o que você pretende vender ao poder público, cheque a regularidade fiscal e trabalhista e organize as certidões em um único lugar, com data de validade visível.",
      "Depois vem o cadastro nos sistemas de compras utilizados pelos órgãos que interessam à sua empresa. É nesse momento que a maioria descobre pendências que levam dias para resolver — e é por isso que essa etapa vem antes de escolher a licitação.",
      "Só então faz sentido procurar oportunidades. Comece por objetos que você já entrega no mercado privado, em valores compatíveis com o seu porte, e leia o edital inteiro antes de decidir participar.",
      "Este conteúdo é informativo e não substitui análise do caso concreto.",
    ],
  },
  {
    slug: "lei-14133-o-que-muda-na-pratica",
    titulo: "Lei 14.133/2021: o que muda na prática para quem vende",
    resumo:
      "Planejamento mais detalhado, novos procedimentos e mais exigência de formalidade. O que isso significa para a sua proposta.",
    data: "2026-02-03",
    leitura: "7 min de leitura",
    paragrafos: [
      "A nova Lei de Licitações reorganizou a fase de planejamento das contratações. Documentos como o estudo técnico preliminar e o termo de referência ganharam peso, e isso muda o que a empresa encontra no edital.",
      "Para quem vende, a consequência prática é direta: os requisitos técnicos tendem a estar mais detalhados, e a proposta precisa dialogar com esses documentos, não apenas com o preço.",
      "Também mudou a lógica de julgamento e de fase recursal em vários casos. Perder o momento de manifestação passou a ser mais caro, porque o rito é mais concentrado.",
      "A recomendação é ler edital, termo de referência e anexos como um conjunto único, e formalizar dúvidas por escrito no prazo previsto em vez de assumir interpretações.",
      "Este conteúdo é informativo e não substitui análise do caso concreto.",
    ],
  },
  {
    slug: "erros-que-tiram-empresas-da-disputa",
    titulo: "Os erros que tiram boas empresas da disputa",
    resumo:
      "Certidão vencida, planilha inconsistente, atestado genérico. A maioria das desclassificações é evitável.",
    data: "2026-02-24",
    leitura: "5 min de leitura",
    paragrafos: [
      "Quem já conduziu sessões públicas sabe: a maioria das desclassificações não tem relação com a qualidade do produto ou do serviço oferecido. Tem relação com controle de documentos e com leitura de edital.",
      "Certidão vencida no dia da sessão, atestado de capacidade técnica sem indicar quantidade ou prazo, planilha de custos que não fecha com o valor global, declaração fora do modelo exigido. São falhas de processo interno.",
      "A solução também é de processo: um responsável pelo controle de validade das certidões, um checklist por edital e uma conferência final feita por outra pessoa antes do envio.",
      "Proposta inexequível é outro capítulo. Preço baixo demais não garante contrato: garante diligência, pedido de justificativa e risco de desclassificação.",
      "Este conteúdo é informativo e não substitui análise do caso concreto.",
    ],
  },
];

export function getArtigo(slug: string) {
  return artigos.find((a) => a.slug === slug);
}
