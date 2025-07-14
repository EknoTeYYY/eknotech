<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <NavBar />
    <HeroSection />
    <ProductsSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CtaSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar/NavBar.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import ProductsSection from './components/ProductsSection/ProductsSection.vue'
import FeaturesSection from './components/FeaturesSection/FeaturesSection.vue'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection.vue'
import CtaSection from './components/CtaSection/CtaSection.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'
</script>