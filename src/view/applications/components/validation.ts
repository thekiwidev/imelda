import * as Yup from "yup";
import { TravelApplicationForm } from "../../../api/travel/types";
import { StudentApplicationForm } from "../../../api/students/types";

type SchemaObject<T> = {
  [key in keyof T]: Yup.Schema<unknown>;
};

export const travelApplicationValidationSchema = Yup.object().shape<
  SchemaObject<TravelApplicationForm>
>({
  // Personal Information
  countryOfApplication: Yup.string().required(
    "Country of application is required"
  ),
  surname: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().nullable(), // Optional
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  placeOfBirth: Yup.string().required("Place of birth is required"),
  countryOfOrigin: Yup.string().required("Country of origin is required"),
  otherNationality: Yup.string().nullable(),
  permanentResidentCountry: Yup.string().nullable(),
  nationalIdNumber: Yup.string().nullable(),
  homeAddress: Yup.string().required("Home address is required"),
  city: Yup.string().required("City is required"),
  stateProvince: Yup.string().nullable(),
  postalCode: Yup.string().nullable(),
  country: Yup.string().required("Country is required"),
  primaryPhoneNumber: Yup.string()
    .required("Primary phone number is required")
    .matches(/^\+?\d+$/, "Phone number must be valid"),
  secondaryPhoneNumber: Yup.string().nullable(),
  workPhoneNumber: Yup.string().nullable(),
  emailAddress: Yup.string()
    .required("Email address is required")
    .email("Email must be valid"),
  passportType: Yup.string().required("Passport type is required"),
  passportNumber: Yup.string().required("Passport number is required"),
  passportBookletCount: Yup.string().nullable(),
  passportIssuingCountry: Yup.string().required(
    "Passport issuing country is required"
  ),
  passportIssuingCity: Yup.string().nullable(),
  passportIssuingStateProvince: Yup.string().nullable(),
  passportIssuingCountryRegion: Yup.string().nullable(),
  passportIssuanceDate: Yup.string().required(
    "Passport issuance date is required"
  ),
  passportExpirationDate: Yup.string().required(
    "Passport expiration date is required"
  ),
  lostOrStolenPassport: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Lost or stolen passport is required"),

  // Travel Information
  intendedCountryOfVisit: Yup.string().required(
    "Intended country of visit is required"
  ),
  purposeOfTrip: Yup.string().required("Purpose of trip is required"),
  intendedDateOfArrival: Yup.string().required(
    "Intended date of arrival is required"
  ),
  intendedLengthOfStay: Yup.string().required(
    "Intended length of stay is required"
  ),
  addressDuringStay: Yup.string().nullable(),
  addressCity: Yup.string().nullable(),
  addressStateProvince: Yup.string().nullable(),
  addressPostalCode: Yup.string().nullable(),
  tripPayer: Yup.string().required("Trip payer is required"),
  travelingCompanions: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Traveling companions is required"),
  previousTravelAbroad: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Previous travel abroad is required"),
  previousVisaIssued: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Previous visa issued is required"),

  visaRefusalDetails: Yup.string().when(
    ["previousVisaIssued"],
    ([previousVisaIssued], schema) => {
      return previousVisaIssued === "Yes"
        ? schema.required("Visa refusal details are required")
        : schema.nullable();
    }
  ),

  // Contact Information
  contactPersonName: Yup.string().required("Contact person name is required"),
  contactOrganization: Yup.string().nullable(),
  contactRelationship: Yup.string().required(
    "Contact relationship is required"
  ),
  contactAddress: Yup.string().required("Contact address is required"),
  contactPhoneNumber: Yup.string()
    .required("Contact phone number is required")
    .matches(/^\+?\d+$/, "Phone number must be valid"),
  contactEmailAddress: Yup.string()
    .required("Contact email is required")
    .email("Email must be valid"),

  // Family Information
  fatherSurname: Yup.string().required("Father's surname is required"),
  fatherGivenNames: Yup.string().required("Father's given names are required"),
  fatherDateOfBirth: Yup.string().required(
    "Father's date of birth is required"
  ),
  fatherInVisitCountry: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Father in visit country is required"),
  motherSurname: Yup.string().required("Mother's surname is required"),
  motherGivenNames: Yup.string().required("Mother's given names are required"),
  motherDateOfBirth: Yup.string().required(
    "Mother's date of birth is required"
  ),
  motherInVisitCountry: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Mother in visit country is required"),
  immediateRelativesInVisitCountry: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Immediate relatives in visit country is required"),
  relativeName: Yup.string().when(
    ["immediateRelativesInVisitCountry"],
    ([immediateRelativesInVisitCountry], schema) => {
      return immediateRelativesInVisitCountry === "Yes"
        ? schema.required("Relative name is required")
        : schema.nullable();
    }
  ),
  relativeRelationship: Yup.string().when(
    ["immediateRelativesInVisitCountry"],
    ([immediateRelativesInVisitCountry], schema) => {
      return immediateRelativesInVisitCountry === "Yes"
        ? schema.required("Relative relationship is required")
        : schema.nullable();
    }
  ),
  relativeMaritalStatus: Yup.string().when(
    ["immediateRelativesInVisitCountry"],
    ([immediateRelativesInVisitCountry], schema) => {
      return immediateRelativesInVisitCountry === "Yes"
        ? schema.required("Relative marital status is required")
        : schema.nullable();
    }
  ),

  // Work/Education/Training Information
  otherSpecification: Yup.string().nullable(),
  currentEmployerOrSchoolName: Yup.string().required(
    "Employer/School name is required"
  ),
  currentEmployerOrSchoolAddress: Yup.string().nullable(),
  currentEmployerOrSchoolCity: Yup.string().nullable(),
  currentEmployerOrSchoolStateProvince: Yup.string().nullable(),
  currentEmployerOrSchoolPostalCode: Yup.string().nullable(),
  currentEmployerOrSchoolPhoneNumber: Yup.string().nullable(),
  monthlySalary: Yup.string().nullable(),
  jobDutiesDescription: Yup.string().nullable(),
  previouslyEmployed: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Previously employed is required"),
  educationAboveSecondary: Yup.mixed<"Yes" | "No" | "">()
    .oneOf(["Yes", "No", ""], "Invalid selection")
    .required("Education above secondary is required"),
  educationalInstitutionName: Yup.string().when(
    ["educationAboveSecondary"],
    ([educationAboveSecondary], schema) =>
      educationAboveSecondary === "Yes"
        ? schema.required("Educational institution name is required")
        : schema.nullable()
  ),
  educationalInstitutionAddress: Yup.string().nullable(),
  educationalInstitutionCity: Yup.string().nullable(),
  educationalInstitutionStateProvince: Yup.string().nullable(),
  educationalInstitutionCountry: Yup.string().nullable(),
  courseOfStudy: Yup.string().nullable(),
  dateOfAttendanceStart: Yup.string().nullable(),
  dateOfAttendanceEnd: Yup.string().nullable(),
  otherInstitutionsAttended: Yup.string().nullable(),
  clanOrTribe: Yup.string().nullable(),
  languagesSpoken: Yup.string().nullable(),
  travelHistoryLastFiveYears: Yup.mixed<"Yes" | "No" | "">().oneOf(
    ["Yes", "No", ""],
    "Invalid selection"
  ),
  professionalOrganizations: Yup.string().nullable(),

  // Files to upload
  visaApplication: Yup.mixed<File>()
    .nullable()
    .test(
      "fileRequired",
      "Visa application file is required",
      (value) => value !== null
    ),
  scannedPassport: Yup.mixed<File>()
    .nullable()
    .test(
      "fileRequired",
      "Scanned passport file is required",
      (value) => value !== null
    ),
  visaTermsAndConditionsDocument: Yup.mixed<File>()
    .nullable()
    .test(
      "fileRequired",
      "Visa terms and conditions document is required",
      (value) => value !== null
    ),
});

