import { Hr } from "../../../components";
import ContactInfo from "./contactInfo";
import FamilyInfo from "./familyInfo";
import PInfo from "./personalInfo";
import TravelInfo from "./travelInfo";
import WETinfo from "./WETInfo";

const TravelApplicationForm: React.FC = () => {
  return (
    <form
      className="mx-auto max-w-7xl px-6 lg:px-8"
      id="travel-application-form"
    >
      <PInfo />
      <Hr />
      <TravelInfo />
      <Hr />
      <ContactInfo />
      <Hr />
      <FamilyInfo />
      <Hr />
      <WETinfo />
    </form>
  );
};

export default TravelApplicationForm;
