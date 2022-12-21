import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    personList: string[] = ['John', 'Mary', 'Tom'];

    getPersonList(): Observable<string[]> {
        return of(this.personList).pipe(delay(3000));
    }
}
