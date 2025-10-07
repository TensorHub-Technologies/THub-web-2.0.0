import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FirstPage from "./FirstPage";
import { Helmet } from "react-helmet";
import "../../index.css";

// images
import UsecaseHome from "../usecases/UsecasesHome";
import Features_First from "./Features_First";

const Hero = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  const strings = [
    "Agentic AI",
    "Multi Agents",
    "Sequential Agents",
    "Vertical Agents",
    "Agent to Agent Call",
  ];
  const cursorColor = isDarkMode ? "white" : "black";

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentString = strings[currentIndex];
      if (letterIndex < currentString.length) {
        setCurrentText((prev) => prev + currentString.charAt(letterIndex));
        setLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText("");
          setLetterIndex(0);
          setCurrentIndex((prev) => (prev + 1) % strings.length);
        }, 3500);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentIndex, letterIndex]);

  return (
    <section
      className={`mt-8 relative ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <Helmet>
        <title>THub - Simply Drag Drop Deploy AI Agents</title>
        <meta
          name="description"
          content="Launch agentic workflows, RAG systems, and GenAI apps 30x faster with THub’s no-code AI platform. Start building smarter today!"
        />
        <meta
          name="keywords"
          content="No-code AI platform, GenAI apps, RAG systems, Agentic workflows, AI automation"
        />
        <link rel="canonical" href="https://thub.tech/" />
      </Helmet>
      <div className={`py-5`}>
        <h1 className="text-center text-primary dark:text-primary-dark mt-24 text-5xl">
          Build Smarter. Build Faster. Build with THub.
        </h1>
        <h3 className="text-center text-secondary dark:text-white mt-4 text-5xl">
          The 30X Faster Way to Launch
        </h3>
        <div className="flex justify-center my-4">
          <span
            className="text-center font-bold text-5xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent inline-block"
            id="type-animation"
          >
            {currentText}
            <span className="Typewriter__cursor" style={{ color: cursorColor }}>
              |
            </span>
          </span>
        </div>
      </div>
      <UsecaseHome />
      <FirstPage />
      <Features_First />
    </section>
  );
};

export default Hero;
