const {Pool} = require('pg')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.static("Front_END"))

const PORT = process.env.PORT
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
    connectionString,
})



