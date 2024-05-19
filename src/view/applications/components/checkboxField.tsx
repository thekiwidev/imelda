interface CheckboxProps {
  label: string;
  description?: string;
  name: string;
  isRequired?: boolean;
}

const CheckboxField: React.FC<CheckboxProps> = ({
  description,
  isRequired,
  label,
  name,
}) => {
  return (
    <fieldset className="p-6">
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id={name}
              aria-describedby={`${name}-description`}
              name={name}
              type="checkbox"
              required={isRequired}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={name} className="font-medium text-gray-900">
              {label}
            </label>
            <p id={`${name}-description`} className="text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckboxField;
