import * as Yup from "yup";
import { TravelApplicationForm } from "../../../api/travel/types";

type SchemaObject<T> = {
  [key in keyof T]: Yup.Schema<any>;
};

export const travelApplicationSchema = Yup.object().shape<
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

  // @deprecated: no longer needed as I a not working with files
  //   // Files to upload
  //   visaApplication: Yup.string().required("Visa application file is required"),
  //   scannedPassport: Yup.string().required("Scanned passport file is required"),
  //   visaTermsAndConditionsDocument: Yup.string().required(
  //     "Visa terms and conditions document is required"
  //   ),
});
