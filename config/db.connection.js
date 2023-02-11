
const mongoose = require('mongoose')



const connectionStr = process.env.MONGODB_URI

const connection = mongoose.connect(process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE");

mongoose.connection.on('connected', () => console.log(
    `${new Date().toLocaleTimeString()}: MongoDB connected...`
))

mongoose.connection.on('error', (error) => console.log(
    `${new Date().toLocaleTimeString()}: MongoDB error encountered...\n ${{ error }}`
))

mongoose.connection.on('disconnnected', () => console.log(
    `${new Date().toLocaleTimeString()}: MongoDB disconnected.`
))

module.exports = connection
