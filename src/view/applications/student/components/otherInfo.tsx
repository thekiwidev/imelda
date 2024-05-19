import {
  EnglishCert,
  HowDidYouHearAboutUs,
  YesNo,
} from "../../../components/data";
import InputsWrapper from "../../components/inputsWrapper";
import InputFlex from "../../components/inputsFlex";
import RadioField from "../../components/radioField";
import InputField from "../../components/inputField";
import TextField from "../../components/textarea";

const OtherInformation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Other Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Other information needed to process your application.
        </p>
      </div>

      <InputsWrapper>
        <div className="px-4 py-6 sm:p-8">
          <InputFlex>
            <RadioField
              name="otherInfoEnglishCertificate"
              label="Have you had any English Certificate Exam before (e.g IELTS or
                TOEFL)"
              options={EnglishCert}
            />

            <RadioField
              name="otherInfoEnglishCertificate"
              label="How did you know about us"
              options={HowDidYouHearAboutUs}
            />

            <InputField
              name="otherInfoAgentName"
              label="Agent Name"
              note="If you were referred by an agent"
              gridCol={3}
            />

            <RadioField
              name="otherInfoAccommodation"
              label="Do you want Imelda Yayala Ltd to provide you accommodation"
              options={YesNo}
            />

            <RadioField
              name="otherInfoDisability"
              label="Do you have any disability/medical condition that might affect
                your study"
              options={YesNo}
            />

            <TextField
              name="otherInfoDisabilityName"
              label="If you have any disability or medical condition state it."
              note="Skip if you don't have any disability or medical condition"
            />
          </InputFlex>
        </div>
      </InputsWrapper>
    </div>
  );
};

export default OtherInformation;
