<template>
  <section id="como-funciona" class="how-it-works-section">
    <div class="container">
      <!-- Header da Seção -->
      <div class="section-header">
        <span class="section-badge" data-scroll="fade-up">Processo Transparente</span>
        <h2 class="section-title" data-scroll="blur" data-delay="1">Como Funciona</h2>
        <p class="section-description" data-scroll="fade-up" data-delay="2">
          Consultoria personalizada, não linha de produção. Cada projeto é tratado individualmente.
        </p>
      </div>

      <!-- Steps Timeline (3 etapas principais) -->
      <div class="steps-timeline">
        <div class="timeline-line"></div>

        <div
          class="step-item"
          v-for="(step, index) in steps"
          :key="index"
          data-scroll="slide-left"
          :data-delay="index + 1"
        >
          <div class="step-number-badge">{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-subtitle">{{ step.subtitle }}</p>
            <ul class="step-details">
              <li v-for="(detail, idx) in step.details" :key="idx">
                <span class="detail-icon">✓</span>
                {{ detail }}
              </li>
            </ul>
            <div class="step-duration" v-if="step.duration">
              <span class="duration-icon">⏱</span>
              {{ step.duration }}
            </div>
          </div>
        </div>
      </div>

      <!-- Modalidades de Contratação -->
      <div class="pricing-modes">
        <h3 class="modes-title" data-scroll="fade-up">Escolha a Modalidade Ideal</h3>

        <div class="modes-grid">
          <!-- Modalidade Recorrente -->
          <div class="mode-card mode-recurrent" data-scroll="scale-up" data-delay="1">
            <div class="mode-badge">Mais Popular</div>
            <div class="mode-icon">🔄</div>
            <h4 class="mode-title">Recorrente (Mensal)</h4>
            <p class="mode-description">
              Workflow hospedado no nosso servidor. Você não se preocupa com nada técnico.
            </p>
            <ul class="mode-features">
              <li><span class="feature-icon">✓</span> Hospedagem incluída</li>
              <li><span class="feature-icon">✓</span> Manutenção contínua</li>
              <li><span class="feature-icon">✓</span> Monitoramento 24/7</li>
              <li><span class="feature-icon">✓</span> Suporte prioritário</li>
              <li><span class="feature-icon">✓</span> Trial de 7 dias</li>
            </ul>
            <div class="mode-ideal">
              <strong>Ideal para:</strong> Empresas que querem solução pronta sem infraestrutura
            </div>
          </div>

          <!-- Modalidade À Vista -->
          <div class="mode-card mode-onetime" data-scroll="scale-up" data-delay="2">
            <div class="mode-icon">📦</div>
            <h4 class="mode-title">À Vista (Projeto Único)</h4>
            <p class="mode-description">
              Workflow entregue completo. Você tem controle total do código e infraestrutura.
            </p>
            <ul class="mode-features">
              <li><span class="feature-icon">✓</span> Código-fonte completo</li>
              <li><span class="feature-icon">✓</span> Documentação detalhada</li>
              <li><span class="feature-icon">✓</span> Exportação do projeto</li>
              <li><span class="feature-icon">✓</span> Treinamento da equipe</li>
              <li><span class="feature-icon">✓</span> Autonomia total</li>
            </ul>
            <div class="mode-ideal">
              <strong>Ideal para:</strong> Empresas com equipe técnica que querem controle total
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Final -->
      <div class="section-cta" data-scroll="scale">
        <p class="cta-text">Contato direto com quem desenvolve</p>
        <a href="#contato" class="btn-cta">
          Quero Automatizar Meus Processos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { initScrollAnimations, cleanup } = useScrollAnimation()

onMounted(() => {
  // Aguarda o DOM carregar
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onUnmounted(() => {
  cleanup()
})

const steps = ref([
  {
    title: '1. Diagnóstico',
    subtitle: 'Entendemos o seu negócio antes de automatizar',
    duration: '1 reunião (gratuita)',
    details: [
      'Reunião para entender o seu negócio',
      'Mapeamento de processos manuais e gargalos',
      'Identificação de oportunidades de automação',
      'Definição de escopo, prazo e investimento'
    ]
  },
  {
    title: '2. Desenvolvimento',
    subtitle: 'Construímos workflows customizados para você',
    duration: '1-3 semanas',
    details: [
      'Criação de workflows sob medida',
      'Integrações com seus sistemas (CRMs, ERPs, planilhas, APIs)',
      'Automações com ou sem IA conforme necessidade',
      'Você acompanha o progresso em tempo real'
    ]
  },
  {
    title: '3. Entrega & Suporte',
    subtitle: 'Garantimos que tudo funcione perfeitamente',
    duration: 'Suporte contínuo',
    details: [
      'Implantação dos workflows no seu ambiente',
      'Treinamento básico para sua equipe',
      'Monitoramento contínuo e ajustes',
      'Suporte técnico sempre disponível'
    ]
  }
])
</script>

<style scoped>
@import './HowItWorksSection.css';
</style>
