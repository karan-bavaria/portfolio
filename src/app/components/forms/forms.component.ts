import { Component } from '@angular/core';
import { slideInAnimation } from '../common/animations/animations';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  animations: [slideInAnimation],
})
export class FormsComponent {
  constructor() {}
}
