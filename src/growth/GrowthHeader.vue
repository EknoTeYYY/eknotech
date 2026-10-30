<template>
  <!-- Menu único, fixo no topo em todos os slides -->
  <header class="topo-g">
    <a class="marca" href="/" title="Voltar para a página da eknotech"><img src="/logo-roxa.png" alt="eknotech"><span>Growth Imobiliário</span></a>
    <div class="direita">
      <span class="contador"><b>{{ String(atual + 1).padStart(2, '0') }}</b> / {{ String(total).padStart(2, '0') }}</span>
      <a class="btn btn-whats" :href="WHATSAPP" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Falar no WhatsApp</a>
    </div>
    <div class="progresso" :style="{ width: ((atual + 1) / total) * 100 + '%' }"></div>
  </header>
</template>

<script setup>
import { WHATSAPP } from '@/data/contato'

defineProps({
  atual: { type: Number, required: true },
  total: { type: Number, required: true }
})
</script>
