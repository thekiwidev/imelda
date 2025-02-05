import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaComments,
  FaFileCircleCheck,
  FaGraduationCap,
  FaLanguage,
  FaPlaneDeparture,
  FaScaleBalanced,
  FaUserGear,
  FaUsersGear,
} from "react-icons/fa6";
import { IMG06 } from "../../../assets";

const features = [
  {
    name: "Visa Assistance:",
    description:
      "We simplify the visa application process by providing expert guidance for student visas, travel visas, work visas, and more, ensuring you meet all the requirements for a smooth and successful approval.",
    icon: FaScaleBalanced,
  },
  {
    name: "Flight Reservation:",
    description:
      "Our flight reservation service ensures you get the best travel options and prices, making your journey stress-free from the start.",
    icon: FaFileCircleCheck,
  },
  {
    name: "Program Selection:",
    description:
      "We help you find the ideal study program that matches your academic goals and personal interests, ensuring a perfect fit for your educational journey.",
    icon: FaUserGear,
  },
  {
    name: "Personal Statement:",
    description:
      "Stand out with a compelling personal statement. Our experts will help you craft a narrative that highlights your strengths and aspirations, making your application memorable.",
    icon: FaComments,
  },
  {
    name: "CV Redaction",
    description:
      "Enhance your CV with our professional redaction services. We focus on showcasing your skills and experiences in the best possible light to potential employers or educational institutions.",
    icon: FaUsersGear,
  },
  {
    name: "Application Processing:",
    description:
      "We assist you through every step of the application process, from preparing documents to submitting your application, ensuring all details are handled with care and precision.",
    icon: FaPlaneDeparture,
  },
  {
    name: "Destination Counselling:",
    description:
      "Receive personalised advice on the best study or work destinations based on your goals and preferences, helping you make informed and confident decisions.",
    icon: FaLanguage,
  },
  {
    name: "Study Information:",
    description:
      "Access comprehensive information about studying abroad, including academic opportunities, cultural insights, and practical tips to make the most of your educational experience.",
    icon: FaGraduationCap,
  },
  {
    name: "Work Information:",
    description:
      "Get detailed information about working abroad, including job opportunities, work culture, and essential guidelines to successfully navigate your international career.",
    icon: FaBriefcase,
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
