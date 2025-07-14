<template>
  <section class="pt-28 pb-20 md:pt-36 md:pb-24 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col items-center flex-wrap min-[1250px]:flex-row">
        <!-- Bloco de texto e botões -->
        <div class="w-full mb-10 text-center min-[1250px]:w-1/2 min-[1250px]:mb-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
              Potencialize seu negócio
            </span>
            <br />com Inteligência Artificial
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Soluções avançadas de IA para automatizar processos e maximizar resultados em sua empresa.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" class="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
              Conheça nossos produtos
            </a>
            <a href="#contact" class="px-8 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-900 hover:bg-opacity-30 transition-all text-center">
              Fale conosco
            </a>
          </div>
        </div>
        
        <!-- Área de animação melhorada -->
        <div class="w-full flex justify-center min-[1250px]:w-1/2">
          <div class="relative w-full max-w-lg">
            <!-- Glow effect animado -->
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
            
            <!-- Container principal -->
            <div class="relative bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <!-- Header da simulação -->
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="text-xs text-gray-400 font-mono">ekno AI Terminal</div>
              </div>
              
              <!-- Área principal de animação -->
              <div class="space-y-4">
                <!-- Linha de comando animada -->
                <div class="font-mono text-sm">
                  <div class="flex items-center mb-2">
                    <span class="text-green-400">$</span>
                    <span class="text-white ml-2 typing-command">{{ currentCommand }}</span>
                    <span class="animate-pulse text-green-400">|</span>
                  </div>
                </div>
                
                <!-- Gráfico de barras animado -->
                <div class="bg-gray-800 rounded-lg p-4">
                  <div class="text-xs text-gray-400 mb-3">Performance Analytics</div>
                  <div class="space-y-2">
                    <div v-for="(bar, index) in performanceBars" :key="index" class="flex items-center">
                      <div class="w-16 text-xs text-gray-400">{{ bar.label }}</div>
                      <div class="flex-1 bg-gray-700 rounded-full h-2 mx-2">
                        <div 
                          class="h-2 rounded-full transition-all duration-1000 ease-out"
                          :class="bar.color"
                          :style="{ width: bar.animated ? `${bar.value}%` : '0%' }"
                        ></div>
                      </div>
                      <div class="w-8 text-xs text-gray-300">{{ bar.animated ? bar.value : 0 }}%</div>
                    </div>
                  </div>
                </div>
                
                <!-- Rede neural animada -->
                <div class="bg-gray-800 rounded-lg p-4">
                  <div class="text-xs text-gray-400 mb-3">Neural Network</div>
                  <div class="relative h-24">
                    <!-- Nós da rede neural -->
                    <div class="absolute inset-0">
                      <!-- Camada de entrada -->
                      <div class="absolute left-2 top-0 space-y-2">
                        <div v-for="i in 4" :key="`input-${i}`" 
                             class="w-3 h-3 rounded-full transition-all duration-500"
                             :class="neuralNodes.input[i-1] ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-600'">
                        </div>
                      </div>
                      
                      <!-- Camada oculta -->
                      <div class="absolute left-1/2 transform -translate-x-1/2 top-0 space-y-1">
                        <div v-for="i in 6" :key="`hidden-${i}`" 
                             class="w-2 h-2 rounded-full transition-all duration-500"
                             :class="neuralNodes.hidden[i-1] ? 'bg-purple-500 shadow-lg shadow-purple-500/50' : 'bg-gray-600'">
                        </div>
                      </div>
                      
                      <!-- Camada de saída -->
                      <div class="absolute right-2 top-2 space-y-3">
                        <div v-for="i in 3" :key="`output-${i}`" 
                             class="w-3 h-3 rounded-full transition-all duration-500"
                             :class="neuralNodes.output[i-1] ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-600'">
                        </div>
                      </div>
                      
                      <!-- Conexões animadas -->
                      <svg class="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
                            <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.8" />
                            <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.8" />
                          </linearGradient>
                        </defs>
                        <!-- Linhas de conexão que pulsam -->
                        <line v-for="connection in activeConnections" :key="connection.id"
                              :x1="connection.x1" :y1="connection.y1" 
                              :x2="connection.x2" :y2="connection.y2"
                              stroke="url(#connectionGradient)" 
                              stroke-width="1" 
                              opacity="0.6"
                              class="animate-pulse">
                        </line>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- Status de processamento -->
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-gray-300">{{ currentStatus }}</span>
                  </div>
                  <div class="text-purple-400 font-mono">{{ processingSpeed }} ops/sec</div>
                </div>
                
                <!-- Partículas flutuantes -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                  <div v-for="particle in particles" :key="particle.id"
                       class="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                       :style="{ 
                         left: particle.x + 'px', 
                         top: particle.y + 'px',
                         animation: `float-${particle.id} ${particle.duration}s linear infinite`
                       }">
                  </div>
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
import { ref, onMounted, onUnmounted } from 'vue'

// Estados reativos
const currentCommand = ref('')
const currentStatus = ref('Inicializando...')
const processingSpeed = ref(0)

