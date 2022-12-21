import { Component } from '@angular/core';
import { map, of } from "rxjs";

interface Person {
    firstName: string,
    lastName: string
}

@Component({
    selector: 'app-person',
    template: `
        <h3>Person List</h3>
        <ul *ngFor="let person of transformed$ | async">
            <li>{{person}}</li>
        </ul>
    `
})
export class PersonComponent {

    personList: Person[] = [
        { firstName: 'john', lastName: 'doe' },
        { firstName: 'mary', lastName: 'jane' }
    ]
    personList$ = of(this.personList);
    transformed$ = this.personList$.pipe(map(personList =>
        personList.map(person =>
            person.lastName.toUpperCase() + ' ' + person.firstName.toUpperCase()
        )
    ));

}
