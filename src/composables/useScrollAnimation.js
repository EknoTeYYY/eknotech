import { onMounted, onUnmounted } from 'vue'

/**
 * Composable simples para animações de scroll com Intersection Observer
 * Muito mais leve e confiável que GSAP
 */
export function useScrollAnimation() {
  let observer = null

  const initScrollAnimations = () => {
    // Configuração do observer - quando 20% do elemento está visível
    const observerOptions = {
      threshold: 0.2, // 20% do elemento precisa estar visível
      rootMargin: '0px 0px -100px 0px' // Começa a animar um pouco antes
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
