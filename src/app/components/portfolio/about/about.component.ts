import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Education } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  introText: string[] = [];
  coverLetter: string[] = [];
  educationTimeline: Education[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.introText = this.dataService.userData.introductionInfo.introduction.split(
      '\n'
    );
    this.coverLetter = this.dataService.userData.introductionInfo.coverLetter.split(
      '\n'
    );
    this.educationTimeline = [
      ...this.dataService.userData.personalInfo.educationTimeline,
    ];
  }
}
