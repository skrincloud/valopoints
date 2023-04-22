# Valopoints

React application for valorant tournaments matches.

## Features

### Ranking

The ranking system is a system of points according to the votes of the users in a league.

### Coins

This internal feature allows you to bet a certain amount of coins in a match and receive the befenits once the match is over.

## Getting started

Before you start, check the requirements are installed on your local machine.

- Node.js 18 or higher
- NPM 9 or higher

Install the dependencies.

```bash
npm install
```

Setup the environment variables in the `.env` file. Use the `.env.example` file as an example.

Finally run the script to up the application. The server is using `3000` as a default port (it can be changed in the `.env` file).

```bash
npm run dev
```

## Workflow

1. Push your changes to `sandbox` (this branch is not protected)
2. Test your changes into the sandbox environment
3. Create your pull request into the `develop` branch
4. Once approved, the pull request will be merged into `develop` and it will be available in the QA environment
5. Once a bunch of tickets are approved, a new release will be launched into production environment

## Environments

There are three environments to push the code into the cloud.

| Environment | URL                            |
| ----------- | ------------------------------ |
| Production  | https://valopoints.skrin.cloud |
| QA          | https://vp-qa.skrin.cloud      |
| Sandbox     | https://vp-sb.skrin.cloud      |
