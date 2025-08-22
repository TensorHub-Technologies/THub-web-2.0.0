import { useState } from "react";
import "../../index.css";
import { useSelector } from "react-redux";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is THub?",
      answer:
        "Your gateway to AI apps. Drag, drop, and deploy—innovation, simplified.",
    },
    {
      question: "For Non-Coders",
      answer: "Yes. From beginners to pros, THub welcomes all.",
    },
    {
      question: "What Makes THub Different?",
      answer: "Simplicity with strength. Speed with sophistication.",
    },
    {
      question: "What Can You Build",
      answer: "Chatbots. Recommenders. Summaries. Anything you imagine.",
    },
    {
      question: "For Every Business?",
      answer: "Startups to giants—THub grows with you.",
    },
  ];

  return (
    <div
      id="accordion-flush"
      className={`flex justify-center w-100% ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"} `}
    >
      <div className="flex flex-col items-center max-w-4xl py-10">
        <h1 className="dark:text-white text-center mt-5 mb-12 text-3xl md:text-4xl lg:text-5xl font-bold">
          Questions About our{" "}
          <span className="dark:text-primary-dark text-primary">
            THub <br />
          </span>
          We have Answers!
        </h1>

        {items.map((item, index) => (
          <div key={index} className="w-full">
            <div className="group">
              <button
                type="button"
                className={`w-full  flex items-center justify-between py-5 px-6 text-secondary dark:text-secondary-dark text-left 
                ${openIndex === index ? "text-primary-dark" : "group-hover:text-primary dark:group-hover:text-primary-dark"}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex items-center gap-4 transition-transform duration-300">
                  <h3
                    className={`transition-transform duration-300 text-4xl ${openIndex === index ? "text-primary dark:text-primary-dark" : ""}`}
                    style={{ minWidth: "24px" }}
                  >
                    {openIndex === index ? "−" : "+"}
                  </h3>
                  <h3
                    className={`${openIndex === index ? "text-2xl text-primary dark:text-primary-dark" : ""}`}
                  >
                    {item.question}
                  </h3>
                </span>
              </button>
              <div
                className={`border-t transition-colors duration-300 
                ${openIndex === index ? "dark:border-primary-dark border-primary" : "border-secondary-dark dark:border-secondary-dark"}`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="py-5 px-6 text-xl text-secondary dark:text-gray-400">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
