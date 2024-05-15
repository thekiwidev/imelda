import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaFileCircleCheck,
  FaPlaneDeparture,
  FaScaleBalanced,
  FaUserGear,
  FaUsersGear,
} from "react-icons/fa6";
import { IMG06 } from "../../../assets";

const features = [
  {
    name: "Free Visa Assessment:",
    description:
      "Our initial consultation helps us understand your travel plans and visa requirements. We'll provide a clear overview of the visa application process specific to your destination and purpose of travel.",
    icon: FaScaleBalanced,
  },
  {
    name: "Document Collection and Review:",
    description:
      "We'll guide you through the necessary documents for your visa application and ensure all paperwork is complete, accurate, and meets embassy or consulate requirements.",
    icon: FaFileCircleCheck,
  },
  {
    name: "Expert Application Assistance:",
    description:
      "Our travel consultants have in-depth knowledge of various visa applications. We'll assist you in filling out the forms accurately and provide guidance on gathering any supporting documentation needed.",
    icon: FaUserGear,
  },
  {
    name: "Clear Communication and Timely Updates:",
    description:
      "We understand the importance of staying informed. Throughout the application process, you'll receive clear and timely updates on the status of your visa and any necessary next steps.",
    icon: FaComments,
  },
  {
    name: "Embassy/Consulate Liaison (if applicable):",
    description:
      "For some visa applications, liaison with the embassy or consulate may be required. Our team can assist with communication and follow-up, ensuring a smooth application process.",
    icon: FaUsersGear,
  },
  {
    name: "Travel Planning Resources:",
    description:
      "While we don't offer comprehensive booking services, we can provide you with valuable resources to assist with your travel planning, including reputable accommodation booking platforms and trusted partners for tours or activities.",
    icon: FaPlaneDeparture,
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-[#101010] py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <motion.h2
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-green-400"
          >
            Everything you need
          </motion.h2>
          <motion.p
            transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Streamlined Visa Application Services for Every Traveler
          </motion.p>
          <motion.p
            transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            At Imelda Yayala, we offer a comprehensive suite of services to
            simplify your visa application process, regardless of your travel
            goals.
          </motion.p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.img
            transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={IMG06}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#101010] pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              transition={{ type: "spring", duration: 0.5, delay: index * 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={`${feature.name}-${index}`}
              className="relative pl-9"
            >
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Services;
