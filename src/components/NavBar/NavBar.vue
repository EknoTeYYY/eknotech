<template>
  <nav class="navbar-wrapper">
    <div class="navbar-floating">
      <div class="navbar-content">
        <!-- Logo -->
        <a href="#" @click.prevent="handleLogoClick" class="navbar-logo" style="cursor: pointer;">
          <img src="../../assets/logoMenu.png" alt="EknoTech" class="logo-img" draggable="false">
        </a>

        <!-- Desktop Navigation -->
        <div class="navbar-links" ref="desktopNavRef">
          <router-link to="/#quem-somos" class="nav-link">Quem Somos</router-link>

          <div class="nav-dropdown">
            <button
              type="button"
              class="nav-dropdown-trigger"
              :class="{ 'is-open': isProductsOpen }"
              @click="isProductsOpen = !isProductsOpen"
            >
              Produtos
              <svg class="chevron-icon" :class="{ 'is-open': isProductsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition name="dropdown">
              <div v-if="isProductsOpen" class="nav-dropdown-panel">
                <router-link
                  v-for="product in products"
                  :key="product.slug"
                  :to="`/produtos/${product.slug}`"
                  class="nav-dropdown-item"
                  @click="isProductsOpen = false"
                >
                  <span v-if="!product.logo" class="nav-dropdown-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
                    </svg>
                  </span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-name">
                      <img v-if="product.logo" :src="product.logo" :alt="product.name" class="nav-dropdown-logo">
                      <template v-else>{{ product.name }}</template>
                      <span v-if="product.badge" class="nav-dropdown-badge">{{ product.badge }}</span>
                    </span>
                    <span class="nav-dropdown-desc">{{ product.tagline }}</span>
                  </span>
                </router-link>
              </div>
            </Transition>
          </div>

          <router-link to="/#contato" class="nav-link">Contato</router-link>
        </div>

        <!-- CTA Button -->
        <div class="navbar-cta">
          <router-link to="/#contato" class="btn-cta-glow">
            <span class="glow-effect"></span>
            <span class="btn-text">Entrar em Contato</span>
          </router-link>
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
            <router-link to="/#quem-somos" @click="isOpen = false" class="mobile-dropdown-link">Quem Somos</router-link>

            <button
              type="button"
              class="mobile-dropdown-link mobile-dropdown-toggle"
              @click="isMobileProductsOpen = !isMobileProductsOpen"
            >
              Produtos
              <svg class="chevron-icon" :class="{ 'is-open': isMobileProductsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition name="dropdown">
              <div v-if="isMobileProductsOpen" class="mobile-products-submenu">
                <router-link
                  v-for="product in products"
                  :key="product.slug"
                  :to="`/produtos/${product.slug}`"
                  class="nav-dropdown-item"
                  @click="isOpen = false"
                >
                  <span v-if="!product.logo" class="nav-dropdown-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
                    </svg>
                  </span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-name">
                      <img v-if="product.logo" :src="product.logo" :alt="product.name" class="nav-dropdown-logo">
                      <template v-else>{{ product.name }}</template>
                      <span v-if="product.badge" class="nav-dropdown-badge">{{ product.badge }}</span>
                    </span>
                    <span class="nav-dropdown-desc">{{ product.tagline }}</span>
                  </span>
                </router-link>
              </div>
            </Transition>

            <router-link to="/#contato" @click="isOpen = false" class="mobile-dropdown-link">Contato</router-link>
            <router-link to="/#contato" @click="isOpen = false" class="mobile-dropdown-cta">Entrar em Contato</router-link>
          </nav>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { products } from '@/data/products'

const isOpen = ref(false)
const isProductsOpen = ref(false)
const isMobileProductsOpen = ref(false)
const desktopNavRef = ref(null)

const restartPage = inject('restartPage', () => {
  // Fallback se não estiver disponível
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const handleLogoClick = () => {
  isOpen.value = false // Fechar menu mobile se estiver aberto
  restartPage()
}

const handleClickOutside = (event) => {
  if (desktopNavRef.value && !desktopNavRef.value.contains(event.target)) {
    isProductsOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
@import './NavBar.css';
</style>
