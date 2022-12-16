const express = require('express');
const app = express();

const route=express.Router

route.post('/user',(req,res)=>{
    res.send('submited')
})

module.exports=route