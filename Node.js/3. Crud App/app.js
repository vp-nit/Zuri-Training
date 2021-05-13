const  express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const url = 'mongodb://localhost/messagesDB';

const { MONGO_URI } = process.env;
const { PORT } = process.env;
const mongo_uri = process.env.MONGO_URI;

const app = express();

mongoose.connect(mongo_uri, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log("Connected...");
});

app.use(express.json());

const messagesRouter = require('./routes/messages');
app.use('/messages', messagesRouter)

const port = process.env.PORT | PORT;

app.listen(port, () => {
    console.log("Server Listening...");
})