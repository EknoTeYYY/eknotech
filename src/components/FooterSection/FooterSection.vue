<template>
  <footer class="bg-black relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <!-- Top border accent -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        <!-- Coluna 1: Marca -->
        <div class="space-y-6">
          <div>
            <img src="/logoMenu.png" alt="Eknotech" class="h-16 w-auto mb-4">
          </div>
          <p class="text-gray-400 leading-relaxed">
            Marketing e tecnologia para o mercado imobiliário vender mais.
          </p>

          <!-- Redes Sociais -->
          <div class="flex space-x-4">
            <a
              href="https://instagram.com/eknotech"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://linkedin.com/company/eknotech"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="https://wa.me/5548991144161"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp text-lg"></i>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Menu</h3>
          <ul class="space-y-3">
            <li>
              <a href="#como-funciona" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#servicos" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Serviços
              </a>
            </li>
            <li>
              <a href="#depoimentos" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                <span class="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Contato
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Soluções -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Soluções</h3>
          <ul class="space-y-3">
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-video text-purple-400 text-sm mt-1 mr-2"></i>
              <span>Criação de Conteúdo</span>
            </li>
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-chart-line text-purple-400 text-sm mt-1 mr-2"></i>
              <span>Tráfego Pago</span>
            </li>
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-brain text-purple-400 text-sm mt-1 mr-2"></i>
              <span>Automação com IA</span>
            </li>
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-file-contract text-purple-400 text-sm mt-1 mr-2"></i>
              <span>Gestão de Contratos</span>
            </li>
          </ul>
        </div>

        <!-- Coluna 4: Contato -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Fale Conosco</h3>
          <ul class="space-y-4 mb-6">
            <li>
              <a
                href="https://wa.me/5548991144161"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-start group"
              >
                <i class="fab fa-whatsapp text-green-400 text-lg mt-0.5 mr-3 flex-shrink-0"></i>
                <span class="text-sm">+55 (48) 99114-4161</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@eknotech.com.br"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-start group"
              >
                <i class="fas fa-envelope text-purple-400 text-lg mt-0.5 mr-3 flex-shrink-0"></i>
                <span class="text-sm">contato@eknotech.com.br</span>
              </a>
            </li>
            <li class="text-gray-400 flex items-start">
              <i class="fas fa-map-marker-alt text-purple-400 text-lg mt-0.5 mr-3 flex-shrink-0"></i>
              <span class="text-sm">Florianópolis, SC - Brasil</span>
            </li>
          </ul>

          <!-- Mini CTA -->
          <a
            href="https://wa.me/5548991144161"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            Falar com a Eknotech
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 mb-8"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
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

/* Smooth scroll para âncoras */
a[href^="#"] {
  scroll-behavior: smooth;
}
</style>
