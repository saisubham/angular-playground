import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
            'username': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'gender': new FormControl(null)
        });
    }

    onSubmit() {
        console.log(this.myForm);
    }
}
