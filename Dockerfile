FROM node:22-alpine AS builder

WORKDIR /app

# 1. Instala dependências de sistema
RUN apk add --no-cache openssl python3 make g++

# 2. Copia e instala dependências (cache otimizado)
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
RUN npm ci --only=production && npx prisma generate

# 3. Copia o resto da aplicação e faz build
COPY . .
RUN npm run build  

# ----------------------------------------
FROM node:22-alpine AS production

WORKDIR /app

# Copia apenas o necessário da etapa de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist      # Se usar TypeScript
COPY --from=builder /app/prisma ./prisma

# 4. Configura variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000

# 5. Comando de execução
CMD ["node", "dist/main.js"]  # Ajuste conforme seu ponto de entrada