<template>
  <div ref="containerRef" class="background-effect">
    <!-- Quadrados flutuantes animados -->
    <div v-if="isVisible" :key="`squares-${animationKey}`" class="squares-container">
      <div
        v-for="(square, index) in squares"
        :key="`square-${index}`"
        class="floating-square"
        :style="{
          left: square.left,
          top: square.top,
          width: square.size,
          height: square.size,
          animationDelay: square.delay,
          animationDuration: square.duration,
          opacity: square.opacity
        }"
      ></div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Gerar quadrados com posições e tamanhos aleatórios
const squares = ref([
  // Lado esquerdo
  { left: '5%', top: '10%', size: '80px', delay: '0s', duration: '20s', opacity: 0.1 },
  { left: '3%', top: '30%', size: '120px', delay: '2s', duration: '25s', opacity: 0.08 },
  { left: '8%', top: '60%', size: '60px', delay: '4s', duration: '18s', opacity: 0.12 },
  { left: '2%', top: '80%', size: '100px', delay: '6s', duration: '22s', opacity: 0.09 },

  // Lado direito
  { left: '92%', top: '15%', size: '90px', delay: '1s', duration: '23s', opacity: 0.1 },
  { left: '95%', top: '40%', size: '70px', delay: '3s', duration: '19s', opacity: 0.11 },
  { left: '90%', top: '65%', size: '110px', delay: '5s', duration: '21s', opacity: 0.08 },
  { left: '94%', top: '85%', size: '85px', delay: '7s', duration: '24s', opacity: 0.1 },

  // Extras no centro (sutis)
  { left: '50%', top: '5%', size: '50px', delay: '8s', duration: '26s', opacity: 0.05 },
  { left: '48%', top: '95%', size: '65px', delay: '9s', duration: '27s', opacity: 0.06 }
])

const containerRef = ref(null)
const isVisible = ref(false)
const animationKey = ref(0)
const hasBeenVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Seção entrou na viewport - reiniciar animações SEMPRE
          isVisible.value = false
          animationKey.value++ // Mudar key para forçar re-render

          // Forçar reflow para reiniciar animações CSS
          requestAnimationFrame(() => {
            setTimeout(() => {
              isVisible.value = true
              hasBeenVisible.value = true
            }, 100)
          })
        } else if (hasBeenVisible.value) {
          // Seção saiu da viewport - preparar para próxima entrada
          // Marcar como invisível quando sair da tela
          isVisible.value = false
        }
      })
    },
    {
      threshold: 0.15, // Ativar quando 15% da seção estiver visível
      rootMargin: '-80px 0px' // Offset vertical
    }
  )

  // Aguardar próximo frame para garantir que o elemento está montado
  setTimeout(() => {
    if (containerRef.value && containerRef.value.parentElement) {
      // Observar a seção pai (section)
      observer.observe(containerRef.value.parentElement)
    }
  }, 100)

  // Iniciar como visível na primeira vez
  isVisible.value = true
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.background-effect {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* Container dos quadrados */
.squares-container {
  position: relative;
  width: 100%;
  height: 100%;
  animation: fade-in 0.6s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Quadrados flutuantes */
.floating-square {
  position: absolute;
  border: 2px solid #7c3aed;
  border-radius: 8px;
  transform: rotate(45deg);
  animation: float-rotate linear infinite;
  will-change: transform;
}

@keyframes float-rotate {
  0% {
    transform: translateY(0) rotate(45deg);
    opacity: var(--square-opacity, 0.1);
  }
  25% {
    transform: translateY(-30px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(135deg);
    opacity: calc(var(--square-opacity, 0.1) * 0.5);
  }
  75% {
    transform: translateY(30px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(225deg);
    opacity: var(--square-opacity, 0.1);
  }
}


/* Responsivo - menos quadrados em mobile */
@media (max-width: 768px) {
  .floating-square:nth-child(n+7) {
    display: none;
  }

  .floating-square {
    width: 50px !important;
    height: 50px !important;
  }
}

/* Reduzir animação em dispositivos com preferência por movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .floating-square {
    animation: none;
    opacity: 0.05 !important;
  }

  .diagonal-line {
    animation: none;
  }
}
</style>
