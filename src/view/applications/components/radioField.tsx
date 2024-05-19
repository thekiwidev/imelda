interface RadioComProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  gridCol?: number;
}
const RadioField: React.FC<RadioComProps> = ({
  gridCol,
  label,
  name,
  options,
}) => {
  return (
    <div className={`${gridCol ? `sm:col-span-${gridCol}` : "sm:col-span-6"}`}>
      <label className="text-base font-semibold text-gray-900">{label}</label>

      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map(({ label, value }, index) => (
            <div className="flex items-center" key={index}>
              <input
                id={`${name}-${value}`}
                name={name}
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={`${name}-${value}`}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default RadioField;
