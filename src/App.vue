<template>
  <div>
    <SplashScreen @complete="onSplashComplete" />
    <div v-show="showContent" class="min-h-screen bg-black text-white">
      <NavBar />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import SplashScreen from './components/SplashScreen/SplashScreen.vue'
import NavBar from './components/NavBar/NavBar.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection.vue'
import ServicesSection from './components/ServicesSection/ServicesSection.vue'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection.vue'
import CtaSection from './components/CtaSection/CtaSection.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'
import { useScrollNavigation } from './composables/useScrollNavigation'

const showContent = ref(false)
const { init, cleanup } = useScrollNavigation()

const onSplashComplete = () => {
  showContent.value = true
  // Inicializar navegação por scroll após o conteúdo ser exibido
  setTimeout(() => {
    init()
  }, 100)
}

// Função para reiniciar página (voltar ao topo e reiniciar animações)
const restartPage = () => {
  // Scroll suave para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // Limpar hash da URL
  window.history.replaceState(null, null, window.location.pathname)

  // Reiniciar animações após scroll
  setTimeout(() => {
    // Remover e readicionar classes de animação
    const elementsWithScroll = document.querySelectorAll('[data-scroll]')
    elementsWithScroll.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'

      setTimeout(() => {
        el.style.opacity = ''
        el.style.transform = ''
      }, 50)
    })
  }, 500)
}

// Prover função para componentes filhos
provide('restartPage', restartPage)

onMounted(() => {
  // Navegação por scroll inicializada
})

onUnmounted(() => {
  cleanup()
})
</script>