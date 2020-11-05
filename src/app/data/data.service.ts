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
      informationCards: [
        {
          cardHeader: 'stuff',
          cardDetails: `Only coding front-end and back-end is not the whole picture, you also have care about other things needed in a successful web application project:

          Good planning of UI and thinking how it affects the UX. Reliable client communication & client feedback.
          Following Agile development process. Communicating with required stack holders.
          Consistency in Design & Typography. Using proper Linting & Formatting for code base.
          Working with Git and its features. Creating MRs, code reviews etc.
          Working/Communicating & Growing together with team. Understanding what your role is and what you sign up for.`,
        },
        {
          cardHeader: 'stuff',
          cardDetails: `Only coding front-end and back-end is not the whole picture, you also have care about other things needed in a successful web application project:

          Good planning of UI and thinking how it affects the UX. Reliable client communication & client feedback.
          Following Agile development process. Communicating with required stack holders.
          Consistency in Design & Typography. Using proper Linting & Formatting for code base.
          Working with Git and its features. Creating MRs, code reviews etc.
          Working/Communicating & Growing together with team. Understanding what your role is and what you sign up for.`,
        },
      ],
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
          endingYear: null,
          onGoing: true,
          companyName: 'Paul Mason Consulting',
          jobTitle: 'Full stack developer',
          projects: ['hello', 'this is my project'],
        },
        {
          startingYear: 2015,
          endingYear: null,
          onGoing: true,
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
