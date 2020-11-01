import { Component, Input } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-education-popup',
  templateUrl: './education-popup.component.html',
  styleUrls: ['./education-popup.component.scss'],
})
export class EducationPopupComponent {
  @Input() selectedEducationIndex: number;
  @Input() education: Education;

  constructor(public activeModal: NgbActiveModal) {}

  validateTextInput(input: NgModel): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }

  validateNumberInput(input: NgModel): Boolean {
    return input.touched && input.invalid;
  }
}
