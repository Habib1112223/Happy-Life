const express = require ('express')
const app = express()
const cors = require ("cors")
const port = process.env.PORT||5000;
"development line check in line 5"

//  Middleware
// app.get(cors()
"this is a new line in line no 9 without conflict"



app.get('/',(req,res)=>{
      res.send('Happy Life is important to live in earth')
})

app.listen(port,()=>{
      console.log(`Happy Life ${port}`)
})