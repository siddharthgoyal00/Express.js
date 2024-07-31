const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
 app.use = (express.json());

 // decode , verify , generate 

 const value ={
    name: "siddharth",
    accountNumber : 1234512345
 }

 //jwt
 const token = jwt.sign(value, "seceret");
console.log(token);
 // this token has been generated using this seceret , and hence this token can only be verified using this secret 
 //can only be verified using this secret