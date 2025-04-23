# Estágio de construção
FROM node:22-alpine AS builder

WORKDIR /app

# 1. Instala dependências do sistema
RUN apk add --no-cache openssl python3 make g++ postgresql-client

# 2. Copia arquivos de dependência
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

# 3. Instala dependências e gera cliente Prisma
RUN npm ci --omit=dev && npx prisma generate

# 4. Copia o restante do código
COPY . .

# 5. Constrói a aplicação
RUN npm run build

# Estágio de produção
FROM node:22-alpine

WORKDIR /app

# 1. Instala runtime essentials
RUN apk add --no-cache openssl postgresql-client

# 2. Copia apenas o necessário
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# 3. Script de espera do banco
COPY --from=builder /app/wait-for-db.sh ./wait-for-db.sh
RUN chmod +x ./wait-for-db.sh

# 4. Configura usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001 -G nodejs && \
    chown -R nestjs:nodejs /app
USER nestjs

# 5. Configuração do ambiente
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# 6. Comando de inicialização
CMD ["./wait-for-db.sh"]