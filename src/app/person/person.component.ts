import { Component } from '@angular/core';
import { combineLatest, map, of } from "rxjs";

interface Person {
    firstName: string,
    lastName: string
}

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
})
export class PersonComponent {

    personList: Person[] = [
        { firstName: 'john', lastName: 'doe' },
        { firstName: 'mary', lastName: 'jane' }
    ]
    personList$ = of(this.personList);
    personListMap$ = this.personList$.pipe(
        map((personList) =>
            personList.map(person =>
                person.firstName.toUpperCase())));
    personListFilter$ = this.personList$.pipe(
        map((personList) =>
            personList.filter((person) =>
                person.firstName === 'mary')));
    data$ = combineLatest([
        this.personList$,
        this.personListMap$,
        this.personListFilter$
    ]).pipe(map(([personList, personListMap, personListFilter]) => ({
        personList,
        personListMap,
        personListFilter
    })));
}
