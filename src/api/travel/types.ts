import { Application, applicationTypes } from "../../types";

export type FileUpload = Omit<
  File,
  | "arrayBuffer"
  | "lastModified"
  | "slice"
  | "stream"
  | "text"
  | "webkitRelativePath"
  | "bytes"
> & {
  url: string;
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
  visaApplication: string;
  scannedPassport: string;
  visaTermsAndConditionsDocument: string;
}

// Define a specific application response interface
export interface TravelApplicationResponse
  extends Application<TravelApplicationForm, applicationTypes> {
  id: string;
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
  visaApplication: "",
  scannedPassport: "",
  visaTermsAndConditionsDocument: "",
};

export const travelApplicationSections = [
  {
    title: "Personal Information",
    fields: [
      { label: "Country of Application", key: "countryOfApplication" },
      { label: "Surname", key: "surname" },
      { label: "First Name", key: "firstName" },
      { label: "Middle Name", key: "middleName" },
      { label: "Gender", key: "gender" },
      { label: "Marital Status", key: "maritalStatus" },
      { label: "Date of Birth", key: "dateOfBirth" },
      { label: "Place of Birth", key: "placeOfBirth" },
      { label: "Country of Origin", key: "countryOfOrigin" },
      { label: "Other Nationality", key: "otherNationality" },
      { label: "Permanent Resident Country", key: "permanentResidentCountry" },
      { label: "National ID Number", key: "nationalIdNumber" },
      { label: "Home Address", key: "homeAddress" },
      { label: "City", key: "city" },
      { label: "State/Province", key: "stateProvince" },
      { label: "Postal Code", key: "postalCode" },
      { label: "Country", key: "country" },
      { label: "Primary Phone Number", key: "primaryPhoneNumber" },
      { label: "Secondary Phone Number", key: "secondaryPhoneNumber" },
      { label: "Work Phone Number", key: "workPhoneNumber" },
      { label: "Email Address", key: "emailAddress" },
      { label: "Passport Type", key: "passportType" },
      { label: "Passport Number", key: "passportNumber" },
      { label: "Passport Booklet Count", key: "passportBookletCount" },
      { label: "Passport Issuing Country", key: "passportIssuingCountry" },
      { label: "Passport Issuing City", key: "passportIssuingCity" },
      {
        label: "Passport Issuing State/Province",
        key: "passportIssuingStateProvince",
      },
      {
        label: "Passport Issuing Country Region",
        key: "passportIssuingCountryRegion",
      },
      { label: "Passport Issuance Date", key: "passportIssuanceDate" },
      { label: "Passport Expiration Date", key: "passportExpirationDate" },
      { label: "Lost or Stolen Passport", key: "lostOrStolenPassport" },
    ],
  },

  {
    title: "Travel Information",
    fields: [
      { label: "Intended Country of Visit", key: "intendedCountryOfVisit" },
      { label: "Purpose of Trip", key: "purposeOfTrip" },
      { label: "Intended Date of Arrival", key: "intendedDateOfArrival" },
      { label: "Intended Length of Stay", key: "intendedLengthOfStay" },
      { label: "Address During Stay", key: "addressDuringStay" },
      { label: "City", key: "addressCity" },
      { label: "State/Province", key: "addressStateProvince" },
      { label: "Postal Code", key: "addressPostalCode" },
      { label: "Trip Payer", key: "tripPayer" },
      { label: "Traveling Companions", key: "travelingCompanions" },
      { label: "Previous Travel Abroad", key: "previousTravelAbroad" },
      { label: "Previous Visa Issued", key: "previousVisaIssued" },
      { label: "Visa Refusal Details", key: "visaRefusalDetails" },
    ],
  },

  {
    title: "Contact Information",
    fields: [
      { label: "Contact Person Name", key: "contactPersonName" },
      { label: "Contact Organization", key: "contactOrganization" },
      { label: "Contact Relationship", key: "contactRelationship" },
      { label: "Contact Address", key: "contactAddress" },
      { label: "Contact Phone Number", key: "contactPhoneNumber" },
      { label: "Contact Email Address", key: "contactEmailAddress" },
    ],
  },

  {
    title: "Family Information",
    fields: [
      { label: "Father Surname", key: "fatherSurname" },
      { label: "Father Given Names", key: "fatherGivenNames" },
      { label: "Father Date of Birth", key: "fatherDateOfBirth" },
      { label: "Father in Visit Country", key: "fatherInVisitCountry" },
      { label: "Mother Surname", key: "motherSurname" },
      { label: "Mother Given Names", key: "motherGivenNames" },
      { label: "Mother Date of Birth", key: "motherDateOfBirth" },
      { label: "Mother in Visit Country", key: "motherInVisitCountry" },
      {
        label: "Immediate Relatives in Visit Country",
        key: "immediateRelativesInVisitCountry",
      },
      { label: "Relative Name", key: "relativeName" },
      { label: "Relative Relationship", key: "relativeRelationship" },
      { label: "Relative Marital Status", key: "relativeMaritalStatus" },
    ],
  },

  {
    title: "Work/Education/Training Information",
    fields: [
      {
        label: "Current Employer/School Name",
        key: "currentEmployerOrSchoolName",
      },
      { label: "Address", key: "currentEmployerOrSchoolAddress" },
      { label: "City", key: "currentEmployerOrSchoolCity" },
      { label: "State/Province", key: "currentEmployerOrSchoolStateProvince" },
      { label: "Postal Code", key: "currentEmployerOrSchoolPostalCode" },
      { label: "Phone Number", key: "currentEmployerOrSchoolPhoneNumber" },
      { label: "Monthly Salary", key: "monthlySalary" },
      { label: "Job Duties Description", key: "jobDutiesDescription" },
      { label: "Previously Employed", key: "previouslyEmployed" },
      { label: "Education Above Secondary", key: "educationAboveSecondary" },
      {
        label: "Educational Institution Name",
        key: "educationalInstitutionName",
      },
      { label: "Address", key: "educationalInstitutionAddress" },
      { label: "City", key: "educationalInstitutionCity" },
      { label: "State/Province", key: "educationalInstitutionStateProvince" },
      { label: "Country", key: "educationalInstitutionCountry" },
      { label: "Course of Study", key: "courseOfStudy" },
      { label: "Date of Attendance Start", key: "dateOfAttendanceStart" },
      { label: "Date of Attendance End", key: "dateOfAttendanceEnd" },
      {
        label: "Other Institutions Attended",
        key: "otherInstitutionsAttended",
      },
      { label: "Clan/Tribe", key: "clanOrTribe" },
      { label: "Languages Spoken", key: "languagesSpoken" },
      {
        label: "Travel History Last 5 Years",
        key: "travelHistoryLastFiveYears",
      },
      { label: "Professional Organizations", key: "professionalOrganizations" },
    ],
  },

  {
    title: "Attachments",
    fields: [
      { label: "Visa Application", key: "visaApplication" },
      { label: "Scanned Passport", key: "scannedPassport" },
      {
        label: "Visa Terms and Conditions",
        key: "visaTermsAndConditionsDocument",
      },
    ],
  },
];

