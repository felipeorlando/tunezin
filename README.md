# Tunezin

A simple app that brings infos from the iTunes API.

Due to that API has limited CROS policies, I created a back-end to consume that and give that info to the front-end.

## How to run
Here you have a monorepo using Yarn Worpaces. So you need to:
- Run `yarn install` on the root 
- Run `yarn start` on the root, so it will run both client and API simultaneously
- Run `yarn test` so it will run tests on both client and API

