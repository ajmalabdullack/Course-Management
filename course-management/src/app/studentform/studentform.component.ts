import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  courses:any;
  studentData={
    fullname:"",
    email:"",
    address:"",
    dob:"",
    qualification:"",
    course:"",
  }

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.studentService.getCourses().subscribe((data) =>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }

  apply(){
    this.studentService.applyCourse(this.studentData);
    Swal.fire({
      title: 'Success',
      text: 'Wait Professor Response',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['/courses'])
  }
  

}
