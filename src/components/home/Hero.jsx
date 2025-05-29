import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FirstPage from "./FirstPage";
import { Helmet } from "react-helmet";

// images
import sparkels from "../../assets/images/button-logo/sparkles-white.svg";

const Hero = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  let url;
  const theme = localStorage.getItem("isDarkMode") === "true" ? "dark" : "lite";
  const hostname = window.location.hostname;

  switch (hostname) {
    case "localhost":
      url = `http://localhost:8080/?theme=${theme}`;
      break;
    case "thub-web-demo-378678297066.europe-west1.run.app":
      url = `https://demo.thub.tech/`;
      break;
    default:
      url = `https://app.thub.tech/?theme=${theme}`;
      break;
  }
  const strings = [
    "Agentic Workflows",
    "RAG Systems",
    "GenAI Apps",
    "Vector Embeddings",
    "Retrieval Augmented Fine Tuning",
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
    <section className="mt-16">
      <Helmet>
        <title>THub - Build AI Apps 30X Faster | No-Code GenAI Platform</title>
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
      <div id="hero-container" className=" py-5">
        <h1 className="text-center text-primary dark:text-primary-dark  mt-20 text-7xl font-thin">
          Build with{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#3C5BA4,_#E22A90)]">
            THub
          </span>
        </h1>
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
      <FirstPage />
      <div className="flex justify-center ">
        <a href={url} target="_blank">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#B425D5] to-[#FB5582] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-8 py-4 text-center me-2 mb-2 text-lg mt-2"
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
};

export default Hero;
