import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  


  constructor(private http:HttpClient) { }

  newProfessor(item:any){
    return this.http.post("http://localhost:3000/professorinsert",{"professor":item})
    .subscribe(data =>{console.log(data)}) 
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

}
