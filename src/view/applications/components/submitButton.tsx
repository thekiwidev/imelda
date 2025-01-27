import React from "react";
import { FaCircleNotch } from "react-icons/fa6";

interface ButtonProps {
  isLoading?: boolean;
}

const SubmitButton: React.FC<ButtonProps> = ({ isLoading }) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-green-600 px-16 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer"
      >
        {isLoading ? (
          <div className="flex flex-row items-center justify-center gap-x-2">
            <FaCircleNotch className="animate-spin" />{" "}
            <span>Submitting...</span>
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
