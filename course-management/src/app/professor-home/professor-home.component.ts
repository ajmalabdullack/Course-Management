import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.component.html',
  styleUrls: ['./professor-home.component.css']
})
export class ProfessorHomeComponent implements OnInit {

  professors={
    fullname:"",
    email:"",
    password:""
  }

  data=localStorage.getItem("useremail");

  constructor(private professorService:ProfessorService) { }

  ngOnInit(): void {
    this.professorService.getProfessorId().subscribe((data) =>{
      console.log(data)
        this.professors=JSON.parse(JSON.stringify(data))
    })
  }

}
