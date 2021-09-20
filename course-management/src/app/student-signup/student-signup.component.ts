import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  studentData={
    fullname:"",
    email:"",
    password:"",
    confirmpassword:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
