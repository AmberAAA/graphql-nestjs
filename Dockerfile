FROM node:16-slim
COPY . /app
WORKDIR /app
RUN npm i
CMD npm run start
