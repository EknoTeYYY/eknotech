<template>
  <section class="companies-section">
    <div class="companies-container">
      <div class="companies-header">
        <p class="companies-title">Empresas que confiam na Eknotech</p>
      </div>

      <div class="carousel-wrapper">
        <div class="carousel-track">
          <!-- Primeiro conjunto de logos -->
          <div class="company-logo" v-for="(company, index) in companies" :key="`first-${index}`">
            <img :src="company.logo" :alt="company.name" draggable="false">
          </div>
          <!-- Duplicar para efeito infinito -->
          <div class="company-logo" v-for="(company, index) in companies" :key="`second-${index}`">
            <img :src="company.logo" :alt="company.name" draggable="false">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const companies = ref([
  {
    name: 'Precifico.ai',
    logo: '/precifico.ia.jpeg'
  },
  {
    name: 'Antic',
    logo: '/antic.png'
  },
  {
    name: 'CJR Empreendimentos',
    logo: '/cjrempreendimentos.png'
  },
  {
    name: 'Freelaworks',
    logo: '/freelaworks.svg'
  },
  {
    name: 'Gedfy',
    logo: '/Gedfy.png'
  }
])
</script>

<style scoped>
@import './CompaniesCarousel.css';
</style>
