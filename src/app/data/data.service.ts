import { Injectable } from '@angular/core';
import {
  IntroductionInfo,
  PersonalInfo,
  UserData,
  WorkInfo,
} from '../models/portfolio.model';
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

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public isPersonalDataSaved: boolean = false;
  public isIntroSaved: boolean = false;
  public isWorkInfoSaved: boolean = false;

  private _userData: UserData = {
    personalInfo: {
      firstName: 'Karan',
      lastName: 'Bavaria',
      email: 'bavariakaran@gmail.com',
      contact: 9832749878,
      jobTitle: 'Full Stack Web Developer',
      educationTimeline: [
        {
          course: 'B.E in computer science',
          graduationYear: 2015,
          institution: 'Babaria Institutute of technology',
          result: '9.5 CPI',
          city: 'vadodara',
        },
        {
          course: 'B.E in computer science',
          graduationYear: 2015,
          institution: 'Babaria Institutute of technology',
          result: '9.5 CPI',
          city: 'vadodara',
        },
      ],
    },
    introductionInfo: {
      introduction: 'Hi\n I am Full Stack Web \nDeveloper.',
      coverLetter: `I have been developing high quality web applications since 2+ years. I specialize in both FRONTEND and BACKEND technologies.
      My Current technology stack includes Javascript, Typescript, Angular, NodeJS and various other frameworks and libraries related to them`,
    },
    workInfo: {
      informationCards: null,
      jobHistory: [
        {
          startingYear: 2015,
          endingYear: null,
          onGoing: true,
          companyName: 'Paul Mason Consulting',
          jobTitle: 'Full stack developer',
          projects: ['hello', 'this is my project'],
        },
        {
          startingYear: 2015,
          endingYear: 2016,
          companyName: 'Paul Mason Consulting',
          jobTitle: 'Full stack developer',
          projects: ['hello', 'this is my project'],
        },
      ],
      technologyStack: [
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
      ],
    },
  };

  get userData() {
    return this._userData;
  }

  setPersonalInfo(personalInfo: PersonalInfo) {
    this._userData.personalInfo = { ...personalInfo };
    this.isPersonalDataSaved = true;
  }

  setIntroductionInfo(introductionInfo: IntroductionInfo) {
    this._userData.introductionInfo = { ...introductionInfo };
    this.isIntroSaved = true;
  }

  setWorkInfo(workInfo: WorkInfo) {
    this._userData.workInfo = { ...workInfo };
    this.isWorkInfoSaved = true;
  }

  reset() {
    this.isPersonalDataSaved = false;
    this.isWorkInfoSaved = false;
    this.isIntroSaved = false;
  }
}
