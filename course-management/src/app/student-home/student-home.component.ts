import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  students={
    fullname:"",
    email:"",
    password:""
  }

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsId().subscribe((data) =>{
      console.log(data)
        this.students=JSON.parse(JSON.stringify(data))
    })
  }

}
