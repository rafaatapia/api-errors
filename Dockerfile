FROM node:13.8.0-alpine3.10

# Git parameters
ARG REPOSITORY=api-errors
ARG COMMIT=HEAD
ARG DEPTH=1
ARG BRANCH=master

WORKDIR /api

RUN apk add git

RUN git clone --branch=$BRANCH --depth=$DEPTH https://github.com/rafaatapia/api-errors.git \
  && cd $REPOSITORY \
  && git checkout $COMMIT

RUN npm install

EXPOSE 3333

CMD [ "npm", "dev" ]
