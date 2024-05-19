import RadioField from "../../components/radioField";
import DateField from "../../components/dateField";
import InputField from "../../components/inputField";
import { YesNo } from "../../../components/data";

const TravelInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Travel Information
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
              name="travelInfoVisitCountry"
              label="Which Country do you intend to visit"
              gridCol={3}
            />

            <InputField
              name="travelInfoTripPurpose"
              label="Purpose of Trip"
              gridCol={3}
            />

            <DateField
              name="travelInfoArrivalDate"
              label="Intended Date of Arrival"
              gridCol={3}
            />

            <InputField
              name="travelInfoTripLength"
              label="Intended Length of stay"
              gridCol={3}
              note="How long do you intend on staying"
            />

            <InputField
              name="travelInfoAccommodationAddress"
              label="Address where you will stay"
            />

            <InputField name="travel-info-city" label="City" gridCol={2} />

            <InputField
              name="travelInfoAccommodationCity"
              label="State / Province"
              gridCol={2}
            />

            <InputField
              name="travelInfoAccommodationState"
              label="ZIP / Postal code"
              gridCol={2}
            />

            <InputField
              name="travelInfoTripFinancedBy"
              label="Person/Entity Paying for Your Trip"
              gridCol={3}
            />

            <RadioField
              name="travelInfoTravelingCompanions"
              label="Are there other persons traveling with you"
              options={YesNo}
            />

            <RadioField
              name="travelInfoPreviouslyTraveled"
              label="Have you ever been out of your country"
              options={YesNo}
            />

            <RadioField
              name="travelInfoPreviousVisaIssued"
              label="Have you ever been issued any country visa"
              options={YesNo}
            />

            <RadioField
              name="travelInfoVisaRefusal"
              label="Have you ever been refused any Visa, or been refused admission to any country, 
              or withdrawn your application for admission at the port of entry"
              options={YesNo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;
