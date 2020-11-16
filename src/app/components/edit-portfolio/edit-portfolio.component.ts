import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss'],
})
export class EditPortfolioComponent implements OnInit {
  constructor(private router: Router, public dataService: DataService) {}

  ngOnInit(): void {}

  navigateToPortfolio() {
    this.router.navigateByUrl('/portfolio');
  }
}
