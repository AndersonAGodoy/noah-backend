#!/bin/sh
set -e

host="postgres"
port="5432"
user="${POSTGRES_USER}"
db="${POSTGRES_DB}"
password="${POSTGRES_PASSWORD}"
max_retries=15
retry_interval=3

echo "🔌 Aguardando PostgreSQL em $host:$port..."
until PGPASSWORD="$password" psql -h "$host" -p "$port" -U "$user" -d "$db" -c "SELECT 1;" >/dev/null 2>&1 || [ $max_retries -eq 0 ]; do
  echo "⌛ ($max_retries tentativas restantes)"
  sleep $retry_interval
  max_retries=$((max_retries-1))
done

if [ $max_retries -eq 0 ]; then
  echo "❌ PostgreSQL não está respondendo após 15 tentativas"
  exit 1
fi

echo "✅ PostgreSQL pronto."
npx prisma migrate deploy
exec npm run start:prod