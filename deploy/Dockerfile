# ---- Stage 1: build da SPA (Vue) ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

COPY . .
# Se usa Vite/Router, mantenha base padrão (/) e fallback no Caddy
RUN npm run build

# ---- Stage 2: servidor (Caddy interno em :8080) ----
FROM caddy:2.8-alpine
ENV CADDY_ORIGIN_PORT=8080
EXPOSE 8080

# arquivos estáticos produzidos no build
COPY --from=builder /app/dist /usr/share/caddy

# Caddyfile mínimo interno (serve /usr/share/caddy com fallback SPA)
RUN printf ':\nencode zstd gzip\nroot * /usr/share/caddy\ntry_files {path} /index.html\nfile_server\n' \
  | sed -e "1s/.*/:${CADDY_ORIGIN_PORT}/" > /etc/caddy/Caddyfile

# (Opcional) healthcheck http
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1

CMD ["caddy","run","--config","/etc/caddy/Caddyfile","--adapter","caddyfile"]
