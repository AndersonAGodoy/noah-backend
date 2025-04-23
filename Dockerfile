FROM node:22-alpine

WORKDIR /app

# 1. Instala dependências do sistema
RUN apk add --no-cache openssl postgresql-client python3 make g++

# 2. Copia os arquivos necessários para gerar o Prisma Client
COPY package.json package-lock.json* ./
COPY prisma/schema.prisma ./prisma/schema.prisma

# 3. Gera o Prisma Client durante o build
RUN npm ci --omit=dev && \
    npx prisma generate

# 4. Copia o resto da aplicação
COPY . .

# 5. Configuração do ambiente
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# 6. Comando otimizado para o Dokploy
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]