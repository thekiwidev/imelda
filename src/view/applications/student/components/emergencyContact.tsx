import React from "react";
import InputsWrapper from "../../components/inputsWrapper";
import InputFlex from "../../components/inputsFlex";
import InputField from "../../components/inputField";

const EmergencyContact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Emergency Contact Details
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide information about your emergency contact.
        </p>
      </div>

      <InputsWrapper>
        <div className="px-4 py-6 sm:p-8">
          <InputFlex>
            <InputField
              name="emergencyContactFirstName"
              label="First name"
              gridCol={3}
            />

            <InputField
              name="emergencyContactLastName"
              label="Last name"
              gridCol={3}
            />

            <InputField
              name="emergencyContactRelationship"
              label="Relationship"
              note="Contact relationship to you"
              gridCol={3}
            />

            <InputField
              name="emergencyContactPhoneNumber"
              label="Phone Number"
              gridCol={3}
            />

            <InputField
              name="emergencyContactEmailAddress"
              label="Email Address"
              gridCol={4}
            />

            <InputField
              name="emergencyContactOccupation"
              label="Occupation"
              gridCol={3}
            />
          </InputFlex>
        </div>
      </InputsWrapper>
    </div>
  );
};

export default EmergencyContact;
