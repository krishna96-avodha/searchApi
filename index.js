const express = require('express')
app.use(express);
app.use(express.json())
const mongoose =require('./service/db')

const dataservice =require('./service/data.service')
const app =express();




app.get("/search/:name",(req,res)=>{
    console.log(req.params.name)
    let data = await Search.find({
        "$or":[
            {
            name:{$regex:req.params.name}}
        ]
    })
    
})







app.listen(3000,()=>{
    console.log('server started')
})
