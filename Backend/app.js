const express = require("express");
const  cors = require("cors");
const  jwt = require("jsonwebtoken");
const  bodyparse = require("body-parser");
const nodemailer = require('nodemailer');
const ProfessorData = require('./src/model/professordata');
const StudentData   = require('./src/model/studentdata');
const CourseData    = require('./src/model/coursedata');
const AppliedStudentData = require('./src/model/appliedstudent');

var app =new express();
app.use(cors());
app.use(express.json());

rolestudent="#"
roleprofessor="@"

//token verification--------------------start
function verifyToken(req, res, next) {
  
    if(!req.headers.authorization) {
      
  
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

 //limit checking
 function checklimit(req,res,next){
    const course=req.body.course;
    AppliedStudentData.count({"course":course,"status":"accepted"})
    .then(data=>{
       
        if(data<=40){
            
            res.send();
            next();
        }else{
            res.status(401).send('sorry..over the limit')
        }
      
    })
    
} 

//checking students mail exist functn
function stdcheckemail(req,res,next){
    email = req.body.student.email;
    StudentData.findOne({email:email})
    .then(data=>{
        if(data){
            res.status(401).send("email already exist")
        }else{
            next()
        }
    })
}

//checking professor mail exist functn
function profcheckemail(req,res,next){
    email = req.body.professor.email;
    ProfessorData.findOne({email:email})
    .then(data=>{
        if(data){
            res.status(401).send("email already exist")
        }else{
            next()
        }
    })
}

//professor login
app.post('/proflogin',async(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    console.log(email)
    console.log(password);
    let profdata=await ProfessorData.findOne({email:email})
    console.log(profdata);
    if(profdata==null){
        return res.status(404).send("Professor data does not exist")
    }
    else if(profdata.email===email && profdata.password===password){
        let payload ={subject: email+roleprofessor}
        let token =jwt.sign(payload, 'secretKey')
        return res.status(200).send({token})
    }
    else{
        return res.status(401).send("something went wrong...! pls try again")
    }
});

//student login
app.post('/stdLogin',async(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;

    let studentdata=await StudentData.findOne({email:email})

    if(studentdata==null){
        console.log("null");
        return res.status(404).send("Professor data does not exist")
    }
    else if(studentdata.email===email && studentdata.password===password){
        let payload ={subject: email+rolestudent}
        let token =jwt.sign(payload, 'secretKey')
        return res.status(200).send({token})
    }
    else{
        return res.status(401).send("something went wrong...! pls try again")
    }
});

//professor data inserting
app.post('/professorinsert',function(req,res){
    console.log("uth")
    console.log(req.body)
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

//professor data getting using Id
app.get('/professordata/:email',function(req,res){
    console.log("here")
    profemail=req.params.email; 
    ProfessorData.findOne({email:profemail}).then((data)=>{
        res.send(data)
        console.log(data)
    });
});

//students data for profile
app.get('/studentsprofile/:email',function(req,res){
    console.log("here")
    profemail=req.params.email; 
    StudentData.findOne({email:profemail}).then((data)=>{
        res.send(data)
        console.log(data)
    });
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
app.put('/accepted',checklimit,function(req,res){
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

//getting accepted students list
app.get('/acceptedlist',function(req,res){
    AppliedStudentData.find({"status":"accepted"}).then(function(acceptedlist){
        res.send(acceptedlist);
    })
})

//sending mails
app.post('/sendmail',(req,res)=>{
    
    const course=req.body.course;
    console.log(course)
    const accept="accepted"
   AppliedStudentData.find({course:course,status:accept}, function(err, allUsers){
        if(err){
            console.log(err);
        }
        var mailList = [];
        allUsers.forEach(function(users){
            mailList.push(users.email);
            return mailList;
        });
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'ajmalckaju@gmail.com',
                pass: "ceyudujrpjfkypsh"
            },tls: {
          rejectUnauthorized: false
      }
        });
        var mailOptions = {
                to: [],
                bcc: mailList,
                from: 'ajmalckaju@gmail.com',
                subject: 'Form Accepted',
                html: '<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application is Accepted</h4>'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                if(err){
                    console.log(err);
                    res.status(401).send( "We seem to be experiencing issues. Please try again later.");
                    // res.redirect("/");
                }else{
                    res.send()
                console.log('mail sent to ' + mailList);
                }
            });
    });
})





app.listen(3000,function(){
    console.log("app listening at port 3000");
});