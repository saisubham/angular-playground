import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Person {
    firstName: string,
    lastName: string;
}

@Component({
    selector: 'app-person',
    template: `
        <h3>Person List</h3>
        <p>Hello! {{fullName}}</p>
        <button (click)="onClick()">Trigger change detection</button>
    `
})
export class PersonComponent implements OnChanges {

    @Input() person: Person
    fullName = '';

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.person) {
            this.fullName = this.getFullName();
        }
    }

    onClick(): void {
        console.log('btn clicked');
    }

    getFullName() {
        console.log('getFullName() called')
        return this.person.firstName + ' ' + this.person.lastName;
    }
}
