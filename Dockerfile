FROM node:22-alpine

WORKDIR /app

# 1. Instala dependências ESSENCIAIS (Prisma precisa disso)
RUN apk add --no-cache openssl postgresql-client python3 make g++

# 2. Copia apenas o necessário para instalação (otimiza cache)
COPY package.json package-lock.json* ./
COPY prisma/schema.prisma ./prisma/schema.prisma

# 3. Instala dependências e GERA o Prisma Client (com fallback)
RUN npm ci --omit=dev && \
    (npx prisma generate || (echo "Fallback: Gerando Prisma com engine binary" && PRISMA_CLIENT_ENGINE_TYPE=binary npx prisma generate))

# 4. Copia o resto da aplicação
COPY . .

# 5. Script de espera do banco (com permissões)
# COPY wait-for-db.sh ./wait-for-db.sh
# RUN chmod +x ./wait-for-db.sh

# 6. Configuração final
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# 7. Entrypoint e comando (O Dokploy geralmente injeta variáveis automaticamente)
# ENTRYPOINT ["./wait-for-db.sh"]
CMD ["npm", "run", "start"]