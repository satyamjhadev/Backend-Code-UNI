
const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");
const cookieparser=require("cookie-parser");
app.use(cookieparser());
const session=require("express-session");
const oneday=1000*60*60*24;
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'asd3454#$%$@#324',
    cookie:{maxAge:oneday}
}));



const userroute=require('./routing/userroutes.js');
app.use('/users',auth,userroute)

function auth(req,res,next){
    if(req.session.username)
   
next()
else
res.redirect("/")

}

app.get("/",(req,res,next)=>{
    if(req.session.username)
    res.redirect("/dashboard");
else
res.sendFile(path.join(__dirname,"./login.html"));
   
})
//????
app.get("/dashboard.html",auth,(req,res)=>{
res.redirect("/user")
})






app.use(express.static("."));
app.use(express.urlencoded());
app.get("/dashboard",(req,res)=>{
    if(req.session.username)
    res.sendFile(path.join(__dirname,"./dashboard.html"));
else
    res.redirect("/");

})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
})
app.post("/login",(req,res)=>{

    fs.readFile("users.txt","utf-8",(err,data)=>{
        let records=JSON.parse(data);
        let results=records.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password)
            return true;
        })
        if(results.length==0)
        res.send("Invalid user/password");
    else
    {
        req.session.username="a";

    res.render("/dashboard");
    }
    })
})


app.listen(3000,(err)=>{
    console.log("Server started...")
})