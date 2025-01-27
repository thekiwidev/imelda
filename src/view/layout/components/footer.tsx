import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const navigation = {
  main: [
    { name: "About", href: "/about-us" },
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "./#faqs" },
    { name: "Student Visa Application", href: "/student-application" },
    { name: "Travel Visa Application", href: "/travel-application" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/14cYqt5Fhi/",
      icon: IoLogoFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/official_imeldayayala?igsh=MWhtM3g3ODZ4dndzMA==",
      icon: IoLogoInstagram,
    },
    {
      name: "X",
      href: "https://x.com/ImeldaYayala?t=5G-evU42gw0Ia_zsAEV75g&s=09",
      icon: FaXTwitter,
    },

    {
      name: "TikTok",
      href: "https://www.tiktok.com/@imeldayayala?_t=ZM-8tQ90uXau73&_r=1",
      icon: FaTiktok,
    },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Imelda, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
