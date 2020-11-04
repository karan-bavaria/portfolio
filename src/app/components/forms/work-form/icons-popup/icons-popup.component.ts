import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faAngular,
  faNode,
  faGithub,
  faGit,
  faGitlab,
  faCss3,
  faHtml5,
  faJs,
  faSass,
  faNpm,
  faReact,
  faAws,
  faVuejs,
  faLess,
} from '@fortawesome/free-brands-svg-icons';
import { Technology } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-icons-popup',
  templateUrl: './icons-popup.component.html',
  styleUrls: ['./icons-popup.component.scss'],
})
export class IconsPopupComponent implements OnInit {
  @Input() selectedTechnologyStack: Technology[];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.preSelectOptionsIfInEditMode();
  }

  preSelectOptionsIfInEditMode() {
    let index;
    if (this.selectedTechnologyStack.length) {
      this.selectedTechnologyStack.forEach((selectedTech) => {
        index = this.technologyStack.findIndex(
          (tech) => tech.name === selectedTech.name
        );
        this.technologyStack[index].isSelected = true;
      });
    }
  }

  closePopup() {
    this.activeModal.close(
      this.technologyStack.filter((technology) => technology.isSelected)
    );
  }

  technologyStack: Technology[] = [
    {
      icon: faAngular,
      name: 'Angular',
      isSelected: false,
    },
    {
      icon: faNode,
      name: 'Node JS',
      isSelected: false,
    },
    {
      icon: faGithub,
      name: 'Github',
      isSelected: false,
    },
    {
      icon: faGit,
      name: 'Git',
      isSelected: false,
    },
    {
      icon: faGitlab,
      name: 'Gitlab',
      isSelected: false,
    },

    {
      icon: faCss3,
      name: 'CSS 3',
      isSelected: false,
    },
    {
      icon: faHtml5,
      name: 'HTML 5',
      isSelected: false,
    },
    {
      icon: faJs,
      name: 'Javascript',
      isSelected: false,
    },
    {
      icon: faSass,
      name: 'SASS',
      isSelected: false,
    },
    {
      icon: faNpm,
      name: 'Npm',
      isSelected: false,
    },
    {
      icon: faReact,
      name: 'React',
      isSelected: false,
    },
    {
      icon: faAws,
      name: 'AWS',
      isSelected: false,
    },
    {
      icon: faVuejs,
      name: 'VueJs',
      isSelected: false,
    },
    {
      icon: faLess,
      name: 'Less',
      isSelected: false,
    },
  ];
}
