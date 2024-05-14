import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "What types of visas do you specialize in?",
    answer:
      "We specialize in assisting with a wide range of visas, including tourist visas, business visas, student visas, family reunion visas, and more. During your free consultation, we can discuss your specific travel plans and determine the most appropriate visa type for your needs.",
  },
  {
    question: "How long does the visa application process typically take?",
    answer:
      "The processing time for visas can vary depending on the destination, visa type, and individual circumstances. However, we can provide an estimated time-frame during your consultation.",
  },
  {
    question: "What happens if my visa application gets rejected?",
    answer:
      "While we have a high success rate due to our meticulous preparation, there's always a chance of visa rejection.  In such cases, we'll analyze the reasons for rejection and advise you on potential next steps, which may include reapplying or appealing the decision.",
  },
  {
    question: "Do you offer a money-back guarantee on visa approvals?",
    answer:
      "Due to the complex nature of visa applications and the final decision resting with the embassy or consulate, we cannot offer a money-back guarantee on approvals. However, we guarantee our commitment to providing expert guidance and meticulous preparation to maximize your chances of success.",
  },
  {
    question: "What are your service fees?",
    answer:
      "Our service fees vary depending on the complexity of your visa application and the level of support required. We'll provide a transparent fee quote during your initial consultation.",
  },
  {
    question: "Can I handle the visa application myself without your help?",
    answer:
      "You can certainly attempt to handle the application yourself. However, the process can be complex and time-consuming. We recommend our services to ensure all requirements are met, paperwork is accurate, and the application is presented professionally, increasing your chances of approval.",
  },
  {
    question: "Do you offer travel booking services like hotels and flights?",
    answer:
      "While our focus is on visa applications, we can provide you with valuable resources for travel planning, including reputable platforms for booking hotels, flights, and tours.",
  },
  {
    question: "What additional services do you offer besides visa assistance?",
    answer:
      "We may offer additional services such as document translation and apostille procurement (official certification).  We'll discuss these options with you during your consultation to determine if they are necessary for your specific situation.",
  },
  {
    question: "Can I use your services even if I haven't booked my travel yet?",
    answer:
      "Absolutely! We recommend getting a head start on the visa application process before finalizing travel arrangements. This ensures you have ample time to complete the application and obtain your visa before your desired travel date.",
  },
  // More questions...
];
const Faq: React.FC = () => {
  return (
    <div className="bg-[#101010]" id="faqs">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FaMinus className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <FaPlus className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
