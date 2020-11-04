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
  }

  setIntroductionInfo(introductionInfo: IntroductionInfo) {
    this._userData.introductionInfo = { ...introductionInfo };
  }

  setWorkInfo(workInfo: WorkInfo) {
    this._userData.workInfo = { ...workInfo };
  }
}
