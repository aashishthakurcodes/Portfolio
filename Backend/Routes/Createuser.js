const express=require('express');
const router=express.Router();
const User =require('../models/User')



router.post('/createuser',async (req,res)=>{
try{
await User.create({
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
    location:req.body.location
})
res.json({Success:true});

}catch(error){
console.log(error);
res.json({Success:false});

}

})

module.exports=router;