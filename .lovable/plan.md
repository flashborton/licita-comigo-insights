# Plano de construção — Site institucional Licita Comigo

## Decisões tomadas

- **Cor de destaque:** dourado sóbrio (`#b5945f`) sobre navy/grafite. Transmite autoridade e tradição jurídica sem cair em clichês.
- **Armazenamento de leads:** banco de dados via Lovable Cloud (Supabase), com tabela `leads` e RLS.
- **Contatos:** usar placeholders visíveis entre colchetes até o Artur fornecer os dados reais.
- **Blog:** página `/conteudo` como lista + páginas individuais de artigo (`/conteudo/$slug`).

## Escopo

Site institucional em PT-BR para Artur Moura dos Reis, advogado e especialista em licitações e contratos públicos. Públicos: empresário iniciante, empresa que já licita e agente público. Tom sóbrio, didático e sem juridiquês vazio.

## Páginas

1. `/` — Home
2. `/sobre`
3. `/servicos`
4. `/mentoria`
5. `/portfolio`
6. `/recursos`
7. `/produtos`
8. `/conteudo`
9. `/conteudo/$slug` — artigo individual
10. `/contato`
11. `/obrigado`
12. `/privacidade`

## Design

- Visual navy/grafite + dourado sóbrio, limpo, mobile-first.
- Sem martelo/balança genéricos.
- Tipografia legível, hierarquia clara, CTAs evidentes.
- Componentes reutilizáveis: Navbar, Footer, LeadForm, WhatsAppFloat, SocialLinks, ServiceCard, ResourceCard, ProductCard, ArticleCard.

## Estrutura da Home

1. Hero com headline, subheadline de insider e CTAs "Sou empresa" / "Sou agente público".
2. Faixa de credibilidade: OAB-SP 356.893, 15+ anos, ex-Diretor Licitações e Contratos, Licita Comigo.
3. Para quem é (3 cards).
4. Problema → solução.
5. Como funciona (4 passos).
6. Mentoria em destaque (1 CTA).
7. Portfólio resumido (3 itens reais do CV, sem inventar cliente).
8. Recursos grátis (3 cards).
9. Conteúdo (3 artigos placeholder).
10. Produtos (2 cards placeholder Hotmart/ebook).
11. Canais + grupo WhatsApp.
12. Formulário curto de lead.
13. Footer.

## Backend (Lovable Cloud)

- Ativar Lovable Cloud.
- Criar tabela `leads` com colunas: nome, e-mail, WhatsApp, perfil (empresa/agente_público/outro), objetivo, mensagem, origem (contato/mentoria/recursos/produtos/etc.), aceite LGPD, criado_em.
- RLS: inserção pública, leitura apenas por administrador (via service_role futuramente).
- Server functions para salvar lead e retornar lista de artigos/recursos/produtos (conteúdo estático inicialmente, mas via server fn para facilitar expansão).

## Conteúdo e restrições

- Textos em PT-BR, realistas, baseados nos dados fornecidos.
- Proibido inventar clientes, logos, preços, jurisprudência ou depoimentos falsos.
- Onde faltar URL real, usar placeholder visível entre colchetes.

## SEO

- `head()` em cada rota com title/description/og:title/og:description únicos.
- `og:type` por página.
- Canonical e og:url auto-referentes.
- Sem `og:image` genérico; usar só se houver imagem absoluta real.

## Ordem de implementação

1. Configurar design tokens (navy, grafite, dourado) no `src/styles.css`.
2. Criar componentes reutilizáveis.
3. Ativar Lovable Cloud e criar tabela/migration `leads`.
4. Criar server functions para salvar leads.
5. Implementar rotas na ordem: home, sobre, serviços, mentoria, portfólio, recursos, produtos, conteúdo (lista + slug), contato, obrigado, privacidade.
6. Ajustar `__root.tsx` com header, menu e footer compartilhados.
7. Revisar SEO e responsividade.
