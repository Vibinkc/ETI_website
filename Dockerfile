# ETI public website — Next.js 16, standalone output.
#
# Three stages so the runtime image carries neither the toolchain nor the full
# node_modules: only the traced server bundle, the static assets and public/.

# ---------------------------------------------------------------- deps ----
FROM node:22-alpine AS deps
WORKDIR /app
# npm ci needs both files and installs exactly what the lockfile says.
COPY package.json package-lock.json ./
RUN npm ci

# --------------------------------------------------------------- build ----
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Content is fetched from the CMS while the pages prerender. If the API is not
# reachable at build time every slot falls back to the value the page shipped
# with, so the build still succeeds — the pages then pick up live content on
# their first revalidation.
ARG CMS_API_URL=http://127.0.0.1:8001
ENV CMS_API_URL=$CMS_API_URL

RUN npm run build

# ------------------------------------------------------------- runtime ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 10001 nodejs && adduser -u 10001 -G nodejs -S nextjs

# standalone contains server.js plus only the packages actually imported;
# static/ and public/ are not traced into it and have to come across separately.
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
