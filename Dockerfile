FROM node:16.14.2

WORKDIR /usr/app

COPY package.json .

RUN npm install --verbose

COPY . .

RUN npm install -g @angular/cli

CMD [ "tail", "-f", "/dev/null"]
