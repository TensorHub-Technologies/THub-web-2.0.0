import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Picture_dark from "../../assets/screens/THub_Arch_v1_dark.svg";
import Picture_light from "../../assets/screens/THub_Arch.svg";

function FirstPage() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
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
    <section
      className={`mt-8 ${isDarkMode ? "gradient-fill-dark" : "gradient-fill-light"} `}
    >
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
        <div className="border-2 dark:border-primary-dark border-primary w-[90%] mt-8 rounded-3xl">
          <img
            src={isDarkMode ? Picture_dark : Picture_light}
            alt="THub AI Platform Hero Banner showing No-code GenAI Solutions"
            loading="lazy"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default FirstPage;
