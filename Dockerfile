FROM oven/bun:latest

WORKDIR /home/bun/app

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl wget vim git
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
RUN npm install -g npm@latest

COPY bunfig.toml index.ts ./
COPY package.json package-lock.json ./
COPY next.config.cjs postcss.config.cjs tailwind.config.cjs ./
COPY rome.json turbo.json tsconfig.json ./

RUN bun install

CMD ["bun","run","dev"]


