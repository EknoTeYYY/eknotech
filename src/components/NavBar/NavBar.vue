<template>
  <!-- Menu -->
  <header class="topo">
    <div class="wrap">
      <a href="#" class="logo" @click.prevent="irParaTopo">
        <img src="/logo-roxa.png" alt="eknotech" draggable="false">
      </a>
      <nav>
        <a href="#" :class="{ ativo: !secaoAtiva }" @click.prevent="irParaTopo">Início</a>
        <a v-for="link in links" :key="link.href" :href="link.href" :class="{ ativo: secaoAtiva === link.href }">{{ link.label }}</a>
      </nav>
      <div class="acoes-topo">
        <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="btn btn-primario btn-pilula">Fale Conosco</a>
        <button class="menu-btn" :aria-expanded="aberto" aria-label="Abrir menu" @click="aberto = !aberto">
          <i :class="aberto ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>
    <div class="menu-mobile" :class="{ aberto }">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="aberto = false">{{ link.label }}</a>
      <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="roxo" @click="aberto = false">Fale Conosco pelo WhatsApp</a>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import { WHATSAPP } from '@/data/contato'
import { MENU as links } from '@/data/menu'

const aberto = ref(false)
const secaoAtiva = ref('')
const restartPage = inject('restartPage', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

const irParaTopo = () => {
  aberto.value = false
  restartPage()
}

// Marca no menu a seção que está na tela
const atualizarAtiva = () => {
  const y = window.scrollY + 120
  let atual = ''
  for (const link of links) {
    const el = document.querySelector(link.href)
    if (el && el.offsetTop <= y) atual = link.href
  }
  // no fim da página, a última seção (Contato) não chega ao topo da tela
  const noFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  secaoAtiva.value = noFim ? links[links.length - 1].href : atual
}

onMounted(() => {
  window.addEventListener('scroll', atualizarAtiva, { passive: true })
  atualizarAtiva()
})

onUnmounted(() => {
  window.removeEventListener('scroll', atualizarAtiva)
})
</script>
