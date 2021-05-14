const  express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db')
require('dotenv').config();
const url = 'mongodb://localhost/messagesDB';

const { PORT } = process.env;

const messagesRouter = require('./routes/messages');

const app = express();

connectDB();

app.use(express.json());

app.use('/messages', messagesRouter)

const port = process.env.PORT | PORT;

app.listen(port, () => {
    console.log("Server Listening...");
})

