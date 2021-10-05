import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  errormsg:any;

  studentData={
    fullname:"",
    email:"",
    password:"",
    confirmpassword:""
  }

  constructor(private router:Router, private studentService:StudentService) { }

  ngOnInit(): void {
  }

  AddStudent(){
    if(this.studentData.confirmpassword==this.studentData.password){
      this.studentService.newStudent(this.studentData);
      this.router.navigate(["/students"])
    }
    else{
         this.errormsg ="Password does not match";
    }
  }

}
