<template>
  <Transition name="splash">
    <div v-if="isVisible" class="splash-screen">
      <div class="splash-content">
        <img
          ref="logoRef"
          src="../../assets/logoMenu.png"
          alt="EknoTech"
          class="splash-logo"
        >
        <div class="loading-bar">
          <div class="loading-progress" ref="progressRef"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isVisible = ref(true)
const logoRef = ref(null)
const progressRef = ref(null)

const emit = defineEmits(['complete'])

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        isVisible.value = false
        emit('complete')
      }, 300)
    }
  })

  // Logo aparece com scale e glow
  tl.from(logoRef.value, {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })

  // Logo pulsa
  tl.to(logoRef.value, {
    scale: 1.05,
    duration: 0.4,
    yoyo: true,
    repeat: 1,
    ease: 'power1.inOut'
  })

  // Loading bar progresso
  tl.to(progressRef.value, {
    width: '100%',
    duration: 1.2,
    ease: 'power2.inOut'
  }, '-=0.8')

  // Logo faz zoom out antes de desaparecer
  tl.to(logoRef.value, {
    scale: 1.2,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.in'
  })
})
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.splash-logo {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 0 30px rgba(124, 58, 237, 0.5));
}

.loading-bar {
  width: 200px;
  height: 3px;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.loading-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #7c3aed, #a78bfa);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.8);
}

.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.3s ease;
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .splash-logo {
    width: 150px;
  }

  .loading-bar {
    width: 150px;
  }
}
</style>
