import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';

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

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  studentLogin(){
    this.studentService.stdLogin(this.studentuser).subscribe(
      res =>{
        localStorage.setItem('token',res.token);

        Swal.fire("Succesfully logged in")
          .then(()=>{
      this.router.navigate(["studenthome"])})
      },
      err=>{
        console.log(err)
        if(err.status===409){
          Swal.fire ("Incorrect credentials")
        }else{
          Swal.fire("Invalid Email or Password")
        }
      }
    )
  }

}
