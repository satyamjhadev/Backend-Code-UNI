const express =require("express");
const fs=require("fs");
const app=express();


//use static and urlencoded middleware
app.use(express.static("."));
app.use(express.urlencoded());

app.post("/fillform",(req,res)=>{

//take the user detail in form of strings.
    let p=req.body.username;
    let q=req.body.phoneno;
// convert strings to jsonobject.
    const jsonobject={username:p,phoneno:q};

    //specify filepath

    const filepath="user3.json";
  //read file and check if user exits.

    fs.readFile(filepath,"utf-8",(err,data)=>{
        let records=JSON.parse(data);
        let results=records.filter((item)=>{
            if(item.username==p)
            return true;

        })
        if(results!=0)
        res.send("Username already exits");
    else
    {
        records.push(jsonobject);
        fs.writeFile(filepath,JSON.stringify( records),(err)=>{
            res.send("User created Successfully");
        });
    }
    })




    fs.readFile(filepath,"utf-8",(err,data)=>{
        let records1=JSON.parse(data);
        let results1=record1.filter(item)=>{
            if(item.username==p)
            return true;
    })

    if(results!=0){
        res.send("username already exits ")

    }
});




app.listen(3000,(err)=>{
    console.log("server Started ");
});




