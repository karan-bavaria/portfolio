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
  selector: 'app-icon-stack',
  templateUrl: './icon-stack.component.html',
  styleUrls: ['./icon-stack.component.scss'],
})
export class IconStackComponent {
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
