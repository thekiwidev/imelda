import React from "react";
import PersonalInformation from "./personalInfo";
import { Hr } from "../../../components";
import ParentInformation from "./parentInfo";
import EmergencyContact from "./emergencyContact";
import OtherInformation from "./otherInfo";
import Declaration from "./declaration";
import SubmitButton from "../../components/submitButton";
import FormAlert from "../../components/formalert";

const StudentApplicationForm: React.FC = () => {
  return (
    <form
      className="mx-auto max-w-7xl px-6 lg:px-8"
      id="student-application-form"
    >
      <FormAlert />
      <PersonalInformation />
      <Hr />
      <ParentInformation />
      <Hr />
      <EmergencyContact />
      <Hr />
      <OtherInformation />
      <Hr />
      <Declaration />
      <Hr />
      <SubmitButton isLoading={false} text="submit" />
    </form>
  );
};

export default StudentApplicationForm;
