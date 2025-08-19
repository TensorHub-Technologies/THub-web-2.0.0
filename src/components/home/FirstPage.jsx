import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Picture_dark from "../../assets/screens/THub_Arch_dark_cropped.svg";
import Picture_light from "../../assets/screens/THub_Arch_light_cropped.svg";
import sparkels from "../../assets/images/button-logo/sparkles-white.svg";

function FirstPage() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  let url;
  const hostname = window.location.hostname;

  switch (hostname) {
    case "localhost":
      url = `http://localhost:8080/signup`;
      break;
    case "thub-web-demo-378678297066.europe-west1.run.app":
      url = `https://demo.thub.tech/signup`;
      break;
    default:
      url = `https://app.thub.tech/signup`;
      break;
  }
  const strings = [
    "Agentic AI",
    "Multi Agents",
    "Sequential Agents",
    "Vertical Agents",
    "Agent to Agent Call",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentString = strings[currentIndex];
      if (letterIndex < currentString.length) {
        setLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLetterIndex(0);
          setCurrentIndex((prev) => (prev + 1) % strings.length);
        }, 3500);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentIndex, letterIndex]);

  return (
    <section className={` `}>
      <div className="flex justify-center text-center mt-8">
        <h1 className="dark:text-white text-secondary text-5xl font-bold w-[60rem]">
          One Platform. Infinite Possibilities
        </h1>
      </div>
      <div className="flex justify-center text-center">
        <h2
          className="dark:text-white text-secondary mt-5   text-2xl md:text-3xl lg:text-4xl font-bold w-[60rem]"
          style={{ lineHeight: "3rem" }}
        >
          Build{" "}
          <span className="text-primary dark:text-primary-dark">
            {" "}
            Multi Agents
          </span>{" "}
          & <span className="text-primary dark:text-primary-dark">
            GenAI
          </span>{" "}
          Apps at Rapid Pace Across Your Favorite Tools
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[100%] mt-8 dark-bg-black">
          <img
            src={isDarkMode ? Picture_dark : Picture_light}
            alt="THub AI Platform Hero Banner showing No-code GenAI Solutions"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <a href={url} target="_blank">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#B425D5] to-[#FB5582] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-8 py-4 text-center me-2 my-8 text-lg "
          >
            <div className=" flex ">
              <span className="mr-2">
                <img src={sparkels} alt="sparkles" />
              </span>
              <span>Start Now</span>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
}

export default FirstPage;
