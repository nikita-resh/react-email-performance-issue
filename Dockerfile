# BASE
FROM node:18.17.1-alpine3.17 as base

# ALL DEPENDENCIES
FROM base as dependencies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# BUILD
FROM dependencies as build
WORKDIR /usr/src/app
COPY . .
# bulding application
RUN yarn build

# APPLICATION
FROM node:18.17.1-alpine3.17 as application
WORKDIR /usr/src/app
# copping directories from build
COPY --from=build /usr/src/app/dist ./dist

ENTRYPOINT [ "node", "./dist/index.js" ]