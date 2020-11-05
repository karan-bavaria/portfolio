import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Card, Job, Technology } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  jobHistory: Job[];
  technologyStack: Technology[];
  informationCards: Card[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jobHistory = [...this.dataService.userData.workInfo.jobHistory];
    this.technologyStack = [
      ...this.dataService.userData.workInfo.technologyStack,
    ];
    this.informationCards = [
      ...this.dataService.userData.workInfo.informationCards,
    ];
  }
}
