const express = require ("express")
const jwt = require ("jsonwebtoken");
const jwtpassword ="123456";
const app = express();
app.use(express.json());
const allusers =[
    {
        username : "siddharthgoyal@gmail.com",
        password: "123",
        name : "siddharht goyal"
    },
    {
        username : "siddhu@gmail.com",
        password: "123456",
        name : "siddhu" 
    },
    {
        username : "siddharth@gmail.com",
        password: "123456",
        name : "siddharht"
    }
    
];

function userExists(username,password){
 const allusers = false;
 for(let i =0; i<allusers.length; i++){
    if (allusers[i].username==username && allusers[i].password==password){
        userExists =true;
    }
 }
 return userExists;
}

app.post("/singin", function(req,res){
    const username = req.body.username ;
    const password = req.body.password;
    
    if (!userExists(username, password)){
        return res.status(403).json ({
            msg: "user donot exist",
        });
    }
  
    var token = jwt.sign({ username: username}, jwtpassword);
    return res.json ({
        token,
    });
});

app.get ("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpassword);
        const username = decoded.username;

    }catch (err){
        return res.status(403).json({
            msg: "invalid token",
        });
    }
});
app.listen(3001)