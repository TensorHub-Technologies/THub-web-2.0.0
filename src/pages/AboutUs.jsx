import About from "../components/about/About";
import Founder from "../components/about/Founder";
import Journey from "../components/about/Journey";
import Mission from "../components/about/Mission";
import Team from "../components/about/Team";

const AboutUs = () => {
  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-5">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          About THub
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">About Us</span>
        </div>
      </div>
      <About />

      <Mission />

      <Founder />

      <Journey />

      <Team />
    </div>
  );
};

export default AboutUs;
