import { onMounted, onUnmounted } from 'vue'

export function useScrollNavigation() {
  let isScrolling = false

  // Smooth scroll para âncoras
  const scrollToSection = (sectionId) => {
    if (isScrolling) return

    const element = document.querySelector(sectionId)
    if (!element) return

    isScrolling = true

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Reset flag após a animação de scroll
    setTimeout(() => {
      isScrolling = false
    }, 1000)
  }

  // Atualizar URL baseado na posição do scroll
  const updateUrlOnScroll = () => {
    const sections = [
      { id: 'hero', element: document.querySelector('.hero-section') },
      { id: 'como-funciona', element: document.querySelector('#como-funciona') },
      { id: 'servicos', element: document.querySelector('#servicos') },
      { id: 'planos', element: document.querySelector('#planos') },
      { id: 'contato', element: document.querySelector('#contato') }
    ]

    const scrollPosition = window.scrollY + 100 // offset

    for (const section of sections) {
      if (!section.element) continue

      const rect = section.element.getBoundingClientRect()
      const offsetTop = window.scrollY + rect.top
      const offsetBottom = offsetTop + rect.height

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        const newHash = section.id === 'hero' ? '' : `#${section.id}`
        if (window.location.hash !== newHash) {
          if (newHash) {
            window.history.replaceState(null, null, newHash)
          } else {
            window.history.replaceState(null, null, window.location.pathname)
          }
        }
        break
      }
    }
  }

  // Debounce para otimizar performance
  let scrollTimeout
  const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(updateUrlOnScroll, 100)
  }

  // Interceptar cliques em links âncora
  const handleAnchorClick = (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || href === '#') return

    e.preventDefault()
    scrollToSection(href)
  }

  // Inicializar
  const init = () => {
    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Adicionar listener para cliques em links âncora
    document.addEventListener('click', handleAnchorClick)

    // Scroll inicial se houver hash na URL
    if (window.location.hash) {
      setTimeout(() => {
        scrollToSection(window.location.hash)
      }, 100)
    }
  }

  // Limpar listeners
  const cleanup = () => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleAnchorClick)
    clearTimeout(scrollTimeout)
  }

  return {
    init,
    cleanup,
    scrollToSection
  }
}
