import React from "react";
import PersonalInformation from "./personalInfo";
import { Hr } from "../../../components";
import ParentInformation from "./parentInfo";
import EmergencyContact from "./emergencyContact";
import OtherInformation from "./otherInfo";
import Declearation from "./declearation";
import SubmitButton from "./submitButton";

const Form: React.FC = () => {
  return (
    <form>
      <PersonalInformation />
      <Hr />
      <ParentInformation />
      <Hr />
      <EmergencyContact />
      <Hr />
      <OtherInformation />
      <Hr />
      <Declearation />
      <Hr />
      <SubmitButton />
    </form>
  );
};

export default Form;