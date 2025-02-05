import React from "react";

export interface WhoWeAreFor {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  image: string; // New image property
}

interface WhoWeAreProps {
  title: string;
  subtitle: string;
  description: string;
  features: WhoWeAreFor[];
}

const WhoWeAreFor: React.FC<WhoWeAreProps> = ({
  title,
  subtitle,
  description,
  features,
}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">{title}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {subtitle}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="relative mb-4">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-90 object-cover object-[top_center] rounded-lg shadow-md" // Rounded image with shadow
                  />
                </div>
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-green-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-green-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreFor;
