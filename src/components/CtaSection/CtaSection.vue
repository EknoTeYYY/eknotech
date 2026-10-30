<template>
  <section id="contato">
    <div class="wrap">
      <div class="chamada" data-scroll="fade-up">
        <div class="ico"><i class="fa-brands fa-whatsapp"></i></div>
        <div>
          <h2>Pronto para vender mais imóveis?</h2>
          <p>Agende um diagnóstico gratuito e descubra como conteúdo, tráfego e IA podem transformar a captação da sua imobiliária.</p>
        </div>
        <a :href="WHATSAPP_DIAGNOSTICO" target="_blank" rel="noopener noreferrer" class="btn btn-whats">
          <i class="fa-brands fa-whatsapp"></i> Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WHATSAPP_DIAGNOSTICO } from '@/data/contato'
</script>
