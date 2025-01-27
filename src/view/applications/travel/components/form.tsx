import { Formik, Form, FormikHelpers } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { Hr } from "../../../components";
import FormAlert from "../../components/formalert";
import SubmitButton from "../../components/submitButton";
import Agreement from "./agreement";
import ContactInfo from "./contactInfo";
import FamilyInfo from "./familyInfo";
import PInfo from "./personalInfo";
import Requirements from "./requirements";
import TravelInfo from "./travelInfo";
import WETinfo from "./WETInfo";
import {
  TravelApplicationForm as TravelApplicationData,
  travelApplicationInitialValues,
} from "../../../../api/travel/types";
import { useTravelApplicationMailer } from "../../../../hooks/travel/travel-mailer";
import { travelApplicationValidationSchema } from "../../components/validation";

const TravelApplicationForm: React.FC = () => {
  const { mutate: mailTravelApplication, isPending } =
    useTravelApplicationMailer();
  const onSubmit = (
    values: TravelApplicationData,
    { resetForm }: FormikHelpers<TravelApplicationData>
  ) => {
    mailTravelApplication(values, {
      onSuccess: (data) => {
        resetForm();
        toast.success(data.data.message);
      },
    });
  };

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={travelApplicationInitialValues}
        onSubmit={onSubmit}
        validationSchema={travelApplicationValidationSchema}
      >
        <Form>
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
            id="travel-application-form"
          >
            <FormAlert />
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
            <SubmitButton isLoading={isPending} />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default TravelApplicationForm;
