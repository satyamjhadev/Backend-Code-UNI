const express=require("express");
const router=express.Router();

const path=require("path");

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../dashboard.html"))
})


router.get('/profile',(req,res)=>{
    res.send("profile page");
})

router.get('/history',(req,res)=>{
    res.send("history created");
})

module.exports=router;