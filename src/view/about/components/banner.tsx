import { motion } from "framer-motion";
import { IMG03 } from "../../../assets";
const AboutBanner = () => {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-green-200/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-100 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <motion.h1
            transition={{ type: "spring", duration: 0.6 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-4xl font-bold tracking-tight text-[#153615] sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            Unveiling the World, <br />{" "}
            <span className="text-green-600">One Seamless Journey</span> <br />
            at a Time.
          </motion.h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <motion.p
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-8 text-gray-600"
            >
              We are a team of passionate travel consultants dedicated to
              transforming your travel aspirations into reality. With extensive
              experience and a deep understanding of international visa
              processes, we guide you through every step of your journey,
              ensuring a smooth and stress-free experience.
            </motion.p>
          </div>
          <motion.img
            transition={{ type: "spring", delay: 0.6 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={IMG03}
            alt=""
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-green-100 sm:h-32" />
    </div>
  );
};

export default AboutBanner;
