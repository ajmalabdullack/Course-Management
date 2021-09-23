import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  students:any;

  constructor(private professorService:ProfessorService,private router:Router) { }

  ngOnInit(): void {
    this.professorService.studentlist().subscribe((data) =>{
      this.students=JSON.parse(JSON.stringify(data));
    })
  }

  acceptstudent(user:any){
     this.professorService.acceptedstudent(user).subscribe(
       (res)=>{
        Swal.fire({
          title: 'accepted',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/studentslist'])
      },
      (error)=>
        {
          Swal.fire({
            title: 'Warning',
            text: 'Over the Limit',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/studentlist'])
        }
     )
  }

  rejectstudent(user:any){
    this.professorService.rejectedstudent(user).subscribe(
      (res)=>{
        Swal.fire({
          title: 'Rejected',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        }) 
        this.router.navigate(['/studentslist'])
      }
    )
  }

}