export const mockTravelApplication: TravelApplicationForm = {
  // Personal Information
  countryOfApplication: "United States",
  surname: "Smith",
  firstName: "Emma",
  middleName: "Grace",
  gender: "Female",
  maritalStatus: "Single",
  dateOfBirth: "1995-08-15",
  placeOfBirth: "Los Angeles, CA",
  countryOfOrigin: "United States",
  otherNationality: "None",
  permanentResidentCountry: "United States",
  nationalIdNumber: "123-45-6789",
  homeAddress: "123 Maple Street",
  city: "Los Angeles",
  stateProvince: "CA",
  postalCode: "90001",
  country: "United States",
  primaryPhoneNumber: "+1-213-555-0198",
  secondaryPhoneNumber: "+1-310-555-0167",
  workPhoneNumber: "+1-424-555-0123",
  emailAddress: "emma.smith@example.com",
  passportType: "Regular",
  passportNumber: "A12345678",
  passportBookletCount: "1",
  passportIssuingCountry: "United States",
  passportIssuingCity: "Los Angeles",
  passportIssuingStateProvince: "CA",
  passportIssuingCountryRegion: "West",
  passportIssuanceDate: "2020-01-15",
  passportExpirationDate: "2030-01-15",
  lostOrStolenPassport: "No",

  // Travel Information
  otherSpecification: "",
  intendedCountryOfVisit: "France",
  purposeOfTrip: "Business Conference",
  intendedDateOfArrival: "2024-09-01",
  intendedLengthOfStay: "10 days",
  addressDuringStay: "456 Rue de Rivoli",
  addressCity: "Paris",
  addressStateProvince: "Île-de-France",
  addressPostalCode: "75001",
  tripPayer: "Company",
  travelingCompanions: "No",
  previousTravelAbroad: "Yes",
  previousVisaIssued: "Yes",
  visaRefusalDetails: "None",

  // Contact Information
  contactPersonName: "Jean Dupont",
  contactOrganization: "Tech Conference Ltd",
  contactRelationship: "Conference Organizer",
  contactAddress: "789 Boulevard Saint-Germain",
  contactPhoneNumber: "+33-1-2345-6789",
  contactEmailAddress: "jean.dupont@techconf.fr",

  // Family Information
  fatherSurname: "Smith",
  fatherGivenNames: "Michael James",
  fatherDateOfBirth: "1965-03-20",
  fatherInVisitCountry: "No",
  motherSurname: "Johnson",
  motherGivenNames: "Sarah Marie",
  motherDateOfBirth: "1970-07-12",
  motherInVisitCountry: "No",
  immediateRelativesInVisitCountry: "No",
  relativeName: "None",
  relativeRelationship: "None",
  relativeMaritalStatus: "None",

  // Work/Education/Training Information
  currentEmployerOrSchoolName: "Tech Innovators Inc",
  currentEmployerOrSchoolAddress: "789 Silicon Valley Blvd",
  currentEmployerOrSchoolCity: "San Francisco",
  currentEmployerOrSchoolStateProvince: "CA",
  currentEmployerOrSchoolPostalCode: "94105",
  currentEmployerOrSchoolPhoneNumber: "+1-415-555-0189",
  monthlySalary: "6500",
  jobDutiesDescription: "Senior Software Engineer",
  previouslyEmployed: "Yes",
  educationAboveSecondary: "Yes",
  educationalInstitutionName: "Stanford University",
  educationalInstitutionAddress: "450 Serra Mall",
  educationalInstitutionCity: "Stanford",
  educationalInstitutionStateProvince: "CA",
  educationalInstitutionCountry: "United States",
  courseOfStudy: "Computer Science",
  dateOfAttendanceStart: "2013-09-01",
  dateOfAttendanceEnd: "2017-06-30",
  otherInstitutionsAttended: "None",
  clanOrTribe: "None",
  languagesSpoken: ["English", "Spanish", "French"],
  travelHistoryLastFiveYears: "Yes",
  professionalOrganizations: "ACM, IEEE",

  // Files to Upload
  visaApplication: "visa_application_esmith.pdf",
  scannedPassport: "passport_esmith_2020.pdf",
  visaTermsAndConditionsDocument: "terms_conditions_signed.pdf",
};

// Note: Fixed the "string" typo from the original interface to "string"
