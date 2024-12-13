import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import darkLogo1 from "/assets/llm_vector/chatgpt.png";
import darkLogo2 from "/assets/llm_vector/anthropic.png";
import darkLogo4 from "/assets/llm_vector/llama_3.1.png";
import darkLogo3 from "/assets/llm_vector/gemini_logo.png";
import darkLogo5 from "/assets/llm_vector/azure.png";
import darkLogo6 from "/assets/llm_vector/ollama_lite.png";
import darkLogo7 from "/assets/llm_vector/hugging.png";
import darkLogo8 from "/assets/llm_vector/grok_dark.png";
import darkLogo9 from "/assets/llm_vector/fireworks.png";
import darkLogo10 from "/assets/llm_vector/aws_lite.png";
import darkLogo11 from "/assets/llm_vector/palm.png";
import darkLogo12 from "/assets/llm_vector/pine_lite.png";
import darkLogo13 from "/assets/llm_vector/qdrant_logo.png";
import darkLogo14 from "/assets/llm_vector/mongo.png";
import darkLogo15 from "/assets/llm_vector/faisis.png";
import darkLogo16 from "/assets/llm_vector/upstash.png";
import darkLogo17 from "/assets/llm_vector/vectara.png";
import darkLogo18 from "/assets/llm_vector/chroma.png";
import darkLogo19 from "/assets/llm_vector/redis.png";
import darkLogo20 from "/assets/llm_vector/milvus.png";
import darkLogo21 from "/assets/llm_vector/opens.png";

import lightLogo2 from "/assets/llm_vector/anthropic.png";
import lightLogo1 from "/assets/llm_vector/chatgpt.png";
import lightLogo3 from "/assets/llm_vector/Google_Gemini_logo-lite.png";
import lightLogo4 from "/assets/llm_vector/llama_3.1-lite-1.png";
import lightLogo5 from "/assets/llm_vector/azure.png";
import lightLogo6 from "/assets/llm_vector/ollama.png";
import lightLogo7 from "/assets/llm_vector/hugging.png";
import lightLogo8 from "/assets/llm_vector/grok_lite.png";
import lightLogo9 from "/assets/llm_vector/fireworks.png";
import lightLogo10 from "/assets/llm_vector/aws_dark.png";
import lightLogo11 from "/assets/llm_vector/palm.png";
import lightLogo12 from "/assets/llm_vector/pine_dark.png";
import lightLogo13 from "/assets/llm_vector/qdrant_logo.png";
import lightLogo14 from "/assets/llm_vector/mongo.png";
import lightLogo15 from "/assets/llm_vector/faisis.png";
import lightLogo16 from "/assets/llm_vector/upstash.png";
import lightLogo17 from "/assets/llm_vector/vectara.png";
import lightLogo18 from "/assets/llm_vector/chroma.png";
import lightLogo19 from "/assets/llm_vector/redis.png";
import lightLogo20 from "/assets/llm_vector/milvus.png";
import lightLogo21 from "/assets/llm_vector/opens.png";

function Features_First() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };

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
  ];

  const logos = isDarkMode ? darkLogos : lightLogos;

  const firstBlockLogos = logos.slice(0, 11);
  const secondBlockLogos = logos.slice(11);

  return (
    <section className="px-5 py-4 lg:px-16">
      <div className="w-full my-8">
        <h2 className="w-3/4 mx-auto text-center text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
          250+ Integrated Tools
        </h2>

        <div className="w-3/4 mx-auto py-4 relative">
          {/* First Block: First 8 Logos in One Line */}
          <div className="w-full overflow-hidden">
            <div className="flex justify-between animate-scroll-ltr">
              {firstBlockLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-20 flex items-center justify-center mx-2"
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="w-36 h-full object-contain mx-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Block: Last 7 Logos in One Line */}
          <div className="w-full overflow-hidden mt-8">
            <div className="flex justify-between animate-scroll-rtl">
              {secondBlockLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-20 flex items-center justify-center mx-2"
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="w-36 h-full object-contain mx-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white dark:text-secondary bg-primary hover:bg-blue-900 font-lg rounded-lg text-lg px-5 py-2.5 mt-10 dark:bg-primary-dark dark:hover:bg-pink-600 focus:outline-none"
          onClick={() => handleClick()}
        >
          Try a demo
        </button>
      </div>
    </section>
  );
}

export default Features_First;
