<template>
  <section id="features" class="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%); background-size: 60px 60px;"></div>
    </div>
    
    <!-- Floating geometric elements -->
    <div class="absolute top-32 right-20 w-40 h-40 border border-blue-500/10 rotate-12 animate-pulse"></div>
    <div class="absolute bottom-32 left-20 w-28 h-28 border border-purple-500/10 rotate-45 animate-pulse delay-700"></div>
    <div class="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-400/5 rotate-12 animate-pulse delay-300"></div>
    
    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full mb-8 backdrop-blur-sm">
          <div class="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
          <span class="text-sm text-gray-300 font-medium tracking-wider">VANTAGENS COMPETITIVAS</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          <span class="text-white">Por que escolher a</span>
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">EknoTech?</span>
        </h2>
        
        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
        
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Nossa plataforma oferece <span class="text-blue-400 font-semibold">tecnologia de ponta</span> e 
          <span class="text-purple-400 font-semibold">vantagens competitivas</span> que transformam operações empresariais
        </p>
      </div>
      
      <!-- Features Grid -->
    <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto [&>*]:flex-shrink-0 [&>*]:min-w-[350px] [&>*]:max-w-[405px]">    
      <!-- Feature 1: Performance -->
      <div class="group relative">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
        <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full max-w-[405px] h-[390px] sm:w-[405px] overflow-hidden">
          <!-- Icon with animated background -->
          <div class="relative mb-6">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl animate-pulse"></div>
            <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-4">Performance Excepcional</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Arquitetura otimizada para processamento de alta velocidade, garantindo respostas em tempo real 
            e eficiência operacional máxima.
          </p>
          
          <!-- Metrics -->
          <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
            <div class="text-center">
              <div class="text-lg font-bold text-blue-400">&lt;100ms</div>
              <div class="text-xs text-gray-500">Latência</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-blue-400">99.99%</div>
              <div class="text-xs text-gray-500">Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Feature 4: Scalability -->
      <div class="group relative">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
        <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full max-w-[405px] h-[390px] sm:w-[405px] overflow-hidden">
          
          <div class="relative mb-6">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-2xl animate-pulse"></div>
            <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-pink-900/50 to-pink-800/30 border border-pink-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-4">Escalabilidade Infinita</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Infraestrutura cloud-native que escala automaticamente conforme demanda, 
            suportando desde startups até grandes corporações.
          </p>
          
          <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
            <div class="text-center">
              <div class="text-lg font-bold text-pink-400">Auto</div>
              <div class="text-xs text-gray-500">Scaling</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-pink-400">Global</div>
              <div class="text-xs text-gray-500">CDN</div>
            </div>
          </div>
        </div>
      </div>
  
  <!-- Feature 5: Automation -->
  <div class="group relative">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
    <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full max-w-full max-w-[405px] h-[390px] sm:w-[405px] sm:w-[405px] overflow-hidden">
      
      <div class="relative mb-6">
        <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl animate-pulse"></div>
        <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-500/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4">Automação Inteligente</h3>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Workflows automatizados com IA que eliminam tarefas repetitivas, 
        aumentando produtividade e reduzindo custos operacionais.
      </p>
      
      <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
        <div class="text-center">
          <div class="text-lg font-bold text-green-400">100%</div>
          <div class="text-xs text-gray-500">Redução</div>
        </div>
        <div class="text-center">
          <div class="text-lg font-bold text-green-400">24/7</div>
          <div class="text-xs text-gray-500">Operação</div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      <!-- Bottom CTA -->
      <div class="mt-20 flex justify-center">
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm transition-all duration-300">
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <span class="text-gray-300 font-medium">Tecnologia de Nível Empresarial</span>
          </div>
          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-300"></div>
            <span class="text-gray-300 font-medium">Suporte Especializado 24/7</span>
          </div>
          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
            <span class="text-gray-300 font-medium">Aumento Garantido de ROI</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed
</script>