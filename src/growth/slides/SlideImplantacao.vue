<!-- 9 · IMPLANTAÇÃO (linha do tempo horizontal, mesmo modelo do "Como funciona" da LP) -->
<template>
  <section class="slide implantacao">
    <div class="cabeca-centro">
      <span class="tag"><i class="fa-solid fa-route"></i> Como começamos</span>
      <h2>Implantação em <span class="roxo">3 fases</span></h2>
    </div>
    <div class="trilha">
      <div class="trilha-linha"></div>
      <div v-for="(fase, i) in fases" :key="fase.titulo" class="trilha-fase">
        <div class="trilha-num">{{ i + 1 }}</div>
        <div class="trilha-card">
          <span class="trilha-mes"><i :class="fase.icone"></i> {{ fase.mes }}</span>
          <h3>{{ fase.titulo }}</h3>
          <p>{{ fase.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const fases = [
  { mes: 'Mês 1', icone: 'fa-solid fa-rocket', titulo: 'Conteúdo + Tráfego no ar', texto: 'Setup das contas, pixel e públicos. Primeiros vídeos e campanhas rodando ainda no primeiro mês.' },
  { mes: 'Mês 2', icone: 'fa-solid fa-robot', titulo: 'Automação ativada', texto: 'Agente de WhatsApp treinado com seus imóveis e integrado ao fluxo. Nenhum lead das campanhas fica sem resposta.' },
  { mes: 'Mês 3', icone: 'fa-solid fa-chart-line', titulo: 'Operação completa', texto: 'Sistema de contratos implantado e rotina de consultoria consolidada. Máquina de captação e gestão rodando.' }
]
</script>
