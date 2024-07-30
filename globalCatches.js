const express  = require("express");
const app = express();
 app.get("/", function ( req,res){
    console.log(req.body.kidneys.lenght);
    res.json({
        msg:"done"
    })
 })
// this below syntax is the syntax for the global catches
// global catches are the way to show the error to the end user 
// in a pretty format 
// if see the above code there is no body and kidneys defined 
// when we run this we will get the very big error message 
// to give the user the short error message we use the global catches
 app.use(function(err,req,res,next){
    res.send({
        msg: " internaal error"
    })
 })
