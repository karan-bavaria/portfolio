import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() firstName: string;
  @Input() lastName: string;

  collapsed = true;
  faBars = faBars;

  constructor(public dataService: DataService) {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
