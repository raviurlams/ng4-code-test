import { Component ,OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grade-info',
  templateUrl: './app.gradeInfo.html'  
})
export class GradeInfo implements OnInit {
    public studentId : any;
    public studentGradeData : any;
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
      this.http.get('AssignmentHistory?studentId='+this.studentId)    
      .subscribe(
                (gradeData: any) => {
                    console.log(gradeData)                    
                    this.studentGradeData = gradeData.json();
                }
            );
  }
}
