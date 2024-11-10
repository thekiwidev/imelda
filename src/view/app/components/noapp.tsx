import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NoApp = () => {
  return (
    <div className="flex justify-center mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div className="text-center mt-24">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="mx-auto h-12 w-12 text-gray-400"
        >
          <path
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">
          No applications yet
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating a new application.
        </p>
        <div className="mt-6">
          <Popover>
            <PopoverButton className="flex items-center justify-center gap-x-2 mx-auto border px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-800 duration-150 data-[active]:bg-green-800 outline-none">
              <FaCirclePlus /> New Application
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-green-500/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 border mt-2"
            >
              <div className="p-3">
                <Link
                  to="travel-visa-application"
                  className="block rounded-lg py-2 px-3 transition hover:bg-green-800/5"
                >
                  <p className="font-semibold text-black">
                    Travel Visa Application
                  </p>
                  <p className="text-black/50">For business or pleasure</p>
                </Link>

                <Link
                  className="block rounded-lg py-2 px-3 transition hover:bg-green-800/5"
                  to="study-visa-application"
                >
                  <p className="font-semibold text-black">
                    Study Visa Application
                  </p>
                  <p className="text-black/50">Your academics journey</p>
                </Link>
              </div>

              <div className="p-3">
                <Link
                  className="block rounded-lg py-2 px-3 transition hover:bg-green-800/5"
                  to="spot-reservation"
                >
                  <p className="font-semibold text-black">Spot Reservation</p>
                  <p className="text-black/50">
                    Reserve a spot as a skilled worker
                  </p>
                </Link>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NoApp;
