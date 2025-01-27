import { Application, applicationTypes } from "../../types";

export interface StudentApplicationForm {
  // Personal Information
  surname: string;
  givenName: string;
  otherName: string;
  passportNumber: string;
  race: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  gender: string;
  currentAddress: string;
  telephoneNumber: string;
  emailAddress: string;
  postcode: string;

  // Parent Information
  // father
  fatherSurname: string;
  fatherGivenName: string;
  fatherOtherName: string;
  fathersPhoneNumber: string;
  fathersEmailAddress: string;
  fathersOccupation: string;
  //  mother
  motherSurname: string;
  motherGivenName: string;
  motherOtherName: string;
  mothersPhoneNumber: string;
  mothersEmailAddress: string;
  mothersOccupation: string;

  // Emergency Contact Details
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhoneNumber: string;
  emergencyContactEmailAddress: string;
  emergencyContactOccupation: string;

  // Additional Information
  hasEnglishCertificate: boolean;
  englishCertificateExam: string | null;
  howDidYouKnowAboutUs: string;
  fullNameOfAgent: string | null;
  accommodationProvided: boolean;
  hasDisabilityOrMedicalCondition: boolean;
  nameOfDisabilityOrMedicalCondition: string | null;

  // Declaration
  applicantSignature: string;
  applicantSignatureDate: string;
  parentGuardianSignature: string;
  parentGuardianSignatureDate: string;
}

export interface StudentApplicationResponse
  extends Application<StudentApplicationForm, applicationTypes.study> {
  id: string;
}
