import { Formik, Form } from "formik";
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
import { useTravelMailer } from "../../../../hooks/travel/travel-mailer";

const TravelApplicationForm: React.FC = () => {
  const { mutate: mailTravelApplication, isPending } = useTravelMailer();
  const onSubmit = (values: TravelApplicationData) => {
    console.log({ values });
    // mailTravelApplication(values, {
    //   onSuccess: (data) => {
    //     console.log(data);
    //   },
    // });
  };

  return (
    <Formik initialValues={travelApplicationInitialValues} onSubmit={onSubmit}>
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
  );
};

export default TravelApplicationForm;
