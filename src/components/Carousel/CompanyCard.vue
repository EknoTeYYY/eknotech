<template>
  <div class="group flex flex-col items-center">
    <div
      class="w-40 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg"
      :class="[company.border, company.shadow]"
    >
      <div class="text-center">
        <div class="text-2xl font-bold text-transparent bg-clip-text mb-1" :class="'bg-gradient-to-r ' + company.gradient">
          {{ company.name }}
        </div>
        <div class="text-xs text-gray-500 uppercase tracking-wider">{{ company.label }}</div>
      </div>
    </div>
    <div class="text-xs text-gray-600">{{ company.sector }}</div>
  </div>
</template>

<script>
export default {
  props: {
    company: Object,
  },
}
</script>
