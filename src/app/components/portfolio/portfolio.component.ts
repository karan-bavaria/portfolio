import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  email: string;
  contact: number = null;
  firstName: string;
  lastName: string;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.email = this.dataService.userData.personalInfo.email;
    this.contact = this.dataService.userData.personalInfo.contact;
    this.firstName = this.dataService.userData.personalInfo.firstName;
    this.lastName = this.dataService.userData.personalInfo.lastName;
  }

  navigateToEditScreen() {
    this.router.navigate(['/edit-portfolio']);
  }
}
