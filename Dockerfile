FROM node:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package.json /usr/src/bot
RUN npm install

COPY . /usr/src/bot

RUN chown -R node:node /usr/src/bot
USER node

CMD ["node", "index.js"]