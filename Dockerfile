FROM node:16

COPY . /bezkoder-app
WORKDIR /bezkoder-app

RUN npm install nodemon --save-dev
COPY package.json /bezkoder-app
CMD npm start
