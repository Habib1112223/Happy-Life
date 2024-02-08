const express = require ('express')
const app = express()
const cors = require ("cors")
const port = process.env.PORT||5000;


//  Middleware
// app.get(cors());

"Thiis is a new line for testing purpose created by Nobel."

"This is branch is created by Second branch and is absent in Nobel Branch"
app.get('/',(req,res)=>{
      res.send('Happy Life is important to live in earth')
})

app.listen(port,()=>{
      console.log(`Happy Life ${port}`)
})