import React from "react";
import { motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is the process for getting started with your services?",
    answer:
      "Simply reach out to us through our contact form or call us. We will schedule a consultation to understand your needs and tailor our services to help you achieve your goals.",
  },
  {
    question: "What types of visas do you assist with?",
    answer:
      "We assist with various types of visas including student visas, travel visas, and work visas.",
  },
  {
    question: "How long does the visa application process take?",
    answer:
      "The duration varies depending on the type of visa and the country of destination. On average, it can take anywhere from a few weeks to several months. We recommend starting the process early to avoid delays.",
  },
  {
    question: "Can you help if my visa application has been previously denied?",
    answer:
      "Yes, we can review your previous application and help you address the issues that led to the denial, improving your chances for a successful reapplication.",
  },
  {
    question: "Do you book flights for groups as well?",
    answer:
      "Yes, we can arrange flight reservations for individuals and groups, ensuring everyone travels smoothly and on schedule.",
  },
  {
    question: "Can you help me find the most cost-effective flight options?",
    answer:
      "Absolutely! We use our expertise and connections to find the best travel deals and ensure you get the most cost-effective options.",
  },
  {
    question: "How do you help in selecting the right program for me?",
    answer:
      "We evaluate your academic background, interests, and career goals to recommend programs that are the best fit for you.",
  },
  {
    question: "Do you have partnerships with educational institutions?",
    answer:
      "Yes, we have partnerships with numerous reputable institutions worldwide, giving you a wide range of options to choose from.",
  },
  {
    question: "What if I don't know how to start my personal statement?",
    answer:
      "Don't worry! Our experts will guide you through the process, helping you to identify key points and craft a compelling narrative that highlights your strengths and aspirations.",
  },
  {
    question: "How do you improve my CV?",
    answer:
      "We refine your CV by highlighting your skills, experiences, and achievements in a clear and professional manner, making it attractive to potential employers or educational institutions.",
  },
  {
    question: "Can you tailor my CV for a specific job or program?",
    answer:
      "Yes, we tailor your CV to meet the specific requirements of the job or program you're applying for, increasing your chances of success.",
  },
  {
    question: "How do you ensure my application is strong?",
    answer:
      "We meticulously review all documents and forms to ensure accuracy and completeness. We also provide guidance on how to strengthen your application.",
  },
  {
    question: "Can you help me find a job abroad?",
    answer:
      "Yes, we assist with job searches, application processes, and preparation for interviews to help you secure employment abroad.",
  },
  {
    question: "Do you offer any packages that combine multiple services?",
    answer:
      "Yes, we offer comprehensive packages that combine services such as visa assistance, program selection, and flight reservations for a streamlined experience.",
  },
  {
    question: "What are your fees for these services?",
    answer:
      "Our fees vary depending on the specific services you need. Please contact us for a detailed quote based on your requirements.",
  },
  {
    question: "Do you offer support after I've moved abroad?",
    answer:
      "Yes, we provide ongoing support to help you adjust to your new environment and ensure you have the resources you need for a successful transition.",
  },
  // More questions...
];
const Faq: React.FC = () => {
  return (
    <div className="bg-[#101010]" id="faqs">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <motion.h2
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold leading-10 tracking-tight text-white"
          >
            Frequently asked questions
          </motion.h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <motion.div
                transition={{
                  type: "spring",
                  duration: 0.3,
                  delay: 0.5,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
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
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
