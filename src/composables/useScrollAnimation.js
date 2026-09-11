import { onMounted, onUnmounted } from 'vue'

/**
 * Composable simples para animações de scroll com Intersection Observer
 * Muito mais leve e confiável que GSAP
 */
export function useScrollAnimation() {
  let observer = null

  const initScrollAnimations = () => {
    // Configuração do observer - quando 20% do elemento está visível
    // rootMargin baixo (não -100px): com o snap-scroll pulando direto para o
    // topo de cada seção (em vez de rolar gradualmente), um elemento que caia
    // nos últimos ~100px da tela nunca seria considerado "visível" e ficaria
    // preso em opacity:0 para sempre.
    const observerOptions = {
      threshold: 0.2, // 20% do elemento precisa estar visível
      rootMargin: '0px 0px -20px 0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona classe quando elemento entra na viewport
          entry.target.classList.add('is-visible')
          // Não desanexa - elemento fica visível permanentemente
        }
      })
    }, observerOptions)

    // Observa todos os elementos com data-scroll
    const elementsToAnimate = document.querySelectorAll('[data-scroll]')
    elementsToAnimate.forEach(el => observer.observe(el))
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    initScrollAnimations,
    cleanup
  }
}
