<template>
  <section id="como-funciona" class="bloco fases-faixa">
    <div class="wrap">
      <div class="cabeca" data-scroll="fade-up">
        <div>
          <span class="eyebrow">Como funciona</span>
          <h2>Implantação em fases, com <span class="roxo">acompanhamento próximo</span></h2>
        </div>
      </div>
      <div class="fases">
        <div v-for="(fase, i) in fases" :key="fase.titulo" class="fase" data-scroll="fade-up" :data-delay="i + 1">
          <span class="prazo">{{ fase.prazo }}</span>
          <div class="num">{{ i + 1 }}</div>
          <h3>{{ fase.titulo }}</h3>
          <ul>
            <li v-for="item in fase.itens" :key="item"><i class="fa-solid fa-check"></i>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const fases = [
  {
    titulo: 'Diagnóstico',
    prazo: '1 reunião gratuita',
    itens: [
      'Leitura da operação de vendas',
      'Análise de anúncios, portais e redes',
      'Gargalos de captação e atendimento',
      'Plano, metas e investimento'
    ]
  },
  {
    titulo: 'Implantação',
    prazo: 'Mês 1 e 2',
    itens: [
      'Contas, pixel e públicos configurados',
      'Campanhas rodando no 1º mês',
      'Primeiros vídeos publicados',
      'Agente de WhatsApp com IA treinado'
    ]
  },
  {
    titulo: 'Crescimento',
    prazo: 'Contínuo',
    itens: [
      'Otimização semanal das campanhas',
      'Relatório mensal de custo por lead',
      'Consultoria recorrente',
      'Acompanhamento do time Eknotech'
    ]
  }
]
</script>
