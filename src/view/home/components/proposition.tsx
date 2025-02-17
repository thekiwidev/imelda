import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowTrendUp,
  FaCubesStacked,
  FaGears,
  FaGlobe,
  FaHandsHoldingChild,
  FaHandsHoldingCircle,
} from "react-icons/fa6";
import { TbBookmarkPlus } from "react-icons/tb";
import { whatsappLink } from "../../components/data";

const features = [
  {
    name: "Comprehensive Services:",
    description:
      "From visa assistance to personal statement crafting, we offer a wide range of services to support your study, work, and travel ambitions.",
    href: "#",
    icon: FaCubesStacked,
  },
  {
    name: "Expert Guidance:",
    description:
      "Our team of experienced professionals provides personalized advice and insights to help you navigate the complexities of studying, working, or relocating abroad.",
    href: "#",
    icon: FaHandsHoldingChild,
  },
  {
    name: "Tailored Solutions:",
    description:
      "We understand that each client's needs are unique. We customize our services to fit your specific goals and requirements, ensuring a perfect match.",
    href: "#",
    icon: FaGears,
  },
  {
    name: "Proven Track Record:",
    description:
      "With a history of successful placements and satisfied clients, Imelda Yayala has built a reputation for excellence and reliability.",
    href: "#",
    icon: FaArrowTrendUp,
  },
  {
    name: "Global Network:",
    description:
      "Our extensive connections with educational institutions, employers, and travel partners worldwide enable us to offer you the best opportunities and resources.",
    href: "#",
    icon: FaGlobe,
  },
  {
    name: "Dedicated Support:",
    description:
      "We are committed to your success and provide ongoing support throughout your journey, from the initial consultation to your final destination.",
    href: "#",
    icon: FaHandsHoldingCircle,
  },
];

const Proposition: React.FC = () => {
  return (
    <div id="proposition">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              transition={{ type: "spring", duration: 0.5 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-green-600"
            >
              Why Choose Imelda Yayala?
            </motion.h2>
            <motion.p
              transition={{ type: "spring", duration: 0.7 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Less Paperwork, Higher Approval Rates
            </motion.p>
            <motion.p
              transition={{ type: "spring", duration: 0.8 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Experience seamless, efficient, and successful adventures with our
              trusted and proven services. Let us help you achieve your dreams
              abroad.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={feature.name}
                  className="relative pl-16"
                >
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
                </motion.div>
              ))}
            </dl>

            <div className="flex items-center justify-center my-16">
              <a
                href={whatsappLink}
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 duration-300 active:scale-[0.95]"
              >
                <TbBookmarkPlus />
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            transition={{ type: "spring", duration: 0.8 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative isolate overflow-hidden bg-[#202020] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          >
            <motion.h2
              transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-green-500 sm:text-4xl"
            >
              Visa Simplified:{" "}
              <span className="text-white">Dream Trip Activated.</span>
            </motion.h2>
            <motion.p
              transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
            >
              Planning a trip can be incredibly exciting, but visa applications
              often add unnecessary stress and confusion. At{" "}
              <span className="text-green-400 font-bold">Imelda yayala</span>,
              we take the worry out of visas with our streamlined process and
              expert guidance.
            </motion.p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                transition={{ type: "spring", duration: 0.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href={whatsappLink}
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-[#153615] shadow-sm hover:bg-green-600
                duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Your Free Visa Assessment
              </motion.a>
              {/* <motion.a
                transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="#"
                className="text-sm font-semibold leading-6 text-white hover:text-green-200"
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </motion.a> */}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Proposition;
