require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./connection/db')
//create ann express application 
const testServer=express()

//use cors in express
testServer.use(cors())
testServer.use(express.json())
testServer.use(router)



const PORT=3000||process.env.PORT

testServer.listen(PORT,()=>{
    console.log(`project fair server started at PORT ${PORT}`);
})
testServer.get('/',(req,res)=>{
    res.status(200).send("client server")
})
