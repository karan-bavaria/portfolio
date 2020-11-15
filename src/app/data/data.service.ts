import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  IntroductionInfo,
  PersonalInfo,
  UserData,
  WorkInfo,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private skipWorkFormSubject = new BehaviorSubject<Boolean>(false);
  public skipWorkFormObservable = this.skipWorkFormSubject.asObservable();

  public isPersonalDataSaved: boolean = false;
  public isIntroSaved: boolean = false;
  public isWorkInfoSaved: boolean = false;
  public skipWorkForm: boolean = false;

  private _userData: UserData = {
    personalInfo: {
      firstName: 'Karan',
      lastName: 'Bavaria',
      email: 'kjfhkjznfa@klasfn',
      hasJobExperience: false,
      jobTitle: 'fulkjsdnf kjsnfjklds',
      educationTimeline: [
        {
          course: 'sdklfnldsf',
          graduationYear: 2020,
          institution: 'aklsfnalksfn',
          result: '10.0',
        },
      ],
    },
    introductionInfo: {
      coverLetter:
        '<p>ksjdhfkshnfkhskjfkj sdkjfklsd sdfn\n\n\nlaskdfjlsakdmf</p>',
      introduction: 'hi i am jklsfaf kljashfa \n\n aksjdlkasd',
    },
    workInfo: null,
  };

  get userData() {
    return this._userData;
  }

  setPersonalInfo(personalInfo: PersonalInfo) {
    this._userData.personalInfo = { ...personalInfo };
    this.skipWorkFormIfUserIsFresher();
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

  skipWorkFormIfUserIsFresher() {
    if (this.userData.personalInfo.hasJobExperience) {
      this.skipWorkForm = false;
    } else {
      this.skipWorkForm = true;
    }
  }

  updateStepCount(userHasWorkExperience) {
    if (userHasWorkExperience) {
      this.skipWorkFormSubject.next(false);
    } else {
      this.skipWorkFormSubject.next(true);
    }
  }

  reset() {
    this.isPersonalDataSaved = false;
    this.isWorkInfoSaved = false;
    this.isIntroSaved = false;
  }
}
