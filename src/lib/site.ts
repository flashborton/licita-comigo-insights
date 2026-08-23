export const site = {
  nome: "Licita Comigo",
  linhaMarca: "Licita Comigo — inteligência aplicada em licitações.",
  mantra: "Simplificando a compra, qualificando a venda.",
  fraseMae: "Método de quem já operou do lado de dentro da Administração Pública.",
  fundador: "Artur Moura dos Reis",
  oab: "OAB-SP 356.893",
  url: "https://licitacomigo.com.br",
  whatsappNumero: "5511992210423",
  whatsappExibicao: "(11) 99221-0423",
  whatsappGrupo: "[PLACEHOLDER_LINK_GRUPO]",
  email: "[E-MAIL PLACEHOLDER]",
  instagram: "https://www.instagram.com/licitacomigo",
  tiktok: "https://www.tiktok.com/@licitacomigo",
  youtube: "https://www.youtube.com/@licitacomigo",
  linkedin: "https://www.linkedin.com/in/licitacomigo",
  arroba: "@licitacomigo",
};

export const mensagensWhatsApp = {
  geral: "Olá, vim pelo site da Licita Comigo e quero uma orientação.",
  mentoria: "Olá, vim pelo site e tenho interesse na Mentoria.",
  plataforma: "Olá, quero entrar na lista de interesse da Plataforma Licita Comigo.",
  capacitacao: "Olá, tenho interesse em capacitação/treinamento in company.",
  parecer: "Olá, preciso de informações sobre parecer técnico.",
  proposta: "Olá, vim pelo site da Licita Comigo e quero solicitar uma proposta.",
  biblioteca: "Olá, vim pelo site e quero receber os materiais da Biblioteca.",
} as const;

export type ContextoWhatsApp = keyof typeof mensagensWhatsApp;

