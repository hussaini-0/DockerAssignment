FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

HEALTHCHECK --interval=30s --timeout=5s CMD curl --fail http://localhost:3000/todos || exit 1

EXPOSE 3000
CMD ["node", "index.js"]
