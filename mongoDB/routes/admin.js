const express = require ("express");
const adminMiddleware = require ("../middlewares/admin");
const {Admin} = require("../DB");
const router = express.Router();

router.post('/signup', async (req,res)=>{
    // implement admin signup logic 
    const username = req.body.username;
    const password = req.body.password;

// check if a user with this username  alredy exists
// if they do then send user is already signed up  stop the request 
// if not then put them into the database

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "admin created successfully"
    })
    
    
});

router.post('/courses', adminMiddleware, async (req,res)=>{
    //implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    const newCourse =await Course.create({
        title: title,
        description : description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req,res)=> {
    // implement fetching all courses logic
    const response = await Course.find({})
   
        res.json({
            courses: response
        })
    
});
 


module.exports = router; 
