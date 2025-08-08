import About from "../components/about/About";
import Journey from "../components/about/Journey";
import Team from "../components/about/Team";
import "../index.css";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div
      className={`border-red-400 ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <div className="text-center py-5 mt-20">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          About THub
        </h3>
        <div className="mt-2">
          <span className="text-black dark:text-white">Home / </span>
          <span className="text-black dark:text-white">About Us</span>
        </div>
      </div>
      <About />

      <Journey />

      <Team />
    </div>
  );
};

export default AboutUs;
