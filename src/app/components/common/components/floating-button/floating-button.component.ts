import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faPencilAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
})
export class FloatingButtonComponent implements OnInit {
  @Input() edit: boolean;
  @Output() event: EventEmitter<boolean> = new EventEmitter();

  icon;

  constructor() {}
  ngOnInit(): void {
    this.icon = this.edit ? this.faPencilAlt : this.faArrowLeft;
  }

  faPencilAlt = faPencilAlt;
  faArrowLeft = faArrowLeft;

  emit() {
    this.event.emit(true);
  }
}
