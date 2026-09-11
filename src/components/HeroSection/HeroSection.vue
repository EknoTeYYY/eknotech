<template>
  <section id="hero" class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    <!-- Background Effect -->
    <BackgroundEffect />

    <!-- Grade de fundo com efeito de profundidade -->
    <div class="grid-overlay"></div>

    <!-- Conteúdo centralizado -->
    <div class="hero-content relative z-10 text-center max-w-5xl mx-auto" data-scroll="blur">
      <!-- Título principal -->
      <h1 class="hero-title" data-scroll="fade-up" data-delay="2">
        <span class="title-word">Tecnologia</span>
        <span class="title-word">e</span>
        <span class="title-word">IA</span>
        <span class="title-word">para</span>
        <span class="title-word">empresas</span>
        <span class="title-word">crescerem</span>
      </h1>

      <!-- Subtítulo -->
      <p class="hero-subtitle" data-scroll="fade-up" data-delay="3">
        Somos a empresa de tecnologia e IA por trás de Gedfy, Athelium e Gridgen.<br>
        Produtos próprios que automatizam processos e resolvem problemas reais.
      </p>

      <!-- CTAs -->
      <div class="cta-buttons" data-scroll="scale-up" data-delay="4">
        <router-link to="/#contato" class="btn-primary">
          Falar com a Eknotech
        </router-link>
        <router-link to="/#produtos" class="btn-secondary">
          Ver Nossos Produtos
        </router-link>
      </div>

      <!-- Products Strip -->
      <div class="companies-carousel-inline" data-scroll="fade-up" data-delay="5">
        <div class="carousel-wrapper-inline">
          <div class="carousel-track-inline">
            <router-link
              :to="`/produtos/${product.slug}`"
              class="company-item-inline"
              v-for="(product, index) in carouselItems"
              :key="index"
            >
              <img v-if="product.logo" :src="product.logo" :alt="product.name" class="company-logo-strip">
              <template v-else>
                <span class="company-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
                  </svg>
                </span>
                <span class="company-name">{{ product.name }}</span>
              </template>
            </router-link>
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
import { products } from '@/data/products'

// Repete a lista várias vezes para garantir que o loop infinito do carrossel
// nunca exponha um vão vazio, mesmo em telas largas
const carouselItems = Array.from({ length: 8 }, () => products).flat()

const { initScrollAnimations, cleanup: cleanupScrollAnimations } = useScrollAnimation()

onMounted(() => {
  // Initialize CSS-based scroll animations
  setTimeout(() => {
    initScrollAnimations()
  }, 2500) // Aguarda 2.5s para o splash screen terminar
})

onUnmounted(() => {
  cleanupScrollAnimations()
})
</script>

<style scoped>
@import './HeroSection.css';
</style>