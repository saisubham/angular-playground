import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PersonService } from "../person.service";

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {

    personList$: Observable<string[]>;

    constructor(private personService: PersonService) {
    }

    ngOnInit(): void {
        this.personList$ = this.personService.getPersonList();
    }

}
