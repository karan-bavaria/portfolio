import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  email: string;
  contact: number = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.email = this.dataService.userData.personalInfo.email;
    this.contact = this.dataService.userData.personalInfo.contact;
  }
}
