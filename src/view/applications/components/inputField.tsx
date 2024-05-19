import { FaCircleInfo } from "react-icons/fa6";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  note?: string;
  type?: "input" | "email" | "number";
  gridCol?: number;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  note,
  placeholder,
  type,
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
        <input
          type={type}
          name={name}
          id={name}
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-describedby="email-description"
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

export default InputField;
