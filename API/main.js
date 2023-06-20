const {Pool} = require('pg')  
const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const app = express()
app.use(express.json())
app.use("/" , express.static(path.join(__dirname, '../Front_END')))
const PORT = process.env.PORT
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
    connectionString,
})

//get all
app.get('/chores', async (req, res) => {
    try {
   
   let data = await pool.query("select * from chores") 
   console.log(data.rows)
    res.status(200).send(data.rows)
         
} catch (error) {
    res.status(500).send(error)
        
}
})

// get one
app.get('/chores/:id', async (req, res) => {
    try{
    let id = req.params.id
    let data = await pool.query("select * from chores where id = $1", [id]) 
    console.log(data.rows)
     res.status(200).send(data.rows)
              
} catch (error) {
    res.status(500).send(error)
        
}
 })
 
 // delete one
 app.delete('/chores/:id', async (req, res) => {
    try{
    let id = req.params.id
    let data = await pool.query("delete from chores where id = $1",[id]) 
    console.log(data.rows)
     res.status(200).send(data.rows)
              
} catch (error) {
    res.status(500).send(error)
        
}
 })

 //edit one
 app.put('/chores/:id', async (req, res) => {
    try{
    let id = req.params.id
    let {title , est_time_min} = req.body
    if(title !== null && title !== ''){pool.query("update chores set Title = $1 where id = $2", [title,id])}
    if(est_time_min !== null && est_time_min !== ''){pool.query("update chores set Est_Time_min = $1 where id = $2", [est_time_min,id])}
    let data = await pool.query("select * from chores where id = $1", [id]) 
    console.log(data.rows)
     res.status(200).send({est_time_min})
              
} catch (error) {
    res.status(500).send(error)
        
}
 })

//delete all
 app.delete('/chores', async (req, res) => {
    try{
    let data = await pool.query("delete from chores") 
    console.log(data.rows)
     res.status(200).send(data.rows)
              
} catch (error) {
    res.status(500).send(error)
        
}
 })

 // add one
 app.post('/chores', async (req, res) => {
    try {
    let {Title , Est_Time_min} = req.body
    if(Title !== null && Title !== '' && Est_Time_min >= 0 && Est_Time_min !== null){let data = await pool.query("insert into chores (Title,Est_time_min) Values ($1,$2) returning *",[Title,Est_Time_min])
    console.log(data.rows)
     res.status(200).send(data.rows)
    }
              
    } catch (error) {
        res.status(500).send(error)
        
    }})
 
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})



