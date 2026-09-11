<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CtaSection />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/HeroSection/HeroSection.vue'
import AboutSection from '../components/AboutSection/AboutSection.vue'
import ServicesSection from '../components/ServicesSection/ServicesSection.vue'
import CtaSection from '../components/CtaSection/CtaSection.vue'
import { useScrollHashSync } from '../composables/useScrollHashSync'
import { useSectionSnapScroll } from '../composables/useSectionSnapScroll'

const route = useRoute()

const { init: initHashSync, cleanup: cleanupHashSync } = useScrollHashSync(['hero', 'quem-somos', 'produtos', 'contato'])
const { init: initSnapScroll, cleanup: cleanupSnapScroll, syncFromHash } = useSectionSnapScroll([
  '#hero',
  '#quem-somos',
  '#produtos',
  '#contato',
  'footer'
])

// Mantém o índice de seção rastreado pelo useSectionSnapScroll alinhado com
// navegações reais (ex: clicar em "Contato" na NavBar), que pulam direto pra
// uma seção sem passar pelo scroll com a roda. `route.hash` só muda por uma
// navegação de verdade do vue-router — o useScrollHashSync atualiza a URL
// via `history.replaceState` direto, sem passar pelo router, então não entra
// em loop com este watcher.
watch(() => route.hash, (hash) => syncFromHash(hash), { immediate: true })

onMounted(() => {
  setTimeout(() => {
    initHashSync()
    initSnapScroll()
  }, 100)
})

onUnmounted(() => {
  cleanupHashSync()
  cleanupSnapScroll()
})
</script>
