const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://siddhugoyal30:tGypUr117E38Q5Yl@cluster0.5zn9u6s.mongodb.net/userappnew");

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

     const existinguser = await User.findOne({email:username});
    if (existinguser){
        return res.status(400).send("this username already exist");

    }
    const user = new User({
        name: name,
       username: username,
       password : password 


});
user.save();
res.json({
    "msg": "user created"
})
})
app.listen(3002);