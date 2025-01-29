import FilePicker from "../../components/file-picker";

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
        <div className="p-4 px-6 text-sm leading-6">
          <p className="font-medium text-gray-900">Visa Application Form</p>
          <p className="text-gray-500">
            Provide your visa application form with signature and date
          </p>

          <FilePicker name="visaApplication" accept=".pdf" />
        </div>

        <div className="p-4 px-6 text-sm leading-6">
          <p className="font-medium text-gray-900">
            A clear Scanned Passport Copy
          </p>
          <p className="text-gray-500">
            Visa will NOT be processed until payment has been made and the
            following requirements have been submitted (A clear Scanned Passport
            Copy of applicant)
          </p>

          <FilePicker name="scannedPassport" accept=".pdf" />
        </div>

        <div className="p-4 px-6 text-sm leading-6">
          <p className="font-medium text-gray-900">
            Visa terms and conditions document
          </p>
          <p className="text-gray-500">
            Provide your visa terms and condition document with signature and
            date
          </p>

          <FilePicker name="visaTermsAndConditionsDocument" accept=".pdf" />
        </div>
      </div>
    </div>
  );
};

export default Requirements;
