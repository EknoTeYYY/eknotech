<template>
  <section id="contato" class="py-8 px-4 bg-black relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <!-- Animated geometric shapes -->
    <div class="absolute top-20 left-10 w-40 h-40 border border-purple-500/20 rotate-45 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 border border-purple-500/20 rotate-12 animate-pulse delay-700"></div>

    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-6">
          <h2 class="text-3xl md:text-4xl font-bold mb-2" data-scroll="blur" data-delay="1">
            <span class="text-white">Pronto para conhecer os</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> produtos da Eknotech?</span>
          </h2>

          <p class="text-gray-300" data-scroll="fade-up" data-delay="2">
            Fale com a gente, <span class="text-purple-400 font-semibold">sem compromisso</span>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <!-- WhatsApp CTA -->
          <div class="relative" data-scroll="scale-up" data-delay="1">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl blur opacity-30"></div>
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl border border-green-500/30 text-center h-full flex flex-col justify-center">
              <div class="w-12 h-12 bg-green-500/10 border-2 border-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <i class="fab fa-whatsapp text-green-400 text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-white mb-3">Fale com a Eknotech</h3>

              <a
                href="https://wa.me/5548991144161"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full py-4 px-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 mb-3"
              >
                <span class="flex items-center justify-center">
                  <i class="fab fa-whatsapp text-xl mr-3"></i>
                  Chamar no WhatsApp
                </span>
              </a>

              <div class="flex items-center justify-center text-gray-400 text-sm">
                <i class="fas fa-clock mr-2"></i>
                Respondemos em até 24h úteis
              </div>
            </div>
          </div>

          <!-- O que você ganha (compacto) -->
          <div class="relative" data-scroll="scale-up" data-delay="2">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl border border-purple-500/20 h-full flex flex-col justify-center">
              <h3 class="text-lg font-bold text-white mb-3">O que você ganha</h3>
              <ul class="space-y-2.5">
                <li class="flex items-start text-sm text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Indicação certeira do produto ideal para você
                </li>
                <li class="flex items-start text-sm text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso direto ao time comercial, sem intermediários
                </li>
                <li class="flex items-start text-sm text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Resposta em até 24h úteis
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Outras formas de contato -->
        <div class="relative mt-6" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl border border-purple-500/20">
            <h3 class="text-base font-bold text-white mb-3 text-center">Outras formas de contato</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-center p-3 bg-gray-800/30 rounded-xl">
                <div class="w-9 h-9 bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <i class="fas fa-envelope text-purple-400"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-white text-sm">Email</h4>
                  <p class="text-gray-400 text-sm">contato@eknotech.com.br</p>
                </div>
              </div>

              <div class="flex items-center p-3 bg-gray-800/30 rounded-xl">
                <div class="w-9 h-9 bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-purple-400"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-white text-sm">Localização</h4>
                  <p class="text-gray-400 text-sm">Florianópolis, Santa Catarina</p>
                </div>
              </div>
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
.delay-700 {
  animation-delay: 700ms;
}
</style>
