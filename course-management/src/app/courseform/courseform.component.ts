import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  courseDetails={
    coursename:"",
    description:"",
    duration:"",
    startdate:"",
    enddate:""
  }

  constructor(private router:Router,private professorService:ProfessorService,private studentService:StudentService) { }

  ngOnInit(): void {
  }

  addCourse(){
     this.professorService.newCourse(this.courseDetails);
     this.router.navigate(["/"])
  }
}
