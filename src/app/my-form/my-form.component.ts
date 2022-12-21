import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

    myForm: FormGroup;
    genders: string[] = ['male', 'female', 'other'];

    constructor() {
    }

    ngOnInit(): void {
        this.myForm = new FormGroup<any>({
            'username': new FormControl(null),
            'email': new FormControl(null),
            'gender': new FormControl(null)
        });
    }

    onSubmit() {
        console.log(this.myForm);
    }
}
