FROM node:22-alpine AS builder

WORKDIR /app

# 1. Install system dependencies (including build tools)
RUN apk add --no-cache openssl python3 make g++ git

# 2. Copy package files first for better caching
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

# 3. Install dependencies (including devDependencies for building)
RUN npm install

# 4. Copy remaining files
COPY . .

# 5. Check if build script exists before running
RUN if [ -f "package.json" ] && grep -q "\"build\"" package.json; then \
      npm run build; \
    else \
      echo "No build script found, skipping build step"; \
    fi

# ----------------------------------------
FROM node:22-alpine AS production

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000


# Entry point
CMD ["node", "dist/main.js"]