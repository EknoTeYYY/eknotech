<!-- 10 · CONTATO (fechamento, no formato antigo com as cores novas) -->
<template>
  <section class="slide fechamento">
    <img class="logo-fechamento" src="/logo-roxa.png" alt="eknotech">
    <h2>Vamos crescer <span class="roxo">juntos?</span></h2>
    <div class="contatos-h">
      <a v-for="item in contatos" :key="item.rotulo" class="contato-h" :href="item.href" :target="item.externo ? '_blank' : null" :rel="item.externo ? 'noopener noreferrer' : null">
        <i :class="item.icone"></i>
        <small>{{ item.rotulo }}</small>
        <span>{{ item.valor }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { WHATSAPP, EMAIL, INSTAGRAM } from '@/data/contato'

const contatos = [
  { rotulo: 'WhatsApp', valor: '(48) 99114-4161', icone: 'fa-brands fa-whatsapp', href: WHATSAPP, externo: true },
  { rotulo: 'E-mail', valor: EMAIL, icone: 'fa-solid fa-envelope', href: `mailto:${EMAIL}` },
  { rotulo: 'Instagram', valor: '@eknotech', icone: 'fa-brands fa-instagram', href: INSTAGRAM, externo: true },
  { rotulo: 'Site', valor: 'eknotech.com.br', icone: 'fa-solid fa-globe', href: 'https://eknotech.com.br', externo: true }
]
</script>
