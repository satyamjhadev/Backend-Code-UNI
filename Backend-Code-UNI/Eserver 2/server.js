const express=require("express");

const path=require("path");
//in place of createserver in http module 
const app=express();

app.use(express.static(".")); //static middleware to handle all static //will search in the current directory for re

app.listen(3000,(err)=>{
    console.log("server started")
  
});


//sequence of endpoint matters 

app.get("/",(req,res)=>{

    // res.write("welcome to node js");
    // res.end();
//alternate 
//res.send("welcome to Nodejs");

res.sendFile(path.join(__dirname,"./index.html"));   //to read files: absolute path is needed here 

});

app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"./style.css"));


});
app.get("*",(req,res)=>{
    res.send("other");


});



//with comments 
// Import the Express.js framework
// const express = require("express");

// // Import the built-in 'path' module for working with file paths
// const path = require("path");

// // Create an instance of the Express application
// const app = express();

// // Use the static middleware to serve static files from the current directory
// app.use(express.static("."));

// // Start the server and listen on port 3000
// app.listen(3000, (err) => {
//     if (err) {
//         console.log("Server start error:", err);
//     } else {
//         console.log("Server started");
//     }
// });

// // Define a route for the root path ("/")
// app.get("/", (req, res) => {
//     // Send the contents of the "index.html" file as the response
//     res.sendFile(path.join(__dirname, "./index.html"));
// });

// // Define a route for the "style.css" file
// app.get("/style.css", (req, res) => {
//     // Send the contents of the "style.css" file as the response
//     res.sendFile(path.join(__dirname, "./style.css"));
// });

// // Define a catch-all route for any other request (*)
// app.get("*", (req, res) => {
//     // Respond with "other" for all other requests
//     res.send("other");
// });
