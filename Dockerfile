FROM node:18-alpine
# ENV NODE_ENV=production

# define ARGs
ARG BACKEND_API
ARG Get_Synonyms_API_Prefix

# ENV ACCESS_TOKEN_SECRET_PRIVATE=${ACCESS_TOKEN_SECRET_PRIVATE}
# ENV ACCESS_TOKEN_SECRET_PUBLIC=${ACCESS_TOKEN_SECRET_PUBLIC}

# Set the working directory to /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install --production
RUN npm install

# RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

# CMD [ "node", "dist/main.js" ]


EXPOSE 3000

CMD [ "npm", "start" ]
