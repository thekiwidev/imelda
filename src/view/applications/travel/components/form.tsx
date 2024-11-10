import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FaCircleCheck, FaCircleNotch } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti";
import {
  travelApplicationInitialValues,
  TravelApplicationForm as TravelApplicationPayload,
} from "../../../../api/travel/types";
import {
  useCreateTravelApplication,
  useGetTravelApplication,
  useUpdateTravelApplication,
} from "../../../../hooks/applications/useTravel";
import { Hr } from "../../../components";
import SubmitButton from "../../components/submitButton";
import Agreement from "./agreement";
import ContactInfo from "./contactInfo";
import FamilyInfo from "./familyInfo";
import PInfo from "./personalInfo";
import Requirements from "./requirements";
import TravelInfo from "./travelInfo";
import WETinfo from "./WETInfo";
import toast from "react-hot-toast";

const TravelApplicationForm: React.FC = () => {
  // states
  const [initialValues, setInitialValues] = useState<TravelApplicationPayload>({
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
  });

  // hooks
  const { mutate, isPending } = useCreateTravelApplication();
  const {
    data,
    isPending: gettingApplication,
    refetch,
  } = useGetTravelApplication();
  const { mutate: updateApplication, isPending: updatingApplication } =
    useUpdateTravelApplication();

  useEffect(() => {
    if (data) {
      setInitialValues({ ...data?.data });
    } else setInitialValues({ ...travelApplicationInitialValues });
  }, [gettingApplication, data]);

  // onsubmit
  const onSubmit = (values: TravelApplicationPayload) => {
    if (!data)
      mutate(values, {
        onSuccess: () => {
          toast.custom(
            <div className="flex items-start gap-x-2 bg-green-50 p-3 rounded-xl border border-green-300 w-[fit-content] ">
              <div className="">
                <FaCircleCheck className="text-green-400" size={24} />
              </div>
              <p className="">
                Application Submitted! <br />
                <span className="text-gray-500 text-sm font-medium">
                  Your application has been submitted, and ready for processing!
                </span>
              </p>
            </div>,
            {
              duration: 6000,
              position: "top-right",
            }
          );
          refetch();
        },
      });
    if (data?.status === "submitted")
      updateApplication(values, {
        onSuccess: () => {
          toast.custom(
            <div className="flex items-start gap-x-2 bg-green-50 p-3 rounded-xl border border-green-300 w-[fit-content] ">
              <div className="">
                <FaCircleCheck className="text-green-400" size={24} />
              </div>
              <p className="">
                Application Updated! <br />
                <span className="text-gray-500 text-sm font-medium">
                  Your application has been updated, Imelda would be informed!
                </span>
              </p>
            </div>,
            {
              duration: 6000,
              position: "top-right",
            }
          );
          refetch();
        },
      });
    if (data?.status === "processing")
      toast.custom(
        <div className="flex items-start gap-x-2 bg-red-50 p-3 rounded-xl border border-red-300 w-[fit-content] ">
          <div className="">
            <TiWarning className="text-red-400" size={24} />
          </div>
          <p className="">
            Application is already processing! <br />
            contact support for help!
          </p>
        </div>,
        {
          duration: 6000,
          position: "top-right",
        }
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
      id="travel-application-form"
    >
      <Form className="mx-auto max-w-7xl px-6 lg:px-8">
        {gettingApplication ? (
          <div className="flex items-center justify-center py-8">
            <FaCircleNotch size={42} color="#16a34a" className="animate-spin" />
          </div>
        ) : (
          <>
            <PInfo />
            <Hr />
            <TravelInfo />
            <Hr />
            <ContactInfo />
            <Hr />
            <FamilyInfo />
            <Hr />
            <WETinfo />
            <Hr />
            <Requirements />
            <Hr />
            <Agreement />
            <Hr />
            <SubmitButton
              isLoading={isPending || updatingApplication}
              text="submit"
            />
          </>
        )}
      </Form>
    </Formik>
  );
};

export default TravelApplicationForm;
