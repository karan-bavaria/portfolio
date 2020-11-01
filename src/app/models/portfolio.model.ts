export interface Education {
  course: string;
  institution: string;
  city: string;
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

export interface UserData {
  personalInfo: PersonalInfo;
}
