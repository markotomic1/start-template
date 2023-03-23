FROM node:16 


WORKDIR /app/backend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]