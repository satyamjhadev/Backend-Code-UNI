const express=require("express");
const app=express();


app.use(express.static("."));
app.use(express.urlencoded());  //body parcel middleware



app.get("/login",(req,res)=>{
    console.log(req.query);  //query object recieves the key value pair when we use get.
    res.send(`welcome to  ${req.query.yourname}`);
    res.end;
});


//Middleware: body parser already in node js but external
app.post("/login",(req,res)=>{
    console.log("inside post")

    
    console.log(req.body);

});

app.listen(3000,(err)=>{
    console.log("server started")
  
});
