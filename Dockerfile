FROM node:22-alpine

WORKDIR /app

# Instala dependências do sistema
RUN apk add --no-cache openssl postgresql-client

# Copia e instala dependências
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
RUN npm ci --omit=dev && npx prisma generate

# Copia o código e builda
COPY . .
RUN npm run build

# Script de espera do banco
COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh

CMD ["./wait-for-db.sh"]