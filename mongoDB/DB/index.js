const mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect('mongodb+srv://admin:fvmQ1D2B6iDKmUM6@cluster0.ztkcnap.mongodb.net/');

// define schemas
const AdminSchema = new mongoose.Schema({
    // schema definition here 
    username : String,
    password : String 
});

const UserSchema =  new mongoose.Schema({
    // schema definition here
    username : String,
    password : String,
    purchasedCourse:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
     // schema definition here
     title: String,
     description: String,
    imageLink: String, 
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports ={
     Admin,
     User,
     Course
}