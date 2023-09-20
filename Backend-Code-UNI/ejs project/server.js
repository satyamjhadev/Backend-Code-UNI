const express =require("express")
const app=express();

app.set("view engine","ejs"); //template

app.use(express.static("."));

app.get("/",(req,res)=>{
    res.render("home",{name:'code quotient',courses:["first","second","third"]})
})


app.listen(3000,(err)=>{
    console.log("server started")
})