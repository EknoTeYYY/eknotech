<template>
  <GrowthHeader :atual="atual" :total="slides.length" />
  <main ref="raiz">
    <component :is="slide" v-for="(slide, i) in slides" :key="i" />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GrowthHeader from './GrowthHeader.vue'
import SlideCapa from './slides/SlideCapa.vue'
import SlideOportunidade from './slides/SlideOportunidade.vue'
import SlideEcossistema from './slides/SlideEcossistema.vue'
import SlideConteudo from './slides/SlideConteudo.vue'
import SlideTrafego from './slides/SlideTrafego.vue'
import SlideAutomacao from './slides/SlideAutomacao.vue'
import SlideContratos from './slides/SlideContratos.vue'
import SlidePlanos from './slides/SlidePlanos.vue'
import SlideImplantacao from './slides/SlideImplantacao.vue'
import SlideContato from './slides/SlideContato.vue'

const slides = [
  SlideCapa, SlideOportunidade, SlideEcossistema, SlideConteudo, SlideTrafego,
  SlideAutomacao, SlideContratos, SlidePlanos, SlideImplantacao, SlideContato
]

const raiz = ref(null)
const atual = ref(0)
let secoes = []
let observer = null

// slide atual = o que ocupa a maior parte da tela (sem ouvir o evento de scroll a cada quadro)
const observar = () => {
  observer = new IntersectionObserver((entradas) => {
    for (const e of entradas) {
      if (e.isIntersecting) atual.value = secoes.indexOf(e.target)
    }
  }, { threshold: 0.55 })
  secoes.forEach((s) => observer.observe(s))
}

// navegação por setas, slide a slide (igual ao /growth anterior)
const teclado = (ev) => {
  const proximo = ['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(ev.key)
  const anterior = ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(ev.key)
  if (!proximo && !anterior) return
  ev.preventDefault()
  const alvo = Math.min(Math.max(atual.value + (proximo ? 1 : -1), 0), secoes.length - 1)
  secoes[alvo].scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  secoes = [...raiz.value.querySelectorAll('.slide')]
  observar()
  document.addEventListener('keydown', teclado)
})

onUnmounted(() => {
  observer?.disconnect()
  document.removeEventListener('keydown', teclado)
})
</script>
