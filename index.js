const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{

    console.log(req.body.name)
    return res.send("HEllo Junaid")
})


app.listen(process.env.PORT||port,()=>{
    console.log("app runing on",process.env.PORT||port)
})