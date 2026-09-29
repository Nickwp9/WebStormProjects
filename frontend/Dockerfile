# Builder stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Runtime stage - minimal image with serve
FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve

# Copy only the built dist folder
COPY --from=builder /app/dist ./dist

EXPOSE 5173

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5173', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["serve", "-s", "dist", "-l", "5173"]
