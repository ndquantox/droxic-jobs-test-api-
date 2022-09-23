# Image source
FROM node:16-alpine

RUN apk update && apk upgrade -U -a \
    && apk add \
    tini 

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /app/

# Then install the NPM module
RUN npm install --force

# Copy current directory to APP folder
COPY . /app/

EXPOSE 3000
