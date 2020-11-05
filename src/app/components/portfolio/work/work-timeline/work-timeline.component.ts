import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-work-timeline',
  templateUrl: './work-timeline.component.html',
  styleUrls: ['./work-timeline.component.scss'],
})
export class WorkTimelineComponent implements OnInit {
  @Input() jobHistory: Job[];

  constructor() {}

  ngOnInit(): void {}

  isEven(position) {
    return position % 2 == 0;
  }

  showBadge() {
    return this.jobHistory.length > 1;
  }

  showLine(index) {
    return index !== this.jobHistory.length - 1;
  }
}
