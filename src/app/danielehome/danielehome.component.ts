import { Component, OnInit } from '@angular/core';
import { DanieletimerService } from '../danieletimer.service';

@Component({
  selector: 'app-danielehome',
  templateUrl: './danielehome.component.html',
  styleUrls: ['./danielehome.component.css'],
})
export class DanielehomeComponent implements OnInit {

  counter = 0;

  constructor(public timer: DanieletimerService) {
    this.timer.start(1000);
  }

  ngOnInit() {}
}
