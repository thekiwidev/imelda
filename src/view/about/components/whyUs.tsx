import { motion } from "framer-motion";
import {
  FaBrain,
  FaGlobe,
  FaHeartCircleCheck,
  FaListCheck,
} from "react-icons/fa6";
import { IMG06 } from "../../../assets";

const reasons = [
  {
    name: "Expert Guidance.",
    description:
      "Our team members are highly trained and experienced travel consultants who stay up-to-date on the latest visa requirements and regulations for a wide range of destinations. They can provide you with clear and concise information tailored to your specific circumstances, helping you understand the application process, gather the necessary documentation, and avoid common mistakes. This in-depth knowledge and personalized approach ensure you have the best chance of a successful visa application",
    icon: FaBrain,
  },
  {
    name: "Personalized Service.",
    description:
      "We believe in tailoring our services to your individual needs, ensuring a stress-free and successful outcome.",
    icon: FaHeartCircleCheck,
  },
  {
    name: "Streamlined ApproachGlobal Network.",
    description:
      "We navigate the complexities of visa applications for you, saving you time and frustration.",
    icon: FaListCheck,
  },
  {
    name: "Global Network.",
    description:
      "We have established partnerships with consulates and embassies worldwide, leveraging our connections to enhance your application process.",
    icon: FaGlobe,
  },
];

const WhyUs: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Travel with Confidence
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Partner with Us for a Smooth and Successful Journey?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team possesses extensive experience in international travel
                regulations and visa processes, ensuring you navigate the
                complexities with ease.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {reasons.map((reason) => (
                  <motion.div
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    initial={{ opacity: 0, y: 100, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    key={reason.name}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <reason.icon
                        className="absolute left-1 top-1 h-5 w-5 text-green-600"
                        aria-hidden="true"
                      />
                      {reason.name}
                    </dt>{" "}
                    <dd className="inline">{reason.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <motion.img
              transition={{ type: "spring", duration: 0.7 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={IMG06}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
