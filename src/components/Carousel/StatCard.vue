<template>
  <div class="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
    <div :class="'text-3xl font-bold text-' + color + '-400 mb-2'">{{ value }}</div>
    <div class="text-sm text-gray-400">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    color: String,
  },
}
</script>
