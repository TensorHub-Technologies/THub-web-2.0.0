import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Picture_dark from "../../assets/images/Picture2.png";
import Picture_light from "../../assets/images/hero-pic-full.png";

function FirstPage() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const strings = [
    "Agentic Workflows",
    "RAG Systems",
    "GenAI Apps",
    "Vector Embeddings",
    "Retrieval Augmented Fine Tuning",
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
    <>
      <section id={isDarkMode ? "" : ""}>
        <div className="flex justify-center">
          <div className="border-2 dark:border-primary-dark border-primary w-8/12 my-10 rounded-3xl">
            <img
              src={isDarkMode ? Picture_dark : Picture_light}
              alt="THub AI Platform Hero Banner showing No-code GenAI Solutions"
              loading="lazy"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstPage;
