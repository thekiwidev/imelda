import { FaCircleInfo } from "react-icons/fa6";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  note?: string;
  gridCol?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  gridCol,
  label,
  name,
  note,
  placeholder,
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
        <textarea
          rows={4}
          name={name}
          id={name}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
          defaultValue={""}
        />
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

export default TextField;
