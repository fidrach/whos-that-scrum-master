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

Connect to shadow database to test migration generation

```
yarn connect:shadow
yarn prisma:migrate
```

If migrations look good, create a branch from main and deploy migration

```
yarn pscale:branch <branch-name>
```

Connect to that branch and deploy migration

```
pscale connect whos-that-scrum-master <branch-name> --port 3309
yarn prisma:deploy
```

Go to planetscale and create deploy request
