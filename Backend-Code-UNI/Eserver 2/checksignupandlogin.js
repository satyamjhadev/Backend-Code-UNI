const { json } = require("body-parser");
const express=require("express");
const fs=require("fs");
const app=express();

app.use(express.static("."));
app.use(express.urlencoded());

app.post("/signup",(req,res)=>{

    let u=req.body.signupname;
    let p=req.body.signuppass;
   
   
    //converting simple string to json object.
    const jsonobject={username:u,password:p};

    //specify filepath:
    const filepath='user.txt';



   // check if user exists already:READ file and store it in a array and then filter if user exists.
    fs.readFile(filepath,"utf-8",(err,data)=>{
        let records=JSON.parse(data);
        let results=records.filter((item)=>{
            if(item.username==u)
            return true;

        })
        if(results!=0)
        res.send("Username already exits");
    else
    {
        records.push(jsonobject);
        fs.writeFile(filepath,JSON.stringify( records),(err)=>{
            res.send("User created");
        });
    }
    })
});

//     // //convert jsonobject to json string format

//     // const jsondata=JSON.stringyify(jsonobject,null,2);

//     fs.writeFile(filepath,jsonobject,(err)=>{
// if(err){
// console.error("error writing to file",err);}
// else{
//     console.log("json data has been written to",filepath);}

// })

//delete user
fs.readFile

app.listen(5000,(err)=>{
    console.log("server started")
});



// // Import required modules
// const { json } = require("body-parser");
// const express = require("express");
// const fs = require("fs");

// // Create an Express application
// const app = express();

// // Serve static files from the current directory
// app.use(express.static("."));
// // Parse URL-encoded request bodies
// app.use(express.urlencoded());

// // Define a route for handling POST requests to "/signup"
// app.post("/signup", (req, res) => {
//     // Extract the username and password from the request body
//     let u = req.body.signupname;
//     let p = req.body.signuppass;

//     // Convert the username and password into a JSON object
//     const jsonobject = { username: u, password: p };

//     // Specify the file path where user records are stored
//     const filepath = 'user.txt';

//     // Check if the user already exists by reading the file and filtering records
//     fs.readFile(filepath, "utf-8", (err, data) => {
//         if (err) {
//             // Handle any potential error reading the file
//             console.error("Error reading file:", err);
//             res.status(500).send("Server error");
//             return;
//         }

//         // Parse the file data into an array of user records (assuming it's in JSON format)
//         let records = JSON.parse(data);

//         // Use the 'filter' method to check if the username already exists in the records
//         let results = records.filter((item) => {
//             return item.username == u;
//         });

//         // If results are found, send a response indicating that the username already exists
//         if (results.length !== 0) {
//             res.send("Username already exists");
//         } else {
//             // If the username doesn't exist, add the new user record to the array
//             records.push(jsonobject);

//             // Write the updated user records back to the file
//             fs.writeFile(filepath, JSON.stringify(records), (err) => {
//                 if (err) {
//                     // Handle any potential error writing to the file
//                     console.error("Error writing to file:", err);
//                     res.status(500).send("Server error");
//                     return;
//                 }

//                 // Send a response indicating that the user has been created
//                 res.send("User created");
//             });
//         }
//     });
// });

// // Start the server and listen on port 5000
// app.listen(5000, (err) => {
//     if (err) {
//         console.error("Server start error:", err);
//     } else {
//         console.log("Server started");
//     }
// });
