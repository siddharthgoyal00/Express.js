 const {Router} = require("express");
 const router = Router();
 const userMiddleware = require("../middlewares/user");
const {User, Course} = require("../DB")
 //User routes
 router.post('/signup', (req, res )=>{
    // implement user signup logic 
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message: "user crreated successfully"
    })
 });

 router.get('/courses', async (req, res)=>{
    // implement listing all courses logic
     const response = await Course.find({});

     res.json({
        courses:response
     })
 });

 router.post('/courses/:courseId', userMiddleware, async(req,res)=>{
      // implement fetching purchased courses logic 
      const courseId = req.params.courseId;
      const username = req.headers.username;
       //zod should be used for input validation
     await User.updateOne({
        username: username
       },{
        "$push": {
            purchaseCourses: courseId
        }
       })
       
       res.json({
        message:" purchased complete"
       })
 });

 router.get('/purchasedCourses', userMiddleware, async (req, res)=>{
    //implement fetching purchased courses logic
   const user=await User.findOne({
        
        username: req.headers.username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    req.json({
        courses: courses
    })
 });
 module.exports= router;