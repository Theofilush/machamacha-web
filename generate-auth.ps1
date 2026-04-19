Set-Location "c:\Bearmentor\machamacha-api"
bunx @better-auth/cli generate
bunx prisma generate
bun run db:migrate --name better_auth
