import CheckboxField from "../../components/checkboxField";

const Agreement: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Agreement and Declaration
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 flex flex-row items-center gap-2">
          Sign the following agreement by checking the box.
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <CheckboxField
          name="agreement"
          label="Agreement and Acknowledgement"
          description="I agree and testify that all the information I supplied above are true and correct. I will not hold Smart future resources/Imelda Yayala Ltd responsible if my visa and/or application is rejected, delayed and/or have error(s). I also accept my application is not complete without accepting the visa terms and conditions of smart future resources ltd/Imelda Yayala Ltd."
          isRequired
        />
      </div>
    </div>
  );
};

export default Agreement;
