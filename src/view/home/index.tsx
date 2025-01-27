import Banner from "./components/banner";
import Proposition from "./components/proposition";
import Services from "./components/services";
import Faq from "../components/faq";
import Partners from "../components/partners";
import Testimonials from "../components/testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Proposition />
      <Partners />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
