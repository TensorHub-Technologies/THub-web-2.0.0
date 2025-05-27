import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FirstPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };
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

  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section id={isDarkMode ? "" : "hero-main-light"}>
      <div id="hero-container" className=" py-5">
        <h1 className="text-center text-primary dark:text-primary-dark mt-24 text-5xl">
          Build Smarter. Build Faster. Build with THub.
        </h1>
        <h2 className="text-center text-secondary dark:text-white mt-4 text-5xl">
          The 30X Faster Way to Launch
        </h2>
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
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-[#B425D5] to-[#FB5582] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-8 py-4 text-center me-2 mb-2 text-lg mt-5"
          onClick={() => handleClick()}
        >
          Start Now
        </button>
      </div>
    </section>
  );
};
