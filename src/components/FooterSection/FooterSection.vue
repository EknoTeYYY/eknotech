<template>
  <footer class="rodape">
    <div class="wrap">
      <div>
        <img src="/logo-branca.png" alt="eknotech">
        <p>Marketing e tecnologia para o mercado imobiliário vender mais.</p>
        <div class="redes">
          <a :href="INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          <li v-for="servico in servicos" :key="servico"><a href="#servicos">{{ servico }}</a></li>
        </ul>
      </div>
      <div>
        <h4>Menu</h4>
        <ul>
          <li><a href="#" @click.prevent="restartPage">Início</a></li>
          <li v-for="link in MENU" :key="link.href"><a :href="link.href">{{ link.label }}</a></li>
        </ul>
      </div>
      <div>
        <h4>Fale Conosco</h4>
        <ul class="contato">
          <li><i class="fa-brands fa-whatsapp"></i> <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer">{{ TELEFONE }}</a></li>
          <li><i class="fa-regular fa-envelope"></i> <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></li>
          <li><i class="fa-solid fa-location-dot"></i> Florianópolis, SC</li>
        </ul>
      </div>
    </div>
    <div class="copy">© {{ ano }} Eknotech. Todos os direitos reservados.</div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
import { WHATSAPP, TELEFONE, EMAIL, INSTAGRAM } from '@/data/contato'
import { MENU } from '@/data/menu'

const restartPage = inject('restartPage', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

const servicos = ['Criação de Conteúdo', 'Tráfego Pago', 'Agentes de IA', 'Peças para Redes Sociais', 'Gestão de Contratos']
const ano = new Date().getFullYear()
</script>
