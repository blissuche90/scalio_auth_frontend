FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm start

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/dist/scalioauth  /usr/share/nginx/html