<template>
  <section id="products" class="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <!-- Floating geometric shapes -->
    <div class="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rotate-45 animate-float-slow"></div>
    <div class="absolute bottom-20 right-10 w-24 h-24 border border-blue-500/20 rotate-12 animate-float-slow delay-1000"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/10 rotate-45 animate-float-slow delay-500"></div>

    <div class="container mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6">
          <div class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm text-gray-300 font-medium tracking-wider">SOLUÇÕES EMPRESARIAIS</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="text-white">Nossos</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"> Produtos</span>
        </h2>

        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>

        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Tecnologias de ponta em <span class="text-purple-400 font-semibold">Inteligência Artificial</span> projetadas para
          <span class="text-blue-400 font-semibold">transformar operações empresariais</span>
        </p>
      </div>

      <!-- Products Grid -->
      <div class="max-w-5xl mx-auto">

        <!-- Gedfy Card - Design Premium -->
        <div class="group relative">
          <!-- Animated glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-gradient-shift"></div>

          <!-- Main card -->
          <div class="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">

            <!-- Decorative top gradient bar -->
            <div class="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-shift"></div>

            <div class="grid md:grid-cols-5 gap-0">

              <!-- Left side - Logo and branding -->
              <div class="md:col-span-2 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 relative">
                <!-- Decorative circles -->
                <div class="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

                <div class="relative">
                  <!-- Logo -->
                  <div class="mb-6">
                    <img
                      src="../../assets/logoGedfy-branco.png"
                      alt="Gedfy"
                      class="h-12 md:h-14 object-contain transition-transform duration-500 group-hover:scale-105"
                      draggable="false"
                    >
                  </div>

                  <!-- Tagline -->
                  <div class="mb-6">
                    <p class="text-purple-300 text-sm font-medium tracking-wide uppercase mb-2">Gestão Eletrônica de Documentos</p>
                    <h3 class="text-2xl md:text-3xl font-bold text-white leading-tight">
                      Seus documentos,<br>
                      <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">turbinados por IA</span>
                    </h3>
                  </div>

                  <!-- Status badge -->
                  <div class="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                    <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span class="text-sm font-medium text-green-300">Em Produção</span>
                  </div>
                </div>

                <!-- CTA Button -->
                <div class="mt-8 relative z-10">
                  <a
                    href="https://gedfy.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/btn relative py-3.5 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 text-center flex items-center justify-center gap-2 w-full"
                  >
                    <span class="relative z-10">Acessar Plataforma</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 relative z-10 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>

              <!-- Right side - Features and info -->
              <div class="md:col-span-3 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-700/30">

                <!-- Diferencial Principal - Conversar com Documentos -->
                <div class="mb-6 p-5 bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-blue-900/30 rounded-2xl border border-purple-500/30 relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                  <div class="relative">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border border-purple-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h4 class="text-white font-bold text-lg">Converse com seus documentos</h4>
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed mb-3">
                      O Gedfy vai muito além do armazenamento. Nossa <span class="text-purple-300 font-semibold">IA conversacional</span> permite que você faça perguntas diretas aos seus documentos:
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1.5 bg-gray-800/60 text-gray-300 text-xs rounded-lg border border-gray-700/50 italic">"Quais contratos vencem este mês?"</span>
                      <span class="px-3 py-1.5 bg-gray-800/60 text-gray-300 text-xs rounded-lg border border-gray-700/50 italic">"Encontre cláusulas de multa"</span>
                      <span class="px-3 py-1.5 bg-gray-800/60 text-gray-300 text-xs rounded-lg border border-gray-700/50 italic">"NFs acima de R$ 5.000"</span>
                    </div>
                  </div>
                </div>

                <!-- Features Grid - Compacto -->
                <div class="grid grid-cols-3 gap-3 mb-6">
                  <div class="group/feature p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 text-center">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-2 mx-auto group-hover/feature:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 class="text-white font-medium text-xs">Assinatura Digital</h4>
                  </div>

                  <div class="group/feature p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-green-500/30 transition-all duration-300 text-center">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-2 mx-auto group-hover/feature:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h4 class="text-white font-medium text-xs">Alertas de Prazo</h4>
                  </div>

                  <div class="group/feature p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300 text-center">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center mb-2 mx-auto group-hover/feature:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 class="text-white font-medium text-xs">Workspace</h4>
                  </div>
                </div>

                <!-- Ideal Para - Seção Expandida -->
                <div class="bg-gray-800/20 rounded-xl border border-gray-700/30 p-4">
                  <div class="flex items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span class="text-sm font-semibold text-white">Ideal para quem precisa extrair inteligência dos documentos</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span class="text-white text-xs font-medium">Escritórios Jurídicos</span>
                        <p class="text-gray-500 text-[10px]">Contratos, petições e prazos críticos</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span class="text-white text-xs font-medium">Contabilidade</span>
                        <p class="text-gray-500 text-[10px]">NFs, balanços e declarações por cliente</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span class="text-white text-xs font-medium">PMEs (5-50 funcionários)</span>
                        <p class="text-gray-500 text-[10px]">Substituindo pastas do Drive</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span class="text-white text-xs font-medium">Compliance & Jurídico</span>
                        <p class="text-gray-500 text-[10px]">Audit trail e análise de riscos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Placeholder para futuros produtos (comentado)
        <div class="group relative mt-8 opacity-50">
          <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 border-dashed p-8 text-center">
            <div class="w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/30 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p class="text-gray-500 font-medium">Novo produto em breve</p>
          </div>
        </div>
        -->

      </div>

      <!-- Bottom section with trust indicators -->
      <div class="mt-16 flex justify-center">
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">

          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-gray-300 font-medium">Disponível 24/7</span>
          </div>

          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="text-gray-300 font-medium">Compliance LGPD</span>
          </div>

          <div class="hidden sm:block w-px h-8 bg-gray-600"></div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span class="text-gray-300 font-medium">IA Integrada</span>
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
/* Animated gradient shift */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Floating animation for decorative elements */
@keyframes float-slow {
  0%, 100% {
    transform: rotate(45deg) translateY(0px);
    opacity: 0.2;
  }
  50% {
    transform: rotate(45deg) translateY(-20px);
    opacity: 0.4;
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
