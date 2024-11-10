import { useState } from "react";

const FormAlert = () => {
  const [isConsulted, setIsConsulted] = useState<boolean>(false);

  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          checked={isConsulted}
          onChange={(e) => setIsConsulted(e.target.checked)}
          required
          className="h-4 w-4 rounded-md border-gray-300 text-green-600 focus:ring-green-600 accent-green-500"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label
          htmlFor="comments"
          className={`font-bold ${
            isConsulted ? "text-green-600" : "font-medium text-amber-600"
          }`}
        >
          Before you start
        </label>
        <p
          id="comments-description"
          className={`${isConsulted ? "text-green-500" : "text-amber-500"}`}
        >
          Agree that you have consulted Imelda yayala, and has been given
          instructions to fill out this application form.
        </p>
      </div>
    </div>
  );
};

export default FormAlert;
