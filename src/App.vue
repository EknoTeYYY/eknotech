<template>
  <div>
    <SplashScreen @complete="onSplashComplete" />
    <div v-show="showContent" class="min-h-screen bg-black text-white">
      <NavBar />
      <router-view />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SplashScreen from './components/SplashScreen/SplashScreen.vue'
import NavBar from './components/NavBar/NavBar.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'

const showContent = ref(false)
const router = useRouter()
const route = useRoute()

const onSplashComplete = () => {
  showContent.value = true
}

// Função para reiniciar página (voltar para o topo/home e reiniciar animações)
const restartPage = () => {
  const goHomeAndReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setTimeout(() => {
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

  if (route.path !== '/') {
    router.push('/').then(goHomeAndReset)
  } else {
    goHomeAndReset()
  }
}

// Prover função para componentes filhos
provide('restartPage', restartPage)
</script>
