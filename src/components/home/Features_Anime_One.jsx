import { useNavigate } from "react-router-dom";
import feature_first_gif_dark from "../../assets/illustrations/feature_first-1.gif";
import feature_first_gif_light from "../../assets/illustrations/feature_first-2.gif";

// redux
import { useSelector } from "react-redux";

function Features_Anime_One() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };

  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark mt-5">Features 1</p>
          <h1 className="text-4xl sm:text-5xl mt-5 dark:text-white">
            Drag-and-Drop
          </h1>
          <h1 className="text-4xl sm:text-5xl mt-2 dark:text-white">
            GenerativeAI App Creation
          </h1>
          <p className="my-5 dark:text-secondary-dark">
            Unleash Creativity with THub: Effortlessly Craft AI-powered Apps in
            Minutes!
          </p>

          <ul className="list-disc flex flex-col gap-3">
            <li className="flex gap-2">
              <div className="w-4 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  Utilize drag-and-drop functionality for quick and intuitive
                  app development.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-4 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  Utilize drag-and-drop functionality for quick and intuitive
                  app development.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-6 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  Access a variety of embedding models such as OpenAI, Gemini,
                  Claude, and more for enhanced generative capabilities.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex items-center mt-8">
            <button
              className="text-primary dark:text-primary-dark cursor-pointer"
              onClick={() => handleClick()}
            >
              Get Started Free
            </button>
            <div className="w-5 ml-2 text-primary dark:text-primary-dark">
              <svg
                className="icon"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.21"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center items-center">
          <img
            className="gif-anime object-contain max-w-full h-auto"
            src={isDarkMode ? feature_first_gif_dark : feature_first_gif_light}
            alt="gif"
          />
        </div>
      </div>
    </section>
  );
}

export default Features_Anime_One;
