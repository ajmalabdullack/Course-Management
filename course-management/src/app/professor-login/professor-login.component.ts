import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import Swal from 'sweetalert2';

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

  constructor(private professorService:ProfessorService, private router:Router) { }

  ngOnInit(): void {
  }

  professorLogin(){
    this.professorService.proffLogin(this.professoruser)
    .subscribe(
      res =>{
        localStorage.setItem('token1',res.token);

        Swal.fire("Succesfully logged in")
          .then(()=>{
            localStorage.setItem('useremail',this.professoruser.email)
      this.router.navigate(["professorhome"])})
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
