import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any=[]

  constructor(private router:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getCourses().subscribe((data) =>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }

}
