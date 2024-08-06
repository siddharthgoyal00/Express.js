
const {Admin } = require ("../DB");
// middlewares handling auth 
function adminMiddleware(req, res, next){
    // implement admin auth logic 
    // you need to check the headers and validate the admin from the admin DB
    const username = req.headers.username;
    const password = req.headers.password;
     Admin.findOne({
        username:username, // sidd@gmail.com
        password: password // 1234
     })
     .then(function(value){
        if(value){
            next();
        } else{
            res.status(404).json({
                msg: "user does not exist"
            })
        }
     })
}
module.exports = adminMiddleware;