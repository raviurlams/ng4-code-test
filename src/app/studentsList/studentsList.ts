import { Component ,OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-students-list',
  templateUrl: './studentsList.html'  
})
export class StudentsList implements OnInit {
    studentsList: Array<any> = [];
    constructor(private http: Http) {

    }
    ngOnInit() {
        this.http.get('All')
            .subscribe(
                (studentsList: any) => {                	
                    this.studentsList = studentsList.json();
                }
            )
    }
}
