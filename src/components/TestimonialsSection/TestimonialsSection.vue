<template>
  <section id="depoimentos" class="pt-6 pb-24 px-4 bg-black relative overflow-hidden">
    <!-- Background Effect -->
    <BackgroundEffect />

    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-scroll="blur" data-delay="1">
          <span class="text-white">O que nossos</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> clientes dizem</span>
        </h2>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" data-scroll="scale" data-delay="2"></div>

        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-scroll="fade-up" data-delay="3">
          Empresas confiam na <span class="text-purple-400 font-semibold">Eknotech</span> para automatizar operações e ganhar tempo para o que realmente importa
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <!-- Card 1 - PRECIFICO.AI -->
        <div class="group relative" data-scroll="scale-up" data-delay="1">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">

            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Sector tag -->
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">
                <span class="text-xs font-medium text-red-300">FOOD TECH</span>
              </div>
            </div>

            <!-- Testimonial content -->
            <blockquote class="text-gray-300 leading-relaxed mb-6 italic">
              "A Eknotech me deu o melhor ROI de todos, tempo! É muito rápido e simples a automação. O que antes eu demorava em média 4 horas para fazer, agora levo apenas minutos. A produtividade aumentou absurdamente e consigo focar no que realmente importa para o negócio crescer."
            </blockquote>

            <!-- Rating -->
            <div class="flex items-center mb-6">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-400">5.0/5.0</span>
            </div>

            <!-- Author info -->
            <div class="flex items-start mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <img src="/precifico.ia.jpeg" alt="Precifico.ai" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-semibold text-white">Alan</h4>
                <p class="text-sm text-gray-400">CEO & Founder, Precifico.ai</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 4 meses</span>
                </div>
              </div>
            </div>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">4h → min</div>
                <div class="text-xs text-gray-500">redução de tempo</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">ROI</div>
                <div class="text-xs text-gray-500">em tempo</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 - ANTIC -->
        <div class="group relative" data-scroll="scale-up" data-delay="2">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">

            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Sector tag -->
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
                <span class="text-xs font-medium text-blue-300">MARKETING DIGITAL</span>
              </div>
            </div>

            <!-- Testimonial content -->
            <blockquote class="text-gray-300 leading-relaxed mb-6 italic">
              "A gente perdia muito tempo com relatório e acompanhamento de lead. A Eknotech automatizou tudo — agora o lead entra no anúncio e em segundos já tá no CRM com notificação no Slack. Os relatórios semanais saem sozinhos. Sobrou tempo pra focar em estratégia."
            </blockquote>

            <!-- Rating -->
            <div class="flex items-center mb-6">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-400">5.0/5.0</span>
            </div>

            <!-- Author info -->
            <div class="flex items-start mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <img src="/antic.png" alt="Studio Antic" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-semibold text-white">Ellen Claudino</h4>
                <p class="text-sm text-gray-400">Fundadora, Studio Antic</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 8 meses</span>
                </div>
              </div>
            </div>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">6h/semana</div>
                <div class="text-xs text-gray-500">economizadas</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">&lt;5min</div>
                <div class="text-xs text-gray-500">lead atendido</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 - CJR EMPREENDIMENTOS -->
        <div class="group relative" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">

            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Sector tag -->
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-amber-900/30 border border-amber-500/30 rounded-full">
                <span class="text-xs font-medium text-amber-300">IMOBILIÁRIA</span>
              </div>
            </div>

            <!-- Testimonial content -->
            <blockquote class="text-gray-300 leading-relaxed mb-6 italic">
              "Antes a gente perdia lead porque demorava pra ver que tinha chegado. Agora, caiu no ZAP ou OLX, já aparece no meu WhatsApp na hora. O follow-up automático recuperou cliente que a gente achava que tinha perdido. Mudou nosso jogo."
            </blockquote>

            <!-- Rating -->
            <div class="flex items-center mb-6">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-400">5.0/5.0</span>
            </div>

            <!-- Author info -->
            <div class="flex items-start mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <img src="/cjrempreendimentos.png" alt="CJR Empreendimentos" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-semibold text-white">Carlos Júnior</h4>
                <p class="text-sm text-gray-400">Diretor, CJR Empreendimentos</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 6 meses</span>
                </div>
              </div>
            </div>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">3 portais</div>
                <div class="text-xs text-gray-500">integrados</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">&lt;2min</div>
                <div class="text-xs text-gray-500">resposta</div>
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
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect.vue'

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
