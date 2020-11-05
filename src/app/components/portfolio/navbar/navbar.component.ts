import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
