const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// require('dotenv').config()

const app = express()

// const PORT = 5000

let todoList = []

const URL = require('./db')

mongoose.set("strictQuery", false);
mongoose.connect(URL).then(console.log("mongoDb connected"))
.catch(error => console.log("mongoDb error", error))
// mongoose.set('strictQuery', false)

app.listen(process.env.PORT || 5000, function () {
    console.log(`The server is running on port ${process.env.PORT}`)
})

app.use(express.json())
app.use(cors())

app.use('/', require('./routes/rootRoute'))
