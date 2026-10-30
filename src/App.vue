<template>
  <div class="lp">
    <NavBar />
    <main>
      <HeroSection />
      <ToolsStrip />
      <ServicesSection />
      <CommitmentsBand />
      <HowItWorksSection />
      <PlansSection />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, provide } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import ToolsStrip from './components/ToolsStrip/ToolsStrip.vue'
import ServicesSection from './components/ServicesSection/ServicesSection.vue'
import CommitmentsBand from './components/CommitmentsBand/CommitmentsBand.vue'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection.vue'
import PlansSection from './components/PlansSection/PlansSection.vue'
import CtaSection from './components/CtaSection/CtaSection.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'
import { useScrollNavigation } from './composables/useScrollNavigation'
import { useScrollAnimation } from './composables/useScrollAnimation'

const { init, cleanup } = useScrollNavigation()
const { initScrollAnimations, cleanup: cleanupAnimations } = useScrollAnimation()

// Logo do menu: volta ao topo e limpa o hash da URL
const restartPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.history.replaceState(null, null, window.location.pathname)
}

provide('restartPage', restartPage)

onMounted(() => {
  init()
  initScrollAnimations()
})

onUnmounted(() => {
  cleanup()
  cleanupAnimations()
})
</script>
