// Student visa application, ported from the previous site (src/view/applications/student).
// Same fields, validation, API call and success/error toasts; only the styling is new.
import { Formik, Form, type FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { studentApplicationInitialValues, type StudentApplicationForm as StudentApplicationData } from './types';
import { studentApplicationValidationSchema } from './validation';
import { studentApplicationMailer } from './api';
import {
  Section, Grid, SubHeading, InputField, DateField, RadioField, CheckboxField, FormAlert, SubmitButton,
  ShowWhen, useSubmit, Gender, YesNo, EnglishCert, HowDidYouHearAboutUs,
} from './fields';
import { toastOptions } from './toast';

export default function StudentApplicationForm() {
  const { run, isPending } = useSubmit(studentApplicationMailer);

  const onSubmit = (values: StudentApplicationData, { resetForm }: FormikHelpers<StudentApplicationData>) =>
    run(values, {
      onSuccess: (res) => {
        toast.success(res.data.message);
        resetForm();
      },
      onError: () => toast.error('Application submission failed'),
    });

  return (
    <>
      <Toaster position="top-right" toastOptions={toastOptions} />
      <Formik initialValues={studentApplicationInitialValues} onSubmit={onSubmit} validationSchema={studentApplicationValidationSchema}>
        <Form className="fform" aria-label="Student visa application">
          <FormAlert />

          <Section title="Personal information" intro="Use a permanent address where you can receive mail.">
            <Grid>
              <InputField name="firstName" label="First name" note="Name according to passport number" gridCol={3} />
              <InputField name="lastName" label="Last name" note="Name according to passport number" gridCol={3} />
              <InputField name="otherName" label="Other name(s)" note="Name according to passport number" gridCol={3} />
              <InputField name="passportNumber" label="Passport number" gridCol={3} />
              <InputField name="race" label="Race" gridCol={3} />
              <DateField name="dateOfBirth" label="Date of birth" gridCol={3} />
              <InputField name="placeOfBirth" label="Place of birth" gridCol={3} />
              <InputField name="nationality" label="Nationality" gridCol={3} />
              <InputField name="religion" label="Religion" gridCol={3} />
              <InputField name="maritalStatus" label="Marital status" gridCol={3} />
              <RadioField name="gender" label="Gender" options={Gender} gridCol={3} />
              <InputField name="currentAddress" label="Current address" gridCol={6} />
              <InputField name="telephoneNumber" label="Phone number" gridCol={2} />
              <InputField name="emailAddress" label="Email address" gridCol={4} />
              <InputField name="postalCode" label="Postal/Zip code" gridCol={2} />
              <InputField name="stateProvince" label="State/Province" gridCol={2} />
              <InputField name="city" label="City" gridCol={2} />
            </Grid>
          </Section>

          <Section title="Parent's information" intro="Provide information about your parents.">
            <SubHeading>Father's information</SubHeading>
            <Grid>
              <InputField name="parentInfoFatherFirstName" label="First name" gridCol={3} />
              <InputField name="parentInfoFatherLastName" label="Last name" gridCol={3} />
              <InputField name="parentInfoFatherPhoneNumber" label="Phone number" gridCol={2} />
              <InputField name="parentInfoFatherEmailAddress" label="Email address" gridCol={4} />
              <InputField name="parentInfoFatherOccupation" label="Occupation" gridCol={3} />
            </Grid>
            <SubHeading>Mother's information</SubHeading>
            <Grid>
              <InputField name="parentInfoMotherFirstName" label="First name" gridCol={3} />
              <InputField name="parentInfoMotherLastName" label="Last name" gridCol={3} />
              <InputField name="parentInfoMotherPhoneNumber" label="Phone number" gridCol={2} />
              <InputField name="parentInfoMotherEmailAddress" label="Email address" gridCol={4} />
              <InputField name="parentInfoMotherOccupation" label="Occupation" gridCol={3} />
            </Grid>
          </Section>

          <Section title="Emergency contact details" intro="Provide information about your emergency contact.">
            <Grid>
              <InputField name="emergencyContactFirstName" label="First name" gridCol={3} />
              <InputField name="emergencyContactLastName" label="Last name" gridCol={3} />
              <InputField name="emergencyContactRelationship" label="Relationship" note="Contact relationship to you" gridCol={3} />
              <InputField name="emergencyContactPhoneNumber" label="Phone number" gridCol={3} />
              <InputField name="emergencyContactEmailAddress" label="Email address" gridCol={4} />
              <InputField name="emergencyContactOccupation" label="Occupation" gridCol={3} />
            </Grid>
          </Section>

          <Section title="Other information" intro="Other information needed to process your application.">
            <Grid>
              <RadioField name="hasEnglishCertificate" label="Have you taken any English certificate exam before (e.g. IELTS or TOEFL)?" options={EnglishCert} />
              <RadioField name="howDidYouKnowAboutUs" label="How did you know about us?" options={HowDidYouHearAboutUs} />
              <ShowWhen name="howDidYouKnowAboutUs" value="Agent">
                <InputField name="fullNameOfAgent" label="Agent name" note="The agent who referred you" gridCol={6} />
              </ShowWhen>
              <ShowWhen name="howDidYouKnowAboutUs" value="Others">
                <InputField name="ifOtherExplain" label="How did you hear about us?" gridCol={6} />
              </ShowWhen>
              <RadioField name="accommodationProvided" label="Do you want Imelda Yayala Ltd to provide you accommodation?" options={YesNo} />
              <RadioField name="hasDisabilityOrMedicalCondition" label="Do you have any disability or medical condition that might affect your study?" options={YesNo} />
              <ShowWhen name="hasDisabilityOrMedicalCondition" value="Yes">
                <InputField name="nameOfDisabilityOrMedicalCondition" label="Please state the disability or medical condition" />
              </ShowWhen>
            </Grid>
          </Section>

          <Section title="Visa requirements" intro="The following are the requirements to complete your visa application.">
            <CheckboxField name="applicantSignatureAndDate" label="Applicant signature and date" description="Complete your application above with a digital signature and date." isRequired />
            <CheckboxField name="parentSignatureAndDate" label="Parent/Guardian's signature and date" description="Complete the parent/guardian's signature and date on the application form." isRequired />
          </Section>

          <Section title="Declaration" intro="Confirm the information you have given.">
            <CheckboxField name="agreement" label="Agreement and acknowledgement" description="We confirm that to the best of our knowledge the information provided by us in this form is correct and complete." isRequired />
          </Section>

          <SubmitButton isLoading={isPending} />
        </Form>
      </Formik>
    </>
  );
}
