FROM node:8.0.0 as builder

WORKDIR /app

RUN npm install -g ember-cli

RUN ember -v

# FROM builder

# COPY . .

# RUN npm install

# EXPOSE 4200

# CMD [ "ember serve" ]
