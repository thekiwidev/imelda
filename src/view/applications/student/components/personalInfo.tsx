import InputsWrapper from "../../components/inputsWrapper";
import InputFlex from "../../components/inputsFlex";
import InputField from "../../components/inputField";
import DateField from "../../components/dateField";
import RadioField from "../../components/radioField";
import { Gender } from "../../../components/data";

const PersonalInformation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <InputsWrapper>
        <div className="px-4 py-6 sm:p-8">
          <InputFlex>
            <InputField
              name="firstName"
              label="First name"
              note="Name according to passport number"
              gridCol={3}
            />

            <InputField
              name="lastName"
              label="Last name"
              note="Name according to passport number"
              gridCol={3}
            />

            <InputField
              name="otherName"
              label="Other name(s)"
              note="Name according to passport number"
              gridCol={3}
            />

            <InputField
              name="passportNumber"
              label="Passport Number"
              gridCol={3}
            />

            <InputField name="race" label="Race" note="" gridCol={3} />

            <DateField name="dateOfBirth" label="Date of Birth" gridCol={3} />

            <InputField
              name="placeOfBirth"
              label="Place of Birth"
              gridCol={3}
            />

            <InputField name="nationality" label="Nationality" gridCol={3} />

            <InputField name="religion" label="Religion" gridCol={3} />

            <InputField
              name="maritalStatus"
              label="Marital Status"
              gridCol={3}
            />

            <RadioField
              name="gender"
              label="Gender"
              options={Gender}
              gridCol={3}
            />

            <InputField
              name="currentAddress"
              label="Current address"
              gridCol={6}
            />

            <InputField
              name="telephoneNumber"
              label="Phone Number"
              gridCol={2}
            />

            <InputField name="emailAddress" label="Email address" gridCol={4} />

            <InputField name="postalCode" label="Postal/Zip Code" gridCol={2} />

            <InputField
              name="stateProvince"
              label="State/Province"
              gridCol={2}
            />

            <InputField name="city" label="City" gridCol={2} />
          </InputFlex>
        </div>
      </InputsWrapper>
    </div>
  );
};

export default PersonalInformation;
