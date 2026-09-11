<template>
  <section class="min-h-screen py-32 px-4 bg-black relative overflow-hidden flex items-center">
    <!-- Background Effect -->
    <BackgroundEffect />

    <!-- Background pattern sutil -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <div v-if="product" class="max-w-3xl mx-auto text-center">
        <!-- Logo ou Ícone -->
        <div class="flex justify-center mb-8" data-scroll="scale-up" data-delay="1">
          <img v-if="product.logo" :src="product.logo" :alt="product.name" class="h-16 w-auto object-contain">
          <div v-else class="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
            </svg>
          </div>
        </div>

        <!-- Nome + Badge -->
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-scroll="blur" data-delay="2">
          <span v-if="!product.logo">{{ product.name }}</span>
          <span v-if="product.badge" class="ml-3 align-middle text-sm font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">{{ product.badge }}</span>
        </h1>

        <!-- Tagline -->
        <p class="text-xl text-purple-400 font-semibold mb-8" data-scroll="fade-up" data-delay="3">
          {{ product.tagline }}
        </p>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" data-scroll="scale" data-delay="3"></div>

        <!-- Descrição -->
        <p class="text-lg text-gray-300 leading-relaxed mb-4" data-scroll="fade-up" data-delay="4">
          {{ product.description }}
        </p>
        <p class="text-sm text-gray-500 mb-12" data-scroll="fade-up" data-delay="4">
          Mais detalhes sobre este produto em breve.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-scroll="scale-up" data-delay="5">
          <a
            :href="product.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            Acessar {{ product.name }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="https://wa.me/5548991144161"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            Falar com a Eknotech
          </a>
        </div>
      </div>

      <!-- Fallback: produto não encontrado -->
      <div v-else class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-white mb-4">Produto não encontrado</h1>
        <p class="text-gray-400 mb-8">Não encontramos o produto que você está procurando.</p>
        <router-link to="/#produtos" class="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300">
          Ver Nossos Produtos
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { getProductBySlug } from '@/data/products'
import BackgroundEffect from '../components/BackgroundEffect/BackgroundEffect.vue'

const route = useRoute()
const product = computed(() => getProductBySlug(route.params.slug))

const { initScrollAnimations, cleanup } = useScrollAnimation()

const runAnimations = () => {
  nextTick(() => {
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  })
}

onMounted(runAnimations)
watch(() => route.params.slug, runAnimations)

onUnmounted(() => {
  cleanup()
})
</script>
