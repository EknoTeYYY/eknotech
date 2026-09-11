<template>
  <footer class="bg-black relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <!-- Top border accent -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

    <div class="container mx-auto px-4 py-8 relative z-10">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

        <!-- Coluna 1: Marca -->
        <div class="space-y-3">
          <div>
            <img src="/logoMenu.png" alt="Eknotech" class="h-11 w-auto mb-2">
          </div>
          <p class="text-gray-400 leading-relaxed text-sm">
            Tecnologia e IA para empresas automatizarem processos e escalarem operações.
          </p>

          <!-- Redes Sociais -->
          <div class="flex space-x-3">
            <a
              href="https://instagram.com/eknotech"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram text-sm"></i>
            </a>
            <a
              href="https://linkedin.com/company/eknotech"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in text-sm"></i>
            </a>
            <a
              href="https://wa.me/5548991144161"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h3 class="text-base font-bold text-white mb-3">Menu</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/#quem-somos" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Quem Somos
              </router-link>
            </li>
            <li>
              <router-link to="/#produtos" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Produtos
              </router-link>
            </li>
            <li>
              <router-link to="/#contato" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Contato
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Produtos -->
        <div>
          <h3 class="text-base font-bold text-white mb-3">Produtos</h3>
          <ul class="space-y-2">
            <li v-for="product in products" :key="product.slug">
              <router-link :to="`/produtos/${product.slug}`" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm">
                <img v-if="product.logo" :src="product.logo" :alt="product.name" class="h-3.5 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <template v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
                  </svg>
                  <span>{{ product.name }}</span>
                </template>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Coluna 4: Contato -->
        <div>
          <h3 class="text-base font-bold text-white mb-3">Fale Conosco</h3>
          <ul class="space-y-2 mb-3">
            <li>
              <a
                href="https://wa.me/5548991144161"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-start group"
              >
                <i class="fab fa-whatsapp text-green-400 mt-0.5 mr-2 flex-shrink-0"></i>
                <span class="text-sm">+55 (48) 99114-4161</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@eknotech.com.br"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-start group"
              >
                <i class="fas fa-envelope text-purple-400 mt-0.5 mr-2 flex-shrink-0"></i>
                <span class="text-sm">contato@eknotech.com.br</span>
              </a>
            </li>
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-map-marker-alt text-purple-400 mt-0.5 mr-2 flex-shrink-0"></i>
              <span class="text-sm">Florianópolis, SC - Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 mb-4"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-2">
        <p class="text-gray-400 text-sm text-center md:text-left">
          © {{ new Date().getFullYear() }} Eknotech. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { products } from '@/data/products'

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
/* Animação de hover nos links */
a {
  position: relative;
}
</style>
