import { FaCircleInfo } from "react-icons/fa6";
import { Field, FieldProps } from "formik";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  note?: string;
  type?: "text" | "email" | "number";
  gridCol?: 2 | 3 | 4 | 6;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  note,
  placeholder,
  type = "text",
  gridCol = 6,
}) => {
  const gridClass = `sm:col-span-${gridCol}`;

  return (
    <div className={gridClass}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field name={name}>
          {({ field, meta }: FieldProps) => (
            <>
              <input
                {...field}
                type={type}
                id={name}
                placeholder={placeholder}
                className={`block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 ${
                  meta.touched && meta.error
                    ? "ring-red-500 focus:ring-red-500"
                    : ""
                }`}
                aria-describedby={`${name}-description`}
              />
              {meta.touched && meta.error && (
                <p className="mt-2 text-sm text-red-600">{meta.error}</p>
              )}
            </>
          )}
        </Field>
      </div>
      {note && (
        <p
          className="mt-2 text-sm text-gray-400 flex items-center gap-2"
          id={`${name}-description`}
        >
          <FaCircleInfo />
          {note}
        </p>
      )}
    </div>
  );
};

export default InputField;
