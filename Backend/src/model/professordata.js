const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CourseApp');

const Schema = mongoose.Schema;

const professorSchema = new Schema ({
    fullname:String,
    email:String,
    password:String
});

var Professordata = mongoose.model('professordata',professorSchema);
module.exports = Professordata;