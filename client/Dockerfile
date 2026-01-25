# ---------- Angular Build Stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Build argument(s)
ARG REV_PROXY=true

COPY package*.json ./
RUN npm ci

COPY . .
# Write default value into env.js at build time
RUN sed -i "s/window.__env.revProxy = .*/window.__env.revProxy = ${REV_PROXY};/" \
    src/assets/env.js
RUN npm run build --configuration=production

# ---------- Nginx Runtime ----------
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output
COPY --from=builder /app/dist/client/browser /usr/share/nginx/html
