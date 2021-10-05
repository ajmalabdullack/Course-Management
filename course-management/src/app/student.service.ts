import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  item:any;
  students:any;

  constructor(private http:HttpClient) { }

  newStudent(item:any){
    return this.http.post("http://localhost:3000/studentinsert",{"student":item})
    .subscribe(data =>{console.log(data);})
  }
  
  getCourses(){
    return this.http.get("http://localhost:3000/courses");
  }

  applyCourse(item:any){
    return this.http.post("http://localhost:3000/appliedstudent",{"studentdata":item})
           .subscribe(data=>{console.log(data)});
  }

  stdLogin(user:any){
    this.students=user
    return this.http.post<any>("http://localhost:3000/stdLogin",user)
  }

  getStudentsId(){
    return this.http.get("http://localhost:3000/studentsprofile/"+this.students.email)
  }

}
