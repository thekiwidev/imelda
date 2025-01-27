import CheckboxField from "../../components/checkboxField";

const Requirements: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Visa Requirements
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 flex flex-row items-center gap-2">
          The following are the requirements to complete your visa application.
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <CheckboxField
          name="applicantSignatureAndDate"
          label="Applicant signature and date "
          description="Complete your application above by with digital signature and date."
          isRequired
        />

        <CheckboxField
          name="parentSignatureAndDate"
          label="Parent/Guardian's signature and date"
          description="Complete the parent/guardian's signature and date on the application form."
          isRequired
        />
      </div>
    </div>
  );
};

export default Requirements;
