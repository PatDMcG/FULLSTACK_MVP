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

app.get('/chores', async (req, res) => {
   let data = await pool.query("select * from chores") 
   console.log(data.rows)
    res.status(200).send(data.rows)
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})



