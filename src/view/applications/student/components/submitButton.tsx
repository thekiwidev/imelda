import React from "react";

const SubmitButton: React.FC = () => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-lg bg-green-600 px-16 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
