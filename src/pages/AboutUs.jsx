import About from "../components/about/About";
import Journey from "../components/about/Journey";
import Team from "../components/about/Team";

const AboutUs = () => {
  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-5 mt-20">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          About THub
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">About Us</span>
        </div>
      </div>
      <About />

      <Journey />

      <Team />
    </div>
  );
};

export default AboutUs;
