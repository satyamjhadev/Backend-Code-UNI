




const { Console } = require("console");
const fs = require("fs");
const http = require("http");
const { findSourceMap } = require("module");

const server=http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.url);
    if(req.url=="/" || res.url=="/index.html"){
        fs.readFile("/index.html","utf-8",(err,data)=>{
            if(err){
                return ("unable to read file");
            }
            else{
                return (data);
            }
        });
    }
    else if(req.url=="/contact.html"){
        fs.readFile("/contact.html","utf-8",(err,data)=>{
            if(err){
                return ("unable to read file");
            }
            else{
                return (data);
            }
        });
    }
    else{
        fs.readFile("/404.html");
    };
}

server.listen(3000,(err)=>{
    if(err){
        Console.log("Error in starting Server....");
    }
    else{
        console.log("Server started at port:3000 ");
    }
});


   

   
