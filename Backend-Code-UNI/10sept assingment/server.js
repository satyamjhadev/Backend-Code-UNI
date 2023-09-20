const express=require("express");
const fs =require("fs");
const path=require("path");


const app=express();

app.use(express.static("."));
app.use(express.urlencoded())

// app.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname,"./login.html"));

// })

// app.get("/signup",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./signup.html"))
// })

//custom route points for users/..
const user=require('./user.js');
app.use('/user',user)

//custom route for product/...
const product=require('./product.js')
app.use('/product',product)

app.listen(4000,()=>{
    console.log("sever started at port 4000 ...")
})