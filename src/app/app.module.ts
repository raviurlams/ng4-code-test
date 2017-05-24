import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { httpFactory } from "./http.factory";
import { StudentInfo } from './studentInfo/app.studentInfo';
import { StudentsList } from './studentsList/studentsList';

const appRoutes: Routes = [
  { path: 'studentsList', component: StudentsList },
  { path: 'studentInfo/:studentId', component: StudentInfo },
  {
    path: '**',
    redirectTo: 'studentsList'    
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsList,
    StudentInfo
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
