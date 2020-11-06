import { Component, Input, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Education, PersonalInfo } from 'src/app/models/portfolio.model';
import { DataService } from 'src/app/data/data.service';
import { EducationPopupComponent } from './education-popup/education-popup.component';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent implements OnInit {
  @Input() editMode: boolean;

  collapsed: boolean;
  faChevronDown = faChevronDown;
  show = false;
  educationTimelineChanged: boolean;

  constructor(
    private modalService: NgbModal,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.editMode) {
      this.personalInfo = { ...this.dataService.userData.personalInfo };
      this.educationTimeline = [...this.personalInfo.educationTimeline];
      this.collapsed = false;
      this.educationTimelineChanged = false;
    }
  }

  faPlusSquare = faPlusSquare;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  selectedEducationIndex: number = null;
  educationDetailsMissing: boolean = false;

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
      backdrop: 'static',
      keyboard: false,
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
    this.educationTimelineChanged = true;
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
    this.educationTimelineChanged = true;
    this.educationTimeline.splice(selectedEducationIndex, 1);
    this.educationDetailsMissing = this.educationTimeline.length === 0;
  }

  savePersonalInfo() {
    this.personalInfo.educationTimeline = [...this.educationTimeline];
    this.dataService.setPersonalInfo(this.personalInfo);

    if (this.editMode) {
      this.show = true;
      setTimeout(() => (this.show = false), 3000);
      return;
    }
    this.router.navigate(['/forms', { outlets: { forms: 'intro' } }]);
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

  disableButton(personalInfoForm) {
    if (personalInfoForm.invalid || !this.educationTimeline.length) return true;
    if (this.educationTimelineChanged) return false;
    if (!personalInfoForm.dirty) return true;
    return false;
  }
}
