const express = require("express");
const  cors = require("cors");
const ProfessorData = require('./src/model/professordata');
const StudentData   = require('./src/model/studentdata');
const CourseData    = require('./src/model/coursedata');
const AppliedStudentData = require('./src/model/appliedstudent');

var app =new express();
app.use(cors());
app.use(express.json());

//professor data inserting
app.post('/professorinsert',function(req,res){
   var professor = {
    fullname:req.body.professor.fullname,
    email:req.body.professor.email,
    password:req.body.professor.password,
   }
   var professor = new ProfessorData(professor);
   professor.save();
});

//student data inserting
app.post('/studentinsert',function(req,res){
   var student ={
    fullname:req.body.student.fullname,
    email:req.body.student.email,
    password:req.body.student.password,
   }
   var student = new StudentData(student);
   student.save();
});

//inserting new course
app.post('/courseinsert',function(req,res){
    var course ={
        coursename:req.body.course.coursename,
        description:req.body.course.description,
        duration:req.body.course.duration,
        startdate:req.body.course.startdate,
        enddate:req.body.course.enddate
    }
    var course = new CourseData(course);
    course.save();
});

//getting courses
app.get('/courses',function(req,res){
    CourseData.find().then(function(courses){
        res.send(courses)
    });
});

//inserting applied student data
app.post('/appliedstudent',function(req,res){
    var studentdata={
        fullname:req.body.studentdata.fullname,
        email:req.body.studentdata.email,
        address:req.body.studentdata.address,
        dob:req.body.studentdata.dob,
        qualification:req.body.studentdata.qualification,
        course:req.body.studentdata.course,
        status:null
    }

    var studentdata = new AppliedStudentData(studentdata);
    studentdata.save();
});

//applied students details
app.get('/studentlist',function(req,res){
    AppliedStudentData.find({"status":null}).then(function(studentlist){
        res.send(studentlist);
    });
});

//accepted students 
app.put('/accepted',function(req,res){
    id=req.body._id
    AppliedStudentData.findByIdAndUpdate({"_id":id},
                                                {$set:{status:"accepted",
                                            }})
                                            .then(function(){
                                                res.send();
                                            });
});

//rejected student
app.put('/rejected',function(req,res){
    id=req.body._id
    AppliedStudentData.findByIdAndUpdate({"_id":id},
                                                {$set:{status:"rejected",
                                            }})
                                            .then(function(){
                                                res.send();
                                            });
});




app.listen(3000,function(){
    console.log("app listening at port 3000");
});