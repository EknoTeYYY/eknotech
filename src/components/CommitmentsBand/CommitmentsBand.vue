<template>
  <section class="faixa-escura">
    <div class="wrap">
      <div data-scroll="fade-up">
        <span class="eyebrow">Nossos compromissos</span>
        <h2>Ritmo de entrega que você acompanha</h2>
        <p>Prazos claros desde o primeiro mês, com relatório de resultados sem caixa preta.</p>
        <a href="#como-funciona" class="btn btn-claro">Ver como funciona &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="compromissos" data-scroll="fade-up" data-delay="2">
        <div v-for="item in compromissos" :key="item.valor" class="compromisso">
          <i :class="item.icone"></i>
          <b>{{ item.valor }}</b>
          <span>{{ item.texto }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const compromissos = [
  { icone: 'fa-solid fa-clapperboard', valor: '48h', texto: 'Entrega dos vídeos' },
  { icone: 'fa-solid fa-rocket', valor: '1º mês', texto: 'Campanhas no ar' },
  { icone: 'fa-solid fa-robot', valor: '24/7', texto: 'Atendimento com IA' },
  { icone: 'fa-solid fa-chart-pie', valor: 'Mensal', texto: 'Relatório de custo por lead' }
]
</script>
