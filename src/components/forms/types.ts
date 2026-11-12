// Ported unchanged from the previous site (src/api/students/types.ts and src/api/travel/types.ts).
// The field names are the contract with the mailer API: do not rename them.

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

export interface TravelApplicationForm {
  // Personal Information
  countryOfApplication: string;
  surname: string;
  firstName: string;
  middleName: string;
  gender: string;
  maritalStatus: string;
  dateOfBirth: string;
  placeOfBirth: string;
  countryOfOrigin: string;
  otherNationality: string;
  permanentResidentCountry: string;
  nationalIdNumber: string;
  homeAddress: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  workPhoneNumber: string;
  emailAddress: string;
  passportType: string;
  passportNumber: string;
  passportBookletCount: string;
  passportIssuingCountry: string;
  passportIssuingCity: string;
  passportIssuingStateProvince: string;
  passportIssuingCountryRegion: string;
  passportIssuanceDate: string;
  passportExpirationDate: string;
  lostOrStolenPassport: "Yes" | "No" | "";

  // Travel Information
  intendedCountryOfVisit: string;
  purposeOfTrip: string;
  intendedDateOfArrival: string;
  intendedLengthOfStay: string;
  addressDuringStay: string;
  addressCity: string;
  addressStateProvince: string;
  addressPostalCode: string;
  tripPayer: string;
  travelingCompanions: "Yes" | "No" | "";
  previousTravelAbroad: "Yes" | "No" | "";
  previousVisaIssued: "Yes" | "No" | "";
  visaRefusalDetails: string;

  // Contact Information
  contactPersonName: string;
  contactOrganization: string;
  contactRelationship: string;
  contactAddress: string;
  contactPhoneNumber: string;
  contactEmailAddress: string;

  // Family Information
  fatherSurname: string;
  fatherGivenNames: string;
  fatherDateOfBirth: string;
  fatherInVisitCountry: "Yes" | "No" | "";
  motherSurname: string;
  motherGivenNames: string;
  motherDateOfBirth: string;
  motherInVisitCountry: "Yes" | "No" | "";
  immediateRelativesInVisitCountry: "Yes" | "No" | "";
  relativeName: string;
  relativeRelationship: string;
  relativeMaritalStatus: string;

  // Work/Education/Training Information
  otherSpecification: string;
  currentEmployerOrSchoolName: string;
  currentEmployerOrSchoolAddress: string;
  currentEmployerOrSchoolCity: string;
  currentEmployerOrSchoolStateProvince: string;
  currentEmployerOrSchoolPostalCode: string;
  currentEmployerOrSchoolPhoneNumber: string;
  monthlySalary: string;
  jobDutiesDescription: string;
  previouslyEmployed: "Yes" | "No" | "";
  educationAboveSecondary: "Yes" | "No" | "";
  educationalInstitutionName: string;
  educationalInstitutionAddress: string;
  educationalInstitutionCity: string;
  educationalInstitutionStateProvince: string;
  educationalInstitutionCountry: string;
  courseOfStudy: string;
  dateOfAttendanceStart: string;
  dateOfAttendanceEnd: string;
  otherInstitutionsAttended: string;
  clanOrTribe: string;
  languagesSpoken: string[];
  travelHistoryLastFiveYears: "Yes" | "No" | "";
  professionalOrganizations: string;

  // files to upload
  visaApplication: File | null;
  scannedPassport: File | null;
  visaTermsAndConditionsDocument: File | null;
}

export const travelApplicationInitialValues: TravelApplicationForm = {
  // Personal Information
  countryOfApplication: "",
  surname: "",
  firstName: "",
  middleName: "",
  gender: "",
  maritalStatus: "",
  dateOfBirth: "",
  placeOfBirth: "",
  countryOfOrigin: "",
  otherNationality: "",
  permanentResidentCountry: "",
  nationalIdNumber: "",
  homeAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  primaryPhoneNumber: "",
  secondaryPhoneNumber: "",
  workPhoneNumber: "",
  emailAddress: "",
  passportType: "",
  passportNumber: "",
  passportBookletCount: "",
  passportIssuingCountry: "",
  passportIssuingCity: "",
  passportIssuingStateProvince: "",
  passportIssuingCountryRegion: "",
  passportIssuanceDate: "",
  passportExpirationDate: "",
  lostOrStolenPassport: "",

  // Travel Information
  intendedCountryOfVisit: "",
  purposeOfTrip: "",
  intendedDateOfArrival: "",
  intendedLengthOfStay: "",
  addressDuringStay: "",
  addressCity: "",
  addressStateProvince: "",
  addressPostalCode: "",
  tripPayer: "",
  travelingCompanions: "",
  previousTravelAbroad: "",
  previousVisaIssued: "",
  visaRefusalDetails: "",

  // Contact Information
  contactPersonName: "",
  contactOrganization: "",
  contactRelationship: "",
  contactAddress: "",
  contactPhoneNumber: "",
  contactEmailAddress: "",

  // Family Information
  fatherSurname: "",
  fatherGivenNames: "",
  fatherDateOfBirth: "",
  fatherInVisitCountry: "",
  motherSurname: "",
  motherGivenNames: "",
  motherDateOfBirth: "",
  motherInVisitCountry: "",
  immediateRelativesInVisitCountry: "",
  relativeName: "",
  relativeRelationship: "",
  relativeMaritalStatus: "",

  // Work/Education/Training Information
  otherSpecification: "",
  currentEmployerOrSchoolName: "",
  currentEmployerOrSchoolAddress: "",
  currentEmployerOrSchoolCity: "",
  currentEmployerOrSchoolStateProvince: "",
  currentEmployerOrSchoolPostalCode: "",
  currentEmployerOrSchoolPhoneNumber: "",
  monthlySalary: "",
  jobDutiesDescription: "",
  previouslyEmployed: "",
  educationAboveSecondary: "",
  educationalInstitutionName: "",
  educationalInstitutionAddress: "",
  educationalInstitutionCity: "",
  educationalInstitutionStateProvince: "",
  educationalInstitutionCountry: "",
  courseOfStudy: "",
  dateOfAttendanceStart: "",
  dateOfAttendanceEnd: "",
  otherInstitutionsAttended: "",
  clanOrTribe: "",
  languagesSpoken: [],
  travelHistoryLastFiveYears: "",
  professionalOrganizations: "",

  // files to upload
  visaApplication: null,
  scannedPassport: null,
  visaTermsAndConditionsDocument: null,
};
