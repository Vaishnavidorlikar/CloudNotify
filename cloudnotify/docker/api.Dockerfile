# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder
WORKDIR /app
COPY ./api/package*.json ./
RUN npm ci --only=production
COPY ./api ./
RUN npm run build || true

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app /app
USER node
CMD ["node", "dist/index.js"]
