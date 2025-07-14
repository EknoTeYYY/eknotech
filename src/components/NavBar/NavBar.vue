<template>
  <nav class="fixed w-full z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center h-10">  <!-- Define a altura fixa da navbar -->
        <div class="flex items-center">
          <img src="../../assets/logoMenu.png" alt="EknoTech" class="h-20 md:h-24" draggable="false" style="user-select: none;">
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="#products" class="text-gray-300 hover:text-white transition-colors">Produtos</a>
          <a href="#features" class="text-gray-300 hover:text-white transition-colors">Recursos</a>
          <a href="#testimonials" class="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
          <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contato</a>
        </div>
        
        <!-- Mobile Navigation Button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-300 hover:text-white focus:outline-none">
            <i v-if="!isOpen" class="fas fa-bars h-6 w-6"></i>
            <i v-else class="fas fa-times h-6 w-6"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation Menu -->
      <div v-if="isOpen" class="md:hidden mt-2 py-2 space-y-2">
        <a href="#products" @click="isOpen = false" class="block text-gray-300 hover:text-white transition-colors">Produtos</a>
        <a href="#features" @click="isOpen = false" class="block text-gray-300 hover:text-white transition-colors">Recursos</a>
        <a href="#testimonials" @click="isOpen = false" class="block text-gray-300 hover:text-white transition-colors">Depoimentos</a>
        <a href="#contact" @click="isOpen = false" class="block text-gray-300 hover:text-white transition-colors">Contato</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>