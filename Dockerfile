FROM node:22-alpine AS build

WORKDIR /app


COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_SERVER_API_URL

COPY  . .
RUN pnpm run build


FROM node:22-alpine AS production

WORKDIR /app

RUN corepack enable pnpm

ARG NEXT_PUBLIC_SERVER_API_URL

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next

CMD ["pnpm", "start"]