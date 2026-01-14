<template>
  <nav class="navbar-wrapper">
    <div class="navbar-floating">
      <div class="navbar-content">
        <!-- Logo -->
        <a href="#" @click.prevent="handleLogoClick" class="navbar-logo" style="cursor: pointer;">
          <img src="../../assets/logoMenu.png" alt="EknoTech" class="logo-img" draggable="false">
        </a>

        <!-- Desktop Navigation -->
        <div class="navbar-links">
          <a href="#como-funciona" class="nav-link">Como Funciona</a>
          <a href="#servicos" class="nav-link">Serviços</a>
          <a href="#depoimentos" class="nav-link">Depoimentos</a>
          <a href="#contato" class="nav-link">Contato</a>
        </div>

        <!-- CTA Button -->
        <div class="navbar-cta">
          <a href="#contato" class="btn-cta-glow">
            <span class="glow-effect"></span>
            <span class="btn-text">Entrar em Contato</span>
          </a>
        </div>

        <!-- Mobile Navigation Button -->
        <div class="mobile-menu-toggle">
          <button @click="isOpen = !isOpen" class="mobile-menu-btn">
            <span class="hamburger-line" :class="{ 'open': isOpen }"></span>
            <span class="hamburger-line" :class="{ 'open': isOpen }"></span>
            <span class="hamburger-line" :class="{ 'open': isOpen }"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <Transition name="dropdown">
        <div v-if="isOpen" class="mobile-dropdown">
          <nav class="mobile-dropdown-nav">
            <a href="#como-funciona" @click="isOpen = false" class="mobile-dropdown-link">Como Funciona</a>
            <a href="#servicos" @click="isOpen = false" class="mobile-dropdown-link">Serviços</a>
            <a href="#depoimentos" @click="isOpen = false" class="mobile-dropdown-link">Depoimentos</a>
            <a href="#contato" @click="isOpen = false" class="mobile-dropdown-link">Contato</a>
            <a href="#contato" @click="isOpen = false" class="mobile-dropdown-cta">Entrar em Contato</a>
          </nav>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue'

const isOpen = ref(false)
const restartPage = inject('restartPage', () => {
  // Fallback se não estiver disponível
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const handleLogoClick = () => {
  isOpen.value = false // Fechar menu mobile se estiver aberto
  restartPage()
}
</script>

<style scoped>
@import './NavBar.css';
</style>