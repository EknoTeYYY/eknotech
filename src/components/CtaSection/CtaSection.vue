<template>
  <section id="contact" class="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600"></div>
      <div class="absolute inset-0" style="background-image: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%); background-size: 100px 100px;"></div>
    </div>
    
    <!-- Animated geometric shapes -->
    <div class="absolute top-20 left-10 w-40 h-40 border border-purple-500/20 rotate-45 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 border border-blue-500/20 rotate-12 animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 border border-purple-400/10 rotate-45 animate-pulse delay-500"></div>
    
    <!-- Notification Toast -->
    <div 
      v-if="notification.show" 
      class="fixed top-4 left-4 right-4 md:top-8 md:right-8 md:left-auto md:right-8 z-50 transform transition-all duration-500 ease-in-out flex justify-center md:justify-end"
      :class="notification.show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
    >
      <div class="relative w-full max-w-sm md:max-w-md">
        <div class="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-25"
             :class="notification.type === 'success' ? 'from-green-600 to-emerald-600' : 'from-red-600 to-rose-600'">
        </div>
        <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-6 rounded-2xl border border-gray-700/50 w-full">
          <div class="flex items-start">
            <div class="flex-shrink-0 mr-3 md:mr-4">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
                   :class="notification.type === 'success' ? 'bg-green-900/50' : 'bg-red-900/50'">
              <i v-if="notification.type === 'success'" class="fas fa-check-circle text-green-400 text-lg md:text-xl"></i>
              <i v-else class="fas fa-exclamation-triangle text-red-400 text-lg md:text-xl"></i>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-white mb-1 text-sm md:text-base">
              {{ notification.type === 'success' ? 'Sucesso!' : 'Erro no envio' }}
            </h4>
            <p class="text-gray-300 text-xs md:text-sm leading-relaxed">
              {{ notification.message }}
            </p>
          </div>
          <button 
            @click="closeNotification"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors p-1"
          >
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    
    <div class="container mx-auto relative z-10">
      <div class="max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full mb-8 backdrop-blur-sm">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span class="text-sm text-gray-300 font-medium tracking-wider">TRANSFORMAÇÃO DIGITAL</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span class="text-white">Pronto para</span>
            <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">transformar seu negócio?</span>
          </h2>
          
          <div class="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entre em contato com nossos especialistas e descubra como nossas soluções de IA podem 
            <span class="text-purple-400 font-semibold">revolucionar suas operações</span> e 
            <span class="text-blue-400 font-semibold">acelerar seus resultados</span>
          </p>
        </div>
        
        <!-- Main content grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <!-- Contact form -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 rounded-2xl border border-gray-700/50">
              
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-white mb-3">Fale com um Especialista</h3>
                <p class="text-gray-300">Agende uma demonstração personalizada e veja como podemos ajudar sua empresa.</p>
              </div>

              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name" 
                      class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email" 
                      class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="company" class="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      id="company" 
                      v-model="form.company" 
                      class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Nome da empresa"
                      required
                    />
                  </div>
                  <div>
                    <label for="role" class="block text-sm font-medium text-gray-300 mb-2">Cargo</label>
                    <select 
                      id="role" 
                      v-model="form.role" 
                      class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-300"
                      required
                    >
                      <option value="">Selecione seu cargo</option>
                      <option value="ceo">CEO/Fundador</option>
                      <option value="cto">CTO</option>
                      <option value="cfo">CFO</option>
                      <option value="director">Diretor</option>
                      <option value="manager">Gerente</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label for="interest" class="block text-sm font-medium text-gray-300 mb-2">Interesse Principal</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg cursor-pointer hover:bg-gray-700/30 transition-colors">
                      <input type="radio" v-model="form.interest" value="ekno-assist" class="text-purple-500 focus:ring-purple-500" />
                      <span class="ml-3 text-gray-300">Ekno Assist</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg cursor-pointer hover:bg-gray-700/30 transition-colors">
                      <input type="radio" v-model="form.interest" value="ekno-trading" class="text-blue-500 focus:ring-blue-500" />
                      <span class="ml-3 text-gray-300">Ekno Trading</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg cursor-pointer hover:bg-gray-700/30 transition-colors">
                      <input type="radio" v-model="form.interest" value="both" class="text-green-500 focus:ring-green-500" />
                      <span class="ml-3 text-gray-300">Ambos os produtos</span>
                    </label>
                    <label class="flex items-center p-3 bg-gray-800/30 border border-gray-600/30 rounded-lg cursor-pointer hover:bg-gray-700/30 transition-colors">
                      <input type="radio" v-model="form.interest" value="consultation" class="text-yellow-500 focus:ring-yellow-500" />
                      <span class="ml-3 text-gray-300">Consultoria</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="4" 
                    maxlength="500"
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seus desafios e objetivos..."
                    required
                    @input="validateMessage"
                  ></textarea>

                  <!-- Exibe o número de caracteres no formato x / 500 -->
                  <div class="text-right text-sm text-gray-400 mt-1">
                    <span>{{ form.message.length }} / 500 caracteres</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  class="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  :disabled="isSubmitting"
                  @click="sendMessageToWhatsApp"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <i class="fas fa-spinner fa-spin text-white text-base mr-3"></i>
                    Enviando...
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <i class="fab fa-whatsapp text-white text-base mr-2"></i>
                    Enviar Mensagem via WhatsApp
                  </span>
                </button>
              </form>
            </div>
          </div>

          
          <!-- Contact info and benefits -->
          <div class="space-y-8">
            
            <!-- Contact methods -->
            <div class="relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50">
                <h3 class="text-2xl font-bold text-white mb-6">Outras formas de contato</h3>
                
                <div class="space-y-4">
                  <div class="flex items-center p-4 bg-gray-800/30 rounded-xl">
                    <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mr-4">
                      <i class="fas fa-envelope text-blue-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Email</h4>
                      <p class="text-gray-400">contato@eknotech.com.br</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center p-4 bg-gray-800/30 rounded-xl">
                    <div class="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center mr-4">
                      <i class="fab fa-whatsapp text-green-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Contato</h4>
                      <p class="text-gray-400">+55 (48) 99805-4161</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center p-4 bg-gray-800/30 rounded-xl">
                    <div class="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                      <i class="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Escritório</h4>
                      <p class="text-gray-400">Florianópolis, SC - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Benefits -->
            <div class="relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50">
                <h3 class="text-2xl font-bold text-white mb-6">O que você ganha</h3>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mt-1 mr-3">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Demonstração Personalizada</h4>
                      <p class="text-gray-400 text-sm">Apresentação focada nas necessidades específicas da sua empresa</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mt-1 mr-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Integração Simplificada</h4>
                      <p class="text-gray-400 text-sm">Integração rápida e sem complicação com seus fluxos empresariais.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mt-1 mr-3">
                      <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Consultoria Gratuita</h4>
                      <p class="text-gray-400 text-sm">Sessão de estratégia sem compromisso com nossos especialistas</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mt-1 mr-3">
                      <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Suporte Prioritário</h4>
                      <p class="text-gray-400 text-sm">Atendimento dedicado para resolver rapidamente suas necessidades.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom stats -->
        <div class="mt-20">
          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatCard label="Empresas Atendidas" value="500+" color="purple" />
            <StatCard label="Uptime Garantido" value="99.9%" color="blue" />
            <StatCard label="Tempo de Resposta" value="24h" color="green" />
            <StatCard label="Garantido" value="ROI" color="yellow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StatCard from '../Carousel/StatCard.vue'

