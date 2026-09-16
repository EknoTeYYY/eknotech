export const products = [
  {
    slug: 'gedfy',
    name: 'Gedfy',
    tagline: 'Gestão de contratos com IA',
    description: 'O Gedfy centraliza a gestão de contratos da sua empresa com inteligência artificial. Uma estrutura de RAG garante que cada contrato seja interpretado no contexto correto, com notificações inteligentes sobre prazos e cláusulas relevantes, assinatura digital integrada e workspaces que organizam o acesso por time.',
    url: 'https://gedfy.com.br',
    logo: '/gedfy-logo-branca.png',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    slug: 'athelium',
    name: 'Athelium',
    tagline: 'Centralizador de contexto para IA',
    description: 'O Athelium centraliza o contexto da sua empresa para uso com inteligência artificial. Mapeamos e documentamos os processos do seu negócio e disponibilizamos esse conhecimento para conexão via MCP com qualquer modelo de IA, otimizando resultados e reduzindo o custo de criar contexto do zero a cada novo caso de uso.',
    url: 'https://athelium.com.br',
    logo: '/athelium-logo-branca.png',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    slug: 'gridgen',
    name: 'Gridgen',
    tagline: 'Criação de conteúdo para redes sociais com IA',
    description: 'O Gridgen cria conteúdo para redes sociais em escala com inteligência artificial. A partir do contexto da sua marca, monta um calendário editorial e gera publicações prontas para Instagram, Facebook, LinkedIn e TikTok, padronizando a qualidade dos posts com foco em conversão.',
    url: 'https://gridgen.com.br',
    logo: '/gridgen-logo-branca.png',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    badge: 'Novo'
  }
]

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}
