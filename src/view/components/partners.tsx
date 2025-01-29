import React from "react";
import { motion } from "framer-motion";
import {
  CanadaFlag,
  MalaysiaFlag,
  PolandFlag,
  UKFlag,
  USFlag,
} from "../../assets";

const Partners: React.FC = () => {
  return (
    <div className="bg-green-500/20 py-24 sm:py-32 mb-40" id="partners">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <motion.img
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={USFlag}
            alt="Transistor"
            width={158}
            height={48}
          />
          <motion.img
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={UKFlag}
            alt="Reform"
            width={158}
            height={48}
          />
          <motion.img
            transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={CanadaFlag}
            alt="Tuple"
            width={158}
            height={48}
          />
          <motion.img
            transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={PolandFlag}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <motion.img
            transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={MalaysiaFlag}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
        <motion.div
          transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              Over 2500 countries and partners use our services to better their
              travels.
            </span>
            <a href="#testimonials" className="font-semibold text-green-600">
              <span className="absolute inset-0" aria-hidden="true" /> Read our
              customer stories <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
