import { Component ,OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './app.studentInfo.html'  
})
export class StudentInfo implements OnInit {
    public studentId : any;
    public studentEnrollmentData : any;
    constructor(private http: Http,private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
          if (params['studentId']){
            this.studentId = params['studentId'];
            this.displayStudentEnrollment();           
          }
        });
    }

    displayStudentEnrollment() {
      this.http.get('EnrollmentHistory?studentId='+this.studentId)    
      .subscribe(
                (enrollmentData: any) => {
                console.log(enrollmentData)                    
                    this.studentEnrollmentData = enrollmentData.json();
                }
            );
  }
}
