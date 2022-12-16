const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const controller=require('./controler/controler')
const userdb=require('./Model/Schema')
const path=require('path')

const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
const connectionDB=require('./Database/connection')

connectionDB()


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/api/users',controller.create)
app.get('/api/users',controller.find)
app.put('/api/user/:id',controller.update)
app.delete('/api/user/:id',controller.delete)
app.put('/api/user',controller.search)



app.listen(PORT,()=>{
    console.log('server is running')
})