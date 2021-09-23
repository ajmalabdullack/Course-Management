const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CourseApp');

const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    fullname:String,
    email:String,
    password:String
});

var Studentdata = mongoose.model('studentdata',studentSchema);
module.exports = Studentdata;