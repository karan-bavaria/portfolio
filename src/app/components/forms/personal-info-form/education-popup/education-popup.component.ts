import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
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
  yearInputValid: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  validateTextInput(input: NgModel): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }

  validateNumberInput(input: NgModel): Boolean {
    return input.touched && input.invalid;
  }

  validateYearInput(input: NgModel): Boolean {
    if (input.touched) {
      if (input.invalid) return true;
      if (input.value > 2020 || input.value < 1910) {
        this.yearInputValid = false;
        return true;
      }
      this.yearInputValid = true;
      return false;
    }
  }
}
