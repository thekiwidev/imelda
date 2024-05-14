import React from "react";
import {
  FaArrowTrendUp,
  FaCubesStacked,
  FaMugHot,
  FaPager,
} from "react-icons/fa6";

const features = [
  {
    name: "Streamlined Visa Application Process:",
    description:
      "We simplify the complex visa application process by handling paperwork, ensuring all requirements are met, and guiding you through each step. This minimizes errors and delays that could jeopardize your visa approval.",
    href: "#",
    icon: FaCubesStacked,
  },
  {
    name: "Expertise for Increased Approval Rates",
    description:
      "Our travel consultant has extensive knowledge of visa requirements and procedures for various destinations. This expertise helps us prepare strong applications that increase your chances of visa approval, saving you time and frustration.",
    href: "#",
    icon: FaArrowTrendUp,
  },
  {
    name: "Peace of Mind & Stress-Free Travel Planning",
    description:
      " By taking care of the visa application, we remove a significant source of stress from your travel planning. This allows you to focus on booking flights, accommodation, and planning your dream itinerary with confidence.",
    href: "#",
    icon: FaMugHot,
  },
  {
    name: "Personalized Support Throughout the Process",
    description:
      "We provide clear communication and timely updates throughout your visa application journey. You'll have a dedicated consultant readily available to answer your questions and address any concerns you may have.",
    href: "#",
    icon: FaPager,
  },
];

const Proposition: React.FC = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              Streamlined Visa Process
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Less Paperwork, Higher Approval Rates
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our travel consultant simplifies the visa application process by
              handling the document collection and ensuring all requirements are
              met. This meticulous attention to detail helps to streamline the
              application process and minimize the risk of errors or delays that
              could jeopardize your visa approval.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-[#153615]">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#202020] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-green-500 sm:text-4xl">
              Visas Simplified:{" "}
              <span className="text-white">Dream Trip Activated.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Planning a trip can be incredibly exciting, but visa applications
              often add unnecessary stress and confusion. At{" "}
              <span className="text-green-400 font-bold">Imelda yayala</span>,
              we take the worry out of visas with our streamlined process and
              expert guidance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-[#153615] shadow-sm hover:bg-green-600 
                duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Your Free Visa Assessment
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white hover:text-green-200"
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#128e29" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposition;
