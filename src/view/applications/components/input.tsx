import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  note?: string;
  type?: "input" | "email" | "number";
}

const Input: React.FC<InputProps> = ({ label, note, placeholder, type }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-describedby="email-description"
        />
      </div>
      {note && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {note}
        </p>
      )}
    </div>
  );
};

export default Input;
