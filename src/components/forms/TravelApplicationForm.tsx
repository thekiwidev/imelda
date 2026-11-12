// Travel visa application, ported from the previous site (src/view/applications/travel).
// Same fields, validation, multipart upload (three PDFs), API call and toasts; only the styling is new.
import { Formik, Form, type FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { travelApplicationInitialValues, type TravelApplicationForm as TravelApplicationData } from './types';
import { travelApplicationValidationSchema } from './validation';
import { travelApplicationMailer } from './api';
import {
  Section, Grid, SubHeading, InputField, DateField, RadioField, CheckboxField, FilePicker, FormAlert, SubmitButton,
  ShowWhen, useSubmit, Gender, YesNo,
} from './fields';
import { toastOptions } from './toast';

const intro = 'Fill the form accordingly; this will be used for your visa appointment application.';

export default function TravelApplicationForm() {
  const { run, isPending } = useSubmit(travelApplicationMailer);

  const onSubmit = (values: TravelApplicationData, { resetForm }: FormikHelpers<TravelApplicationData>) =>
    run(values, {
      onSuccess: (res) => {
        resetForm();
        toast.success(res.data.message);
      },
      onError: () => toast.error('Failed to send application, something went wrong'),
    });

  return (
    <>
      <Toaster position="top-right" toastOptions={toastOptions} />
      <Formik initialValues={travelApplicationInitialValues} onSubmit={onSubmit} validationSchema={travelApplicationValidationSchema}>
        <Form className="fform" aria-label="Travel visa application">
          <FormAlert />

          <Section title="Personal information" intro={intro}>
            <Grid>
              <InputField name="countryOfApplication" label="Which country do you plan to apply for?" gridCol={3} />
            </Grid>
            <SubHeading>Full name provided</SubHeading>
            <Grid>
              <InputField name="surname" label="Surname (last name)" gridCol={3} />
              <InputField name="firstName" label="First name" gridCol={3} />
              <InputField name="middleName" label="Middle name" gridCol={3} />
            </Grid>
            <Grid>
              <RadioField name="gender" label="Gender" options={Gender} />
              <InputField name="maritalStatus" label="Marital status" gridCol={3} />
              <DateField name="dateOfBirth" label="Date of birth" gridCol={3} />
              <InputField name="placeOfBirth" label="Place of birth" gridCol={3} />
              <InputField name="countryOfOrigin" label="Country/Region of origin" gridCol={3} />
              <RadioField name="otherNationality" label="Do you hold or have you held any nationality other than the one indicated above?" options={YesNo} />
              <RadioField name="permanentResidentCountry" label="Are you a permanent resident of a country/region other than your country/region of origin (nationality) above?" options={YesNo} />
              <InputField name="nationalIdNumber" label="National identification number (NIN or SSN)" gridCol={3} />
              <InputField name="homeAddress" label="Home address" />
              <InputField name="city" label="City" gridCol={2} />
              <InputField name="stateProvince" label="State / Province" gridCol={2} />
              <InputField name="postalCode" label="ZIP / Postal code" gridCol={2} />
              <InputField name="country" label="Country/Region" gridCol={3} />
              <InputField name="primaryPhoneNumber" label="Primary phone number" gridCol={3} />
              <InputField name="secondaryPhoneNumber" label="Secondary phone number" gridCol={3} />
              <InputField name="workPhoneNumber" label="Work phone number" gridCol={3} />
              <InputField name="emailAddress" label="Email address" gridCol={6} />
            </Grid>
            <SubHeading>Travel document</SubHeading>
            <Grid>
              <InputField name="passportType" label="Passport/Travel document type" gridCol={3} />
              <InputField name="passportNumber" label="Passport/Travel document number" gridCol={3} />
              <InputField name="passportBookletCount" label="Passport booklet count" gridCol={2} />
              <InputField name="passportIssuingCountry" label="Country/Authority that issued the passport/travel document" gridCol={4} />
              <InputField name="passportIssuingCity" label="City where issued" gridCol={3} />
              <InputField name="passportIssuingStateProvince" label="State/Province where issued" gridCol={3} />
              <InputField name="passportIssuingCountryRegion" label="Country/Region where issued" gridCol={3} />
              <DateField name="passportIssuanceDate" label="Issuance date" gridCol={3} />
              <DateField name="passportExpirationDate" label="Expiration date" gridCol={3} />
              <RadioField name="lostOrStolenPassport" label="Have you ever lost a passport or had one stolen?" options={YesNo} />
            </Grid>
          </Section>

          <Section title="Travel information" intro={intro}>
            <Grid>
              <InputField name="intendedCountryOfVisit" label="Which country do you intend to visit?" gridCol={3} />
              <InputField name="purposeOfTrip" label="Purpose of trip" gridCol={3} />
              <DateField name="intendedDateOfArrival" label="Intended date of arrival" gridCol={3} />
              <InputField name="intendedLengthOfStay" label="Intended length of stay" note="How long do you intend on staying" gridCol={3} />
              <InputField name="addressDuringStay" label="Address where you will stay" />
              <InputField name="addressCity" label="City" gridCol={2} />
              <InputField name="addressStateProvince" label="State / Province" gridCol={2} />
              <InputField name="addressPostalCode" label="ZIP / Postal code" gridCol={2} />
              <InputField name="tripPayer" label="Person/Entity paying for your trip" gridCol={3} />
              <RadioField name="travelingCompanions" label="Are there other persons traveling with you?" options={YesNo} />
              <RadioField name="previousTravelAbroad" label="Have you ever been out of your country?" options={YesNo} />
              <RadioField name="previousVisaIssued" label="Have you ever been issued any country's visa?" options={YesNo} />
              <RadioField name="visaRefusalDetails" label="Have you ever been refused any visa, been refused admission to any country, or withdrawn your application for admission at the port of entry?" options={YesNo} />
            </Grid>
          </Section>

          <Section title="Contact information" intro={intro}>
            <Grid>
              <InputField name="contactPersonName" label="Contact person name in the country of visit" gridCol={3} />
              <InputField name="contactOrganization" label="Organization name" gridCol={3} />
              <InputField name="contactRelationship" label="Relationship to you" gridCol={3} />
              <InputField name="contactAddress" label="Contact address" gridCol={6} />
              <InputField name="contactPhoneNumber" label="Contact phone number" gridCol={2} />
              <InputField name="contactEmailAddress" label="Contact email address" gridCol={4} />
            </Grid>
          </Section>

          <Section title="Family information" intro={intro}>
            <Grid>
              <InputField name="fatherSurname" label="Father's surname" gridCol={3} />
              <InputField name="fatherGivenNames" label="Father's given names" gridCol={3} />
              <DateField name="fatherDateOfBirth" label="Father's date of birth" gridCol={3} />
              <RadioField name="fatherInVisitCountry" label="Is your father in the country you intend to visit?" options={YesNo} />
              <InputField name="motherSurname" label="Mother's surname" gridCol={3} />
              <InputField name="motherGivenNames" label="Mother's given names" gridCol={3} />
              <DateField name="motherDateOfBirth" label="Mother's date of birth" gridCol={3} />
              <RadioField name="motherInVisitCountry" label="Is your mother in the country you intend to visit?" options={YesNo} />
              <RadioField name="immediateRelativesInVisitCountry" label="Do you have any immediate relatives in the country you intend to visit?" options={YesNo} />
            </Grid>
            <ShowWhen name="immediateRelativesInVisitCountry" value="Yes">
              <SubHeading>About your relative</SubHeading>
              <Grid>
                <InputField name="relativeName" label="Relative name" gridCol={3} />
                <InputField name="relativeRelationship" label="Relative relationship to you" gridCol={3} />
                <InputField name="relativeMaritalStatus" label="Relative marital status" gridCol={3} />
              </Grid>
            </ShowWhen>
          </Section>

          <Section title="Work, education and training" intro={intro}>
            <Grid>
              <InputField name="otherSpecification" label="Specify other" gridCol={3} />
            </Grid>
            <SubHeading>Present employer or school information</SubHeading>
            <Grid>
              <InputField name="currentEmployerOrSchoolName" label="Present employer or school name" gridCol={3} />
              <InputField name="currentEmployerOrSchoolAddress" label="Address" gridCol={6} />
              <InputField name="currentEmployerOrSchoolCity" label="City" note="(Present employer or school)" gridCol={2} />
              <InputField name="currentEmployerOrSchoolStateProvince" label="State/Province" note="(Present employer or school)" gridCol={2} />
              <InputField name="currentEmployerOrSchoolPostalCode" label="Postal zone/Zip code" note="(Present employer or school)" gridCol={2} />
              <InputField name="currentEmployerOrSchoolPhoneNumber" label="Work phone number" gridCol={3} />
              <InputField name="monthlySalary" label="Monthly salary in local currency" note="(if employed)" gridCol={3} />
              <InputField name="jobDutiesDescription" label="Briefly describe your duties" type="textarea" />
            </Grid>
            <SubHeading>Previous employer or school information</SubHeading>
            <Grid>
              <RadioField name="previouslyEmployed" label="Were you previously employed?" options={YesNo} />
              <RadioField name="educationAboveSecondary" label="Have you attended any educational institutions at a secondary level or above?" options={YesNo} />
            </Grid>
            <ShowWhen name="educationAboveSecondary" value="Yes">
            <SubHeading>About your education</SubHeading>
            <Grid>
              <InputField name="educationalInstitutionName" label="Name of institution" />
              <InputField name="educationalInstitutionAddress" label="Address of institution" />
              <InputField name="educationalInstitutionCity" label="City" note="(of previous institution)" gridCol={3} />
              <InputField name="educationalInstitutionStateProvince" label="State/Province" note="(of previous institution)" gridCol={3} />
              <InputField name="educationalInstitutionCountry" label="Country/Region" note="(of previous institution)" gridCol={3} />
              <InputField name="courseOfStudy" label="Course of study" note="(of previous institution)" gridCol={3} />
              <DateField name="dateOfAttendanceStart" label="Date of attendance (start)" gridCol={3} />
              <DateField name="dateOfAttendanceEnd" label="Date of attendance (end)" gridCol={3} />
              <InputField name="otherInstitutionsAttended" label="Other institutions attended (name, address, city, state/region, course of study and dates of attendance)" type="textarea" />
            </Grid>
            </ShowWhen>
            <Grid>
              <RadioField name="clanOrTribe" label="Do you belong to a clan or tribe?" options={YesNo} />
              <InputField name="languagesSpoken" label="List the languages you speak" note={'Separate them with a comma ","'} />
              <RadioField name="travelHistoryLastFiveYears" label="Have you traveled to any countries/regions within the last five years?" options={YesNo} />
              <RadioField name="professionalOrganizations" label="Have you belonged to, contributed to, or worked for any professional, social, or charitable organization?" options={YesNo} />
            </Grid>
          </Section>

          <Section title="Visa requirements" intro="The following are the requirements to complete your visa application. PDF files only.">
            <div className="freq">
              <p style={{ margin: 0, fontWeight: 600 }}>Visa application form</p>
              <p className="muted" style={{ margin: '4px 0 12px', fontSize: 14, lineHeight: '22px' }}>Provide your visa application form with signature and date.</p>
              <FilePicker name="visaApplication" accept=".pdf" />
            </div>
            <div className="freq">
              <p style={{ margin: 0, fontWeight: 600 }}>A clear scanned passport copy</p>
              <p className="muted" style={{ margin: '4px 0 12px', fontSize: 14, lineHeight: '22px' }}>Visa will NOT be processed until payment has been made and the following requirements have been submitted (a clear scanned passport copy of the applicant).</p>
              <FilePicker name="scannedPassport" accept=".pdf" />
            </div>
            <div className="freq">
              <p style={{ margin: 0, fontWeight: 600 }}>Visa terms and conditions document</p>
              <p className="muted" style={{ margin: '4px 0 12px', fontSize: 14, lineHeight: '22px' }}>Provide your visa terms and conditions document with signature and date.</p>
              <FilePicker name="visaTermsAndConditionsDocument" accept=".pdf" />
            </div>
          </Section>

          <Section title="Agreement and declaration" intro="Sign the following agreement by checking the box.">
            <CheckboxField
              name="agreement"
              label="Agreement and acknowledgement"
              description="I agree and testify that all the information I supplied above are true and correct. I will not hold Smart Future Resources/Imelda Yayala Ltd responsible if my visa and/or application is rejected, delayed and/or has error(s). I also accept my application is not complete without accepting the visa terms and conditions of Smart Future Resources Ltd/Imelda Yayala Ltd."
              isRequired
            />
          </Section>

          <SubmitButton isLoading={isPending} />
        </Form>
      </Formik>
    </>
  );
}
