const mongoose=require('mongoose')

const connectionDB=async()=>{
           const con=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        },(err)=>{
            if(err){
                console.log('this is an err '+err)
            }else{
                console.log('connected......')
            }
        })
}

module.exports=connectionDB