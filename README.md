# NestJS / PostgreSQL / Docker

----------

# Getting started

## Installation

Clone the repository

    git clone https://github.com/ndquantox/droxic-jobs-test-api-.git

Switch to the repo folder

    cd droxic-jobs-test-api-
    
Install dependencies
    
    npm install
----------

##### TypeORM

----------

Create a new postgresql database with the name `jobs-db`\
(or the name you specified in .env)

Set postgresql database settings in .env

    POSTGRES_HOST=jobs
    POSTGRES_PORT=5432
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_DB=jobs-db
    
----------

## NPM scripts

- `npm start` - Start application
- `npm run start:dev` - Start application in watch mode

----------

## Start application

- `npm start`
- Test api with `http://localhost:3000/jobs` in your favourite browser

----------

# Docker

- `docker-compose up -d` - Build docker containers for NestJS and Postgresql (Test api with `http://localhost:3000/jobs` in your favourite browser)
- `docker-compose` - Remove docker containers
