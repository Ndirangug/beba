FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

ENV HOST=0.0.0.0

RUN yarn build

CMD [ "yarn", "start" ]