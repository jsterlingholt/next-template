
ARG TAG=alpine
#   ----
#   INSTALL NODE MODULES
FROM node:${TAG} as DEPENDENCIES
WORKDIR /app
COPY package*.json ./
RUN npm ci
#   ----
#   BUILD APP
FROM node:${TAG} as SOURCE
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
CMD ls