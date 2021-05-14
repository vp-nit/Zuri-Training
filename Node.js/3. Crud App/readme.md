# CRUD App

It's a simple app to demonstrate CRUD operations(Create, Read, Update, Delete)
using node.js, express and mongodb.

## Getting Started

To get the Node server running locally:

- Clone this repo
- npm install to install all required dependencies
- Install MongoDB Community Edition (instructions) and run it by executing mongod
- npm start to start the local server

### Prerequisites

npm>=6.14.6
node>=12.18.3

## Deployment

$ heroku create
$ git push heroku main
$ heroku open

## Application Structure

server.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

db/ - This folder contains the database setup definitions.
controllers/ - This folder contains controller functions to handle for different routes.
routes/ - This folder contains the route definitions for our API.
models/ - This folder contains the schema definitions for our Mongoose models.

## Authors

- Vishnu Pratap Singh

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
