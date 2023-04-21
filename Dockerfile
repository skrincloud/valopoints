FROM node:18.16.0-alpine3.17

WORKDIR /app

# Cache node dependencies
COPY package.json /app/package.json

RUN npm install

# Cache client build
COPY src/client /app/src/client
COPY public /app/public
COPY index.html /app/index.html
COPY tsconfig.json /app/tsconfig.json
COPY vite.config.ts /app/vite.config.ts

RUN npm run build

# Complete the files dump
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

