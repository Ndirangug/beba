FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]