import { Component, OnInit } from '@angular/core';
import { DanieletimerService } from '../danieletimer.service';

@Component({
  selector: 'app-danielehistory',
  templateUrl: './danielehistory.component.html',
  styleUrls: ['./danielehistory.component.css'],
})
export class DanielehistoryComponent implements OnInit {
  constructor(public timer: DanieletimerService) {}

  ngOnInit() {}

  timestamp = new Date();
  getHour() {
    this.timer.start(1000);
    return this.timestamp.getHours();
  }
}
