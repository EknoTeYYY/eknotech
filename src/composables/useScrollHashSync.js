/**
 * Atualiza o hash da URL conforme o usuário rola a página, sem disparar
 * navegação do vue-router (evita brigar com o scrollBehavior/smooth scroll).
 */
export function useScrollHashSync(sectionIds = []) {
  let scrollTimeout = null

  const updateHashOnScroll = () => {
    const scrollPosition = window.scrollY + 120 // offset

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (!element) continue

      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        const newHash = id === 'hero' ? '' : `#${id}`
        const newUrl = newHash ? `${window.location.pathname}${newHash}` : window.location.pathname

        if (window.location.hash !== newHash) {
          window.history.replaceState(null, '', newUrl)
        }
        break
      }
    }
  }

  const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(updateHashOnScroll, 100)
  }

  const init = () => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }

  const cleanup = () => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(scrollTimeout)
  }

  return {
    init,
    cleanup
  }
}
