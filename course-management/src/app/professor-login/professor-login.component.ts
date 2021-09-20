import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-login',
  templateUrl: './professor-login.component.html',
  styleUrls: ['./professor-login.component.css']
})
export class ProfessorLoginComponent implements OnInit {

  professoruser={
    email:"",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