// Dados para as barras de performance
const performanceBars = ref([
  { label: 'CPU', value: 85, color: 'bg-blue-500', animated: false },
  { label: 'GPU', value: 92, color: 'bg-purple-500', animated: false },
  { label: 'RAM', value: 78, color: 'bg-green-500', animated: false },
  { label: 'AI', value: 96, color: 'bg-yellow-500', animated: false }
])

// Estados da rede neural
const neuralNodes = ref({
  input: [false, false, false, false],
  hidden: [false, false, false, false, false, false],
  output: [false, false, false]
})

// Conexões ativas da rede neural
const activeConnections = ref([])

// Partículas flutuantes
const particles = ref([])

// Comandos para animação de digitação
const commands = [
  'ekno-ai --analyze --dataset=market_data.csv',
  'ekno-trading --backtest --strategy=momentum',
  'ekno-assist --deploy --agents=customer_service',
  'ekno-ai --optimize --model=neural_network'
]

const statuses = [
  'Analisando dados de mercado...',
  'Processando estratégias de trading...',
  'Otimizando agentes de IA...',
  'Executando backtests...',
  'Gerando insights...'
]

let commandIndex = 0
let statusIndex = 0
let intervals = []

// Função para animar digitação
const typeCommand = (command, callback) => {
  currentCommand.value = ''
  let i = 0
  const interval = setInterval(() => {
    if (i < command.length) {
      currentCommand.value += command[i]
      i++
    } else {
      clearInterval(interval)
      setTimeout(callback, 1000)
    }
  }, 50)
  intervals.push(interval)
}

// Função para animar rede neural
const animateNeuralNetwork = () => {
  // Reset todos os nós
  neuralNodes.value.input.fill(false)
  neuralNodes.value.hidden.fill(false)
  neuralNodes.value.output.fill(false)
  
  // Animar camada de entrada
  setTimeout(() => {
    neuralNodes.value.input = neuralNodes.value.input.map(() => Math.random() > 0.3)
  }, 200)
  
  // Animar camada oculta
  setTimeout(() => {
    neuralNodes.value.hidden = neuralNodes.value.hidden.map(() => Math.random() > 0.4)
  }, 600)
  
  // Animar camada de saída
  setTimeout(() => {
    neuralNodes.value.output = neuralNodes.value.output.map(() => Math.random() > 0.5)
  }, 1000)
}

// Função para criar partículas
const createParticles = () => {
  particles.value = []
  for (let i = 0; i < 15; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 300,
      duration: 3 + Math.random() * 4
    })
  }
}

// Função para animar barras de performance
const animatePerformanceBars = () => {
  performanceBars.value.forEach((bar, index) => {
    setTimeout(() => {
      bar.animated = true
    }, index * 200)
  })
}

// Função principal de animação
const startAnimations = () => {
  // Animar barras de performance
  setTimeout(() => {
    animatePerformanceBars()
  }, 500)
  
  // Ciclo de comandos
  const commandCycle = () => {
    typeCommand(commands[commandIndex], () => {
      commandIndex = (commandIndex + 1) % commands.length
      setTimeout(commandCycle, 2000)
    })
  }
  
  // Ciclo de status
  const statusCycle = () => {
    currentStatus.value = statuses[statusIndex]
    statusIndex = (statusIndex + 1) % statuses.length
  }
  
  // Ciclo de velocidade de processamento
  const speedCycle = () => {
    processingSpeed.value = Math.floor(Math.random() * 1000) + 500
  }
  
  // Iniciar ciclos
  commandCycle()
  
  intervals.push(setInterval(statusCycle, 2000))
  intervals.push(setInterval(speedCycle, 1500))
  intervals.push(setInterval(animateNeuralNetwork, 3000))
  
  // Criar partículas
  createParticles()
}

onMounted(() => {
  startAnimations()
})

onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
})
</script>

<style scoped>
.typing-command {
  min-height: 1.2em;
}

/* Animações para partículas */
@keyframes float-0 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-100px) rotate(360deg); opacity: 0; } }
@keyframes float-1 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-120px) rotate(-360deg); opacity: 0; } }
@keyframes float-2 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-80px) rotate(180deg); opacity: 0; } }
@keyframes float-3 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-110px) rotate(-180deg); opacity: 0; } }
@keyframes float-4 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-90px) rotate(270deg); opacity: 0; } }
@keyframes float-5 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-130px) rotate(-270deg); opacity: 0; } }
@keyframes float-6 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-70px) rotate(90deg); opacity: 0; } }
@keyframes float-7 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-140px) rotate(-90deg); opacity: 0; } }
@keyframes float-8 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-60px) rotate(45deg); opacity: 0; } }
@keyframes float-9 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-150px) rotate(-45deg); opacity: 0; } }
@keyframes float-10 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-85px) rotate(135deg); opacity: 0; } }
@keyframes float-11 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-125px) rotate(-135deg); opacity: 0; } }
@keyframes float-12 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-95px) rotate(225deg); opacity: 0; } }
@keyframes float-13 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-115px) rotate(-225deg); opacity: 0; } }
@keyframes float-14 { 0% { transform: translateY(0px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-105px) rotate(315deg); opacity: 0; } }

/* Efeito de glow para elementos ativos */
.shadow-blue-500\/50 {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.shadow-purple-500\/50 {
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.shadow-green-500\/50 {
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}
</style>