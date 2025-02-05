import React from "react";
import Banner from "./components/banner";
import Proposition from "./components/proposition";
import Services from "./components/services";
import Faq from "../components/faq";
import Partners from "../components/partners";
import Testimonials from "../components/testimonials";
import WhoWeAreFor from "./components/who-we-are-for";
import { whoWeAreForData } from "./components/data";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <WhoWeAreFor
        features={whoWeAreForData}
        title="Ready for your next adventure?"
        subtitle="We empower individuals at every stage to explore the world through study, work, or travel."
        description="Our services are tailored for:"
      />
      <Proposition />
      <Partners />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
