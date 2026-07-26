import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Espelha o rewrite do Caddy em produção (/growth -> growth.html)
const cleanUrlRewrite = {
  name: 'clean-url-rewrite',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/growth') req.url = '/growth.html'
      next()
    })
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cleanUrlRewrite],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
