import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation-service';
import { companyView } from '../model/company.interface';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    public companyView: companyView;
    public submitted: boolean = false;
    public companyDetailForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
    	this.initilise();

    }
    initilise() {
        this.companyDetailForm = this.fb.group({
            CompanyName: ['', [ < any > Validators.required, < any > Validators.maxLength(70),<any>Validators.minLength(3)]],
            Street1: ['', [ < any > Validators.required, < any > Validators.maxLength(100),<any>Validators.minLength(10)]],
            Street2: ['', [ < any > Validators.maxLength(100)]],
            City: ['', [ < any > Validators.required, < any > Validators.maxLength(50),<any>Validators.minLength(3)]],
            State: ['', [ < any > Validators.required, < any > Validators.maxLength(50),<any>Validators.minLength(3)]],
            Zip: ['', [Validators.required, < any > Validators.maxLength(10), ValidationService.zipCodeValidator]],
            Country: ['', [ < any > Validators.required, < any > Validators.maxLength(50),<any>Validators.minLength(3)]],
            Telephone: ['', [ < any > Validators.required, ValidationService.phoneNumberValidator]],
            Fax: ['', [ < any > Validators.required, ValidationService.phoneNumberValidator]],
            LogoFile: [''],
            UseLogo: ['false'],
            EmailCompany: ['', [ < any > Validators.required, < any > Validators.maxLength(70)]],
            CompanyContact: ['', [ < any > Validators.required, < any > Validators.maxLength(70),<any>Validators.minLength(3)]]
        });
    }
    save(isValid: boolean) {
        this.submitted = true;
        console.log(this.companyDetailForm, isValid);
    }
}
