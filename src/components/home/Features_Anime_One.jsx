import { useNavigate } from "react-router-dom";
import feature_first_gif_dark from "../../assets/illustrations/feature_first-1.gif";
import feature_first_gif_light from "../../assets/illustrations/feature_first-2.gif";

// redux
import { useSelector } from "react-redux";

function Features_Anime_One() {
  const handleClick = () => {
  const hostname = window.location.hostname;
  let url;
  console.log(hostname, "hostname");
  switch (hostname) {
    case "localhost":
      url = import.meta.env.VITE_THUB_WEB_SERVER_LOCAL_URL;
      break;
    case "thub-web-demo-378678297066.europe-west1.run.app":
      url = import.meta.env.VITE_THUB_WEB_SERVER_DEMO_URL;
      break;
    default:
      url = import.meta.env.VITE_THUB_WEB_SERVER_PROD_URL;
      break;
  }
    window.open(url, "_blank");
  };

  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark mt-5">Features 1</p>
          <h3 className="text-4xl sm:text-4xl mt-5 dark:text-primary-dark text-primary">
            Drag. Drop. Deploy.
          </h3>
          <h4 className="text-3xl sm:text-3xl mt-2 dark:text-white">
            Create in Minutes. No Code Required.
          </h4>
          <p className="my-5 dark:text-secondary-dark text-justify">
            Build AI apps with the speed of thought. Just drag what you
            need—LLMs, agents, chains, embedding models, or voice agents—and
            drop it into place
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
                <p className="dark:text-secondary-dark text-justify">
                  From prototype to production in record time
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
                <p className="dark:text-secondary-dark text-justify">
                  Intuitive canvas interface
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
                <p className="dark:text-secondary-dark text-justify">
                  Voice-to-text and text-to-voice features baked in
                </p>
              </div>
            </li>
          </ul>

          <h4 className="text-3xl sm:text-3xl mt-6 dark:text-white">
            Think it. Build it. Ship it.
          </h4>

          <div className="flex items-center mt-6">
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
