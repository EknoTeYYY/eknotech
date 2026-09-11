/**
 * Faz o scroll "pular" inteiro de uma seção para a próxima/anterior a cada
 * gesto de rolagem (roda do mouse ou trackpad), em vez de deixar a página
 * rolar livremente e mostrar duas seções parcialmente na tela ao mesmo tempo.
 *
 * Implementado em JS (em vez de CSS scroll-snap) porque o comportamento do
 * scroll-snap nativo é inconsistente entre navegadores/dispositivos de
 * entrada (ex: Chrome não resolve o snap de forma confiável com roda de
 * mouse tradicional). Só escuta o evento "wheel", então não interfere no
 * scroll por toque em dispositivos móveis.
 */
export function useSectionSnapScroll(sectionSelectors = []) {
  // Mesmo breakpoint `md` do Tailwind usado no resto do site (NavBar.css).
  // Abaixo dele o layout empilha em coluna única e cada seção passa a ser
  // mais alta que uma tela — o salto "uma seção inteira por gesto" não faz
  // sentido aí, e em telas touch atrapalha o scroll natural (alguns
  // dispositivos híbridos/tablets com mouse/trackpad conectado disparam
  // eventos "wheel" mesmo em layout mobile).
  const MOBILE_QUERY = '(max-width: 768px)'

  // Tempo de "silêncio" (sem novos eventos de wheel) exigido antes de liberar
  // o próximo pulo. Necessário porque um único gesto físico (roda do mouse e,
  // principalmente, trackpad) dispara VÁRIOS eventos "wheel" em sequência,
  // incluindo um rastro de inércia que continua chegando por centenas de ms
  // depois que o usuário já parou de mexer. Destravar no "scrollend" (ou num
  // timer fixo curto) liberava a trava enquanto esse rastro ainda chegava, e
  // cada evento do rastro disparava um novo pulo, encadeando vários pulos a
  // partir de um único gesto do usuário.
  const QUIET_MS = 250
  // Teto de segurança pra essa trava: cada evento bloqueado empurra a
  // liberação mais pra frente (scheduleUnlock), então "spamar" a roda sem
  // nenhuma pausa maior que QUIET_MS nunca deixava o timer de silêncio
  // disparar — só o teto de segurança soltava a trava, e como era 2s, dava a
  // sensação de tela travada enquanto o usuário continuava rolando.
  //
  // Existe uma troca aqui: um teto curto demais deixa um rastro de inércia
  // real (trackpad) vazar um pulo extra indesejado se durar mais que isso;
  // um teto longo demais (como os 2s originais) parece travado durante um
  // "spam" prolongado. 800ms cobre a grande maioria dos rastros de inércia
  // reais (que na prática somem bem antes disso) e ainda corta a espera
  // "travada" a menos da metade do valor original.
  const MAX_LOCK_MS = 800

  let isAnimating = false
  let quietTimer = null
  let hardCapTimer = null
  let mediaQuery = null
  let isWheelListenerActive = false

  // Índice da seção "atual", rastreado diretamente em vez de recalculado a
  // partir de window.scrollY a cada evento. Recalcular pela posição de
  // scroll fica ambíguo perto do fim da página: quando o conteúdo restante
  // (#contato + footer) é mais curto que a viewport, o navegador não
  // consegue rolar o suficiente pra alinhar a seção-alvo no topo (scroll
  // "clampado" no máximo possível), e a posição final fica mais curta que o
  // offsetTop real da seção — fazendo o cálculo por posição achar que ainda
  // está numa seção anterior. Como é a própria aplicação quem decide o alvo
  // de cada salto, não há motivo pra "adivinhar" de novo depois olhando pra
  // scrollY: só avançamos ou recuamos esse índice em 1, de forma
  // determinística.
  let currentIndex = 0

  const getSections = () =>
    sectionSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)

  const unlock = () => {
    isAnimating = false
    clearTimeout(quietTimer)
    clearTimeout(hardCapTimer)
  }

  const scheduleUnlock = () => {
    clearTimeout(quietTimer)
    quietTimer = setTimeout(unlock, QUIET_MS)
  }

  const handleWheel = (event) => {
    const sections = getSections()
    if (sections.length === 0) return

    if (isAnimating) {
      event.preventDefault()
      // Evento ainda faz parte do mesmo gesto (ex: rastro de inércia):
      // empurra a liberação da trava mais para frente.
      scheduleUnlock()
      return
    }

    const direction = event.deltaY > 0 ? 1 : -1
    const target = Math.min(sections.length - 1, Math.max(0, currentIndex + direction))

    // Já está na primeira/última seção nessa direção: deixa o scroll nativo
    // agir (ex: revelar o rodapé depois da última seção).
    if (target === currentIndex) return

    event.preventDefault()
    isAnimating = true
    currentIndex = target

    sections[target].scrollIntoView({ behavior: 'smooth', block: 'start' })

    scheduleUnlock()
    clearTimeout(hardCapTimer)
    hardCapTimer = setTimeout(unlock, MAX_LOCK_MS)
  }

  // Permite que código externo (ex: um watcher da hash da rota, quando o
  // usuário clica num link da NavBar tipo "/#contato") realinhe o índice
  // rastreado com a navegação real, já que esse tipo de salto não passa pelo
  // handleWheel. Sem isso, depois de um clique desses, o próximo scroll com a
  // roda partiria do índice antigo (ex: ainda "hero") em vez da seção onde o
  // usuário realmente está.
  const syncFromHash = (hash) => {
    if (!hash) {
      currentIndex = 0
      return
    }
    const idx = getSections().findIndex((el) => `#${el.id}` === hash)
    if (idx !== -1) currentIndex = idx
  }

  const enableWheelListener = () => {
    if (isWheelListenerActive) return
    window.addEventListener('wheel', handleWheel, { passive: false })
    isWheelListenerActive = true
  }

  const disableWheelListener = () => {
    if (!isWheelListenerActive) return
    window.removeEventListener('wheel', handleWheel)
    isWheelListenerActive = false
    unlock()
  }

  const handleBreakpointChange = () => {
    if (mediaQuery.matches) {
      disableWheelListener()
    } else {
      enableWheelListener()
    }
  }

  const init = () => {
    mediaQuery = window.matchMedia(MOBILE_QUERY)
    mediaQuery.addEventListener('change', handleBreakpointChange)
    handleBreakpointChange()
  }

  const cleanup = () => {
    disableWheelListener()
    mediaQuery?.removeEventListener('change', handleBreakpointChange)
    clearTimeout(quietTimer)
    clearTimeout(hardCapTimer)
  }

  return {
    init,
    cleanup,
    syncFromHash
  }
}
