FROM node:14-alpine

WORKDIR /app

#COPY package.json .
COPY . .

RUN npm install -g @angular/cli
RUN npm install crypto-js
RUN npm i --save-dev @types/crypto-js
RUN npm install

#COPY . .

VOLUME [ "/app" ]

CMD ["npm", "run", "start"]
