import { Component, Input } from '@angular/core';

import { Technology } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-icon-stack',
  templateUrl: './icon-stack.component.html',
  styleUrls: ['./icon-stack.component.scss'],
})
export class IconStackComponent {
  @Input() technologyStack: Technology[];
}
