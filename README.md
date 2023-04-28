# node-fastify-api-boilerplate
minimal boilerplate for node + fastify api

- uses ts-node + nodemon for watching file changes

### quickstart
```
yarn
yarn dev
```

### developed with
```
node v19.8.1
npm 9.5.1
```

### github-actions build & deploy
.github/workflows/deploy.yml
```
name: Build & Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build
        uses: actions/setup-node@v3
        with:
          node-version: 19.x
      - run: yarn
      - run: yarn build

      - name: Deploy
        uses: nogsantos/scp-deploy@master
        with:
          src: ./dist/*
          host: ${{secrets.SSH_HOST}}
          remote: /webroot/your-app-path/dist/
          user: ${{secrets.SSH_USERNAME}}
          key: ${{secrets.SSH_KEY}}

```

### pm2 config
if you are deploying with `pm2` check ./your-app-pm2-config.json
- this will watch for file changes on `/dist` to go along with the github action deploy script above