import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseformComponent } from './courseform/courseform.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentsLoginComponent } from './students-login/students-login.component';
import { StudentslistComponent } from './studentslist/studentslist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"students",component:StudentsLoginComponent},
  {path:"professor",component:ProfessorLoginComponent},
  {path:"signupProfessor",component:ProfessorSignupComponent},
  {path:"signupStudent",component:StudentSignupComponent},
  {path:"addcourse",component:CourseformComponent},
  {path:"courses",component:CoursesComponent},
  {path:"applycourse",component:StudentformComponent},
  {path:"studentslist",component:StudentslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
