import { Injectable } from '@angular/core';
import { PersonalInfo, UserData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  userData: UserData = {
    personalInfo: null,
  };

  setPersonalInfo(personalInfo: PersonalInfo) {
    this.userData.personalInfo = { ...personalInfo };
  }
}
