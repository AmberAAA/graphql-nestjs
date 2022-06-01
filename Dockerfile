FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
RUN npm ci --registry=https://registry.npm.taobao.org/
CMD npm run start