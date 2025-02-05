import React, { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { logo } from "../../../assets";

import {
  FaBriefcase,
  FaChevronDown,
  FaComments,
  FaGraduationCap,
  FaHeadset,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { WhatsAppLink } from "../../components/data";

const forms = [
  {
    name: "Student Visa Applications",
    description: "Pursue your academic dreams abroad",
    href: "/student-application",
    icon: FaGraduationCap,
  },
  {
    name: "Other Travel Visa Applications",
    description: "Simplify your travel visa application",
    href: "/travel-application",
    icon: FaBriefcase,
  },
];

const callsToAction = [
  { name: "See testimonies", href: "#testimonials", icon: FaComments },
  { name: "Get in touch", href: "#", icon: FaHeadset },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [isFormPage, setIsFormPage] = useState<boolean>(false);

  useEffect(() => {
    if (
      pathname === "/student-application" ||
      pathname === "/travel-application"
    ) {
      setIsFormPage(true);
    } else setIsFormPage(false);
  }, [isFormPage, pathname]);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {isFormPage && (
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>
          )}

          <Link
            to="/about-us"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Forms
              <FaChevronDown
                className="h-3 w-3 flex-none text-gray-300"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {forms.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          {!isFormPage && (
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
          )}

          {!isFormPage && (
            <a
              href="#proposition"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Why Us
            </a>
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            target="_blank"
            href={WhatsAppLink}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Book Consultation <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiMiniXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {forms.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    to="/about-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  {!isFormPage && (
                    <a
                      href="#services"
                      className="text-sm font-semibold leading-6 text-gray-900 block"
                    >
                      Services
                    </a>
                  )}
                  {!isFormPage && (
                    <a
                      href="#proposition"
                      className="text-sm font-semibold leading-6 text-gray-900 block"
                    >
                      Value Proposition
                    </a>
                  )}
                </div>
                <div className="py-6">
                  <a
                    target="_blank"
                    href={WhatsAppLink}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
