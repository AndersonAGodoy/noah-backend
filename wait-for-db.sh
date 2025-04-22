#!/bin/sh
set -e

host="postgres"
user="${POSTGRES_USER}"
db="${POSTGRES_DB}"
max_retries=10
attempt=0

echo "🔄 Aguardando PostgreSQL em $host..."

until PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "$host" -U "$user" -d "$db" -c '\q' >/dev/null 2>&1 || [ $attempt -eq $max_retries ]; do
  attempt=$((attempt+1))
  echo "⏳ Tentativa $attempt/$max_retries..."
  sleep 5
done

if [ $attempt -eq $max_retries ]; then
  echo "❌ Falha ao conectar ao PostgreSQL após $max_retries tentativas"
  exit 1
fi

echo "✅ PostgreSQL pronto!"
npx prisma migrate deploy
exec npm run start:prod  # Importante: 'exec' substitui o processo atual