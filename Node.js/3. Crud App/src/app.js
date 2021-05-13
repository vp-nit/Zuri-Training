const  express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db')
require('dotenv').config();
const url = 'mongodb://localhost/messagesDB';

const { MONGO_URI } = process.env;
const { PORT } = process.env;
const mongo_uri = process.env.MONGO_URI;
const messagesRouter = require('./routes/messages');

const app = express();

connectDB();

// mongoose.connect(mongo_uri, {useNewUrlParser:true});
// const con = mongoose.connection;

// con.on('open', function(){
//     console.log("Connected...");
// });

app.use(express.json());

app.use('/messages', messagesRouter)

const port = process.env.PORT | PORT;

app.listen(port, () => {
    console.log("Server Listening...");
})

