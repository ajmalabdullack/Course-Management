import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
