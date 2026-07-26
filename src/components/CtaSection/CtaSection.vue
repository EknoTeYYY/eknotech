<template>
  <section id="contato" class="py-24 px-4 bg-black relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <!-- Animated geometric shapes -->
    <div class="absolute top-20 left-10 w-40 h-40 border border-purple-500/20 rotate-45 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 border border-purple-500/20 rotate-12 animate-pulse delay-700"></div>

    <div class="container mx-auto relative z-10">
      <div class="max-w-6xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-scroll="blur" data-delay="1">
            <span class="text-white">Pronto para</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> vender mais imóveis?</span>
          </h2>

          <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" data-scroll="scale" data-delay="2"></div>

          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-scroll="fade-up" data-delay="3">
            Agende um diagnóstico gratuito e descubra como conteúdo, tráfego e IA podem transformar a captação da sua imobiliária — <span class="text-purple-400 font-semibold">sem compromisso</span>.
          </p>
        </div>

        <!-- Top Grid - WhatsApp CTA (Left) and Benefits (Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          <!-- WhatsApp CTA (Left) -->
          <div class="relative" data-scroll="scale-up" data-delay="1">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl blur opacity-30"></div>
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-green-500/30 h-full flex flex-col justify-center">

              <div class="text-center mb-8">
                <div class="w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i class="fab fa-whatsapp text-green-400 text-4xl"></i>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">Fale com a Eknotech</h3>
                <p class="text-gray-300 leading-relaxed">
                  Clique no botão abaixo e converse diretamente com quem desenvolve. <span class="text-green-400 font-semibold">Sem robôs, sem roteiro de vendas.</span>
                </p>
              </div>

              <a
                href="https://wa.me/5548991144161"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full py-5 px-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 mb-4"
              >
                <span class="flex items-center justify-center">
                  <i class="fab fa-whatsapp text-2xl mr-3"></i>
                  Chamar no WhatsApp
                </span>
              </a>

              <div class="flex items-center justify-center text-gray-400 text-sm">
                <i class="fas fa-clock mr-2"></i>
                Respondemos em até 24h úteis
              </div>
            </div>
          </div>

          <!-- Benefits (Right) -->
          <div class="relative" data-scroll="scale-up" data-delay="2">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 h-full">
              <h3 class="text-2xl font-bold text-white mb-6">O que você ganha</h3>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Diagnóstico Gratuito</h4>
                    <p class="text-gray-400 text-sm">Analisamos sua captação e atendimento e mostramos onde estão as oportunidades — sem custo.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Proposta Personalizada</h4>
                    <p class="text-gray-400 text-sm">Plano Growth adequado ao momento da sua operação, não pacote genérico.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Contato Direto</h4>
                    <p class="text-gray-400 text-sm">Você fala com quem desenvolve.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Resposta Rápida</h4>
                    <p class="text-gray-400 text-sm">Retorno em até 24h úteis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Centered - Contact Methods -->
        <div class="relative max-w-3xl mx-auto" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20">
            <h3 class="text-2xl font-bold text-white mb-6 text-center">Outras formas de contato</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center p-4 bg-gray-800/30 rounded-xl">
                <div class="w-12 h-12 bg-purple-900/50 border border-purple-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-envelope text-purple-400 text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Email</h4>
                  <p class="text-gray-400">contato@eknotech.com.br</p>
                </div>
              </div>

              <div class="flex items-center p-4 bg-gray-800/30 rounded-xl">
                <div class="w-12 h-12 bg-purple-900/50 border border-purple-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Localização</h4>
                  <p class="text-gray-400">Florianópolis, Santa Catarina</p>
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
