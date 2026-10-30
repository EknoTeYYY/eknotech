<template>
  <section id="planos" class="bloco">
    <div class="wrap">
      <div class="cabeca" data-scroll="fade-up">
        <div>
          <span class="eyebrow">Planos Growth</span>
          <h2>Planos para o <span class="roxo">momento da sua operação</span></h2>
        </div>
      </div>
      <div class="planos">
        <div
          v-for="(plano, i) in planos"
          :key="plano.nivel"
          class="plano"
          :class="{ destaque: plano.destaque }"
          data-scroll="fade-up"
          :data-delay="i + 1"
        >
          <span v-if="plano.destaque" class="selo-top">Mais escolhido</span>
          <span class="nivel">{{ plano.nivel }}</span>
          <h3>{{ plano.titulo }}</h3>
          <p>{{ plano.descricao }}</p>
          <ul>
            <li v-for="item in plano.itens" :key="item.texto" :class="item.incluso ? 'sim' : 'nao'">
              <i :class="item.incluso ? 'fa-solid fa-check' : 'fa-solid fa-minus'"></i>{{ item.texto }}
            </li>
          </ul>
          <a
            :href="whatsappCom(`Olá! Quero saber mais sobre o plano ${plano.nivel}.`)"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            :class="plano.destaque ? 'btn-primario' : 'btn-contorno'"
          >Quero este plano</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { whatsappCom } from '@/data/contato'

// Mesma lista nos três planos, para comparar linha a linha (padrão do /growth)
const lista = (consultoria, ia, contratos) => [
  { texto: '4 vídeos por mês', incluso: true },
  { texto: 'Tráfego Google + Meta', incluso: true },
  { texto: consultoria, incluso: true },
  { texto: 'Agente de WhatsApp com IA 24/7', incluso: ia },
  { texto: 'Sistema de gestão de contratos', incluso: contratos }
]

const planos = [
  { nivel: 'Start', titulo: 'Vídeos e tráfego', descricao: 'Para começar a aparecer e gerar leads.', itens: lista('Consultoria mensal (1 call)', false, false) },
  { nivel: 'Pro', titulo: '+ Atendimento com IA', descricao: 'Para não perder nenhum lead.', itens: lista('Consultoria quinzenal (2 calls)', true, false), destaque: true },
  { nivel: 'Max', titulo: '+ Gestão de contratos', descricao: 'Para a operação completa.', itens: lista('Mentoria quinzenal', true, true) }
]
</script>
