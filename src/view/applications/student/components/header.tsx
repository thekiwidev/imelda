import React from "react";
import { FaCircleQuestion, FaFileSignature } from "react-icons/fa6";

const FormHeader: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex md:flex-row flex-col items-center gap-8 justify-between">
        <div className="mx-auto max-w-2xl lg:mx-0 flex-[0.6]">
          <p className="text-base font-semibold leading-7 text-green-600">
            Ready to Launch Your Educational Journey Abroad?
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Student Visa Application Made Easy
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Turn your dream of studying overseas into reality with our expert
            guidance. We'll simplify the complex visa application process,
            ensuring you have all the necessary documentation to embark on your
            academic adventure.
          </p>
          <div className="my-8 flex gap-8 items-center">
            <a
              href="#student-application-form"
              className="py-3 px-8 rounded-lg bg-green-600 text-white hover:bg-green-700 duration-300"
            >
              Get started{" "}
            </a>

            <button className="flex gap-2 items-center text-green-500 group hover:text-green-800 duration-300">
              <FaCircleQuestion className="group-hover:mr-2 duration-300" /> Get
              help
            </button>
          </div>
        </div>
        <div className="flex-[0.3] md:flex items-center justify-center hidden m">
          <FaFileSignature className="h-44 w-44 text-green-600" />
        </div>
      </div>
    </div>
  );
};
export default FormHeader;
