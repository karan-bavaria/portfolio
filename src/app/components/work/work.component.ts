import { Component } from '@angular/core';
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
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  iconList = [
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
  ];
}
