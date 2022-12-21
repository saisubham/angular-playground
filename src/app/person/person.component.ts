import { Component, Input, OnInit } from '@angular/core';

interface Person {
    firstName: string,
    lastName: string;
}

@Component({
    selector: 'app-person',
    template: `
        <h3>Person List</h3>
        <p>Hello! {{getFullName()}}</p>
        <button (click)="onClick()">Trigger change detection</button>
    `
})
export class PersonComponent implements OnInit {

    @Input() person: Person

    ngOnInit(): void {
    }

    onClick(): void {
        console.log('btn clicked');
    }

    getFullName() {
        console.log('getFullName() called')
        return this.person.firstName + ' ' + this.person.lastName;
    }
}
