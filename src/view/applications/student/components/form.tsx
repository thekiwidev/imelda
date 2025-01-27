import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import PersonalInformation from "./personalInfo";
import { Hr } from "../../../components";
import ParentInformation from "./parentInfo";
import EmergencyContact from "./emergencyContact";
import OtherInformation from "./otherInfo";
import Declaration from "./declaration";
import SubmitButton from "../../components/submitButton";
import FormAlert from "../../components/formalert";
import {
  StudentApplicationForm as StudentApplicationData,
  studentApplicationInitialValues,
} from "../../../../api/students/types";
import { studentApplicationValidationSchema } from "../../components/validation";
import { useStudentApplicationMailer } from "../../../../hooks/student/student-mailer";
import toast, { Toaster } from "react-hot-toast";
import Requirements from "./requirements";

const StudentApplicationForm: React.FC = () => {
  const { mutate, isPending } = useStudentApplicationMailer();
  const onSubmit = (
    values: StudentApplicationData,
    { resetForm }: FormikHelpers<StudentApplicationData>
  ) => {
    mutate(values, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        resetForm();
      },
      onError: () => {
        toast.error("Application submission failed");
      },
    });
  };
  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={studentApplicationInitialValues}
        onSubmit={onSubmit}
        validationSchema={studentApplicationValidationSchema}
      >
        <Form>
          <div
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
            <Requirements />
            <Hr />
            <Declaration />
            <Hr />
            <SubmitButton isLoading={isPending} />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default StudentApplicationForm;
