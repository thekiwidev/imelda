import React from "react";
import {
  EnglishCertExam,
  HowDidYouHearAboutUs,
} from "../../../components/data";
import { FaCircleInfo } from "react-icons/fa6";

const OtherInformation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Other Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Other information needed to process your application.
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label className="text-base font-semibold text-gray-900">
                Have you had any English Certificate Exam before (e.g IELTS or
                TOEFL)
              </label>

              <fieldset className="mt-4">
                <legend className="sr-only">Any english exam cerificate</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {EnglishCertExam.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={option.id}
                        name="exam-certificate"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                      >
                        {option.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-6">
              <label className="text-base font-semibold text-gray-900">
                How did you know about us?
              </label>

              <fieldset className="mt-4">
                <legend className="sr-only">How did you hear about</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {HowDidYouHearAboutUs.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={option.id}
                        name="how-you-heard-about-us"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                      >
                        {option.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="agent-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agent full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="agent-name"
                  id="agent-name"
                  autoComplete="agent-given-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p
                className="mt-2 text-sm text-gray-400 flex items-center gap-2"
                id="name-description"
              >
                <FaCircleInfo />
                If you were referred by an agent
              </p>
            </div>

            <div className="sm:col-span-6">
              <label className="text-base font-semibold text-gray-900">
                Do you want Imelda Yahala Ltd to provide you accommodation
              </label>

              <fieldset className="mt-4">
                <legend className="sr-only">
                  Should Imelda provide accommodation
                </legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      id="provide-accomodation-yes"
                      name="provide-accomodation"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="provide-accomodation-yes"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="provide-accomodation-no"
                      name="provide-accomodation"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="provide-accomodation-no"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-6">
              <label className="text-base font-semibold text-gray-900">
                Do you have any disability/medical condition that might affect
                your study?
              </label>

              <fieldset className="mt-4">
                <legend className="sr-only">Any disability</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      id="disability-info-yes"
                      name="disability-info"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="disability-info-yes"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="disability-info-no"
                      name="disability-info"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="disability-info-no"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="disability-description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                If you have any disability or medical condition state it.
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="disability-description"
                  id="disability-description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                  defaultValue={""}
                />
              </div>
              <p
                className="mt-2 text-sm text-gray-400 flex items-center gap-2"
                id="name-description"
              >
                <FaCircleInfo />
                Skip if you don't have any disability or medical condition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
