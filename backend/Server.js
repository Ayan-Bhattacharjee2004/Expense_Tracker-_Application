const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { readdirSync } = require('fs')
const { db } = require('./db/db');

const app = express()

const PORT = process.env.PORT;

// middlewares 
app.use(express.json())
app.use(cors())

/*app.get('/', (req, res) => {
    res.send("hello Ayan")
})*/

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


// Server part
const Server = () => {
    db()
    app.listen(PORT, () => {
        console.log("listening to port", PORT)
    })
}
Server()