export const studentApplicationValidationSchema = Yup.object().shape<
  SchemaObject<StudentApplicationForm>
>({
  // Personal Information
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  otherName: Yup.string(),
  passportNumber: Yup.string().required("Passport number is required"),
  race: Yup.string().required("Race is required"),
  dateOfBirth: Yup.date()
    .typeError("Invalid date")
    .required("Date of birth is required"),
  placeOfBirth: Yup.string().required("Place of birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  religion: Yup.string().required("Religion is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  gender: Yup.string().required("Gender is required"),
  currentAddress: Yup.string().required("Current address is required"),
  telephoneNumber: Yup.string().required("Telephone number is required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
  postalCode: Yup.string().required("Postal code is required"),
  stateProvince: Yup.string().required("State/Province is required"),
  city: Yup.string().required("City is required"),

  // Parent Information
  // Father
  parentInfoFatherFirstName: Yup.string().required(
    "Father’s first name is required"
  ),
  parentInfoFatherLastName: Yup.string().required(
    "Father’s last name is required"
  ),
  parentInfoFatherPhoneNumber: Yup.string().required(
    "Father’s phone number is required"
  ),
  parentInfoFatherEmailAddress: Yup.string()
    .email("Invalid email")
    .required("Father’s email address is required"),
  parentInfoFatherOccupation: Yup.string().required(
    "Father’s occupation is required"
  ),
  // Mother
  parentInfoMotherFirstName: Yup.string().required(
    "Mother’s first name is required"
  ),
  parentInfoMotherLastName: Yup.string().required(
    "Mother’s last name is required"
  ),
  parentInfoMotherPhoneNumber: Yup.string().required(
    "Mother’s phone number is required"
  ),
  parentInfoMotherEmailAddress: Yup.string()
    .email("Invalid email")
    .required("Mother’s email address is required"),
  parentInfoMotherOccupation: Yup.string().required(
    "Mother’s occupation is required"
  ),

  // Emergency Contact Details
  emergencyContactFirstName: Yup.string().required(
    "Emergency contact first name is required"
  ),
  emergencyContactLastName: Yup.string().required(
    "Emergency contact last name is required"
  ),
  emergencyContactRelationship: Yup.string().required(
    "Emergency contact relationship is required"
  ),
  emergencyContactPhoneNumber: Yup.string().required(
    "Emergency contact phone number is required"
  ),
  emergencyContactEmailAddress: Yup.string()
    .email("Invalid email")
    .required("Emergency contact email address is required"),
  emergencyContactOccupation: Yup.string().required(
    "Emergency contact occupation is required"
  ),

  // Additional Information
  hasEnglishCertificate: Yup.string()
    .oneOf(["IELTS", "TOEFL", "None"])
    .required("This field is required"),
  howDidYouKnowAboutUs: Yup.string()
    .oneOf([
      "Advertisement",
      "Education Fare",
      "Telemarketing",
      "Agent",
      "Others",
    ])
    .required("This field is required"),

  fullNameOfAgent: Yup.string().when("howDidYouKnowAboutUs", {
    is: "Agent",
    then: (schema) => schema.required("Full name of agent is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  ifOtherExplain: Yup.string().when("howDidYouKnowAboutUs", {
    is: "Others",
    then: (schema) => schema.required("Please explain how you knew about us"),
    otherwise: (schema) => schema.notRequired(),
  }),

  accommodationProvided: Yup.string()
    .oneOf(["Yes", "No"])
    .required("This field is required"),

  hasDisabilityOrMedicalCondition: Yup.string()
    .oneOf(["Yes", "No"])
    .required("This field is required"),

  nameOfDisabilityOrMedicalCondition: Yup.string().when(
    "hasDisabilityOrMedicalCondition",
    {
      is: "Yes",
      then: (schema) =>
        schema.required("Name of disability/medical condition is required"),
      otherwise: (schema) => schema.notRequired(),
    }
  ),
});
