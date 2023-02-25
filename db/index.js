require('dotenv').config()

MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.yvg9ffw.mongodb.net/exms16?retryWrites=true&w=majority`

// console.log(process.env.MONGODB_USERNAME)

module.exports = MONGODB_URL