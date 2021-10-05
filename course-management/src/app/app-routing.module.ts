import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedstudentsComponent } from './acceptedstudents/acceptedstudents.component';
import { CourseformComponent } from './courseform/courseform.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProfessorHomeComponent } from './professor-home/professor-home.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { StudentHomeComponent } from './student-home/student-home.component';
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
  {path:"studentslist",component:StudentslistComponent},
  {path:"acceptedstudents",component:AcceptedstudentsComponent},
  {path:"studenthome",component:StudentHomeComponent},
  {path:"professorhome",component:ProfessorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
