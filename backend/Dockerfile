
FROM node:18-bullseye-slim
WORKDIR /Users\macbe\mission-5-display\backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]