<template>
  <section id="testimonials" class="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Floating elements -->
    <div class="absolute top-20 left-10 w-32 h-32 border border-purple-500/10 rotate-45 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-24 h-24 border border-blue-500/10 rotate-12 animate-pulse delay-1000"></div>
    
    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full mb-8 backdrop-blur-sm">
          <div class="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
          <span class="text-sm text-gray-300 font-medium tracking-wider">CASOS DE SUCESSO</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          <span class="text-white">O que nossos</span>
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">clientes dizem</span>
        </h2>
        
        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
        
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Empresas líderes confiam na EknoTech para <span class="text-purple-400 font-semibold">transformar suas operações</span> 
          e <span class="text-blue-400 font-semibold">acelerar resultados</span>
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto [&>*]:flex-shrink-0 [&>*]:min-w-[350px] [&>*]:max-w-[405px]">
        
        <!-- Testimonial 1 -->
        <div class="group relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full h-[520px] max-w-[405px] sm:w-[405px]">
            
            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <!-- Company logo placeholder -->
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full">
                <span class="text-xs font-medium text-purple-300">FINTECH</span>
              </div>
            </div>
            
            <!-- Testimonial content -->
            <blockquote class="text-gray-300 text-lg leading-relaxed mb-6 italic">
              "O Ekno Assist revolucionou completamente nosso atendimento ao cliente. Conseguimos reduzir o tempo de resposta em 85% e aumentar a satisfação dos clientes para 98%. O ROI foi alcançado em apenas 3 meses."
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
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mr-4">
                <span class="text-lg font-bold text-white">MB</span>
              </div>
              <div>
                <h4 class="font-semibold text-white">Marcos Brito</h4>
                <p class="text-sm text-gray-400">CEO, TechSolutions</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 2 anos</span>
                </div>
              </div>
            </div>
            
            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">85%</div>
                <div class="text-xs text-gray-500">Redução tempo</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">98%</div>
                <div class="text-xs text-gray-500">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="group relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full h-[520px] max-w-[405px] sm:w-[405px]">

            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
                <span class="text-xs font-medium text-blue-300">INVESTIMENTOS</span>
              </div>
            </div>
            
            <blockquote class="text-gray-300 text-lg leading-relaxed mb-6 italic">
              "Com o Ekno Trading, nossa estratégia de investimentos evoluiu para um novo patamar. Os sinais são extremamente precisos e o sistema de backtesting nos deu confiança para escalar operações."
            </blockquote>
            
            <div class="flex items-center mb-6">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-400">5.0/5.0</span>
            </div>
            
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                <span class="text-lg font-bold text-white">CS</span>
              </div>
              <div>
                <h4 class="font-semibold text-white">Carolina Silva</h4>
                <p class="text-sm text-gray-400">Diretora de Investimentos, InvestGroup</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 18 meses</span>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-400">92%</div>
                <div class="text-xs text-gray-500">Precisão</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-400">340%</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="group relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-1 w-full h-[520px] max-w-[405px] sm:w-[405px]">

            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div class="flex justify-end mb-4">
              <div class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full">
                <span class="text-xs font-medium text-green-300">TECNOLOGIA</span>
              </div>
            </div>
            
            <blockquote class="text-gray-300 text-lg leading-relaxed mb-6 italic">
              "A implementação dos agentes de IA da EknoTech transformou nossa operação. Automatizamos 70% dos processos internos e nossa equipe agora foca em atividades estratégicas de alto valor."
            </blockquote>
            
            <div class="flex items-center mb-6">
              <div class="flex space-x-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-400">5.0/5.0</span>
            </div>
            
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4">
                <span class="text-lg font-bold text-white">RA</span>
              </div>
              <div>
                <h4 class="font-semibold text-white">Rafael Almeida</h4>
                <p class="text-sm text-gray-400">CTO, Inovação Digital</p>
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-gray-500">Cliente há 3 anos</span>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-400">70%</div>
                <div class="text-xs text-gray-500">Automação</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-400">45%</div>
                <div class="text-xs text-gray-500">Economia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust indicators -->
      <div class="mt-20">
          <!-- Carousel container -->
          <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full mb-6">
          <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm text-gray-300 font-medium">CONFIANÇA EMPRESARIAL</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Empresas que <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">confiam</span> na EknoTech
        </h3>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Mais de <span class="text-purple-400 font-semibold">500+ empresas</span> de diversos setores já transformaram suas operações com nossas soluções
        </p>
      </div>

      <!-- Carousel -->
      <CompanyCarousel />

        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatCard label="Empresas Ativas" value="500+" color="purple" />
          <StatCard label="Setores Atendidos" value="15+" color="blue" />
          <StatCard label="Satisfação" value="98%" color="green" />
          <StatCard label="Experiência" value="5 Anos" color="yellow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CompanyCarousel from '../Carousel/CompanyCarousel.vue'
import StatCard from '../Carousel/StatCard.vue'

export default {
  components: {
    CompanyCarousel,
    StatCard,
  },
}
</script>
