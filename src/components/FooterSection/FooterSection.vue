<template>
  <footer class="bg-gray-900 py-12 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4">
            EknoTech
          </div>
          <p class="text-gray-400 mb-4">
            Soluções avançadas de IA para transformar seu negócio e impulsionar resultados.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-twitter h-5 w-5"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-github h-5 w-5"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-instagram h-5 w-5"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Produtos</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ekno Assist</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ekno Trading</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Preços</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Demonstração</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Empresa</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Suporte</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Status</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} EknoTech. Todos os direitos reservados.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Termos de Serviço</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script needed
</script>