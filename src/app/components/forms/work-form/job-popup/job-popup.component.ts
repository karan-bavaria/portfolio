import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Job } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-job-popup',
  templateUrl: './job-popup.component.html',
  styleUrls: ['./job-popup.component.scss'],
})
export class JobPopupComponent implements OnInit {
  @Input() selectedJobIndex: number;
  @Input() job: Job;

  projectDetails: string;
  yearInputValid: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.projectDetails = this.job.projects.join('\n');
  }

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

  closePopup() {
    this.parseProjectDetails();
    this.activeModal.close(this.job);
  }

  parseProjectDetails() {
    this.job.projects = this.projectDetails.split('\n');
    this.job.projects = this.job.projects.filter((project) => project.length);
  }
}
