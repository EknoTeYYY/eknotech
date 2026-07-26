# CONTEXTO — Página de Apresentação "Growth Imobiliário"

Contexto para criar a tela de apresentação comercial na stack deste projeto.
A referência visual **pronta e aprovada** está em [`public/growth.html`](public/growth.html) —
**o visual deve ser mantido idêntico** (formato de slides, IDV, conteúdo).

## Objetivo

Página de apresentação comercial dos serviços "Growth Imobiliário" da eknotech
(conteúdo, tráfego pago, automação com IA, gestão de contratos + planos), para
ser enviada a prospects como **link** (ex.: `eknotech.com.br/growth`), não como arquivo.

## Stack do projeto (detectada)

- Vue 3.5 + Vite 6 (SPA sem vue-router — `main.js` monta `App.vue` direto)
- Tailwind CSS 3.3 (`tailwind.config.js` já tem as cores da marca e fontes)
- GSAP 3.14 disponível (usar para animações de entrada dos slides, opcional)
- Deploy: build estático (`vite build` → `dist/`)

## Dois caminhos de implementação

### Caminho A — já funciona hoje (zero código)

`public/growth.html` é copiado pro `dist/` no build. Após o deploy, a página
já responde em **`eknotech.com.br/growth.html`**. Para o link limpo `/growth`,
adicionar rewrite na infra (nginx: `location = /growth { try_files /growth.html =404; }`
ou equivalente em Vercel/Netlify).

**Recomendação: usar o Caminho A imediatamente** e migrar pro B com calma.

### Caminho B — integrar na stack (Vue)

1. Instalar `vue-router@4` e criar rotas `/` (LP atual) e `/growth` (apresentação)
2. Criar `src/views/GrowthView.vue` com os 10 slides (estrutura abaixo)
3. Portar o CSS do `growth.html` para Tailwind (tokens abaixo) — o que não for
   trivial em utility classes pode ficar em `<style scoped>`
4. Logo: usar `/logoMenu.png` (já está em `public/`) em vez do base64 embutido

## Design tokens (IDV — manter fiel)

| Token | Valor | Tailwind equivalente |
|-------|-------|---------------------|
| Fundo | `#0b0a14` | custom (`bg-[#0b0a14]`) |
| Superfície (cards) | `#141225` | custom |
| Borda | `#2a2545` | custom |
| Texto | `#f1effa` | custom |
| Texto mudo | `#9d97b8` | custom |
| Roxo marca | `#8b5cf6` | `purple-500` (já no config) |
| Azul marca | `#2563eb` / `#3b82f6` | `blue-600` / `blue-500` |
| Gradiente da marca | `linear-gradient(120deg, #8b5cf6, #3b82f6)` | `from-purple-500 to-blue-500` |
| Título | Poppins 700/800 | `font-heading` (já no config) |
| Corpo | Inter 400–700 | `font-sans` (já no config) |
| Raio dos cards | 18px | `rounded-2xl` (~16px, aceitável) |
| Glow dos slides | radial roxo no topo-direito + azul no rodapé-esquerdo, ~10-13% opacidade | pseudo-elemento |

Padrões visuais recorrentes (ver no HTML):
- **Tag de seção**: pílula roxa translúcida, uppercase, letterspacing largo
- **Título com palavra em gradiente**: `<span>` com `background-clip: text`
- **Checklist**: ✓ em quadrado com gradiente + texto com `<b>` claro e resto mudo
- **Card de plano em destaque**: borda roxa + badge "MAIS ESCOLHIDO" flutuante

## Estrutura dos 10 slides (conteúdo em `public/growth.html`)

1. **Capa** — logo branca, "Growth Imobiliário", subtítulo, site
2. **A oportunidade** — 3 num-cards: Vídeo / R$ 15–35 (CPL Meta) / Minutos
3. **Ecossistema** — 4 cards: Conteúdo 🎬, Tráfego 📈, Automação IA 🤖, Contratos 📄
4. **Criação de Conteúdo** — checklist (4 itens)
5. **Tráfego Pago** — checklist (4 itens)
6. **Automação com IA** — checklist (4 itens)
7. **Gestão de Contratos** — checklist (3 itens)
8. **Planos Growth** — 3 cards de preço (Start R$ 2.500 / **Pro R$ 3.500 destaque** / Max R$ 4.200) + nota da verba de mídia à parte
9. **Implantação em 3 fases** — timeline mês 1/2/3
10. **Contato** — logo + WhatsApp (48) 99114-4161, contato@eknotech.com.br, @eknotech.dev, eknotech.com.br

> Os preços mudam com o tempo — fonte da verdade em
> `c:\Projetos\Automacoes\PRECIFICACAO.md` (seção 7, Combo Growth).

## Comportamentos (manter)

- **Slides fullscreen 16:9**: cada seção `100vh`, `scroll-snap-type: y mandatory`
- **Navegação por teclado**: setas/PageUp/PageDown/espaço rolam entre slides
- **Impressão/PDF**: `@media print` com `page-break-after` por slide e
  `print-color-adjust: exact` (cliente pode salvar PDF via Ctrl+P)
- **Rodapé discreto** nos slides internos: "eknotech · Growth Imobiliário" + mini logo
- GSAP (opcional, caminho B): fade/slide-up dos elementos ao entrar no viewport —
  sutil, sem atrapalhar a leitura

## Meta tags (importante pro envio via WhatsApp)

O link será compartilhado no WhatsApp — o preview importa. Incluir no `<head>`:

```html
<title>Growth Imobiliário — eknotech</title>
<meta name="description" content="Conteúdo, tráfego pago, automação com IA e gestão para o mercado imobiliário. Conheça os planos Growth da eknotech.">
<meta property="og:title" content="Growth Imobiliário — eknotech">
<meta property="og:description" content="Marketing e tecnologia para imobiliárias, construtoras e corretores venderem mais.">
<meta property="og:image" content="https://eknotech.com.br/og-image.png">
<meta property="og:url" content="https://eknotech.com.br/growth">
<meta name="robots" content="noindex">  <!-- material comercial, fora do Google -->
```

## Checklist de publicação

- [ ] Deploy com `public/growth.html` no ar (Caminho A)
- [ ] Rewrite `/growth` → `growth.html` na infra
- [ ] Meta tags OG adicionadas (preview bonito no WhatsApp)
- [ ] Testar no celular (prospects vão abrir no WhatsApp mobile) — os slides são
      responsivos via `clamp()`, mas conferir os cards de plano em tela estreita
- [ ] (Depois) Migrar pro Caminho B com vue-router, mantendo o visual idêntico
