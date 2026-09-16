<template>
  <section id="produtos" class="min-h-screen flex flex-col justify-center py-16 px-4 bg-black relative overflow-hidden">
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
          <span class="text-white">Nossos</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> Produtos</span>
        </h2>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" data-scroll="scale" data-delay="2"></div>

        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-scroll="fade-up" data-delay="3">
          <span class="text-purple-400 font-semibold">Tecnologia e IA que viram produto.</span><br>
          Desenvolvidos e mantidos pela Eknotech.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- Produto 1: Gedfy -->
        <div class="group relative" data-scroll="scale-up" data-delay="1">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Logo -->
            <div class="h-12 mb-4 flex items-center group-hover:scale-105 transition-transform duration-300 origin-left">
              <img src="/gedfy-logo-branca.png" alt="Gedfy" class="h-10 w-auto object-contain">
            </div>

            <p class="text-sm text-purple-400 font-medium mb-3">Gestão de contratos com IA</p>
            <p class="text-gray-400 leading-relaxed mb-4 flex-grow">
              Centraliza contratos com IA: contexto certo via RAG, notificações inteligentes, assinatura digital e workspaces por time.
            </p>

            <router-link to="/produtos/gedfy" class="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 inline-flex items-center">
              Conhecer produto
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Produto 2: Athelium -->
        <div class="group relative" data-scroll="scale-up" data-delay="2">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Logo -->
            <div class="h-12 mb-4 flex items-center group-hover:scale-105 transition-transform duration-300 origin-left">
              <img src="/athelium-logo-branca.png" alt="Athelium" class="h-10 w-auto object-contain">
            </div>

            <p class="text-sm text-purple-400 font-medium mb-3">Centralizador de contexto para IA</p>
            <p class="text-gray-400 leading-relaxed mb-4 flex-grow">
              Documenta os processos da sua empresa e libera esse contexto para conectar, via MCP, a qualquer modelo de IA.
            </p>

            <router-link to="/produtos/athelium" class="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 inline-flex items-center">
              Conhecer produto
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Produto 3: Gridgen -->
        <div class="group relative" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-6 rounded-2xl border border-purple-500/20 h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Badge: mais recente -->
            <div class="absolute -top-3 right-6 px-3 py-1 bg-purple-600 rounded-full">
              <span class="text-xs font-semibold text-white">Novo</span>
            </div>

            <!-- Logo -->
            <div class="h-12 mb-4 flex items-center group-hover:scale-105 transition-transform duration-300 origin-left">
              <img src="/gridgen-logo-branca.png" alt="Gridgen" class="h-10 w-auto object-contain">
            </div>

            <p class="text-sm text-purple-400 font-medium mb-3">Criação de conteúdo para redes sociais com IA</p>
            <p class="text-gray-400 leading-relaxed mb-4 flex-grow">
              Cria publicações para Instagram, Facebook, LinkedIn e TikTok com calendário editorial e o contexto da sua marca.
            </p>

            <router-link to="/produtos/gridgen" class="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 inline-flex items-center">
              Conhecer produto
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Faixa de tecnologias -->
      <div class="max-w-6xl mx-auto mt-6" data-scroll="fade-up" data-delay="4">
        <div class="relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div class="relative bg-gray-900/90 rounded-2xl border border-purple-500/20 p-5 text-center">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-3">Tecnologias no core do portfólio</p>
            <div class="flex flex-wrap items-center justify-center gap-2.5">
              <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">LLMs</span>
              <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">RAG</span>
              <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">Automação</span>
              <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">Agentes de IA</span>
              <span class="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">Integrações via API</span>
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

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-700 {
  animation-delay: 700ms;
}
</style>
