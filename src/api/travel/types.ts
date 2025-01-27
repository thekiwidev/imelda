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

  // @deprecated: no longer needed as I a not working with files
  // // files to upload
  // visaApplication: string;
  // scannedPassport: string;
  // visaTermsAndConditionsDocument: string;
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

  // @deprecated: no longer needed as I a not working with files
  // // files to upload
  // visaApplication: "",
  // scannedPassport: "",
  // visaTermsAndConditionsDocument: "",
};
