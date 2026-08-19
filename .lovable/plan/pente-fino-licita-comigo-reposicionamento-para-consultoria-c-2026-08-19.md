# Pente fino Licita Comigo — reposicionamento para consultoria + capacitação + plataforma

Sim, é totalmente factível executar tudo no site atual. É uma reformulação grande (nova arquitetura de páginas, reescrita de textos, novo padrão tipográfico), então segue o plano.

## O que muda na estrutura de páginas

Hoje existem: `/`, `/sobre`, `/servicos`, `/mentoria`, `/portfolio`, `/recursos`, `/produtos`, `/conteudo`, `/conteudo/{slug}`, `/contato`, `/obrigado`, `/privacidade`.

Nova arquitetura (menu: Início | Soluções | Capacitação | Plataforma | Biblioteca | Portfólio | Sobre | Contato):

- `/solucoes` — substitui `/servicos` (redirect permanente de `/servicos`)
- `/capacitacao` — nova
- `/plataforma` — nova
- `/biblioteca` — nova, unifica `/recursos` + `/produtos` em abas (Gratuitos | Cursos e ebooks | Artigos); redirects permanentes das duas rotas antigas
- `/termos` — nova
- `/mentoria` — reescrita completa (fica fora do menu principal, linkada do hero, soluções, home e footer)
- `/`, `/sobre`, `/portfolio`, `/conteudo`, `/contato`, `/obrigado`, `/privacidade` — reescritas de conteúdo
- Artigos em `/conteudo/{slug}` mantidos, com interlinks e CTA contextual no fim

## Identidade e tom

- Linha de marca "Licita Comigo — inteligência aplicada em licitações." no hero, sobre, footer e meta descriptions
- Mantra "Simplificando a compra, qualificando a venda." no hero, footer e sobre
- Voz institucional ("a Licita Comigo", "nossa metodologia"), diferencial no método e não na biografia
- Fundador só no `/sobre`, bloco curto de credencial (OAB-SP 356.893 discreto). Remoção de qualquer leitura de escritório de advocacia, honorários ou promessa de resultado
- Remoção da linha do tempo completa de cargos; a experiência migra para o Portfólio em formato institucional

## WhatsApp

- Número real 11 99221-0423 / `https://wa.me/5511992210423` substitui todos os placeholders
- Mensagens pré-preenchidas por contexto (geral, mentoria, plataforma, capacitação, parecer técnico) via helper único
- Botão flutuante e CTA de header ("Solicitar proposta" → formulário; WhatsApp em segundo CTA)
- Redes com as URLs corretas (Instagram, TikTok, YouTube, LinkedIn). Grupo de WhatsApp fica como "em breve" (botão desabilitado) até você enviar o link

## Tipografia e visual

- Escala nova: H1 40–48px, H2 32–36px, body 16–18px, eyebrow/mantra mínimo 16px com tracking amplo
- Nada relevante em `text-xs`; espaçamento `py-16 md:py-24` em todas as seções
- Paleta navy/grafite + dourado mantida, cards limpos, botões com contraste forte
- Imagens sóbrias geradas (escritório, reunião de consultoria, capacitação/sala de treinamento, cena institucional para hero), com alt text. Sem martelo/balança. Foto do fundador: precisa que você envie — até lá, bloco de credencial sem foto

## Conteúdo por página

- **Home**: as 14 seções na ordem pedida, incluindo faixa de credibilidade com placeholders `[N_...]`, bloco Plataforma, prova social (números + resultados anonimizados + 3 depoimentos anonimizados por setor/porte/UF), transparência de investimento e formulário de proposta
- **Soluções**: 6 cards (consultoria empresas, consultoria órgãos, pareceres técnicos, mentoria, plataforma, palestras) + seção `#investimento` com os 5 formatos de contratação, sem preço fechado, e microcopy de proposta
- **Mentoria**: reescrita com os 9 blocos (é/não é, o que não é, método numerado, incluso/fora, investimento sob proposta, FAQ com 10 perguntas e respostas longas, formulário + WhatsApp)
- **Capacitação**: públicos (gestores, agentes de contratação, pregoeiros, fiscais), formatos in company/turmas/palestras/imersões, tom de conformidade e segurança procedimental
- **Plataforma**: título e sub pedidos, toggle Para o órgão | Para a empresa com as funcionalidades listadas, status "em desenvolvimento", aviso de humano no loop e formulário de lista de interesse
- **Biblioteca**: 3 materiais gratuitos (checklist de habilitação, guia da primeira licitação, 7 erros que desclassificam) + pack de prompts como 4º, fluxo de captação com promessa de envio, cursos/ebooks com `[LINK_HOTMART]` / `[LINK_EBOOK]`, aba de artigos
- **Portfólio**: intro sóbria, experiência verificável (CREF4/SP, SEADESP, CREF-PR e CREF-MS, Arnold South America 2023, consultoria desde 2015), números com placeholders, 4 resultados anonimizados no formato Setor · Porte · UF · Desafio · Intervenção · Resultado, 3 depoimentos anonimizados
- **Sobre**: nova ordem (a empresa → método/insider → empresas e Administração → fundador curto → CTA)
- **Contato**: campos ampliados (nome, organização, e-mail, WhatsApp, perfil, interesse com 8 opções, mensagem, LGPD) + microcopy obrigatória de retorno em 1 dia útil
- **Obrigado**: confirmação, prazo, botão WhatsApp, link para material/artigo, CTA suave
- **Privacidade** revista e **Termos** nova

## SEO

Title e description únicos por página com os termos indicados, H1 único, slugs em PT, interlinks artigos ↔ soluções ↔ mentoria ↔ capacitação ↔ biblioteca, alt text nas imagens, redirects 301 das rotas antigas.

## Parte técnica

- `src/lib/site.ts` reescrito: contatos reais, novo menu, helper `waLink(contexto)`, dados de soluções/capacitação/plataforma/biblioteca/portfólio/depoimentos, e um bloco único de números editáveis com placeholders
- `src/styles.css`: nova escala tipográfica e utilitários de seção
- Componentes: `Navbar` e `Footer` reescritos; novos `Tabs` na Biblioteca, toggle na Plataforma, `TestimonialCard`, `CaseCard`, `MetricStrip`, `InvestmentCard`
- `LeadForm` ganha campos organização e interesse, microcopy fixa e variação por origem; migração adiciona as colunas `organizacao` e `interesse` na tabela `leads` (nullable, sem quebrar registros atuais)
- Rotas antigas `/servicos`, `/recursos`, `/produtos` passam a redirecionar via `beforeLoad` para as novas

## Pendências suas (ficam como placeholder visível)

Link do grupo de WhatsApp, links Hotmart/ebook, foto do fundador, números reais de editais/sessões/capacitações e taxa de êxito em recursos.
