import React from "react";
import { FaCircleNotch } from "react-icons/fa6";

interface Props {
  isLoading: boolean;
  text: "submit" | "update";
}

const SubmitButton: React.FC<Props> = ({ isLoading, text }) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        disabled={isLoading}
        type="submit"
        className="rounded-lg bg-green-600 px-16 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-green-800 duration-150 focus-visible:outline-green-600 capitalize flex items-center justify-center gap-x-2"
      >
        {isLoading ? (
          <>
            <FaCircleNotch
              color="#16a34a"
              className="animate-spin duration-150"
            />
            <span>{text === "submit" ? "submitting" : "updating"}...</span>
          </>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
