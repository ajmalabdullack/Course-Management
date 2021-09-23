import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentsLoginComponent } from './students-login/students-login.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { CourseformComponent } from './courseform/courseform.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentslistComponent } from './studentslist/studentslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentsLoginComponent,
    ProfessorLoginComponent,
    ProfessorSignupComponent,
    StudentSignupComponent,
    CourseformComponent,
    CoursesComponent,
    StudentformComponent,
    StudentslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
