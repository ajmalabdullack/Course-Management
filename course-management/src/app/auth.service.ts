import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  StudentloggedIn(){
    return !!localStorage.getItem('token')
  }
  ProfessorloggedIn(){
    return !!localStorage.getItem('token1')
  }
}
