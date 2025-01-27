export interface StudentApplicationForm {
  // Personal Information
  firstName: string;
  lastName: string;
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
  postalCode: string;
  stateProvince: string;
  city: string;

  // Parent Information
  // father
  parentInfoFatherFirstName: string;
  parentInfoFatherLastName: string;
  parentInfoFatherPhoneNumber: string;
  parentInfoFatherEmailAddress: string;
  parentInfoFatherOccupation: string;
  //  mother
  parentInfoMotherFirstName: string;
  parentInfoMotherLastName: string;
  parentInfoMotherPhoneNumber: string;
  parentInfoMotherEmailAddress: string;
  parentInfoMotherOccupation: string;

  // Emergency Contact Details
  emergencyContactFirstName: string;
  emergencyContactLastName: string;
  emergencyContactRelationship: string;
  emergencyContactPhoneNumber: string;
  emergencyContactEmailAddress: string;
  emergencyContactOccupation: string;

  // Additional Information
  hasEnglishCertificate: string;
  howDidYouKnowAboutUs: string;
  fullNameOfAgent: string;
  ifOtherExplain: string;
  accommodationProvided: string;
  hasDisabilityOrMedicalCondition: string;
  nameOfDisabilityOrMedicalCondition: string;

  // @fix: this is going to use the required checkbox field to prompt the user
  // Declaration
  //   applicantSignatureAndDate: string;
  //   parentGuardianSignatureAndDate: string;
}

export const studentApplicationInitialValues: StudentApplicationForm = {
  // Personal Information
  firstName: "",
  lastName: "",
  otherName: "",
  passportNumber: "",
  race: "",
  dateOfBirth: "",
  placeOfBirth: "",
  nationality: "",
  religion: "",
  maritalStatus: "",
  gender: "",
  currentAddress: "",
  telephoneNumber: "",
  emailAddress: "",
  postalCode: "",
  stateProvince: "",
  city: "",

  // Parent Information
  // father
  parentInfoFatherFirstName: "",
  parentInfoFatherLastName: "",
  parentInfoFatherPhoneNumber: "",
  parentInfoFatherEmailAddress: "",
  parentInfoFatherOccupation: "",
  // mother
  parentInfoMotherFirstName: "",
  parentInfoMotherLastName: "",
  parentInfoMotherPhoneNumber: "",
  parentInfoMotherEmailAddress: "",
  parentInfoMotherOccupation: "",

  // Emergency Contact Details
  emergencyContactFirstName: "",
  emergencyContactLastName: "",
  emergencyContactRelationship: "",
  emergencyContactPhoneNumber: "",
  emergencyContactEmailAddress: "",
  emergencyContactOccupation: "",

  // Additional Information
  hasEnglishCertificate: "",

  howDidYouKnowAboutUs: "",
  fullNameOfAgent: "",
  ifOtherExplain: "",
  accommodationProvided: "",
  hasDisabilityOrMedicalCondition: "",
  nameOfDisabilityOrMedicalCondition: "",

  //   // Declaration
  //   applicantSignatureAndDate: "",
  //   parentGuardianSignatureAndDate: "",
};
