import { Field, FieldProps } from "formik";
import React from "react";
import { FaCalendar } from "react-icons/fa6";

interface DateFieldProps {
  label: string;
  name: string;
  note?: string;
  gridCol?: number;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
  note,
  gridCol,
}) => {
  return (
    <div className={`${gridCol ? `sm:col-span-${gridCol}` : "sm:col-span-6"}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field name={name}>
          {({ field, meta }: FieldProps<any>) => (
            <div>
              <input
                {...field}
                type="date"
                id={name}
                className={`block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  meta.touched && meta.error ? "ring-red-600" : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                  meta.touched && meta.error
                    ? "focus:ring-red-600"
                    : "focus:ring-indigo-600"
                } sm:text-sm sm:leading-6 uppercase`}
                aria-describedby={[
                  note ? `${name}-description` : "",
                  meta.touched && meta.error ? `${name}-error` : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              {meta.touched && meta.error && (
                <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
                  {meta.error}
                </p>
              )}
            </div>
          )}
        </Field>
      </div>
      {note && (
        <p
          className="mt-2 text-sm text-gray-400 flex items-center gap-2"
          id={`${name}-description`}
        >
          <FaCalendar />
          {note}
        </p>
      )}
    </div>
  );
};

export default DateField;
