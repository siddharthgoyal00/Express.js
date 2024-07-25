const express = require("express");
const app = express();
const users = [{
  name: " sidd",
  kidneys: [{
      healthy : false
      }]
}];
app.use(express.json());

//===========================================//
app.get("/", function (req, res){
     const siddKidneys = users[0].kidneys
     const noOfKidneys = siddKidneys.length;
     let noOfHealthyKidneys =0;
     for(let i =0; i<siddKidneys.length; i++){
      if(siddKidneys[0].healthy){
         noOfHealthyKidneys = noOfHealthyKidneys  +1;
      }
     }
      const unhealthyKidneys = noOfKidneys - noOfHealthyKidneys ;
      res.json ({
         noOfKidneys ,
         noOfHealthyKidneys,
         unhealthyKidneys
      });
})

//=====================================================//
 app.post("/", function (req, res){
   const isHealthy = req.body.isHealthy;
   console.log(req.body);
   users[0].kidneys.push({
      healthy:isHealthy
   })
   res.json({
      msg:"done"
   })
   
 })

//========================================================//
 app.put("/", function (req, res){
   for(let i =0 ; i<users[0].kidneys.length; i++ ){
      users[0].kidneys[i].healthy =true;
   }
   res.json({"msessage":"uodated"})
 })
 app.delete("/", function (req, res){
    const newKidneys =[];
    for (let i =0 ; i<users[0].kidneys.lenght ;i++){
         if (users[0].kidneys[i].healthy){
            newKidneys.push({
               healthy: true
            })
         }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"})

 })

 //=======================================================//
app.listen(3000);

