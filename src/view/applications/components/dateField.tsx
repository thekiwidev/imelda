import { FaCalendar } from "react-icons/fa6";

interface DateFieldProps {
  label: string;
  name: string;
  note?: string;
  gridCol?: number;
}

const DateField: React.FC<DateFieldProps> = ({ label, name, gridCol }) => {
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
          type="date"
          name={name}
          id={name}
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase"
          aria-describedby="email-description"
        />
      </div>
      <p
        className="mt-2 text-sm text-gray-400 flex items-center gap-2"
        id="name-description"
      >
        <FaCalendar />
        Click the calendar icon to show date picker
      </p>
    </div>
  );
};

export default DateField;
