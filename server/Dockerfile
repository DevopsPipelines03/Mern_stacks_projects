
FROM node:18-alpine
ENV NODE_ENV=productiond

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]