export function waLink(contexto: ContextoWhatsApp = "geral") {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(
    mensagensWhatsApp[contexto],
  )}`;
}

export const temGrupoWhatsApp = !site.whatsappGrupo.startsWith("[");

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/capacitacao", label: "Capacitação" },
  { to: "/plataforma", label: "Plataforma" },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export const footerLinks = [
  ...navLinks,
  { to: "/mentoria", label: "Mentoria" },
  { to: "/conteudo", label: "Conteúdo" },
] as const;

/**
 * Números de atuação — placeholders entre colchetes ficam visíveis no site
 * até que os dados reais sejam informados.
 */
export const numerosAtuacao = [
  {
    valor: "15+ anos",
    rotulo: "de atuação prática em contratações públicas",
  },
  {
    valor: "[N_EDITAIS]",
    rotulo: "editais e processos acompanhados ou analisados",
  },
  {
    valor: "[N_CAPACITACOES]",
    rotulo: "capacitações e palestras realizadas",
  },
  {
    valor: "[N_SESSOES]",
    rotulo: "sessões e frentes de apoio a certames",
  },
];

export const taxaExitoRecursos = "[TAXA_EXITO_RECURSOS]";

export const publicos = [
  {
    titulo: "Empresa iniciante",
    texto:
      "A empresa já vende no mercado privado e quer abrir o canal público, mas não sabe onde começa a documentação, o cadastro e a leitura de um edital.",
    entrega: "Organização documental, mapa de oportunidades e primeira participação acompanhada.",
  },
  {
    titulo: "Empresa que já licita",
    texto:
      "A empresa participa, mas perde por detalhe formal: planilha inconsistente, atestado genérico, prazo de manifestação perdido.",
    entrega: "Revisão de processo interno, análise de risco do edital e apoio técnico na disputa.",
  },
  {
    titulo: "Órgão, agente de contratação ou pregoeiro",
    texto:
      "A equipe precisa instruir processos e conduzir certames com segurança procedimental, sem travar a Administração.",
    entrega: "Apoio técnico-consultivo, revisão de fluxos e capacitação das equipes.",
  },
];

export const problemaSolucao = {
  problemas: [
    "Edital lido às pressas, sem mapa de exigências críticas e prazos.",
    "Documentação dispersa, com certidão vencida descoberta no dia da sessão.",
    "Proposta e planilha montadas sem diálogo com o termo de referência.",
    "Do lado público: processos instruídos sem padronização e sem rastreabilidade das decisões.",
  ],
  solucoes: [
    "Diagnóstico técnico do cenário antes de qualquer participação ou contratação.",
    "Checklists e rotinas de controle documental com responsável definido.",
    "Análise de risco do edital e revisão de proposta com critério técnico.",
    "Fluxos, modelos e capacitação alinhados à Lei 14.133/2021.",
  ],
  ressalva:
    "A metodologia organiza processo e reduz risco formal. Não existe garantia de vitória em certame nem de obtenção de contrato — nenhuma consultoria séria pode oferecer isso.",
};

export const solucoes = [
  {
    slug: "consultoria-empresas",
    titulo: "Consultoria para empresas",
    resumo:
      "Apoio técnico ao longo do ciclo de participação: leitura do edital, habilitação, proposta, sessão e execução contratual.",
    paraQuem: "Empresas que querem começar a licitar ou corrigir falhas recorrentes de processo.",
    itens: [
      "Análise de edital com mapa de exigências e riscos",
      "Checklist de habilitação jurídica, técnica, fiscal e econômica",
      "Revisão de proposta e planilha de custos",
      "Apoio a impugnações, esclarecimentos e recursos administrativos",
    ],
    contexto: "proposta" as ContextoWhatsApp,
  },
  {
    slug: "consultoria-orgaos",
    titulo: "Consultoria para órgãos",
    resumo:
      "Suporte a setores de contratação, agentes de contratação, comissões e fiscais na aplicação da Lei 14.133/2021.",
    paraQuem: "Órgãos e entidades da Administração direta e indireta, conselhos e autarquias.",
    itens: [
      "Revisão de ETP, termo de referência e edital",
      "Padronização de fluxos, listas de verificação e modelos",
      "Apoio à condução de certames e ao julgamento de propostas",
      "Rotinas de gestão e fiscalização contratual",
    ],
    contexto: "proposta" as ContextoWhatsApp,
  },
  {
    slug: "pareceres-tecnicos",
    titulo: "Pareceres técnicos em contratações públicas",
    resumo:
      "Análise técnico-consultiva em contratações públicas e direito público administrativo, com fundamentação objetiva e recomendação de encaminhamento.",
    paraQuem: "Empresas e órgãos que precisam de análise formal sobre uma questão específica.",
    itens: [
      "Delimitação da questão e do material analisado",
      "Análise fundamentada em legislação e normativos aplicáveis",
      "Riscos identificados e alternativas de encaminhamento",
      "Escopo técnico-consultivo — não é peça de representação judicial",
    ],
    contexto: "parecer" as ContextoWhatsApp,
  },
  {
    slug: "mentoria",
    titulo: "Mentoria",
    resumo:
      "Acompanhamento contínuo, em formato mensal, sobre os casos reais do ciclo de contratações da sua organização.",
    paraQuem: "Empresas que participam ou pretendem participar de licitações com regularidade.",
    itens: [
      "Diagnóstico inicial e definição de prioridades",
      "Plano de ação com responsáveis e prazos",
      "Encontros de acompanhamento e revisão de dúvidas técnicas do ciclo",
      "Preparação para sessões e para a execução do contrato",
    ],
    contexto: "mentoria" as ContextoWhatsApp,
    rota: "/mentoria",
  },
  {
    slug: "plataforma",
    titulo: "Plataforma (em breve)",
    resumo:
      "Software com inteligência artificial para apoiar o ciclo de contratações, com humano no loop. Em desenvolvimento.",
    paraQuem: "Órgãos e empresas que querem escalar análise e monitoramento com apoio de IA.",
    itens: [
      "Apoio ao planejamento e à instrução processual",
      "Monitoramento de editais e análise de riscos",
      "Alertas de indícios de irregularidade",
      "Status: em desenvolvimento, com lista de interesse aberta",
    ],
    contexto: "plataforma" as ContextoWhatsApp,
    rota: "/plataforma",
  },
  {
    slug: "palestras",
    titulo: "Palestras e imersões",
    resumo:
      "Conteúdo técnico para eventos, congressos e encontros de gestores, com recorte prático da Lei 14.133/2021.",
    paraQuem: "Entidades, associações, conselhos e órgãos promotores de eventos.",
    itens: [
      "Palestra sob formato e duração do evento",
      "Recorte por público: empresas, gestores ou equipes técnicas",
      "Material de apoio para os participantes",
      "Detalhes na página de Capacitação",
    ],
    contexto: "capacitacao" as ContextoWhatsApp,
    rota: "/capacitacao",
  },
  {
    slug: "auditoria-licitatoria",
    titulo: "Auditoria em processos licitatórios",
    resumo:
      "Diagnóstico de conformidade procedimental, riscos e gaps documentais em processos de contratação pública.",
    paraQuem: "Órgãos e empresas que precisam revisar processos licitatórios já concluídos ou em andamento.",
    itens: [
      "Revisão da conformidade procedimental do processo",
      "Mapeamento de riscos documentais e formais",
      "Relatório de achados com plano de aperfeiçoamento",
      "Sem promessa de resultado — análise técnica objetiva",
    ],
    contexto: "proposta" as ContextoWhatsApp,
  },
  {
    slug: "auditoria-contabil-rh-gestao",
    titulo: "Auditoria em contabilidade pública, RH e gestão",
    resumo:
      "Revisão de rotinas e controles de contabilidade pública, recursos humanos e gestão administrativa.",
    paraQuem: "Órgãos públicos que precisam fortalecer controles internos e rotinas de gestão.",
    itens: [
      "Análise de rotinas contábeis e registros fiscais",
      "Revisão de controles de RH e folha de pagamento",
      "Mapeamento de gaps e riscos de gestão",
      "Relatório de achados + plano de aperfeiçoamento",
    ],
    contexto: "proposta" as ContextoWhatsApp,
  },
  {
    slug: "aperfeicoamento-orgaos",
    titulo: "Aperfeiçoamento da gestão de órgãos públicos",
    resumo:
      "Revisão de fluxos, papéis, prazos e governança das áreas de compras e contratos do órgão.",
    paraQuem: "Órgãos e entidades que precisam organizar ou modernizar a área de contratações.",
    itens: [
      "Mapeamento dos fluxos de compras e contratos",
      "Definição de papéis, responsabilidades e prazos",
      "Padronização de modelos e listas de verificação",
      "Plano de implantação com acompanhamento técnico",
    ],
    contexto: "proposta" as ContextoWhatsApp,
  },
];

export const formatosInvestimento = [
  {
    titulo: "Consultoria avulsa por certame",
    paraQuem: "Empresa com um edital específico em análise ou uma demanda pontual.",
    inclui: [
      "Análise do edital e dos anexos",
      "Checagem documental e orientação de proposta",
      "Retorno técnico consolidado",
    ],
    investimento: "Investimento sob proposta, conforme escopo da demanda.",
  },
  {
    titulo: "Mentoria mensal",
    paraQuem: "Empresa que participa de certames com recorrência.",
    inclui: [
      "Acompanhamento contínuo do ciclo",
      "Encontros periódicos de trabalho",
      "Revisão de dúvidas técnicas entre encontros",
    ],
    investimento: "Investimento sob proposta, formato mensal.",
  },
  {
    titulo: "Treinamento in company",
    paraQuem: "Órgãos e empresas que precisam capacitar equipes internas.",
    inclui: [
      "Programa desenhado para o público e para a rotina da equipe",
      "Presencial ou remoto",
      "Material de apoio e certificação de participação",
    ],
    investimento: "Investimento sob proposta, conforme carga horária e número de participantes.",
  },
  {
    titulo: "Parecer técnico",
    paraQuem: "Empresas e órgãos com uma questão específica a esclarecer.",
    inclui: [
      "Delimitação da consulta",
      "Análise fundamentada e riscos",
      "Recomendação de encaminhamento",
    ],
    investimento: "Investimento sob proposta, conforme complexidade da questão.",
  },
  {
    titulo: "Auditoria (sob escopo)",
    paraQuem: "Órgãos e empresas que precisam de diagnóstico estruturado de processos, controles ou gestão.",
    inclui: [
      "Auditoria em processos licitatórios",
      "Auditoria em contabilidade pública, RH e gestão",
      "Aperfeiçoamento da gestão de órgãos públicos",
      "Relatório de achados e plano de aperfeiçoamento",
    ],
    investimento: "Investimento sob proposta, conforme escopo e profundidade da revisão.",
  },
  {
    titulo: "Palestra ou imersão",
    paraQuem: "Eventos, congressos e encontros técnicos.",
    inclui: [
      "Conteúdo alinhado ao público do evento",
      "Formato palestra, workshop ou imersão",
      "Alinhamento prévio com a organização",
    ],
    investimento: "Investimento sob proposta, conforme formato, duração e deslocamento.",
  },
];

export const microcopyProposta =
  "Enviamos uma proposta alinhada ao seu cenário após breve diagnóstico. Sem compromisso de contratação.";

export const microcopyRetorno =
  "Após o envio, retornamos em até 1 dia útil com um primeiro direcionamento técnico e os próximos passos. Se for urgente, fale no WhatsApp.";

export const metodo = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto:
      "Levantamento do cenário: o que a organização compra ou vende, maturidade documental, histórico de participação e pontos de risco.",
  },
  {
    numero: "02",
    titulo: "Prioridades",
    texto:
      "Definição do que precisa ser resolvido primeiro, com critério técnico e não por urgência aparente.",
  },
  {
    numero: "03",
    titulo: "Plano de ação",
    texto: "Documentos, rotinas, responsáveis e prazos definidos por escrito.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    texto:
      "Execução acompanhada: leitura de editais reais, revisão de propostas, preparação para sessões e gestão do contrato.",
  },
  {
    numero: "05",
    titulo: "Revisão de ciclo",
    texto:
      "Revisão das dúvidas técnicas do período, do que funcionou e do que precisa de ajuste no próximo ciclo.",
  },
];

export const capacitacaoPublicos = [
  {
    titulo: "Gestores públicos",
    texto:
      "Visão de conformidade e eficiência no planejamento das contratações, com foco em decisão informada e rastreável.",
  },
  {
    titulo: "Agentes de contratação e pregoeiros",
    texto:
      "Condução de certames, julgamento de propostas, diligências e resposta a impugnações e recursos com segurança procedimental.",
  },
  {
    titulo: "Fiscais e gestores de contrato",
    texto:
      "Rotinas de fiscalização, registro de ocorrências, aditivos, reajuste e prevenção de sanções.",
  },
  {
    titulo: "Equipes comerciais de empresas",
    texto:
      "Leitura de edital, montagem de proposta e controle documental para participação consistente.",
  },
];

export const capacitacaoFormatos = [
  {
    titulo: "In company",
    texto:
      "Programa desenhado sob a rotina da equipe, presencial ou remoto, com casos do próprio dia a dia da organização.",
  },
  {
    titulo: "Turmas abertas",
    texto: "Módulos temáticos da Lei 14.133/2021 para participantes de diferentes organizações.",
  },
  {
    titulo: "Palestras",
    texto: "Conteúdo técnico para eventos, congressos e encontros de gestores.",
  },
  {
    titulo: "Imersões",
    texto:
      "Formato intensivo para equipes que precisam padronizar procedimentos em pouco tempo.",
  },
];

export const plataformaOrgao = [
  "Apoio ao planejamento anual das contratações",
  "Apoio à elaboração de ETP, termo de referência, edital e contrato",
  "Pesquisa de preços na lógica da IN 65/2021",
  "Análise de propostas e de planilhas de custos",
  "Alertas de indícios de irregularidade e de direcionamento",
  "Apoio à condução do pregão e ao registro das decisões",
  "Gestão contratual: prazos, aditivos, reajuste e ocorrências",
];

export const plataformaEmpresa = [
  "Monitor de editais por objeto, órgão e faixa de valor",
  "Controle de documentação e validade de certidões",
  "Apoio a impugnações, esclarecimentos e recursos",
  "Análise de riscos e exigências críticas do edital",
  "Pipeline de oportunidades e histórico de participação",
];

export const plataformaAviso =
  "A plataforma é ferramenta de apoio à análise. A decisão permanece do agente público ou da empresa, e o uso não transfere nem substitui responsabilidade legal.";

export const experienciaVerificavel = [
  {
    titulo: "CREF4/SP — licitações e gestão de contratos",
    periodo: "2019–2025",
    texto:
      "Atuação em chefia e direção da área de licitações e contratos de conselho profissional, com planejamento das contratações, elaboração e revisão de editais, condução de certames e gestão da carteira de contratos, incluindo a adequação dos fluxos à Lei 14.133/2021.",
  },
  {
    titulo: "SEADESP — professor convidado",
    periodo: "desde 2024",
    texto:
      "Docência convidada em especialização voltada à administração pública, com módulos de licitações e contratos administrativos.",
  },
  {
    titulo: "CREF-PR e CREF-MS — capacitação Nova Lei 14.133/2021",
    periodo: "2023",
    texto:
      "Capacitação de equipes técnicas e de fiscais e gestores de contrato na aplicação da nova Lei de Licitações.",
  },
  {
    titulo: "Arnold South America Conference 2023 — palestra",
    periodo: "2023",
    texto:
      "Palestra sobre a Nova Lei de Licitações e planejamento de compras aplicada a secretarias de esportes.",
  },
  {
    titulo: "Consultoria a empresas e órgãos",
    periodo: "desde 2015",
    texto:
      "Atendimento continuado a empresas licitantes e a órgãos públicos em contratações e gestão contratual. Por confidencialidade, não divulgamos nomes de contratantes.",
  },
];

export const casesAnonimizados = [
  {
    setor: "Tecnologia da informação",
    porte: "Porte médio",
    uf: "SP",
    desafio:
      "Participações recorrentes encerradas em desclassificação por inconsistência entre planilha de custos e proposta global.",
    intervencao:
      "Revisão da metodologia de composição de custos, criação de conferência cruzada antes do envio e treino de leitura do termo de referência.",
    resultado:
      "Propostas passaram a ser aceitas na fase de julgamento sem diligência por inconsistência formal.",
  },
  {
    setor: "Serviços de manutenção predial",
    porte: "Pequeno porte",
    uf: "SP",
    desafio: "Empresa sem histórico em compras públicas e com documentação dispersa.",
    intervencao:
      "Organização documental, cadastro nos portais, mapa de órgãos compradores e acompanhamento da primeira participação.",
    resultado:
      "Primeira participação concluída sem inabilitação documental e rotina de controle de certidões implantada.",
  },
  {
    setor: "Conselho profissional",
    porte: "Administração indireta",
    uf: "Região Sul",
    desafio:
      "Processos de contratação instruídos sem padronização após a entrada em vigor da Lei 14.133/2021.",
    intervencao:
      "Padronização de ETP e termo de referência, listas de verificação por etapa e capacitação da equipe de contratação.",
    resultado:
      "Instrução processual padronizada e redução de retrabalho por devolução interna de processos.",
  },
  {
    setor: "Fornecimento de materiais",
    porte: "Pequeno porte",
    uf: "MG",
    desafio: "Edital com exigência técnica de difícil comprovação para empresas do porte.",
    intervencao:
      "Análise da exigência, elaboração de pedido de esclarecimento e, na sequência, impugnação tecnicamente fundamentada.",
    resultado:
      "Questionamento formalizado no prazo, com registro técnico da posição da empresa no processo.",
  },
];

export const depoimentosAnonimizados = [
  {
    texto:
      "Passamos a entender o edital antes de decidir participar. Isso mudou a qualidade das nossas propostas e o tempo que a equipe gasta com retrabalho.",
    autor: "Empresa de TI, porte médio, SP",
  },
  {
    texto:
      "A parte mais útil foi a organização documental. Nunca mais descobrimos certidão vencida no dia da sessão.",
    autor: "Empresa de serviços, pequeno porte, SP",
  },
  {
    texto:
      "A capacitação deu à equipe segurança para conduzir o procedimento e registrar as decisões de forma defensável.",
    autor: "Gestor público, área de contratações, Região Sul",
  },
];

export const materiaisGratuitos = [
  {
    slug: "checklist-habilitacao",
    titulo: "Checklist de documentos para habilitar",
    beneficio:
      "Lista organizada por categoria — jurídica, técnica, fiscal e econômico-financeira — para conferir antes de enviar a proposta.",
    formato: "PDF",
  },
  {
    slug: "guia-primeira-licitacao",
    titulo: "Guia da primeira licitação",
    beneficio:
      "Como começar a licitar na ordem correta: documentação, cadastro nos portais e escolha do primeiro objeto.",
    formato: "PDF",
  },
  {
    slug: "erros-que-desclassificam",
    titulo: "7 erros que desclassificam propostas",
    beneficio:
      "Os erros formais mais frequentes nas sessões públicas e a rotina interna que evita cada um deles.",
    formato: "PDF",
  },
  {
    slug: "pack-de-prompts",
    titulo: "Pack de prompts e perguntas ao pregoeiro",
    beneficio:
      "Modelos de perguntas de esclarecimento e prompts de apoio para análise de edital, recurso, contrato e fiscalização.",
    formato: "PDF",
  },
];

export const produtos = [
  {
    titulo: "Curso: contratações públicas do planejamento ao contrato",
    texto:
      "Formação em vídeo para empresas e equipes que precisam dominar o ciclo completo, do cadastro à execução contratual.",
    status: "Em breve",
    link: "[LINK_HOTMART]",
    tipo: "Curso",
  },
  {
    titulo: "E-book: como ler um edital",
    texto:
      "Material prático para interpretar edital, termo de referência e anexos como um conjunto único.",
    status: "Em breve",
    link: "[LINK_EBOOK]",
    tipo: "E-book",
  },
];

export type Artigo = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  data: string;
  leitura: string;
  paragrafos: string[];
  relacionados: string[];
};

export const artigos: Artigo[] = [
  {
    slug: "como-comecar-a-licitar",
    titulo: "Como começar a licitar: os primeiros passos na ordem correta",
    categoria: "Participar de licitação",
    resumo:
      "Antes de procurar edital, é preciso resolver objeto social, regularidade e cadastro. Este é o caminho na sequência que funciona.",
    data: "2026-01-15",
    leitura: "6 min de leitura",
    paragrafos: [
      "A maior parte das empresas que desiste de licitar não desiste por falta de capacidade técnica. Desiste porque começou pela etapa errada: foi atrás de um edital antes de organizar a própria documentação.",
      "O ponto de partida é verificar se o objeto social cobre o que a empresa pretende vender ao poder público, checar a regularidade fiscal e trabalhista e reunir as certidões em um único lugar, com data de validade visível e um responsável designado pelo controle.",
      "Depois vem o cadastro nos sistemas de compras utilizados pelos órgãos de interesse. É nesse momento que a maioria descobre pendências que levam dias para resolver — motivo pelo qual essa etapa vem antes da escolha do certame.",
      "Só então faz sentido procurar oportunidades. Comece por objetos que a empresa já entrega no mercado privado, em faixas de valor compatíveis com o seu porte, e leia o edital inteiro antes de decidir participar.",
      "Nenhuma dessas etapas garante contrato. O que elas garantem é participação tecnicamente correta — condição sem a qual a disputa nem começa.",
      "Este conteúdo é informativo e não substitui a análise do caso concreto.",
    ],
    relacionados: ["erros-que-tiram-empresas-da-disputa", "lei-14133-o-que-muda-na-pratica"],
  },
  {
    slug: "lei-14133-o-que-muda-na-pratica",
    titulo: "Lei 14.133/2021 na prática: o que muda para quem vende ao governo",
    categoria: "Nova Lei na prática",
    resumo:
      "Planejamento mais detalhado, rito mais concentrado e mais exigência de formalidade. O impacto direto na sua proposta.",
    data: "2026-02-03",
    leitura: "7 min de leitura",
    paragrafos: [
      "A Lei 14.133/2021 reorganizou a fase de planejamento das contratações. Documentos como o estudo técnico preliminar e o termo de referência ganharam peso, e isso muda o que a empresa encontra no edital.",
      "Para quem vende, a consequência prática é direta: os requisitos técnicos tendem a estar mais detalhados, e a proposta precisa dialogar com esses documentos — não apenas com o preço.",
      "A lógica de julgamento e a fase recursal também mudaram em vários casos. Perder o momento de manifestação passou a ser mais caro, porque o rito é mais concentrado.",
      "Do lado da Administração, a exigência de rastreabilidade cresceu: a decisão precisa estar registrada e fundamentada no processo. Isso beneficia o licitante que formaliza dúvidas por escrito no prazo, em vez de assumir interpretações.",
      "A recomendação prática é ler edital, termo de referência e anexos como um conjunto único e formalizar todo questionamento dentro do prazo previsto.",
      "Este conteúdo é informativo e não substitui a análise do caso concreto.",
    ],
    relacionados: ["como-comecar-a-licitar", "gestao-de-contratos-publicos-rotina"],
  },
  {
    slug: "erros-que-tiram-empresas-da-disputa",
    titulo: "Os erros formais que tiram boas empresas da disputa",
    categoria: "Participar de licitação",
    resumo:
      "Certidão vencida, planilha inconsistente, atestado genérico. A maioria das desclassificações é falha de processo interno.",
    data: "2026-02-24",
    leitura: "5 min de leitura",
    paragrafos: [
      "Quem já conduziu sessões públicas sabe que a maioria das desclassificações não tem relação com a qualidade do produto ou do serviço ofertado. Tem relação com controle de documentos e com leitura de edital.",
      "Certidão vencida no dia da sessão, atestado de capacidade técnica sem indicação de quantidade ou prazo, planilha de custos que não fecha com o valor global, declaração fora do modelo exigido: todas são falhas de processo interno, não de mérito técnico.",
      "A solução também é de processo. Um responsável pelo controle de validade das certidões, um checklist por edital e uma conferência final feita por outra pessoa antes do envio resolvem a maior parte dos casos.",
      "Proposta inexequível é outro capítulo. Preço muito abaixo do referencial não garante contrato: garante diligência, pedido de justificativa e risco real de desclassificação.",
      "Este conteúdo é informativo e não substitui a análise do caso concreto.",
    ],
    relacionados: ["como-comecar-a-licitar", "gestao-de-contratos-publicos-rotina"],
  },
  {
    slug: "gestao-de-contratos-publicos-rotina",
    titulo: "Gestão de contratos públicos: a rotina que evita sanção",
    categoria: "Gestão de contratos",
    resumo:
      "O contrato assinado é o começo do trabalho. Prazos, registro de ocorrências, aditivos e reajuste exigem rotina, não improviso.",
    data: "2026-03-10",
    leitura: "6 min de leitura",
    paragrafos: [
      "Boa parte dos problemas em contratos administrativos não nasce na execução: nasce da ausência de rotina de acompanhamento. Sem registro, qualquer discussão futura sobre prazo, escopo ou qualidade fica sem base documental.",
      "Do lado da empresa, isso significa manter comunicação formal com a fiscalização, registrar entregas e responder notificações no prazo, com fundamento e sem informalidade por mensagem.",
      "Do lado do órgão, significa designar fiscal e gestor com atribuições claras, manter histórico de ocorrências e controlar marcos de prorrogação, reajuste e repactuação antes do vencimento, não depois.",
      "Aditivos e reequilíbrio econômico-financeiro exigem demonstração técnica. Pedido genérico tende a ser indeferido — e o indeferimento costuma decorrer da falta de comprovação, não da falta de direito.",
      "Este conteúdo é informativo e não substitui a análise do caso concreto.",
    ],
    relacionados: ["lei-14133-o-que-muda-na-pratica", "erros-que-tiram-empresas-da-disputa"],
  },
];

export function getArtigo(slug: string) {
  return artigos.find((a) => a.slug === slug);
}

export const opcoesInteresse = [
  "Consultoria",
  "Capacitação",
  "Palestra",
  "Parecer técnico",
  "Plataforma",
  "Mentoria",
  "Material gratuito",
  "Outro",
] as const;
