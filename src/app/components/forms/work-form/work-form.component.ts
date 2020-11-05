import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data/data.service';
import {
  Card,
  Job,
  Technology,
  WorkInfo,
} from 'src/app/models/portfolio.model';
import { JobPopupComponent } from './job-popup/job-popup.component';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { IconsPopupComponent } from './icons-popup/icons-popup.component';
import { CardsPopupComponent } from './cards-popup/cards-popup.component';
import { Router } from '@angular/router';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss'],
})
export class WorkFormComponent implements OnInit {
  @Input() editMode: boolean;

  collapsed: boolean;
  faChevronDown = faChevronDown;
  jobHistory: Job[] = [];
  selectedJobIndex: number;
  selectedCardIndex: number;
  jobDetailsMissing: boolean = false;
  show: boolean;

  faPlusSquare = faPlusSquare;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  jobDetails: Job = {
    startingYear: null,
    endingYear: null,
    jobTitle: '',
    companyName: '',
    projects: [],
  };

  workInfo: WorkInfo = {
    jobHistory: [],
    technologyStack: [],
    informationCards: [],
  };

  constructor(
    private modalService: NgbModal,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.editMode) {
      this.workInfo = { ...this.dataService.userData.workInfo };
      this.jobHistory = [...this.workInfo.jobHistory];
      this.collapsed = true;
    }
  }

  openJobPopup() {
    const modalRef = this.modalService.open(JobPopupComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.selectedJobIndex = this.selectedJobIndex;
    modalRef.componentInstance.job = { ...this.jobDetails };

    modalRef.result.then(
      (jobDetails: Job) => {
        this.jobDetails = { ...jobDetails };
        this.editOrAddJobDetails();
        this.resetJobDetails();
        this.jobDetailsMissing = this.jobHistory.length === 0;
      },
      () => {
        this.selectedJobIndex = null;
        this.resetJobDetails();
        this.jobDetailsMissing = this.jobHistory.length === 0;
      }
    );
  }

  editOrAddJobDetails() {
    if (this.selectedJobIndex !== null) {
      this.jobHistory.splice(this.selectedJobIndex, 1, this.jobDetails);
      this.selectedJobIndex = null;
    } else {
      this.jobHistory.unshift(this.jobDetails);
    }
  }

  editSelectedJob(selectedJobIndex) {
    this.selectedJobIndex = selectedJobIndex;
    this.jobDetails = { ...this.jobHistory[selectedJobIndex] };
    this.openJobPopup();
  }

  deleteSelectedJob(selectedJobIndex) {
    this.jobHistory.splice(selectedJobIndex, 1);
    this.jobDetailsMissing = this.jobHistory.length === 0;
  }

  resetJobDetails() {
    this.jobDetails = {
      startingYear: null,
      endingYear: null,
      jobTitle: '',
      companyName: '',
      projects: [],
    };
  }

  openIconsPopup() {
    const modalRef = this.modalService.open(IconsPopupComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    modalRef.componentInstance.selectedTechnologyStack = [
      ...this.workInfo.technologyStack,
    ];

    modalRef.result.then((technologyStack: Technology[]) => {
      this.workInfo.technologyStack = [...technologyStack];
    });
  }

  openCardsPopup() {
    const modalRef = this.modalService.open(CardsPopupComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    if (this.selectedCardIndex == null) {
      modalRef.componentInstance.selectedCardIndex = null;
      modalRef.componentInstance.selectedCard = {
        cardDetails: '',
        cardHeader: '',
      } as Card;
    } else {
      modalRef.componentInstance.selectedCard = {
        ...this.workInfo.informationCards[this.selectedCardIndex],
      };
      modalRef.componentInstance.selectedCardIndex = this.selectedCardIndex;
    }

    modalRef.result.then(
      (informationCard: Card) => {
        if (this.selectedCardIndex !== null) {
          this.workInfo.informationCards.splice(
            this.selectedCardIndex,
            1,
            informationCard
          );
          this.selectedCardIndex = null;
        } else {
          this.workInfo.informationCards.unshift(informationCard);
        }
      },
      () => {
        this.selectedCardIndex = null;
      }
    );
  }

  editSelectedCard(cardIndex) {
    this.selectedCardIndex = cardIndex;
    this.openCardsPopup();
  }

  deleteSelectedCard(cardIndex) {
    this.workInfo.informationCards.splice(cardIndex, 1);
    this.selectedCardIndex = null;
  }

  saveWorkData() {
    this.workInfo.jobHistory = [...this.jobHistory];
    this.dataService.setWorkInfo(this.workInfo);

    if (this.editMode) {
      this.show = true;
      setTimeout(() => (this.show = false), 3000);
      return;
    }
    this.router.navigate(['/portfolio']);
  }
}
