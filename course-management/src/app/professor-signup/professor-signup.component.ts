import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professor-signup',
  templateUrl: './professor-signup.component.html',
  styleUrls: ['./professor-signup.component.css']
})
export class ProfessorSignupComponent implements OnInit {

  errormsg:any;

  professorData={
    fullname:"",
    email:"",
    password:"",
    confirmpassword:""
  }

  constructor(private router:Router,private professorService:ProfessorService) { }

  ngOnInit(): void {
  }

    AddProfessor(){
    if(this.professorData.password==this.professorData.confirmpassword){
      this.professorService.newProfessor(this.professorData)
      this.router.navigate(['/professor'])
    }
    else{
      console.log("some error occured !")
      this.errormsg="Password does not match";
      
    }
  }

}
