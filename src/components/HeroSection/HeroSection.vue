<template>
  <section id="hero" class="hero">
    <div class="wrap">
      <div data-scroll="fade-up">
        <span class="eyebrow">Marketing e tecnologia para imobiliárias</span>
        <h1>Quem aparece melhor, <span class="roxo">vende primeiro.</span></h1>
        <p class="sub">Vídeos que valorizam seus imóveis, anúncios que geram leads e atendimento com IA 24/7. Tudo em um só parceiro, do primeiro clique ao contrato assinado.</p>
        <div class="acoes">
          <a :href="WHATSAPP_DIAGNOSTICO" target="_blank" rel="noopener noreferrer" class="btn btn-primario">
            Agendar Diagnóstico Gratuito &nbsp;<i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#como-funciona" class="btn btn-contorno">Ver Como Funciona</a>
        </div>
        <div class="selos">
          <div v-for="selo in selos" :key="selo.titulo" class="selo">
            <i :class="selo.icone"></i>
            <div><b>{{ selo.titulo }}</b><span>{{ selo.texto }}</span></div>
          </div>
        </div>
      </div>

      <!-- Publicação conceito: post patrocinado apresentando o lançamento (vídeo real do Zenite) -->
      <div class="hero-visual" data-scroll="fade-up" data-delay="2">
        <div class="orbita"></div>
        <div class="blob"></div>
        <div class="celular">
          <div class="post">
            <div class="post-topo">
              <div class="post-av"><i class="fa-solid fa-house"></i></div>
              <div class="post-conta"><b>sua.imobiliaria</b><small>Patrocinado</small></div>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="post-midia">
              <video src="/zenite-reels.mp4" poster="/video-capa.jpg" autoplay muted loop playsinline aria-label="Vídeo de um lançamento imobiliário gerado a partir da planta"></video>
              <span class="post-selo">Lançamento</span>
            </div>
            <div class="post-cta">Quero saber mais <i class="fa-solid fa-chevron-right"></i></div>
            <div class="post-acoes">
              <i class="fa-regular fa-heart"></i><i class="fa-regular fa-comment"></i><i class="fa-regular fa-paper-plane"></i>
              <i class="fa-regular fa-bookmark"></i>
            </div>
            <p class="post-legenda"><b>sua.imobiliaria</b> Lançamento no Centro: 3 dormitórios, 2 vagas e área de lazer completa. Agende sua visita.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WHATSAPP_DIAGNOSTICO } from '@/data/contato'

const selos = [
  { icone: 'fa-solid fa-clapperboard', titulo: 'Vídeos em 48h', texto: 'Das suas fotos' },
  { icone: 'fa-solid fa-bullseye', titulo: 'Leads todo dia', texto: 'Google e Meta' },
  { icone: 'fa-solid fa-robot', titulo: 'IA 24/7', texto: 'Resposta na hora' },
  { icone: 'fa-solid fa-chart-pie', titulo: 'Transparência', texto: 'Relatório mensal' }
]

</script>
