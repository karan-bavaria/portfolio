import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Education {
  course: string;
  institution: string;
  city?: string;
  graduationYear: number;
  result: number;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  contact: number;
  educationTimeline: Education[];
}

export interface IntroductionInfo {
  introduction: string;
  coverLetter: string;
}

export interface Job {
  startingYear: number;
  endingYear: number;
  onGoing?: boolean;
  companyName: string;
  jobTitle: string;
  projects: string[];
}

export interface Technology {
  name: string;
  icon: IconDefinition;
  isSelected: boolean;
}

export interface Card {
  cardHeader: string;
  cardDetails: string;
}

export interface WorkInfo {
  jobHistory: Job[];
  technologyStack: Technology[];
  informationCards: Card[];
}

export interface UserData {
  personalInfo: PersonalInfo;
  introductionInfo: IntroductionInfo;
  workInfo: WorkInfo;
}
