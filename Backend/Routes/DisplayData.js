const express = require("express");
const router = express.Router();
router.post('/foodData',(req,res)=>{
    try{
        console.log(global.fooditems);
        res.send([global.fooditems,global.Category])
    }
    catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})
module.exports=router;