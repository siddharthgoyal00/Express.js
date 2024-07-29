// const express = require("express");
// const app = express();
// app.get ("/health-checkup", function (req,res){
//     //sending the queries to the server 
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username !== "siddhath" || password !== "pass"){
//         res.status(403).json({
//             msg:"user does not exist ",
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "wrong inputs",
//         });
//         return;
//     }

//     res.json({
//         msg: "your heart is healthy"
//     });
// });

// app.listen(3000);

//=======================================================================================================//


// the fucnction between the rout and last function to check the conditon are called the middleWares 
// we can declare these functions above and use them in the routes 
// const express = requirs ("erpress ");
// // this is the way to handle the routes 
// const app = express();
// app.get("/health-checkup", function(req,res, next){   // here the next is itself a funcion to check the condition 
//    console.log ("hi world ");
//    next();
// }, function (req,res){    // we can use multiple function using the next function and the last one ddont need to use the next function 
//     console.log("siddharthg");
// });

// app.listen(3000);

//=====================================================================//


const express = require("express");
 const app = express();
 
 let numberOfRequest =0 ;

 function calculateRequest (req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
 }
 app.use (calculateRequest)
 app.use(express.json())

 app.post("/health-checkkup" , calculateRequest , function (req,res ){
  console.log(req.body);
  req.headers
  req.query

    res.json({
    msg:"helo"
  })
 });
 

 app.listen(3000);

 //================================//

 //assingments 
 // find the aversge  time your server is taking  to handle  the request  using the express.js middleWares


 //=============================================================================//

 