import { Component } from '@angular/core';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
})
export class FloatingButtonComponent {
  constructor() {}

  faPencilAlt = faPencilAlt;
}
