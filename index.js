const express = require ('express')
const app = express()
const cors = require ("cors")
const port = process.env.PORT||5000;


//  Middleware
// app.get(cors());




app.get('/',(req,res)=>{
      res.send('Happy Life is important to live in earth')
})

app.listen(port,()=>{
      console.log(`Happy Life ${port}`)
})