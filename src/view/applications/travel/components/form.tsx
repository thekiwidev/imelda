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

const TravelApplicationForm: React.FC = () => {
  return (
    <form
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
      <SubmitButton />
    </form>
  );
};

export default TravelApplicationForm;
