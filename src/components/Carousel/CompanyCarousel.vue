<template>
  <div class="splide" ref="splideRef">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide" v-for="(company, index) in companies" :key="index">
          <CompanyCard :company="company" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Splide } from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'
import CompanyCard from './CompanyCard.vue'

export default {
  components: { CompanyCard },
  setup() {
    const splideRef = ref(null)

    const companies = [
      { name: 'FinanceAI', label: 'Fintech', sector: 'Setor Financeiro', gradient: 'from-purple-400 to-blue-500', border: 'border-purple-500/30', shadow: 'shadow-purple-500/10' },
      { name: 'InvestPro', label: 'Capital', sector: 'Gestão de Ativos', gradient: 'from-blue-400 to-cyan-500', border: 'border-blue-500/30', shadow: 'shadow-blue-500/10' },
      { name: 'TechCorp', label: 'Solutions', sector: 'Tecnologia', gradient: 'from-green-400 to-blue-500', border: 'border-green-500/30', shadow: 'shadow-green-500/10' },
      { name: 'MedTech', label: 'Health', sector: 'Saúde Digital', gradient: 'from-red-400 to-pink-500', border: 'border-red-500/30', shadow: 'shadow-red-500/10' },
      { name: 'ShopAI', label: 'Commerce', sector: 'E-commerce', gradient: 'from-yellow-400 to-orange-500', border: 'border-yellow-500/30', shadow: 'shadow-yellow-500/10' },
      { name: 'AutoTech', label: 'Industry', sector: 'Manufatura', gradient: 'from-indigo-400 to-purple-500', border: 'border-indigo-500/30', shadow: 'shadow-indigo-500/10' },
      { name: 'LogiFlow', label: 'Logistics', sector: 'Logística', gradient: 'from-teal-400 to-blue-500', border: 'border-teal-500/30', shadow: 'shadow-teal-500/10' },
      { name: 'EnergyAI', label: 'Power', sector: 'Energia', gradient: 'from-emerald-400 to-green-500', border: 'border-emerald-500/30', shadow: 'shadow-emerald-500/10' },
    ]

    onMounted(() => {
      new Splide(splideRef.value, {
        type: 'loop',
        perPage: 6,
        gap: '1.5rem',
        autoplay: true,
        interval: 4000,
        pagination: false,
        arrows: false,
        breakpoints: {
          1024: { perPage: 3 },
          640: { perPage: 2 },
        },
      }).mount()
    })

    return { companies, splideRef }
  },
}
</script>
