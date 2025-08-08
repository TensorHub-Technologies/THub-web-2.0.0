import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom/dist";

import PropTypes from "prop-types";
import "../../index.css";

// import logo
import webinarImage from "../../assets/images/Webinar-dark.gif";
import webinarImageLite from "../../assets/images/Webinar-lite.gif";
import conferenceImage from "../../assets/images/Conference-dark.gif";
import conferenceImageLite from "../../assets/images/Conference-lite.gif";
import workshopImage from "../../assets/images/Coding_workshop-dark.gif";
import workshopImageLite from "../../assets/images/Coding_workshop-lite.gif";
import anthropicLogo from "../../assets/icons/anthropic.png";
import chatgptLogo from "../../assets/icons/chatgpt.png";
import dalleLogo from "../../assets/icons/dall-e-dark.png";
import dalleLogoLite from "../../assets/icons/dall-e-lite.png";
import stabilityLogo from "../../assets/icons/stability_ai.png";
import stabilityLogoLite from "../../assets/icons/stability_ai-lite-removebg-preview.png";
import invideoLogo from "../../assets/icons/invideo_ai-dark.png";
import invideoLogoLite from "../../assets/icons/invideo_ai-lite.png";
import geminiLogo from "../../assets/icons/gemini_logo.png";
import geminiLogoLite from "../../assets/icons/Google_Gemini_logo-lite.png";
import midjourneyLogo from "../../assets/icons/mid_journey-dark.png";
import midjourneyLogoLite from "../../assets/icons/mid_journey-lite.png";
import chatgpt4oLogo from "../../assets/icons/chatgpt4o_logo-dark.png";
import chatgpt4oLogoLite from "../../assets/icons/chatgpt4o_logo-lite.png";
import mistralLogo from "../../assets/icons/mistral_ai.png";
import llamaLogo from "../../assets/icons/llama_3.1.png";
import llamaLogoLite from "../../assets/icons/llama_3.1-lite.png";
import heygenLogo from "../../assets/icons/Heygen-logo-dark.png";
import heygenLogoLite from "../../assets/icons/HeyGen_logo-lite.png";
import qdrantLogo from "../../assets/icons/qdrant_logo.png";
import weaviateLogo from "../../assets/icons/weaviate_logo.png";
import tensorLogo from "../../assets/icons/tensorflow_logo.png";
import pytorchLogo from "../../assets/icons/pytorch-dark.png";
import pytorchLogoLite from "../../assets/icons/pytorch-light.png";
import llama3Logo from "../../assets/icons/llama_3.1.png";
import langchainLogo from "../../assets/icons/langchain-dark-new.png";

const CourseCard = ({ imgSrc, title, description, logos, path }) => {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className="max-w-md group mx-auto border w-full relative rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-xl shadow-2xl transition-all duration-300 border-white/20 dark:border-white/10"
      data-aos="fade-up-sm"
    >
      <div className=" w-full">
        <div className="image-container object-contain">
          <img
            src={imgSrc}
            className="card_image w-full rounded-t-xl"
            alt={title}
          />
        </div>
        <div className={`p-4 `}>
          <h5 className="text-xl font-bold mb-2 text-secondary dark:text-secondary-dark">
            {title}
          </h5>
          <p className="text-lg text-secondary dark:text-secondary-dark mb-10 text-justify">
            {description}
          </p>
          <div className="text-center mt-4">
            {logos.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-6 my-2">
                {row.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="flex items-center justify-center rounded  p-2"
                    style={{ height: "48px", width: "92px" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 object-contain"
                      style={{ maxWidth: logo.width }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center mb-2">
            <button
              onClick={() => handleButtonClick(path)}
              className="bg-primary dark:bg-primary-dark text-white text-lg py-2 px-20 rounded-md"
            >
              Course Details
            </button>
          </div>
        </div>
      </div>
      <div className="absolute overflow-hidden inset-0 rounded-xl bg-gradient-to-r from-[rgba(60,91,164,0.3)] to-[rgba(226,42,144,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
    </div>
  );
};

const CoursesSection = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const courses = [
    {
      imgSrc: isDarkMode ? webinarImage : webinarImageLite,
      title: "MasterClass in GenAI",
      description:
        "Unlock the future of creativity with our MasterClass in Generative AI, where innovation meets cutting-edge technology.",
      logos: [
        [
          { src: anthropicLogo, alt: "Anthropic", width: "40px" },
          { src: chatgptLogo, alt: "ChatGpt", width: "40px" },
          {
            src: isDarkMode ? dalleLogo : dalleLogoLite,
            alt: "DALL-E",
            width: "76px",
          },
        ],
        [
          {
            src: isDarkMode ? stabilityLogo : stabilityLogoLite,
            alt: "Stability AI",
            width: "86px",
          },
          {
            src: isDarkMode ? invideoLogo : invideoLogoLite,
            alt: "Invideo AI",
            width: "82px",
          },
          {
            src: isDarkMode ? geminiLogo : geminiLogoLite,
            alt: "Gemini",
            width: "79px",
          },
        ],
      ],
      path: "master-class",
    },
    {
      imgSrc: isDarkMode ? conferenceImage : conferenceImageLite,
      title: "GenAI for Leaders and CxO's",
      description:
        "Empower your strategic vision with our GenAI tailored for Leaders and CxOs, driving innovation and transformation.",
      logos: [
        [
          {
            src: isDarkMode ? midjourneyLogo : midjourneyLogoLite,
            alt: "Mid Journey",
            width: "40px",
          },
          {
            src: isDarkMode ? chatgpt4oLogo : chatgpt4oLogoLite,
            alt: "ChatGpt4O",
            width: "40px",
          },
          { src: mistralLogo, alt: "Mistral AI", width: "62px" },
        ],
        [
          {
            src: isDarkMode ? stabilityLogo : stabilityLogoLite,
            alt: "Stability AI",
            width: "86px",
          },
          {
            src: isDarkMode ? llamaLogo : llamaLogoLite,
            alt: "Llama",
            width: "42px",
          },
          {
            src: isDarkMode ? heygenLogo : heygenLogoLite,
            alt: "Heygen",
            width: "86px",
          },
        ],
      ],
      path: "leadership",
    },
    {
      imgSrc: isDarkMode ? workshopImage : workshopImageLite,
      title: "GenAI for Techies",
      description:
        "Explore the cutting-edge of AI innovation tailored for tech experts ready to lead the future of technology and innovation.",
      logos: [
        [
          { src: qdrantLogo, alt: "Qdrant", width: "70px" },
          { src: weaviateLogo, alt: "Weaviate", width: "48px" },
          { src: tensorLogo, alt: "TensorFlow", width: "54px" },
        ],
        [
          {
            src: isDarkMode ? pytorchLogo : pytorchLogoLite,
            alt: "PyTorch",
            width: "86px",
          },
          {
            src: isDarkMode ? llama3Logo : llamaLogoLite,
            alt: "Llama",
            width: "42px",
          },
          { src: langchainLogo, alt: "LangChain", width: "76px" },
        ],
      ],
      path: "techie",
    },
  ];

  return (
    <section
      className={`${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <div className="text-center py-5 mt-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Start Your AI Journey
            </h2>
            <p className="text-black dark:text-white mt-1">Home / Academy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {courses.map((course, index) => (
              <div className="p-2" key={index}>
                {" "}
                {/* Added padding around each card */}
                <CourseCard key={index} {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CourseCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isDarkMode: PropTypes.string.isRequired,
};

export default CoursesSection;
