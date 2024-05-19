import Faq from "../components/faq";
import Testimonials from "../components/testimonials";
import AboutFeatures from "./components/aboutFeatures";
import AboutBanner from "./components/banner";
import WhyUs from "./components/whyUs";

const About: React.FC = () => {
  return (
    <div>
      <AboutBanner />
      <AboutFeatures />
      <WhyUs />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default About;
