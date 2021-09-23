const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseApp');

const Schema = mongoose.Schema;

const appliedstudentSchema = new Schema({
    fullname:String,
    email:String,
    address:String,
    dob:String,
    qualification:String,
    course:String,
    status:String
})

var AppliedStudentsdata = mongoose.model("appliedstudentdata",appliedstudentSchema);
module.exports = AppliedStudentsdata;