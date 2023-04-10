FROM oven/bun:latest

WORKDIR /home/bun/app

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl wget vim git
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
RUN npm install -g npm@latest

RUN git clone -b rohit-dev https://github.com/Google-Developer-Student-Club-Dearborn/hd2-website .
RUN bun install

CMD ["bun","run","dev"]


