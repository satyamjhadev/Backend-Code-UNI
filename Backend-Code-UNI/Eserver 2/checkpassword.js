const express=require("express");
const app=express();
const fs=require("fs");

//middlewares:
app.use(express.static("."));
app.use(express.urlencoded());

//handle endpoint

app.get("/login",(req,res)=>{
    console.log(req.query);
    res.send(`Welcome ${req.query.yourname}` );
})
//post method
app.post("/login",(req,res)=>{

fs.readFile("user.txt","utf-8",(err,data)=>{
    let records=JSON.parse(data);  
    let results=records.filter((item)=>{
        if(item.username==req.body.yourname && item.password==req.body.yourpassword)

   
        return true;
    })
    if(results.length==0)
    res.send("Invalid user/password");
    else
     res.send("Welcome");
    })
    })

app.listen(4000,(err)=>{
    console.log("server started")
});