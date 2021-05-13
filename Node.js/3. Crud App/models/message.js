// Create a connection function for mongoDB
// Start a local mongoDB server connection

const mongoose = require("mongoose");
require('dotenv').config()
const { MONGO_URI } = process.env;

// const mongo_uri = process.env.MONGO_URI;

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('message', messageSchema);