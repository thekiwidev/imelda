import { Description, Label, Switch, SwitchGroup } from "@headlessui/react";
import React, { useState } from "react";

const Declearation: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <SwitchGroup as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Label
          as="span"
          className="text-sm font-medium leading-6 text-gray-900"
          passive
        >
          DECLARATION
        </Label>
        <Description as="span" className="text-sm text-gray-500">
          We confirm that to the best of our knowledge the information provided
          by us in this form is correct and complete.
        </Description>
      </span>
      <Switch
        checked={enabled}
        aria-required
        onChange={setEnabled}
        className={`${enabled ? "bg-green-600" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </SwitchGroup>
  );
};

export default Declearation;
