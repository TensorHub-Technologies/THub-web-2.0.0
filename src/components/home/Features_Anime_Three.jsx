import feature_third_gif_dark from "../../assets/illustrations/feature_third-1.gif";
import feature_third_gif_light from "../../assets/illustrations/feature_third-2.gif";

// redux
import { useSelector } from "react-redux";

function Features_Anime_Three() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const handleNavigation = () => {
    const hostname = window.location.hostname;
    let url;
    switch (hostname) {
      case "localhost":
        url = import.meta.env.VITE_THUB_WEB_APP_URL;
        break;
      case "https://thub-web.calmisland-c4dd80be.westus2.azurecontainerapps.io":
        url = import.meta.env.VITE_THUB_WEB_APP_URL;
        break;
      default:
        url = import.meta.env.VITE_THUB_WEB_DEMO_URL;
        break;
    }
    window.open(`${url}/signup`, "_blank");
  };
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 pr-8 pl-8">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark">Features 3</p>
          <h3 className="text-4xl sm:text-4xl mt-5 dark:text-primary-dark text-primary">
            From Idea to Intelligence. Instantly.
          </h3>
          <h4 className="text-3xl sm:text-3xl mt-2 dark:text-white">
            Versatile. Scalable. Effortless. Voice-Enabled.
          </h4>
          <p className="my-5 dark:text-secondary-dark text-justify">
            THub powers it all—chatbots, document processors, voice agents,
            recommendation engines, customer copilots, and more.
          </p>
          <ul className="list-disc flex flex-col gap-3">
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
                <p className="dark:text-secondary-dark text-justify">
                  Build Retrieval-Augmented Generation apps in clicks
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
                <p className="dark:text-secondary-dark text-justify">
                  Fine-tune models using RAFT workflows
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-5 pt-1 dark:text-white">
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
                <p className="dark:text-secondary-dark text-justify">
                  Automate data preprocessing, voice transcription, and
                  orchestration
                </p>
              </div>
            </li>
          </ul>
          <h4 className="text-3xl sm:text-3xl mt-6 dark:text-white">
            One platform. Infinite potential.
          </h4>
          <div className="flex items-center mt-6">
            <button
              className="text-primary dark:text-primary-dark cursor-pointer"
              onClick={() => {
                handleNavigation();
              }}
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
            className="gif-anime object-contain max-w-full h-auto border border-transparent rounded-3xl shadow-lg"
            src={isDarkMode ? feature_third_gif_dark : feature_third_gif_light}
            alt="gif"
          />
        </div>
      </div>
    </section>
  );
}

export default Features_Anime_Three;
