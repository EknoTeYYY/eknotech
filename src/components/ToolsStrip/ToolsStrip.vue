<template>
  <div class="ferramentas">
    <div class="wrap">
      <span class="rotulo">Plataformas que operamos</span>
      <ul>
        <li v-for="item in plataformas" :key="item.nome"><i :class="item.icone"></i> {{ item.nome }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const plataformas = [
  { nome: 'Meta Ads', icone: 'fa-brands fa-meta' },
  { nome: 'Google Ads', icone: 'fa-brands fa-google' },
  { nome: 'Instagram', icone: 'fa-brands fa-instagram' },
  { nome: 'WhatsApp', icone: 'fa-brands fa-whatsapp' },
  { nome: 'YouTube', icone: 'fa-brands fa-youtube' }
]
</script>
