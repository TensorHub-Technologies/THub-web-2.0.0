import "./Home.css";
import { useSelector } from "react-redux";

// Import dark mode logos
import darkLogo1 from "/assets/llm_vector/chatgpt.png";
import darkLogo2 from "/assets/llm_vector/anthropic.png";
import darkLogo3 from "/assets/llm_vector/gemini_logo.png";
import darkLogo4 from "/assets/llm_vector/llama_3.1.png";
import darkLogo5 from "/assets/llm_vector/azure.png";
import darkLogo6 from "/assets/llm_vector/ollama_lite.png";
import darkLogo7 from "/assets/llm_vector/hugging.png";
import darkLogo8 from "/assets/llm_vector/grok_dark.png";
import darkLogo9 from "/assets/llm_vector/fireworks.png";
import darkLogo10 from "/assets/llm_vector/aws_lite.png";
import darkLogo11 from "/assets/llm_vector/deepseek.png";
import darkLogo12 from "/assets/llm_vector/palm.png";
import darkLogo13 from "/assets/llm_vector/pine_lite.png";
import darkLogo14 from "/assets/llm_vector/qdrant_logo.png";
import darkLogo15 from "/assets/llm_vector/mongo.png";
import darkLogo16 from "/assets/llm_vector/faisis.png";
import darkLogo17 from "/assets/llm_vector/upstash.png";
import darkLogo18 from "/assets/llm_vector/vectara.png";
import darkLogo19 from "/assets/llm_vector/chroma.png";
import darkLogo20 from "/assets/llm_vector/redis.png";
import darkLogo21 from "/assets/llm_vector/milvus.png";
import darkLogo22 from "/assets/llm_vector/opens.png";

// Import light mode logos
import lightLogo1 from "/assets/llm_vector/chatgpt.png";
import lightLogo2 from "/assets/llm_vector/anthropic.png";
import lightLogo3 from "/assets/llm_vector/Google_Gemini_logo-lite.png";
import lightLogo4 from "/assets/llm_vector/llama_3.1-lite-1.png";
import lightLogo5 from "/assets/llm_vector/azure.png";
import lightLogo6 from "/assets/llm_vector/ollama.png";
import lightLogo7 from "/assets/llm_vector/hugging.png";
import lightLogo8 from "/assets/llm_vector/grok_lite.png";
import lightLogo9 from "/assets/llm_vector/fireworks.png";
import lightLogo10 from "/assets/llm_vector/aws_dark.png";
import lightLogo11 from "/assets/llm_vector/deepseek.png";
import lightLogo12 from "/assets/llm_vector/palm.png";
import lightLogo13 from "/assets/llm_vector/pine_dark.png";
import lightLogo14 from "/assets/llm_vector/qdrant_logo.png";
import lightLogo15 from "/assets/llm_vector/mongo.png";
import lightLogo16 from "/assets/llm_vector/faisis.png";
import lightLogo17 from "/assets/llm_vector/upstash.png";
import lightLogo18 from "/assets/llm_vector/vectara.png";
import lightLogo19 from "/assets/llm_vector/chroma.png";
import lightLogo20 from "/assets/llm_vector/redis.png";
import lightLogo21 from "/assets/llm_vector/milvus.png";
import lightLogo22 from "/assets/llm_vector/opens.png";

function LogoSlider() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  const darkLogos = [
    darkLogo1,
    darkLogo2,
    darkLogo3,
    darkLogo4,
    darkLogo5,
    darkLogo6,
    darkLogo7,
    darkLogo8,
    darkLogo9,
    darkLogo10,
    darkLogo11,
    darkLogo12,
    darkLogo13,
    darkLogo14,
    darkLogo15,
    darkLogo16,
    darkLogo17,
    darkLogo18,
    darkLogo19,
    darkLogo20,
    darkLogo21,
    darkLogo22,
  ];

  const lightLogos = [
    lightLogo1,
    lightLogo2,
    lightLogo3,
    lightLogo4,
    lightLogo5,
    lightLogo6,
    lightLogo7,
    lightLogo8,
    lightLogo9,
    lightLogo10,
    lightLogo11,
    lightLogo12,
    lightLogo13,
    lightLogo14,
    lightLogo15,
    lightLogo16,
    lightLogo17,
    lightLogo18,
    lightLogo19,
    lightLogo20,
    lightLogo21,
    lightLogo22,
  ];

  const logos = isDarkMode ? darkLogos : lightLogos;
  const firstBlockLogos = logos.slice(0, 12);
  const secondBlockLogos = logos.slice(12);
  return (
    <div>
      <section className={`py-12 ${isDarkMode ? "#11121C" : "#fffff"}`}>
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r dark:before:from-gray-900 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l dark:after:from-gray-900">
          <div className="animate-slide flex w-[calc(125px*18)]">
            {[...firstBlockLogos, ...firstBlockLogos].map((logo, index) => (
              <div
                key={index}
                className="slide flex w-[125px] items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-12 object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* second section */}
      <section className={`py-12 ${isDarkMode ? "#11121C" : "#fffff"}`}>
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r dark:before:from-gray-900 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l dark:after:from-gray-900">
          <div className="animate-slide-reverse flex w-[calc(125px*18)]">
            {[...secondBlockLogos, ...secondBlockLogos].map((logo, index) => (
              <div
                key={index}
                className="slide flex w-[125px] items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-12 object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LogoSlider;
