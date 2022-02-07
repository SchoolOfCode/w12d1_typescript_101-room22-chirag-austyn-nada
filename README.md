# Typescript 101

You are tasked with writing a REST API using typescript.

### The Starter Repo

This typescript express repo has been created for you as a starter template. Take some time exploring what is included and what is different from a vanilla node express app.

- The `tsconfig.json` is probably the main difference you will notice straight away.
- Also note that typescript files end in `.ts` instead of `.js`.
- what happens when you run `npm run build`?
- also note that in this repo the .env files are in `./src/pre-start/env` and have multiple envs for different environments.

### Task 1

Generate a CRUD route for anything that you would like. It could be books, pets, bootcampers, didgeridoo manufacturers. Just ensure that you have at least one get, post, patch, and delete route.

**MAKE SURE THAT EVERYTHING IS IN TYPESCRIPT** we want to see those lovely types on all variables and functions!

Try to use at least one `type alias`.

Your data does not need to be persistent, so don't worry about database connections or file-system storage or asynchronous functions initially.

**BEST PRACTICE** You may want to practice TDD here and write tests for any functions that you write. This is strongly recommended. It's all set up for you 😉

### Extension

Try 'hooking up' your database to a database. You may choose to use a heroku instance or you could spin up a docker instance of postgres (the `docker-compose.yml` file has already been provided to you) by running `docker-compose up` and connection at `http://localhost:5432` with the username, password and database that has been prefilled in the compose file (or change the variables if you fancy).

**BE AWARE**- Interacting with a database will be an asynchronous function so you will need to return `Promise<type>` types when working with async functions.
