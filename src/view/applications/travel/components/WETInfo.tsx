import { YesNo } from "../../../components/data";
import DateField from "../../components/dateField";
import InputField from "../../components/inputField";
import RadioField from "../../components/radioField";

const WETinfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Work/Education/Training Information
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
              name="otherSpecification"
              label="Specify Other"
              gridCol={3}
            />
          </div>

          <h2 className="font-bold text-sm mt-8 mb-4">
            Present Employer or School Information
          </h2>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              name="currentEmployerOrSchoolName"
              label="Present Employer or School Name"
              gridCol={3}
            />

            <InputField
              name="currentEmployerOrSchoolAddress"
              label="Address"
              gridCol={6}
            />

            <InputField
              name="currentEmployerOrSchoolCity"
              label="City"
              note="(Present Employer or School)"
              gridCol={2}
            />

            <InputField
              name="currentEmployerOrSchoolStateProvince"
              note="(Present Employer or School)"
              label="State/Province "
              gridCol={2}
            />

            <InputField
              name="currentEmployerOrSchoolPostalCode"
              label="Postal Zone/Zip Code"
              note="(Present Employer or School)"
              gridCol={2}
            />

            <InputField
              name="currentEmployerOrSchoolPhoneNumber"
              label="Work Phone Number"
              gridCol={3}
            />

            <InputField
              name="monthlySalary"
              label="Monthly Salary in Local Currency"
              gridCol={3}
              note="(if employed)"
            />

            <InputField
              label="Briefly Describe your Duties"
              name="jobDutiesDescription"
              type="textarea"
            />
          </div>

          <h2 className="font-bold text-sm mt-8 mb-4">
            Previous Employer or School Information
          </h2>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <RadioField
              label="Were you previously employed"
              name="previouslyEmployed"
              options={YesNo}
            />

            <RadioField
              label="Have you attended any educational institutions at a secondary level or above"
              name="educationAboveSecondary"
              options={YesNo}
            />

            <h2 className="font-bold text-sm my-4 text-amber-600 sm:col-span-6">
              If yes to the question above answer the questions below:
            </h2>

            <InputField
              name="educationalInstitutionName"
              label="Name of Institution"
            />

            <InputField
              name="educationalInstitutionAddress"
              label="Address of Institution"
            />

            <InputField
              name="educationalInstitutionCity"
              label="City"
              note="(of previous Institution)"
              gridCol={3}
            />

            <InputField
              name="educationalInstitutionStateProvince"
              label="State/Province"
              note="(of previous Institution)"
              gridCol={3}
            />

            <InputField
              name="educationalInstitutionCountry"
              label="Country/Region"
              note="(of previous Institution)"
              gridCol={3}
            />

            <InputField
              name="courseOfStudy"
              label="Course of Study"
              note="(of previous Institution)"
              gridCol={3}
            />

            <DateField
              name="dateOfAttendanceStart"
              label="Date of Attendance (start)"
              gridCol={3}
            />

            <DateField
              name="dateOfAttendanceEnd"
              label="Date of Attendance (end)"
              gridCol={3}
            />

            <InputField
              name="otherInstitutionsAttended"
              label="Write other institutions attended accordingly in the space provided below:
              (Name, Address, City, State/Region, Course of Study, and Date of Attendance)"
              type="textarea"
            />
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-8">
            <RadioField
              name="clanOrTribe"
              label="Do you belong to a clan or tribe"
              options={YesNo}
            />

            <InputField
              label="Provide a List of Languages You Speak"
              name="languagesSpoken"
              note={`Separate them with comma ","`}
            />

            <RadioField
              name="travelHistoryLastFiveYears"
              label="Have you traveled to any countries/regions within the last five years"
              options={YesNo}
            />

            <RadioField
              name="professionalOrganizations"
              label="Have you belonged to, contributed to, or worked for any professional, social, or 
              charitable organization"
              options={YesNo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WETinfo;
