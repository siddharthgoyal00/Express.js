const {User } = require ("../DB");
// middlewares handling auth 
function userMiddleware(req, res, next){
    // implement admin auth logic 
    // you need to check the headers and validate the admin from the admin DB
 const username = req.headers.username;
 const password = req.headers.username;

 User.findOne ({
    username: username,
    password: password
 })
 .then(function(value){
    if(value){
        next();
    } else {
        res.staus(404).json({
            msg: "user does not exist"
        })
    }
 })

}
module.exports = userMiddleware;