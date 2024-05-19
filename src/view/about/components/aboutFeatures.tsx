import { motion } from "framer-motion";
import { FaCompass, FaGlobe, FaHandshake, FaListCheck } from "react-icons/fa6";

const features = [
  {
    name: "Unveiling Your Travel Dreams",
    description:
      "We get to know your unique travel goals, preferences, and budget to craft an itinerary that perfectly aligns with your vision",
    icon: FaGlobe,
  },
  {
    name: "Visa Navigation Expertise",
    description:
      "We leverage our expertise to navigate complex visa requirements for your chosen destination, ensuring you understand the process and avoid potential pitfalls.",
    icon: FaCompass,
  },
  {
    name: "Comprehensive Guidance & Support",
    description:
      "We provide comprehensive guidance on documentation, application procedures, and potential challenges you might encounter, equipping you for success.",
    icon: FaListCheck,
  },
  {
    name: "Your Dedicated Partner Throughout",
    description:
      "We offer ongoing support throughout the visa application process, ensuring you have the information and resources you need to succeed. We're here to answer your questions and address any concerns you may have.",
    icon: FaHandshake,
  },
];

const AboutFeatures: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="proposition">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <motion.h2
              transition={{ type: "spring" }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-green-600"
            >
              Beyond the Brochure:
            </motion.h2>
            <motion.p
              transition={{ type: "spring", delay: 0.2 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Personalized Expertise
            </motion.p>
            <motion.p
              transition={{ type: "spring", delay: 0.4 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-base leading-7 text-gray-600"
            >
              We believe travel is more than just booking flights and hotels.
              It's about immersing yourself in new cultures, creating lasting
              memories, and experiencing the world firsthand. That's why we take
              a personalized approach to travel planning.
            </motion.p>
          </div>

          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                transition={{ type: "spring" }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={feature.name}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
