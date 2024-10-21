import "./Home.css";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import heroImage_dark from "../../assets/images/hero-image-dark.png";
import heroImage_light from "../../assets/images/hero-image-light.png";

function Banner() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const strings = [
    "Vector Embeddings",
    "GenAI Apps",
    "Agentic Workflows",
    "RAG Systems",
    "Retrieval Augmented Fine Tuning",
  ];
  const cursorColor = isDarkMode ? "white" : "black";

  return (
    <section id={isDarkMode ? "" : "hero-main-light"}>
      <div id="hero-container" className=" pt-10">
        <p className="text-center text-primary dark:text-primary-dark ">
          Best Agents and GenAI Apps Builder
        </p>
        <h1 className="text-center text-secondary dark:text-white mt-4 text-5xl">
          A 30X Faster Way To Build
        </h1>
        <div className="flex justify-center my-5">
          <span
            className="text-center font-bold text-5xl bg-gradient-to-r from-[#B425D5] to-[#FB5582] bg-clip-text text-transparent inline-block"
            id="type-animation"
          >
            <Typewriter
              onInit={(typewriter) => {
                strings.forEach((text) => {
                  typewriter
                    .typeString(text)
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500);
                });
                typewriter.start();
              }}
              options={{
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 100,
              }}
            />
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-[#B425D5] to-[#FB5582] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-10 py-4 text-center me-2 mb-2 text-lg"
        >
          Start Building
        </button>
      </div>
      <div className="flex justify-center">
        <div className="border-2 border-primary-dark w-8/12 my-8 rounded-3xl">
          <img
            src={isDarkMode ? heroImage_dark : heroImage_light}
            alt="Banner image"
          />
        </div>
      </div>
      <ul className="flex flex-col items-center lg:justify-center lg:flex-row lg:gap-8  dark:text-secondary-dark list-disc">
        <li>Build Agent and GenAI Apps 30X faster</li>
        <li>Build RAG Systems</li>
        <li>Agentic Workflows</li>
        <li>Build Retrieval Augmented Fine Tuning</li>
      </ul>
      <style>{`
        #type-animation .Typewriter__cursor {
          color: ${cursorColor}; 
        }
      `}</style>
    </section>
  );
}

export default Banner;
