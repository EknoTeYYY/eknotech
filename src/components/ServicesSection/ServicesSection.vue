<template>
  <section id="servicos" class="py-24 px-4 bg-black relative overflow-hidden">
    <!-- Background Effect -->
    <BackgroundEffect />

    <!-- Background pattern sutil -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-scroll="blur" data-delay="1">
          <span class="text-white">Nossos</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"> Serviços</span>
        </h2>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" data-scroll="scale" data-delay="2"></div>

        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-scroll="fade-up" data-delay="3">
          <span class="text-purple-400 font-semibold">Automatizamos o que trava o seu negócio</span> com soluções sob medida, não templates genéricos
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <!-- Service 1: Automação de Processos -->
        <div class="group relative" data-scroll="scale-up" data-delay="1">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Automação de Processos</h3>
            <p class="text-gray-400 leading-relaxed">
              Transformamos tarefas manuais e repetitivas em fluxos automatizados. Elimina retrabalho e erros humanos, liberando sua equipe para atividades estratégicas.
            </p>
          </div>
        </div>

        <!-- Service 2: Integração de Sistemas -->
        <div class="group relative" data-scroll="scale-up" data-delay="2">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Integração de Sistemas</h3>
            <p class="text-gray-400 leading-relaxed">
              Conectamos as ferramentas que sua empresa já usa: CRMs, ERPs, planilhas, WhatsApp, e-mail, APIs. Dados sincronizados em tempo real, sem copiar e colar.
            </p>
          </div>
        </div>

        <!-- Service 3: Automações com IA -->
        <div class="group relative" data-scroll="scale-up" data-delay="3">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Automações com IA</h3>
            <p class="text-gray-400 leading-relaxed">
              Classificação e triagem automática, geração de respostas e conteúdo, análise inteligente de informações. IA aplicada onde faz sentido, não por modismo.
            </p>
          </div>
        </div>

        <!-- Service 4: Workflows Personalizados -->
        <div class="group relative" data-scroll="scale-up" data-delay="4">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Workflows Personalizados</h3>
            <p class="text-gray-400 leading-relaxed">
              Desenvolvidos especificamente para sua operação. Nada de templates genéricos adaptados. A automação se adapta ao seu processo, não o contrário.
            </p>
          </div>
        </div>

        <!-- Service 5: Monitoramento & Suporte -->
        <div class="group relative" data-scroll="scale-up" data-delay="5">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Monitoramento & Suporte</h3>
            <p class="text-gray-400 leading-relaxed">
              Acompanhamento contínuo do funcionamento, correção rápida de problemas, ajustes e melhorias conforme necessidade. Contato direto com quem desenvolve.
            </p>
          </div>
        </div>

        <!-- Service 6: Consultoria & Diagnóstico -->
        <div class="group relative" data-scroll="scale-up" data-delay="6">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative bg-gray-900/90 p-8 rounded-2xl border border-purple-500/20 h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/40">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">Consultoria & Diagnóstico</h3>
            <p class="text-gray-400 leading-relaxed">
              Mapeamento dos processos atuais, identificação de gargalos e oportunidades, proposta personalizada com escopo claro. Diagnóstico gratuito sem compromisso.
            </p>
          </div>
        </div>

      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16" data-scroll="fade-up">
        <p class="text-gray-400 mb-6 text-lg">
          Pronto para automatizar o que trava o seu negócio?
        </p>
        <a href="#contato" class="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
          Solicitar Proposta
        </a>
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
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-700 {
  animation-delay: 700ms;
}
</style>
