# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Build app
RUN npm run build

RUN mkdir -p /var/www/html

#TA DANDO ERRO AQUI, BUILD N EXISTE (TEM Q VER Q PASTA Q TA)
RUN mv build/* /var/www/html

WORKDIR /

