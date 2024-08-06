# Amaze Tech

## _E-commerce for wearable devices_

This site is mainly an e-commerce site for wearable devices. As any e-commerce website, customers can browse available products and add items to wishlist.

## Techonologies

- **Frontend**: React, Nextjs
- **Backend**: Node, NestJs, MySQL
- **Monorepo**: Turborepo
- **Deployment**: Railway

## How to run <em>[Important]</em>

1- in apps/backend directory, add .env file that includes the following

```sh
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database_name>?schema=public"
HASH_SALT = <your_hash_salt>
JWT_SECRET= <your_secret>
BUSINESS_EMAIL= <email_address_of_business>
BUSINESS_PASSWORD= <password_for_email_address_of_business>
```

2- Clone Github repo

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

<em>Note: Nodejs version used for this project is ```18.17.0```</em>
## About the development

### Features Covered
- Authentication
User should be able to create an account, verify the account through email. and login to the site.
- See Products List
User should be able to see the landing page and products page.
- See Wishlist
Only logged in users can access wishlist page (protected page). Non-logged in users are automatically redirected to login page.


### Featured pending
- Frontend-Backend Integration
Integration between frontend and backend is currently done only for authentication module.
- Products Page and Single Product Page
Products Page is not fully developed and Single Product Page is pending.

## Learning outcomes <em>[Important]</em>
These are the things I have learned throughout the development of this project and the things that it's my first time doing.

### Technologies
In this project, I learned and used some technologies for the first time;
- NodeJs and NestJS for backend development
- Prisma as database ORM
- Radix-ui as UI component library
- Railway for deployment

### Concepts
- Building database and creating DB migrations
- Writing idempotent SQL queries
- Adding indexes for DB table columns where needed
- Creating DB functions
- Sending emails from backend and verifying user account


## How to Test <em>[Important]</em>
#### Public Pages:
- Once you run the project, you can open the URL localhost:3000 on your browser, this will open the landing page of the website.
- You can go to the products page from the navigation bar.
- Trying to go to the wishlist page will automatically take you to the login page since you're not logged in.

#### Authentication:
- From the landing page, you can press on the user icon on top right in order to sign in or create an account.
- When you go to login page, press on Register to create an account and fill the required information.
  ![image](https://github.com/user-attachments/assets/f42f8985-8eed-4ace-8983-b306d1b7448f)
  <br>
- On submit you will receive an email to verify your account.
  ![image](https://github.com/user-attachments/assets/a7f10e22-4290-4c47-9c8a-3246efb9dfc4)
- After verification, you will be redirected to landing page or wishlist page based on where you were before login
- When logged in you can navigate to wishlist page or log out.
