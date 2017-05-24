import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { httpFactory } from "./http.factory";
import { EnrollmentInfo } from './enrollmentInfo/app.enrollmentInfo';
import { GradeInfo } from './gradeInfo/app.gradeInfo';
import { StudentsList } from './studentsList/studentsList';

const appRoutes: Routes = [
  { path: 'studentsList', component: StudentsList },
  { path: 'enrollmentInfo/:studentId', component: EnrollmentInfo },
  { path: 'gradeInfo/:studentId', component: GradeInfo },
  {
    path: '**',
    redirectTo: 'studentsList'    
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsList,
    EnrollmentInfo,
    GradeInfo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
