import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseformComponent } from './courseform/courseform.component';
import { HomeComponent } from './home/home.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentsLoginComponent } from './students-login/students-login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"students",component:StudentsLoginComponent},
  {path:"professor",component:ProfessorLoginComponent},
  {path:"signupProfessor",component:ProfessorSignupComponent},
  {path:"signupStudent",component:StudentSignupComponent},
  {path:"addcourse",component:CourseformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
