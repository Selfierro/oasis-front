FROM node:10.15.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add git
RUN apk add curl

COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .

RUN npm run build

ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE $PORT

CMD ["npm", "start"]
