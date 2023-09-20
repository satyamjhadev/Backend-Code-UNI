const { urlencoded } = require("body-parser");
const express=require("express");

const app=express();

//express
//express-session 
//cookie-parser

const fs=require("fs");

const path=require("path");
//middleware static and body-parser to get form data

app.use(express.static("."));
app.use(express.urlencoded());



