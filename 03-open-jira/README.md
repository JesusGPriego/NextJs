# Next.js OpenJira App

To run locally, a db is needed.
Assuming docker is installed, run:

docker-compose up -d

db connection url:
mongodb://localhost:27017/entriesdb

## Env var config:

Rename **.env.template** to **.env**

## insert test data in bbdd:

```
    http://localhost:3000/api/seed
```
