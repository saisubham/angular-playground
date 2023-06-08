import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<number>();

  constructor() {
    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'data') {
        this.subject.next(parseInt(localStorage.getItem('data') || '0'));
      }
    });
  }

  setCount(data: number) {
    localStorage.setItem('data', data.toString());
  }

  getObservable(): Observable<number> {
    return this.subject.asObservable();
  }
}
