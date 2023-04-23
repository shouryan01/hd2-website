# hd2-website

ground zero for Hack Dearborn 2

## changelog
<center>
![demo_v1](public/demo.gif)
</center>

## design

[View on Figma](https://www.figma.com/files/team/1160250767231758946)

## system design

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Setting up a local dev environment on Windows/WSL, macOS, and Linux

```bash
curl https://get.volta.sh | bash
volta install node@18
volta install npm@latest
curl -fsSL https://bun.sh/install | bash
git clone -b development https://github.com/Google-Developer-Student-Club-Dearborn/hd2-website
cd hd2-website
bun install
bun run dev
```

### Setting up a Docker dev environment

* Install [Docker Deskop](https://www.docker.com/products/docker-desktop/) and run Docker.
* Navigate to project directory.
* Run the following command

```bash
docker compose up --build --force-recreate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
