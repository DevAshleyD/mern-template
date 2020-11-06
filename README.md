# MERN Template

A template created to assist in quickly setting up a MERN application.

## Configuration

#### Install dependencies

In both the root and client directories run `npm install` to add the required dependencies.

---

#### Setup MongoDB

Head to the [MongoDB](https://www.mongodb.com/) website and either login or create an account. [Instructions for creating an account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/).

[Step 1](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/): Create a new project and deploy a free tier cluster.

[Step 2](https://docs.atlas.mongodb.com/security/add-ip-address-to-list/): Whitelist your IP address.

[Step 3](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/): Create a database user.

[Step 4](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/): Connect to your databse using a .env file. Use .env.example as a reference to how your .env file should be formatted.

For further assistance, complete documentation is provided at [docs.atlas.mongodb.com/getting-started/](https://docs.atlas.mongodb.com/getting-started/).

---

#### Code

Once configuation is complete, begin to create your application.

---

## Run Application

Use `npm run dev` to run both the server and the client simultaneously.

To only run the front-end, cd into the client folder and run `npm start`. You will be able to view your app on [http://localhost:3000](http://localhost:3000).

To only run the back-end, run `npx nodemon server.js`. The back-end by default will run on port 5000.
