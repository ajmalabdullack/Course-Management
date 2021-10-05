import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  
userprof={
    email:"",
    password:""
}

  constructor(private http:HttpClient) { }

  newProfessor(item:any){
    console.log(item)
    return this.http.post("http://localhost:3000/professorinsert",{"professor":item})
    .subscribe(data =>{console.log(data);})
  }

  newCourse(item:any){
    return this.http.post("http://localhost:3000/courseinsert",{"course":item})
    .subscribe(data =>{console.log(data);})
  }

  studentlist(){
    return this.http.get("http://localhost:3000/studentlist");
  }

  acceptedstudent(user:any){
    return this.http.put("http://localhost:3000/accepted",user)
  }

  rejectedstudent(user:any){
    return this.http.put("http://localhost:3000/rejected",user)
  }

  acceptedlist(){
    return this.http.get("http://localhost:3000/acceptedlist");
  }

  proffLogin(item:any){
     this.userprof=item;
    return this.http.post<any>("http://localhost:3000/proflogin",item)
  }

  getProfessorId(){
    return this.http.get('http://localhost:3000/professordata/'+this.userprof.email);
  }

  sendmailto(items:any){
    console.log(items)
    return this.http.post('http://localhost:3000/sendmail',{"course":items})
   
  }

}
