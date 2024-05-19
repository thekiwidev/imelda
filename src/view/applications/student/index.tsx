import React from "react";

import FormHeader from "./components/header";
import StudentApplicationForm from "./components/form";

const StudentApplication: React.FC = () => {
  return (
    <div>
      <FormHeader />
      <StudentApplicationForm />
    </div>
  );
};

export default StudentApplication;
