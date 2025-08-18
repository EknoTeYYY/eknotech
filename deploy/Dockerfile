# ---- Stage 1: build da SPA (Vue) ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copia apenas o necessário e instala deps
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Copia código e builda
COPY . .
# Se usar Vite, configure base se precisar (ex.: /)
RUN npm run build

# ---- Stage 2: server (Caddy) ----
FROM caddy:2.8-alpine

# Passa email opcional via env -> diretiva global do Caddy
ENV CADDY_ACME_EMAIL=""

# Static files para local "padrão" do Caddy
COPY --from=builder /app/dist /usr/share/caddy

# Caddyfile
COPY deploy/Caddyfile /etc/caddy/Caddyfile

# Healthcheck simples (HTTP)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost:80/ >/dev/null 2>&1 || exit 1
