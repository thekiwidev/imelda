import React from "react";
import { motion } from "framer-motion";
import { FaCircleUser } from "react-icons/fa6";

interface TestimonyProps {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl?: string;
    logoUrl?: string;
  };
}

// const featuredTestimonial = {
//   body: "I initially hesitated to use a visa consultancy service, but I'm so glad I did! Imelda Yayala streamlined the entire visa application process for my family vacation to Europe.  They saved me a lot of time and frustration, and their expertise was worth every penny.  We're now exploring Europe with confidence, knowing our visas are in order.",
//   author: {
//     name: "Name Other",
//     handle: "otherness",
//     imageUrl:
//       "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
//     logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
//   },
// };

const testimonials: TestimonyProps[] = [
  {
    body: "I was overwhelmed by the visa application process for my dream trip to Japan. Meldy at Imelda Yayala was a lifesaver! They guided me through everything, got my visa fast, and now I'm exploring Japan stress-free",
    author: {
      name: "Sarah K.",
      handle: "sarahkendrick",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More testimonials...
  {
    body: "My family reunion in Italy was almost derailed by a complex visa application for my elderly parents. Thankfully, I found Imelda Yayala. They handled the entire process with professionalism and patience, ensuring all documents were translated and apostilled correctly. Now, my family is finally reunited, and we're having a magical time exploring Italy together.",
    author: {
      name: "Andre K.",
      handle: "iamAndre",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "I initially hesitated to use a visa consultancy service, but I'm so glad I did! Imelda Yayala streamlined the entire visa application process for my family vacation to Europe.",
    author: {
      name: "Ezekiel Adams",
      handle: "ezzy_adams",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

// [
//   [
//     {
//       body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
//       author: {
//         name: "Tom Cook",
//         handle: "tomcook",
//         imageUrl:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     },
//     // More testimonials...
//   ],
//   [
//     {
//       body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
//       author: {
//         name: "Leonard Krasner",
//         handle: "leonardkrasner",
//         imageUrl:
//           "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     },
//     // More testimonials...
//   ],
// ],
// [
//   {
//     body: "My family reunion in Italy was almost derailed by a complex visa application for my elderly parents. Thankfully, I found Imelda Yayala. They handled the entire process with professionalism and patience, ensuring all documents were translated and apostilled correctly. Now, my family is finally reunited, and we're having a magical time exploring Italy together.",
//     author: {
//       name: "Tom Cook",
//       handle: "tomboy",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   // More testimonials...
// ],

const Testimonials: React.FC = () => {
  return (
    <div
      className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
      id="testimonials"
    >
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#80ffa2] to-[#00ffd9]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#84ff80] to-[#89fcc8] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flex xl:flex-row sm:flex-col items-start gap-8 text-sm leading-6 text-gray-900 sm:mt-20 xl:mx-0 xl:max-w-none">
          {testimonials.map((testimony, index) => (
            <motion.figure
              key={index}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: index * 0.1,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 ${
                index === 1 ? "flex-[0.5] " : "flex-[0.25]"
              }`}
            >
              <blockquote
                className={`p-6 sm:p-12 ${
                  index === 1 &&
                  "text-lg leading-7 font-semibold tracking-tight sm:text-xl sm:leading-8 text-gray-900"
                }`}
              >
                <p>{`“${testimony.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <FaCircleUser className="text-gray-400 h-[32px] w-[32px] aspect-square" />
                <div className="flex-auto">
                  <div className="font-semibold">{testimony.author.name}</div>
                  <div className="text-gray-600">{`@${testimony.author.handle}`}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
          {/* <motion.figure
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
          >
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </motion.figure> */}
          {/* {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              <div
                key={"jj"}
                className={`(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )`}
              >
                {column.map((testimonial) => (
                  <motion.figure
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      delay: columnIdx * 0.2,
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={testimonial.author.handle}
                    className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={testimonial.author.imageUrl}
                        alt=""
                      />
                      <div>
                        <div className="font-semibold">
                          {testimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
