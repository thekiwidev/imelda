import React from "react";
import InputsWrapper from "../../components/inputsWrapper";
import InputFlex from "../../components/inputsFlex";
import InputField from "../../components/inputField";

const ParentInformation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Parent's Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide information about your parent.
        </p>
      </div>

      <InputsWrapper>
        <div className="px-4 py-6 sm:p-8">
          <h2 className="font-bold  mb-4">Father's Information</h2>

          <InputFlex>
            <InputField
              name="parentInfoFatherFirstName"
              label="First name"
              gridCol={3}
            />

            <InputField
              name="parentInfoFatherLastName"
              label="Last name"
              gridCol={3}
            />

            <InputField
              name="parentInfoFatherPhoneNumber"
              label="Phone Number"
              gridCol={2}
            />

            <InputField
              name="parentInfoFatherEmailAddress"
              label="Email Address"
              gridCol={4}
            />

            <InputField
              name="parentInfoFatherOccupation"
              label="Occupation"
              gridCol={3}
            />
          </InputFlex>

          <h2 className="font-bold mb-4 mt-8">Mother's Information</h2>

          <InputFlex>
            <InputField
              name="parentInfoMotherFirstName"
              label="First name"
              gridCol={3}
            />

            <InputField
              name="parentInfoMotherLastName"
              label="Last name"
              gridCol={3}
            />

            <InputField
              name="parentInfoMotherPhoneNumber"
              label="Phone Number"
              gridCol={2}
            />

            <InputField
              name="parentInfoMotherEmailAddress"
              label="Email Address"
              gridCol={4}
            />

            <InputField
              name="parentInfoMotherOccupation"
              label="Occupation"
              gridCol={3}
            />
          </InputFlex>
        </div>
      </InputsWrapper>
    </div>
  );
};

export default ParentInformation;
