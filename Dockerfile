FROM node:lts
COPY server.js package.json /app/
WORKDIR /app
RUN npm install && npm cache clean --force
CMD node server.js