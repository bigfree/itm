###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:22.4.0-alpine AS development
EXPOSE 4000

WORKDIR /usr/src/app

# Nastavíme správne vlastníctvo pre adresár ešte pred kopírovaním súborov
USER root
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

# Nastavíme používateľa na node
USER node

# Globálna inštalácia nest CLI
RUN yarn global add @nestjs/cli

# Kopírovanie závislostí a nastavenie správneho vlastníctva
COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY --chown=node:node prisma prisma

# Inštalácia závislostí a spustenie prisma generate
RUN yarn install
RUN yarn prisma generate

# Nastavi správne oprávnenia pre node_modules
USER root
RUN chown -R node:node /usr/src/app/node_modules
USER node

# Kopírovanie zvyšku aplikácie
COPY --chown=node:node . .

# Definovanie defaultného užívateľa
USER node

# Spustenie aplikácie
CMD ["yarn", "start:dev"]

###################
# BUILD FOR PRODUCTION
###################
FROM node:22.4.0-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build

ENV NODE_ENV production

RUN rm -rf node_modules && yarn install --frozen-lockfile

USER node

###################
# PRODUCTION
###################
FROM node:22.4.0-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]