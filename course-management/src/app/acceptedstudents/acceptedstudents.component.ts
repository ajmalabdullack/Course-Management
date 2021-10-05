import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acceptedstudents',
  templateUrl: './acceptedstudents.component.html',
  styleUrls: ['./acceptedstudents.component.css']
})
export class AcceptedstudentsComponent implements OnInit {

  students:any;
  courses:any;
  mailcourse="";

  constructor(private professorService:ProfessorService,private router:Router,public studentService:StudentService) { }

  ngOnInit(): void {
    this.professorService.acceptedlist().subscribe((data) =>{
      this.students= JSON.parse(JSON.stringify(data));
    })

    this.studentService.getCourses().subscribe((data) =>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }


  sendmail(){
    if(!this.mailcourse){
      Swal.fire({
        title: 'warning',
        text: 'Please select a course',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }else{
      this.professorService.sendmailto(this.mailcourse)
      .subscribe(
        res => {
          Swal.fire({
            title: 'Success',
            text: 'Mail sent',
            icon: 'success',
            confirmButtonText: 'OK'
          })
         
        },
        err => {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: 'No One Applied this course',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          
        }) 
       
      }    
  
    }

}
