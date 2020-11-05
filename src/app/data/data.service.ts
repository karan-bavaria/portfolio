import { Injectable } from '@angular/core';
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

  public isPersonalDataSaved: boolean = false;
  public isIntroSaved: boolean = false;
  public isWorkInfoSaved: boolean = false;

  private _userData: UserData = {
    personalInfo: null,
    introductionInfo: null,
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

  reset() {
    this.isPersonalDataSaved = false;
    this.isWorkInfoSaved = false;
    this.isIntroSaved = false;
  }
}
