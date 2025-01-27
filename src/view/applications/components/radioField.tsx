import { Field, FieldProps } from "formik";
import React from "react";

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

      <Field name={name}>
        {({ field, meta }: FieldProps<any>) => (
          <div>
            <fieldset className="mt-4">
              <legend className="sr-only">{label}</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                {options.map(({ label, value }, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      {...field}
                      id={`${name}-${value}`}
                      type="radio"
                      value={value}
                      checked={field.value === value}
                      className={`h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 ${
                        meta.touched && meta.error
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
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
            {meta.touched && meta.error && (
              <p className="mt-2 text-sm text-red-600">{meta.error}</p>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default RadioField;
