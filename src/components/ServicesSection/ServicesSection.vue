<template>
  <section id="servicos" class="bloco">
    <div class="wrap">
      <div class="cabeca" data-scroll="fade-up">
        <div>
          <span class="eyebrow">O que fazemos</span>
          <h2>Serviços que fazem sua imobiliária <span class="roxo">vender</span></h2>
        </div>
        <a href="#planos" class="link-seta">Ver planos <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="servicos">
        <div v-for="(servico, i) in servicos" :key="servico.titulo" class="servico" data-scroll="fade-up" :data-delay="(i % 3) + 1">
          <div class="ico"><i :class="servico.icone"></i></div>
          <h3>{{ servico.titulo }}</h3>
          <p v-html="servico.texto"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// texto fixo do próprio código; o <b> marca o destaque em roxo
const servicos = [
  {
    icone: 'fa-solid fa-clapperboard',
    titulo: 'Criação de Conteúdo',
    texto: 'Vídeos dos seus imóveis pensados para <b>gerar visualização e vendas</b>, seguindo as melhores práticas de cada plataforma.'
  },
  {
    icone: 'fa-solid fa-chart-line',
    titulo: 'Tráfego Pago',
    texto: 'Campanhas no <b>Meta Ads</b> e no <b>Google Ads</b> para gerar leads qualificados todos os dias, com relatório mensal transparente.'
  },
  {
    icone: 'fa-solid fa-robot',
    titulo: 'Agentes de IA',
    texto: 'Atendimento 24/7 no WhatsApp que responde na hora, qualifica o interesse e entrega o lead filtrado para sua equipe.'
  },
  {
    icone: 'fa-solid fa-images',
    titulo: 'Peças para Redes Sociais',
    texto: 'Posts e carrosséis dos seus imóveis com a <b>identidade visual da sua marca</b> e legenda pronta.'
  },
  {
    icone: 'fa-solid fa-file-signature',
    titulo: 'Gestão de Contratos',
    texto: '<b>Tecnologia própria da Eknotech</b> para organizar contratos de aluguel, assinaturas e documentos da operação.'
  },
  {
    icone: 'fa-solid fa-magnifying-glass-chart',
    titulo: 'Consultoria & Diagnóstico',
    texto: 'Análise da sua captação e atendimento, identificação de gargalos e proposta com metas claras. Diagnóstico gratuito.'
  }
]
</script>
