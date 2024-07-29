const express = require("express");
const app =express();
app.use(express.json());
 
app.post ("/health-checkkup" , function(req,res){
 // kidneys = [1,2]  user give inputs in array

    const kidneys = req.body.kidneys;
 const kidneysLength = kidneys.length;
    res.send("world" + kidneysLength);
 });

 // global catches 
// another middleware that take the four inputs
// these are the ERROR handelers in middleWare 
// the purpose o these is to give the better ERROR message to the user 
 app.use (function (arr,req,res,next){
    res.json({
        msg: " sorry our server went down "
    })
 })

 app.listen(3000);