export default {
  components: {
    StatCard
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        role: '',
        interest: '',
        message: ''
      },
      isSubmitting: false,
      formSubmitted: false,
      notification: {
        show: false,
        type: 'success', // 'success' or 'error'
        message: ''
      }
    }
  },
  methods: {
    // Função para limitar links não permitidos e garantir segurança
    validateMessage() {
      // Limitar links indesejados, por exemplo, bloqueando links de redes sociais e URLs externas
      const disallowedUrls = [
        /facebook\.com/i,  // Exemplo: bloquear links do Facebook
        /twitter\.com/i,    // Exemplo: bloquear links do Twitter
        /instagram\.com/i,  // Exemplo: bloquear links do Instagram
        /youtube\.com/i,    // Exemplo: bloquear links do YouTube
      ];

      // Substitui os links não permitidos por um aviso ou remove
      disallowedUrls.forEach((regex) => {
        if (regex.test(this.form.message)) {
          this.form.message = this.form.message.replace(regex, '[link bloqueado]');
          this.showNotification('error', 'Links não permitidos foram removidos.');
        }
      });
    },
    
    // Função para exibir notificações
    showNotification(type, message) {
      this.notification = {
        show: true,
        type,
        message
      };

      // Auto-esconde a notificação após 5 segundos
      setTimeout(() => {
        this.closeNotification();
      }, 5000);
    },

    // Fecha a notificação
    closeNotification() {
      this.notification.show = false;
    },
    // Função para mapear o valor do campo 'interest' para um valor legível
    mapInterest(value) {
      const interestMapping = {
        'ekno-assist': 'Ekno Assist',
        'ekno-trading': 'Ekno Trading',
        'both': 'Ambos os produtos',
        'consultation': 'Consultoria'
      };
      return interestMapping[value] || value;
    },

    // Função para mapear o valor do campo 'role' para um valor legível
    mapRole(value) {
      const mapping = {
        'ceo': 'CEO/Fundador',
        'cto': 'CTO',
        'cfo': 'CFO',
        'director': 'Diretor',
        'manager': 'Gerente',
        'other': 'Outro',
      };
      return mapping[value] || value;
    },

    // Função para validar o formulário
    validateForm() {
      // Verificando se todos os campos obrigatórios estão preenchidos
      if (!this.form.name || !this.form.email || !this.form.company || !this.form.role || !this.form.interest || !this.form.message) {
        this.showNotification('error', 'Por favor, preencha todos os campos.');
        return false; // Impede o envio se algum campo obrigatório não for preenchido
      }
      
      return true; // O formulário está válido
    },

    // Função para enviar a mensagem via WhatsApp
    sendMessageToWhatsApp() {
      if (!this.validateForm()) {
        return;
      }

      let productMessage = '';

      if (this.form.interest === 'both') {
        productMessage = `Estou interessado em conhecer mais sobre ambos os produtos, *Ekno Assist* e *Ekno Trading*, e como eles podem beneficiar nossa empresa.`;
      } else {
        productMessage = `Gostaria de obter mais informações sobre o produto *${this.mapInterest(this.form.interest)}* e como ele pode beneficiar nossa empresa.`;
      }

      let roleMessage = "";
      
      if (this.form.role === 'other'){
        roleMessage = `Venho em nome da *${this.form.company}*.`
      } else {
        roleMessage = `Eu sou ${this.mapRole(this.form.role)} na *${this.form.company}*.`
      }
      
      const messageParts = [
        `Olá, meu nome é *${this.form.name}*.`,
        '',
        roleMessage,
        '',
        productMessage,
        '',
        '*Mensagem adicional:*',
        `"${this.form.message}"`,
        '',
        'Agradeço pelo retorno.',
        '',
        'Atenciosamente,',
        `*${this.form.name}*`
      ];
      
      const message = messageParts.join('\n');
      
      const phoneNumber = '5548998054161';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      this.form.name = '';
      this.form.email = '';
      this.form.company = '';
      this.form.role = '';
      this.form.interest = '';
      this.form.message = '';
    }
  }
}
</script>