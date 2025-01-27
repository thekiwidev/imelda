import InputField from "../../components/inputField";

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Contact Information
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
              name="contactPersonName"
              label="Contact Person Name in the country of visit"
              gridCol={3}
            />

            <InputField
              name="contactOrganization"
              label="Organization Name"
              gridCol={3}
            />

            <InputField
              name="contactRelationship"
              label="Relationship to You"
              gridCol={3}
            />

            <InputField
              name="contactAddress"
              label="Contact Address"
              gridCol={6}
            />

            <InputField
              name="contactPhoneNumber"
              label="Contact Phone Number"
              gridCol={2}
            />

            <InputField
              name="contactEmailAddress"
              label="Contact Email Address"
              gridCol={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
