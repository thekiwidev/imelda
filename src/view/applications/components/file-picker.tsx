import { Field, FieldProps } from "formik";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

interface FilePickerProps {
  label?: string;
  name: string;
  note?: string;
  gridCol?: 2 | 3 | 4 | 6;
  accept?: string;
  multiple?: boolean;
}

const FilePicker: React.FC<FilePickerProps> = ({
  label,
  name,
  note,
  gridCol = 6,
  accept,
  multiple = false,
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
          {({ form, meta }: FieldProps<File | File[]>) => {
            const handleChange = (
              event: React.ChangeEvent<HTMLInputElement>
            ) => {
              const files = event.target.files;
              const fileList = multiple
                ? Array.from(files || [])
                : files?.[0] || null;
              form.setFieldValue(name, fileList);
            };

            const inputClassName = `block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
              meta.touched && meta.error ? "ring-red-600" : "ring-gray-300"
            } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
              meta.touched && meta.error
                ? "focus:ring-red-600"
                : "focus:ring-green-600"
            } sm:text-sm sm:leading-6 outline-none`;

            const ariaDescribedBy = [
              note ? `${name}-description` : "",
              meta.touched && meta.error ? `${name}-error` : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div>
                <input
                  id={name}
                  name={name}
                  type="file"
                  accept={accept}
                  multiple={multiple}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-describedby={ariaDescribedBy}
                />
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

export default FilePicker;
