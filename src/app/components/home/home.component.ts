import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.reset();
  }

  navigateToTemplate() {
    window.open('https://karan-bavaria.github.io', '_blank');
  }
}
