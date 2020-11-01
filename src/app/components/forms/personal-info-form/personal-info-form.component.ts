import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  @ViewChild('content')
  private content: TemplateRef<any>;

  faPlusSquare = faPlusSquare;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  collapsed = true;
  selectedEducationIndex = null;

  education = {
    course: '',
    institution: '',
    city: '',
    graduationYear: null,
    result: null,
  };

  educationTimeline = [
    {
      course: 'B.E in computer science',
      institution: '',
      city: '',
      graduationYear: 2019,
      result: null,
    },
    {
      course: 'HSC in science',
      institution: '',
      city: '',
      graduationYear: 2015,
      result: null,
    },
    {
      course: 'SSC in CBSE',
      institution: '',
      city: '',
      graduationYear: 2013,
      result: null,
    },
  ];

  editSelectedEducation(selectedEducationIndex) {
    this.selectedEducationIndex = selectedEducationIndex;
    this.education = { ...this.educationTimeline[selectedEducationIndex] };
    this.open(this.content);
  }

  deleteSelectedEducation(selectedEducationIndex) {
    this.educationTimeline.splice(selectedEducationIndex, 1);
  }

  open(content) {
    this.modalService.open(content, { centered: true }).result.then(
      () => {
        if (this.selectedEducationIndex) {
          this.educationTimeline.splice(
            this.selectedEducationIndex,
            1,
            this.education
          );
          this.selectedEducationIndex = null;
        } else {
          this.educationTimeline.unshift(this.education);
        }
        this.resetEducationDetails();
      },
      () => {
        this.selectedEducationIndex = null;
        this.resetEducationDetails();
      }
    );
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
}
