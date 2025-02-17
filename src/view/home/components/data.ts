import { FaBriefcase, FaGlobe, FaGraduationCap } from "react-icons/fa6";
import { WhoWeAreFor } from "./who-we-are-for";
import { IMG02, IMG04, IMG05 } from "../../../assets";

export const whoWeAreForData: WhoWeAreFor[] = [
  {
    name: "Aspiring Students",
    description:
      "Whether you're seeking an undergraduate degree, master's, PhD, or other certifications, we provide comprehensive support to help you achieve your academic goals abroad.",
    href: "#",
    icon: FaGraduationCap,
    image: IMG04, // Add image URL here
  },
  {
    name: "Career Seekers",
    description:
      "From white-collar professions to blue-collar jobs, we assist individuals looking to relocate for work opportunities. Whether you’re eyeing roles in corporate offices, construction sites, factories, or other fields, we’ve got you covered.",
    href: "#",
    icon: FaBriefcase,
    image: IMG02, // Add image URL here
  },
  {
    name: "Travel Enthusiasts",
    description:
      "Planning a trip? Let us handle the details. We offer expert guidance and services to make your travel experiences seamless and memorable.",
    href: "#",
    icon: FaGlobe,
    image: IMG05, // Add image URL here
  },
];
