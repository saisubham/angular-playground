import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
})
export class SenderComponent implements OnInit {
  count = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  sendEvent() {
    this.count++;
    this.dataService.setCount(this.count);
  }

  reset() {
    this.count=0;
    this.dataService.setCount(this.count);
  }
}
