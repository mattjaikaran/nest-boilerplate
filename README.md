# NestJS Boilerplate

## Description

Starter NestJS REST API w/ Postgres

## Technologies

- NestJS 10
  - Express
- Postgres
- [Prisma](https://www.prisma.io/docs/getting-started)
- [SWC Compiler](https://github.com/swc-project/swc)
- Passport Magic Login
  - Login via Magic Link
  - 15 min expiration token
- Jest
- ESLint
- Prettier
- Swagger

#### TODO:

- Nodemailer
- NestJSX/Crud?
- DTOs
- Scripts
  - Seeds
  - DX Scripts
- Tests
  - Unit
  - End to End
- Admin panel
- Payment processor integration
- Security
  - CSRF Protection
- Authorization/RBAC
- Deployment

- Auth/Guards
  - WebAuthn/FIDO2 integration
- Pagination
- [Caching](https://docs.nestjs.com/techniques/caching)
- Health checks
- Rate limiting

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

### Prisma/Database

```bash
$ prisma db pull # to turn your database schema into a Prisma schema.
$ prisma generate  # to generate the Prisma Client. You can then start querying your database.
$ npx prisma migrate dev --name "migration_name" # Migrate database
```

### Commands for Postgres 14

[Postgres Docs](https://www.postgresql.org/docs/14/)

```bash
$ psql my_db # enter shell
$ createdb --username=USERNAME my_db # create db
$ dropdb my_db # drop db
```
