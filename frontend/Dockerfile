
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

#   ----
#   DEV
FROM node:${TAG} as DEVELOPMENT
WORKDIR /app
COPY --from=source /app /app
COPY --from=DEPENDENCIES /app/node_modules ./node_modules
EXPOSE 3000
CMD npx next dev

#   ----
#   PRODUCTION BUILD GOES HERE
FROM node:${TAG} as PRODUCTION
WORKDIR /app







#   ----
#   RUN PRODUCTION



#   RUN addgroup app && adduser -S -G app app
#   WORKDIR /usr/app
#   #   copy package.json files and install
#   COPY --chown=app:app package*.json ./
#   RUN npm ci
#   USER app
#   #   ----
#   #   USER app
#   COPY --chown=app:app . .
#   CMD npx next dev


#   ENV ENVIRONMENT_VARIABLE=/directory/file



#   COME BACK HERE FOR MORE IN DEPTH DEV/PROD DETAILS:
#   https://stackoverflow.com/questions/36362233/can-a-dockerfile-extend-another-one