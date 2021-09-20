import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-login',
  templateUrl: './students-login.component.html',
  styleUrls: ['./students-login.component.css']
})
export class StudentsLoginComponent implements OnInit {

  studentuser={
    email:"",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
