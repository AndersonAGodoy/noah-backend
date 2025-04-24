FROM node:22-alpine

WORKDIR /app

# 1. Instala dependências de sistema
RUN apk add --no-cache openssl 

# 2. Copia e instala dependências (cache otimizado)
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
RUN npm ci && npx prisma generate

# 3. Copia o aplicativo
COPY . .

# 4. Script de espera (com permissões)
# COPY wait-for-db.sh ./
# RUN chmod +x wait-for-db.sh

# 5. COMANDO PRINCIPAL (recomendado)
# CMD ["./wait-for-db.sh"]

# Ou, se precisar de flexibilidade:
# ENTRYPOINT ["./wait-for-db.sh"]
CMD ["npm", "run", "start:prod"]