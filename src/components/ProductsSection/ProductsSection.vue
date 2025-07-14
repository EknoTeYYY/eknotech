<template>
  <section id="products" class="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <!-- Floating geometric shapes -->
    <div class="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rotate-45 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-24 h-24 border border-blue-500/20 rotate-12 animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/10 rotate-45 animate-pulse delay-500"></div>
    
    <div class="container mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6">
          <div class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm text-gray-300 font-medium">SOLUÇÕES EMPRESARIAIS</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="text-white">Nossos</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"> Produtos</span>
        </h2>
        
        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Tecnologias de ponta em Inteligência Artificial projetadas para transformar 
          <span class="text-purple-400 font-semibold">operações empresariais</span> e 
          <span class="text-blue-400 font-semibold">maximizar resultados</span>
        </p>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        <!-- Ekno Assist -->
        <div class="group relative">
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
          
          <!-- Main card -->
          <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2">
            
            <!-- Header with icon and badge -->
            <div class="relative p-8 pb-6">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-bl-full"></div>
              
              <div class="flex items-start justify-between mb-6">
                <div class="relative">
                  <!-- Icon container with animated border -->
                  <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent animate-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                
                <!-- Badge -->
                <div class="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full">
                  <span class="text-xs font-medium text-purple-300">ENTERPRISE</span>
                </div>
              </div>
              
              <h3 class="text-3xl font-bold text-white mb-3">Ekno Assist</h3>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Plataforma avançada de gerenciamento de agentes de IA integrada com ChatGPT, 
                projetada para automatizar operações críticas e otimizar fluxos de trabalho empresariais.
              </p>
            </div>
            
            <!-- Features list -->
            <div class="px-8 pb-6">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Automação Inteligente</h4>
                    <p class="text-gray-400 text-sm">Processamento automatizado de tarefas complexas com precisão empresarial</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Integração API Avançada</h4>
                    <p class="text-gray-400 text-sm">Conectividade seamless com sistemas existentes e APIs externas</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Modelo Contratual CLT</h4>
                    <p class="text-gray-400 text-sm">Estrutura de licenciamento flexível adaptada às necessidades corporativas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Stats and CTA -->
            <div class="px-8 pb-8">
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">99.9%</div>
                  <div class="text-xs text-gray-500">Uptime</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">24/7</div>
                  <div class="text-xs text-gray-500">Suporte</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">SOC2</div>
                  <div class="text-xs text-gray-500">Compliance</div>
                </div>
              </div>
              
              <button 
                class="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                onclick="window.location.href='/#contact'"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
        
        <!-- Ekno Trading -->
        <div class="group relative">
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
          
          <!-- Main card -->
          <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2">
            
            <!-- Header with icon and badge -->
            <div class="relative p-8 pb-6">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full"></div>
              
              <div class="flex items-start justify-between mb-6">
                <div class="relative">
                  <!-- Icon container with animated border -->
                  <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent animate-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                
                <!-- Badge -->
                <div class="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
                  <span class="text-xs font-medium text-blue-300">SAAS</span>
                </div>
              </div>
              
              <h3 class="text-3xl font-bold text-white mb-3">Ekno Trading</h3>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Sistema algorítmico de trading de alta frequência com análise preditiva avançada, 
                backtesting robusto e gestão automatizada de estratégias de investimento.
              </p>
            </div>
            
            <!-- Features list -->
            <div class="px-8 pb-6">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Sinais de Alta Precisão</h4>
                    <p class="text-gray-400 text-sm">Algoritmos de machine learning para identificação de oportunidades de mercado</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Backtesting Avançado</h4>
                    <p class="text-gray-400 text-sm">Simulação histórica completa com análise de risco e performance</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mt-0.5">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Gestão de Estratégias</h4>
                    <p class="text-gray-400 text-sm">Plataforma completa para criação, teste e deploy de estratégias customizadas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Stats and CTA -->
            <div class="px-8 pb-8">
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">85%</div>
                  <div class="text-xs text-gray-500">Precisão</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">&lt;1ms</div>
                  <div class="text-xs text-gray-500">Latência</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">ISO</div>
                  <div class="text-xs text-gray-500">Certified</div>
                </div>
              </div>
              
              <button class="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Em desenvolvimento...
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom section with additional info -->
      <div class="mt-20 flex justify-center">
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm transition-all duration-300">

          <!-- Disponível 24/7 -->
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-gray-300 font-medium">Disponível 24/7</span>
          </div>

          <!-- Divider -->
          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>

          <!-- Segurança Enterprise -->
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="text-gray-300 font-medium">Segurança Enterprise</span>
          </div>

          <!-- Divider -->
          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>

          <!-- Performance Otimizada -->
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-gray-300 font-medium">Performance Otimizada</span>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
/* Custom animations for floating elements */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Hover effects for cards */
.group:hover .animate-pulse {
  animation-duration: 1s;
}

/* Custom gradient borders */
.gradient-border {
  background: linear-gradient(45deg, #8b5cf6, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Enhanced glow effects */
.group:hover .shadow-purple-500\/25 {
  box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.4);
}

.group:hover .shadow-blue-500\/25 {
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.4);
}
</style>