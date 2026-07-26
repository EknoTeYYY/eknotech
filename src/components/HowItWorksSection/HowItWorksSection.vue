<template>
  <section id="como-funciona" class="how-it-works-section">
    <div class="container">
      <!-- Header da Seção -->
      <div class="section-header">
        <h2 class="section-title" data-scroll="blur" data-delay="1">Como Funciona</h2>
        <p class="section-description" data-scroll="fade-up" data-delay="2">
          Implantação em fases, com acompanhamento próximo. Cada operação imobiliária é tratada individualmente.
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
          <!-- Modalidade Assinatura Growth -->
          <div class="mode-card mode-recurrent" data-scroll="scale-up" data-delay="1">
            <div class="mode-badge">Mais Popular</div>
            <div class="mode-icon">🚀</div>
            <h4 class="mode-title">Assinatura Growth (Mensal)</h4>
            <p class="mode-description">
              O ecossistema completo rodando pela sua imobiliária: conteúdo, tráfego, IA e gestão.
            </p>
            <ul class="mode-features">
              <li><span class="feature-icon">✓</span> Vídeos profissionais todo mês</li>
              <li><span class="feature-icon">✓</span> Tráfego Google + Meta Ads</li>
              <li><span class="feature-icon">✓</span> Agente de WhatsApp com IA 24/7</li>
              <li><span class="feature-icon">✓</span> Consultoria recorrente</li>
              <li><span class="feature-icon">✓</span> Sistema de gestão de contratos</li>
            </ul>
            <div class="mode-ideal">
              <strong>Ideal para:</strong> Imobiliárias que querem uma máquina de captação e vendas completa
            </div>
          </div>

          <!-- Modalidade Sob Demanda -->
          <div class="mode-card mode-onetime" data-scroll="scale-up" data-delay="2">
            <div class="mode-icon">🎯</div>
            <h4 class="mode-title">Projetos Sob Demanda</h4>
            <p class="mode-description">
              Precisa de algo pontual? Contratamos por projeto, sem assinatura.
            </p>
            <ul class="mode-features">
              <li><span class="feature-icon">✓</span> Vídeos avulsos de imóveis e lançamentos</li>
              <li><span class="feature-icon">✓</span> Campanha para lançamento específico</li>
              <li><span class="feature-icon">✓</span> Automação de atendimento pontual</li>
              <li><span class="feature-icon">✓</span> Sistema de contratos standalone</li>
              <li><span class="feature-icon">✓</span> Escopo e prazo fechados</li>
            </ul>
            <div class="mode-ideal">
              <strong>Ideal para:</strong> Corretores e construtoras que querem começar por uma frente específica
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Final -->
      <div class="section-cta" data-scroll="scale">
        <p class="cta-text">Contato direto com quem desenvolve</p>
        <a href="#contato" class="btn-cta">
          Quero Vender Mais Imóveis
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
    subtitle: 'Entendemos sua operação antes de propor qualquer coisa',
    duration: '1 reunião (gratuita)',
    details: [
      'Reunião para entender sua imobiliária ou operação de vendas',
      'Análise dos seus anúncios, portais e redes sociais',
      'Identificação dos gargalos de captação e atendimento',
      'Definição de plano, metas e investimento'
    ]
  },
  {
    title: '2. Implantação',
    subtitle: 'Conteúdo, tráfego e automação entram no ar',
    duration: 'Mês 1 e 2',
    details: [
      'Setup das contas, pixel e públicos — campanhas rodando no primeiro mês',
      'Primeiros vídeos dos seus imóveis produzidos e publicados',
      'Agente de WhatsApp com IA treinado com o seu portfólio',
      'Nenhum lead das campanhas fica sem resposta'
    ]
  },
  {
    title: '3. Crescimento & Suporte',
    subtitle: 'Máquina de captação e gestão rodando',
    duration: 'Acompanhamento contínuo',
    details: [
      'Otimização semanal das campanhas — escala o que performa',
      'Relatório mensal transparente: investimento, custo por lead e resultados',
      'Consultoria recorrente para evoluir a operação',
      'Suporte direto com quem desenvolve'
    ]
  }
])
</script>

<style scoped>
@import './HowItWorksSection.css';
</style>
