const express=require("express");
var router=express.Router();
const path=require("path");



router.all('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home.html"))
});
router.all('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"))
});

router.all('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"./signup.html"))
});


module.exports=router;