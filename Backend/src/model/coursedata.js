const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CourseApp');

const Schema = mongoose.Schema;

const courseSchema = new Schema ({
    coursename:String,
    description:String,
    duration:String,
    startdate:String,
    enddate:String
});

var Coursedata = mongoose.model("coursedata",courseSchema);
module.exports = Coursedata;