# Amaze Tech

## _E-commerce for wearable devices_

This site is mainly an e-commerce site for wearable devices. As any e-commerce website, customers can browse available products and add items to wishlist.

## Techonologies

- **Frontend**: React, Nextjs
- **Backend**: Node, NestJs, MySQL
- **Monorepo**: Turborepo
- **Deployment**: Railway

## How to run

1- in apps/backend directory, add .env file that includes the following

```sh
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database_name>?schema=public"
```

2- Clone github repo

3- Install and run

On the root directory, run the following command, this will run both the backend and frontend apps locally
```sh
npm run fullstack::dev
```

## Links

| Link                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- |
| [Project Proposal](https://docs.google.com/document/d/1dAkaM6oAXLBcHaa7AQ56x4LWbx-9Tag1645hFyPkduU/edit?usp=sharing) |
| [Github Repo](https://github.com/hnaimm/amaze-tech)                                                                 |
| [Postman API Docs](https://www.postman.com/haifanm/workspace/my-public-workspace/collection/4074196-7a13789f-18b1-4884-a7a9-9393a97fc38e?action=share&creator=4074196)                                                                 |


## About the development

### Features Covered
#### - Authentication
User should be able to create an account, verify the account through email. and login to the site.
#### - See Products List
User should be able to see the landing page and products page.
#### - See Wishlist
Only logged in users can access wishlist page (protected page). Non-logged in users are automatically redirected to login page.


### Featured pending
#### - Frontend-Backend Integration
Integration between frontend and backend is currently done only for authentication module.
#### - Products Page and Single Product Page
Products Page is not fully developed and Single Product Page is pending.

## Leaning outcomes
These are the things I have leaned throughout the devleopment of this projoct and the things that it's my first time doing.

### Technologies
In this project I learned and used some technologies for the first time;
- NodeJs and NestJS for backend devleopment
- Prisma as database ORM
- Radix-ui as UI component library
- Railway for deployment

### Concepts
- Building database
- Writing idempotent SQL querries
- Adding indexes for DB table columns where needed
- Creating DB functions
- Sending emails from bacend and verifying user account
