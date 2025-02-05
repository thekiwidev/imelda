import InputField from "../../components/inputField";
import RadioField from "../../components/radioField";
import DateField from "../../components/dateField";
import { Gender, YesNo } from "../../../components/data";
import InputsWrapper from "../../components/inputsWrapper";
import InputFlex from "../../components/inputsFlex";

const PInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 flex flex-row items-center gap-2">
          Fill the form accordingly, this will be use for your Visa Appointment
          Application
        </p>
      </div>

      <InputsWrapper>
        <div className="px-4 py-6 sm:p-8">
          <InputFlex>
            <InputField
              name="countryOfApplication"
              label="Which Country are you applying from?"
              gridCol={3}
            />
          </InputFlex>

          <h2 className="mt-4 mb-2 text-md font-bold">Full Name Provided:</h2>

          <InputFlex>
            <InputField name="surname" label="First name" gridCol={3} />

            <InputField name="firstName" label="Last name" gridCol={3} />

            <InputField name="middleName" label="Middle name" gridCol={3} />
          </InputFlex>

          <InputFlex>
            <RadioField name="gender" label="Gender" options={Gender} />

            <InputField
              name="maritalStatus"
              label="Marital Status"
              gridCol={3}
            />

            <DateField name="dateOfBirth" label="Date of Birth" gridCol={3} />

            <InputField
              name="placeOfBirth"
              label="Place of Birth"
              gridCol={3}
            />

            <InputField
              name="countryOfOrigin"
              label="Country/Region of Origin"
              gridCol={3}
            />

            <RadioField
              name="otherNationality"
              label="Do you hold or have you held any nationality other than the one
                indicated above on nationality?"
              options={YesNo}
            />

            <RadioField
              name="permanentResidentCountry"
              label="Are you a permanent resident of a country/region other than your
                country/region of origin (nationality) above"
              options={YesNo}
            />

            <InputField
              name="nationalIdNumber"
              label="National Identification Number: (NIN or SSN)"
              gridCol={3}
            />

            <InputField name="homeAddress" label="Home Address" />

            <InputField name="city" label="City" gridCol={2} />

            <InputField
              name="stateProvince"
              label="State / Province"
              gridCol={2}
            />

            <InputField
              name="postalCode"
              label="ZIP / Postal code"
              gridCol={2}
            />

            <InputField name="country" label="Country/Region" gridCol={3} />

            <InputField
              name="primaryPhoneNumber"
              label="Primary Phone Number"
              gridCol={3}
            />

            <InputField
              name="secondaryPhoneNumber"
              label="Secondary Phone Number"
              gridCol={3}
            />

            <InputField
              name="workPhoneNumber"
              label="Work Phone Number"
              gridCol={3}
            />

            <InputField name="emailAddress" label="Email Address" gridCol={6} />
          </InputFlex>

          <h2 className="mt-8 mb-2 text-md font-bold">Travel Document</h2>
          <InputFlex>
            <InputField
              name="passportType"
              label="Passport/Travel Document Type"
              gridCol={3}
            />

            <InputField
              name="passportNumber"
              label="Passport/Travel Document Number"
              gridCol={3}
            />

            <InputField
              name="passportBookletCount"
              label="Passport Booklet Count"
              gridCol={2}
            />

            <InputField
              name="passportIssuingCountry"
              label="Country/Authority that Issued Passport/Travel Document"
              gridCol={4}
            />

            <InputField
              name="passportIssuingCity"
              label="City Where Issued"
              gridCol={3}
            />

            <InputField
              name="passportIssuingStateProvince"
              label="State/Province Where Issued"
              gridCol={3}
            />

            <InputField
              name="passportIssuingCountryRegion"
              label="Country/Region Where Issued"
              gridCol={3}
            />

            <DateField
              name="passportIssuanceDate"
              label="Issuance Date"
              gridCol={3}
            />

            <DateField
              name="passportExpirationDate"
              label="Expiration Date"
              gridCol={3}
            />

            <RadioField
              name="lostOrStolenPassport"
              label="Have you ever lost a passport or had one stolen"
              options={YesNo}
            />
          </InputFlex>
        </div>
      </InputsWrapper>
    </div>
  );
};

export default PInfo;
