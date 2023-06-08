import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { map, Observable } from "rxjs";

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent implements OnInit {
  data$ = new Observable<any>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getObservable().pipe(
      map(event => event));
  }
}
