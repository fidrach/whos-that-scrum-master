# Who's that scrum master!?

Have you ever been confused on who the next scrum master is?? Don't know where to look at?? Is it you!? Say less - _Who's that scrum master_ is a serverless full stack application created to solve all that, in other words, a future unicorn app going to the moon!

## Tech stack

-   PlanetScale
-   Prisma
-   Vercel
-   Next
-   React
-   Redux

## Deploy schema

Create branch and test migration

```
yarn pscale:branch <branch-name>
```

Connect to brancha and shadow database

```
pscale connect whos-that-scrum-master <branch-name> --port 3309
yarn prisma:migrate-dev
```

If everything looks good, deploy to production branch

```
yarn prisma:deploy-dev
```

Update prisma client

```
yarn prisma:generate-dev
```

Go to planetscale and create deploy request
