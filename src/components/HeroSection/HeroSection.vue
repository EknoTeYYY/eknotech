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
        <span class="title-word">Marketing</span>
        <span class="title-word">e</span>
        <span class="title-word">tecnologia</span>
        <span class="title-word">para</span>
        <span class="title-word">imobiliárias</span>
        <span class="title-word">venderem</span>
        <span class="title-word">mais</span>
      </h1>

      <!-- Subtítulo -->
      <p class="hero-subtitle" data-scroll="fade-up" data-delay="3">
        Vídeos profissionais dos seus imóveis e tráfego pago que gera leads todos os dias.<br>
        Atendimento com IA 24/7 e gestão de contratos.<br>
        Um ecossistema completo de growth em um só parceiro.
      </p>

      <!-- CTAs -->
      <div class="cta-buttons" data-scroll="scale-up" data-delay="4">
        <a href="#contato" class="btn-primary">
          Agendar Diagnóstico Gratuito
        </a>
        <a href="#como-funciona" class="btn-secondary">
          Ver Como Funciona
        </a>
      </div>

      <!-- Companies Carousel -->
      <div class="companies-carousel-inline" data-scroll="fade-up" data-delay="5">
        <div class="carousel-wrapper-inline">
          <div class="carousel-track-inline">
            <div class="company-item-inline" v-for="(company, index) in companies" :key="`first-${index}`">
              <img :src="company.icon" :alt="company.name" class="company-icon" draggable="false">
              <span class="company-name">{{ company.name }}</span>
            </div>
            <div class="company-item-inline" v-for="(company, index) in companies" :key="`second-${index}`">
              <img :src="company.icon" :alt="company.name" class="company-icon" draggable="false">
              <span class="company-name">{{ company.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect.vue'

const { initScrollAnimations, cleanup: cleanupScrollAnimations } = useScrollAnimation()

const companies = ref([
  {
    name: 'Precifico.ai',
    icon: '/precifico.ia.jpeg'
  },
  {
    name: 'Studio Antic',
    icon: '/antic.png'
  },
  {
    name: 'CJR Empreendimentos',
    icon: '/cjrempreendimentos.png'
  },
  {
    name: 'Freelaworks',
    icon: '/freelaworks.svg'
  },
  {
    name: 'Gedfy',
    icon: '/Gedfy.png'
  }
])

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