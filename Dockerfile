FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8080
EXPOSE 8080
RUN npm install --save-dev -g typescript
RUN npm install --save-dev -d tsx
RUN npm install --save-dev -g common-es
RUN npx tsc
CMD ["npx", "tsx", "src/index.ts"]