import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() educationTimeline: Education[];

  constructor() {}

  ngOnInit(): void {}

  isEven(position) {
    return position % 2 == 0;
  }

  showBadge() {
    return this.educationTimeline.length > 1;
  }

  showLine(index) {
    return index !== this.educationTimeline.length - 1;
  }
}
