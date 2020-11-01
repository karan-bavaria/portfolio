import { Component } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Education, PersonalInfo } from 'src/app/models/portfolio.model';
import { DataService } from 'src/app/data/data.service';
import { EducationPopupComponent } from './education-popup/education-popup.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent {
  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  faPlusSquare = faPlusSquare;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  selectedEducationIndex: number = null;
  educationDetailsMissing: Boolean = false;

  personalInfo: PersonalInfo = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    contact: null,
    educationTimeline: [],
  };

  education: Education = {
    course: '',
    institution: '',
    city: '',
    graduationYear: null,
    result: null,
  };

  educationTimeline: Education[] = [];

  openEducationPopup() {
    const modalRef = this.modalService.open(EducationPopupComponent, {
      centered: true,
    });
    modalRef.componentInstance.selectedEducationIndex = this.selectedEducationIndex;
    modalRef.componentInstance.education = { ...this.education };

    modalRef.result.then(
      (education: Education) => {
        this.education = { ...education };
        this.editOrAddEducationDetails();
        this.resetEducationDetails();
        this.educationDetailsMissing = this.educationTimeline.length === 0;
      },
      () => {
        this.selectedEducationIndex = null;
        this.resetEducationDetails();
        this.educationDetailsMissing = this.educationTimeline.length === 0;
      }
    );
  }

  editOrAddEducationDetails() {
    if (this.selectedEducationIndex !== null) {
      this.educationTimeline.splice(
        this.selectedEducationIndex,
        1,
        this.education
      );
      this.selectedEducationIndex = null;
    } else {
      this.educationTimeline.unshift(this.education);
    }
  }

  editSelectedEducation(selectedEducationIndex) {
    this.selectedEducationIndex = selectedEducationIndex;
    this.education = { ...this.educationTimeline[selectedEducationIndex] };
    this.openEducationPopup();
  }

  deleteSelectedEducation(selectedEducationIndex) {
    this.educationTimeline.splice(selectedEducationIndex, 1);
    this.educationDetailsMissing = this.educationTimeline.length === 0;
  }

  savePersonalInfo() {
    this.personalInfo.educationTimeline = [...this.educationTimeline];
    this.dataService.setPersonalInfo(this.personalInfo);
  }

  resetEducationDetails() {
    this.education = {
      course: '',
      institution: '',
      city: '',
      graduationYear: null,
      result: null,
    };
  }

  validateTextInput(input: NgModel): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }
}
