const express = require('express')
require('dotenv').config();

const cors = require('cors');

const { db } = require('./db/db');
require('dotenv').config()
const app = express()

const PORT = process.env.PORT;

// middlewares 
app.use(express.json())
app.use(cors())

/*app.get('/', (req, res) => {
    res.send("hello Ayan")
})*/


// Server part
const Server = () => {
    db()
    app.listen(PORT, () => {
        console.log("listening to port", PORT)
    })
}
Server()