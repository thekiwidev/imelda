import { ChangeEvent, useEffect, useState } from "react";
import CheckboxField from "../../components/checkboxField";
import { FaFileArrowUp, FaFileCircleCheck } from "react-icons/fa6";
import { useUploadFile } from "../../../../hooks/utils/useUtils";

const Requirements: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { mutate: uploadFile } = useUploadFile();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      uploadFile(
        { file: e.target.files[0], reason: "visa-application-form" },
        {
          onSuccess: (data) => {
            console.log({ data });
          },
        }
      );
    }
  };

  useEffect(() => {
    if (selectedFile) {
      console.log({ selectedFile });
    }
  }, [selectedFile]);

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
          name="visaRequirementsApplicationForm"
          label="Visa Application Form"
          description="Provide your visa application form with signature and date"
        />

        <div className="px-6">
          <label htmlFor="file" className="block">
            Visa Application Form:
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            required
            // accept="image/*,application/pdf,.doc,.docx,.txt"
            accept="image/*,application/pdf"
            className="hidden"
          />
          <label
            htmlFor="file"
            className={`mt-2 flex items-center justify-center gap-x-2 px-6 py-3 border-2 text-gray-400 border-gray-300 border-dashed rounded-xl hover:text-gray-500 hover:border-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-300 ease-in-out cursor-pointer ${
              selectedFile && "bg-green-50 border-green-200 text-green-500"
            }`}
          >
            {selectedFile ? (
              <FaFileCircleCheck className="text-2xl" />
            ) : (
              <FaFileArrowUp className="text-2xl" />
            )}
            <span
              className={`text-sm ${
                selectedFile ? "text-green-500" : "text-gray-400 italic"
              }`}
            >
              {selectedFile ? selectedFile.name : "No file selected"}
            </span>
          </label>
        </div>
        <CheckboxField
          name="visaRequirementsNote"
          label="A clear Scanned Passport Copy"
          description="Visa will NOT be processed until payment has been made and the following
          requirements have been submitted (A clear Scanned Passport Copy of applicant)"
        />

        <CheckboxField
          name="visaRequirementsTermsAndConditions"
          label="Visa terms and conditions document"
          description="Provide your visa terms and condition document with signature and date"
        />
      </div>
    </div>
  );
};

export default Requirements;
