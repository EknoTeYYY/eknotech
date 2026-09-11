import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPage from '../views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos/:slug',
      name: 'product',
      component: ProductPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // "instant" (não "smooth"): o CSS global tem `scroll-behavior: smooth`
      // no html, então um scroll "smooth" aqui ficaria animando por ~700-900ms,
      // dando margem para o useSectionSnapScroll (que liga seu listener de
      // wheel ~100ms após o mount) ler o scroll "no meio do caminho" e calcular
      // a seção errada caso o usuário role durante essa janela.
      //
      // Espera ativa até a seção existir E estar de fato visível/renderizada
      // (não só presente no DOM) antes de resolver — necessário pra navegação
      // vinda de outra rota (ex: clicar em "Contato" a partir de uma página
      // de produto), onde a HomeView acabou de montar e ainda pode não ter
      // layout pronto. `getClientRects()` retorna vazio para elementos sem
      // layout, então serve como sinal de "está realmente visível".
      return new Promise((resolve) => {
        const deadline = Date.now() + 3000
        const check = () => {
          const el = document.querySelector(to.hash)
          const isRendered = el && el.getClientRects().length > 0
          if (isRendered || Date.now() > deadline) {
            resolve({ el: to.hash, behavior: 'instant' })
          } else {
            setTimeout(check, 30)
          }
        }
        check()
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Primeira navegação da aplicação (hard refresh ou primeira visita): remove
// qualquer #hash presente na URL antes de resolver a rota, sempre abrindo no
// topo (#hero).
//
// O hash na barra de endereço só existe porque o useScrollHashSync atualiza a
// URL conforme o usuário rola (pra permitir copiar/colar o link de uma seção
// específica durante a navegação) — não é um pedido explícito de "abrir
// direto nessa seção". Tentar honrar esse hash no carregamento inicial foi a
// origem de toda a instabilidade de scroll: a SplashScreen mantém o conteúdo
// com `v-show=false` por ~2.8s, o que torna o cálculo de posição do
// vue-router não confiável nesse meio tempo, e cada refresh "herdava" a seção
// anterior em vez de reiniciar a experiência do zero — inclusive deixando a
// URL mostrando uma seção diferente da que estava realmente visível na tela.
// Sem essa restauração, cada carregamento de página é sempre um estado limpo
// (URL e scroll consistentes), e a navegação entre seções passa a depender
// 100% do useSectionSnapScroll (rolagem controlada, uma seção por vez).
router.beforeEach((to, from) => {
  if (from === START_LOCATION && to.hash) {
    return { path: to.path, query: to.query, hash: '' }
  }
})

export default router
