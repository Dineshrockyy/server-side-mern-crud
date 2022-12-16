const mongoose=require('mongoose')

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile_number:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

const userdb = mongoose.model('userdb',schema)

module.exports=userdb