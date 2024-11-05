FROM node:22-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
RUN chown -R node /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 9229
RUN npm install -g tsx
USER node
CMD ["tsx", "src/index.ts"]