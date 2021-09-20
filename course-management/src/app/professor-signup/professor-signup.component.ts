import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-signup',
  templateUrl: './professor-signup.component.html',
  styleUrls: ['./professor-signup.component.css']
})
export class ProfessorSignupComponent implements OnInit {

  professorData={
    fullname:"",
    email:"",
    password:"",
    confirmpassword:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
