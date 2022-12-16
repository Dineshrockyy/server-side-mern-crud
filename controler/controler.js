const userdb=require('../Model/Schema')

exports.create=(req,res)=>{
    if(req.body.name===undefined){
        res.status(400).send('cannot send a empty values')
        return;
    }
    const user =new userdb({
        name:req.body.name,
        email:req.body.email,
        mobile_number:req.body.mobile_number,
        gender:req.body.gender,
    })

    console.log(user)
     user.save(user)
    .then(data=>{
        res.send(data)
    }).catch(err => {
        res.status(400).send(err)
    })
}

exports.find=(req,res)=>{
    userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send('datas not occure')
    })
}

exports.update=(req,res)=>{
    const id=req.params.id
    userdb.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send('data not found')
    })
}

exports.delete=(req,res)=>{
    const id=req.params.id
    userdb.findByIdAndDelete(id)
    .then(data=>{
        res.send('user are deleted')
    })
    .catch(err=>{
        res.status(500).send('user not found')
    })
}

exports.search=(req,res)=>{

    userdb.find()
    .then(user=>{
        for (let index = 0; index < user.length; index++) {
            if(user[index].name===req.query.value || user[index].email===req.query.value ||user[index].mobile_number==req.query.value){
               return res.send(user[index])
            }
        }
        res.send('no data match')
    })
    .catch(err=>{
        res.status(500).send('datas not occure')
    })
}