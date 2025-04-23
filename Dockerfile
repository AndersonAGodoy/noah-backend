FROM node:22-alpine

WORKDIR /app

# 1. Instala dependências de sistema + Python (necessário para prisma)
RUN apk add --no-cache openssl postgresql-client python3 make g++

# 2. Copia apenas os arquivos necessários para instalação
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

# 3. Instala dependências e gera cliente Prisma (COM FIX explícito)
RUN npm ci --omit=dev && \
    npx prisma generate --schema=./prisma/schema.prisma && \
    npm cache clean --force

# 4. Copia o resto da aplicação
COPY . .

# 5. Configura script de espera
COPY wait-for-db.sh ./
RUN chmod +x wait-for-db.sh

# 6. Entrypoint e comando
# ENTRYPOINT ["./wait-for-db.sh"]
# CMD ["npm", "run", "start:prod"]