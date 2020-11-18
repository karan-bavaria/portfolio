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
    introductionInfo: null,
    personalInfo: null,
    workInfo: null,
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

  updateStepCount(userHasWorkExperience) {
    if (userHasWorkExperience) {
      this.skipWorkForm = false;
      this.skipWorkFormSubject.next(false);
    } else {
      this.skipWorkForm = true;
      this.skipWorkFormSubject.next(true);
    }
  }

  reset() {
    this.isPersonalDataSaved = false;
    this.isWorkInfoSaved = false;
    this.isIntroSaved = false;
    this._userData = {
      introductionInfo: null,
      personalInfo: null,
      workInfo: null,
    };
  }
}
