#!/bin/sh
set -e

host="postgres"
user="${POSTGRES_USER}"
db="${POSTGRES_DB}"
max_retries=10

echo "🔌 Aguardando PostgreSQL em $host..."
until PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "$host" -U "$user" -d "$db" -c '\q' >/dev/null 2>&1 || [ $max_retries -eq 0 ]; do
  sleep 2
  max_retries=$((max_retries-1))
  echo "⌛ ($max_retries tentativas restantes)"
done

if [ $max_retries -eq 0 ]; then
  echo "❌ PostgreSQL não está respondendo após 10 tentativas"
  exit 1
fi

echo "✅ PostgreSQL pronto."
npx prisma migrate deploy
exec npm run start:prod