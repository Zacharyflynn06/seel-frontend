FROM node:22-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 5173
ENV NODE_ENV=production
CMD [ "node", "build" ]