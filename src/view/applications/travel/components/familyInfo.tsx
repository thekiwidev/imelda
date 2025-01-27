import { YesNo } from "../../../components/data";
import DateField from "../../components/dateField";
import InputField from "../../components/inputField";
import RadioField from "../../components/radioField";

const FamilyInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Family Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 flex flex-row items-center gap-2">
          Fill the form accordingly, this will be use for your Visa Appointment
          Application
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              name="fatherSurname"
              label="Father's Surnames"
              gridCol={3}
            />

            <InputField
              name="fatherGivenNames"
              label="Father's Given Names"
              gridCol={3}
            />

            <DateField
              name="fatherDateOfBirth"
              label="Father's Date of Birth"
              gridCol={3}
            />

            <RadioField
              name="fatherInVisitCountry"
              label="Is your Father in the country you intend to visit"
              options={YesNo}
            />

            <InputField
              name="motherSurname"
              label="Mother's Surnames"
              gridCol={3}
            />

            <InputField
              name="motherGivenNames"
              label="Mother's Given Names"
              gridCol={3}
            />

            <DateField
              name="motherDateOfBirth"
              label="Mother's Date of Birth"
              gridCol={3}
            />

            <RadioField
              name="motherInVisitCountry"
              label="Is your Mother in the country you intend to visit"
              options={YesNo}
            />

            <RadioField
              name="immediateRelativesInVisitCountry"
              label="Do you have any immediate relatives, in the country you intend to visit"
              options={YesNo}
            />
          </div>

          <h2 className="font-bold text-sm my-4 text-amber-600">
            If yes to the question above fill the questions below:
          </h2>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField name="relativeName" label="Relative Name" gridCol={3} />

            <InputField
              name="relativeRelationship"
              label="Relative relationship to you"
              gridCol={3}
            />

            <InputField
              name="relativeMaritalStatus"
              label="Relative marital status"
              gridCol={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
