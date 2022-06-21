# Build Stage 1
#
FROM node:12.22.1-alpine3.11 AS appbuild

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .babelrc ./

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

# Build Stage 2
#
FROM node:12.22.1-alpine3.11

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .babelrc ./

USER node

RUN npm install

COPY --from=appbuild /home/node/app/dist ./dist

COPY --chown=node:node . .

#EXPOSE ${PORT}

CMD npm start