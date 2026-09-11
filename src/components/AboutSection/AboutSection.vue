<template>
  <section id="quem-somos" class="min-h-screen flex flex-col justify-center pt-16 pb-6 px-4 bg-black relative overflow-hidden">
    <!-- Background Effect -->
    <BackgroundEffect />

    <!-- Background pattern sutil -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-scroll="blur" data-delay="1">
          <span class="text-white">Quem</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> Somos</span>
        </h2>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" data-scroll="scale" data-delay="2"></div>

        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-scroll="fade-up" data-delay="3">
          Somos a empresa de tecnologia e IA por trás de
          <span class="text-purple-400 font-semibold">Gedfy, Athelium e Gridgen</span>,
          produtos que desenvolvemos, mantemos e evoluímos continuamente.
        </p>
      </div>

      <!-- Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- Pilar 1: Produtos Próprios -->
        <div class="group relative" data-scroll="scale-up" data-delay="1">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-3">Produtos Próprios</h3>
            <p class="text-gray-400 leading-relaxed">
              Não trabalhamos sob encomenda. Cada produto do nosso portfólio nasce, cresce e evolui dentro da Eknotech.
            </p>
          </div>
        </div>

        <!-- Pilar 2: Tecnologia e IA no Core -->
        <div class="group relative" data-scroll="scale-up" data-delay="2">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-3">Tecnologia e IA no Core</h3>
            <p class="text-gray-400 leading-relaxed">
              LLMs, automação inteligente e agentes de IA são a base de tudo o que construímos.
            </p>
          </div>
        </div>

        <!-- Pilar 3: Um Portfólio, Um Time -->
        <div class="group relative" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-3">Um Portfólio, Um Time</h3>
            <p class="text-gray-400 leading-relaxed">
              Gedfy, Athelium e Gridgen compartilham o mesmo time, o mesmo padrão de qualidade e a mesma visão de produto.
            </p>
          </div>
        </div>

      </div>

      <!-- Faixa de números -->
      <div class="max-w-6xl mx-auto mt-6" data-scroll="fade-up" data-delay="4">
        <div class="relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div class="relative bg-gray-900/90 rounded-2xl border border-purple-500/20 grid grid-cols-2 md:grid-cols-4 divide-y divide-purple-500/10 md:divide-y-0 md:divide-x md:divide-purple-500/10">
            <div class="p-5 text-center">
              <p class="text-2xl font-bold text-white">2024</p>
              <p class="text-gray-400 text-sm mt-1">Fundação</p>
            </div>
            <div class="p-5 text-center">
              <p class="text-2xl font-bold text-white">Florianópolis</p>
              <p class="text-gray-400 text-sm mt-1">Onde estamos</p>
            </div>
            <div class="p-5 text-center">
              <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">3</p>
              <p class="text-gray-400 text-sm mt-1">Produtos ativos</p>
            </div>
            <div class="p-5 text-center">
              <p class="text-2xl font-bold text-white">B2B</p>
              <p class="text-gray-400 text-sm mt-1">Foco do portfólio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect.vue'

const { initScrollAnimations, cleanup } = useScrollAnimation()

onMounted(() => {
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onUnmounted(() => {
  cleanup()
})
</script>
