import { Field, FieldProps } from "formik";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  note?: string;
  type?: "text" | "email" | "number" | "textarea";
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
  const gridColClasses = {
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    6: "sm:col-span-6",
  };

  return (
    <div className={gridColClasses[gridCol]}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field name={name}>
          {({ field, meta }: FieldProps<string | number>) => {
            const inputClassName = `block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
              meta.touched && meta.error ? "ring-red-600" : "ring-gray-300"
            } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
              meta.touched && meta.error
                ? "focus:ring-red-600"
                : "focus:ring-green-600"
            } sm:text-sm sm:leading-6 outline-none ${
              type === "textarea" && "h-32 resize-none"
            }`;

            const ariaDescribedBy = [
              note ? `${name}-description` : "",
              meta.touched && meta.error ? `${name}-error` : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div>
                {type === "textarea" ? (
                  <textarea
                    {...field}
                    id={name}
                    className={inputClassName}
                    placeholder={placeholder}
                    aria-describedby={ariaDescribedBy}
                  />
                ) : (
                  <input
                    {...field}
                    type={type}
                    id={name}
                    className={inputClassName}
                    placeholder={placeholder}
                    aria-describedby={ariaDescribedBy}
                  />
                )}
                {meta.touched && meta.error && (
                  <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>
                    {meta.error}
                  </p>
                )}
              </div>
            );
          }}
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
