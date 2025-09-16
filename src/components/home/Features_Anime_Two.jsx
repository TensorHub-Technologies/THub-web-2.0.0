import feature_second_gif_dark from "../../assets/illustrations/feature_second-1.gif";
import feature_second_gif_light from "../../assets/illustrations/feature_second-2.gif";

// redux
import { useSelector } from "react-redux";

function Features_Anime_Two() {
  const handleNavigation = () => {
    const hostname = window.location.hostname;
    let url;

    switch (hostname) {
      case "localhost":
        url = import.meta.env.VITE_THUB_WEB_APP_URL;
        break;
      case "thub-web-demo-378678297066.europe-west1.run.app":
        url = import.meta.env.VITE_THUB_WEB_APP_URL;
        break;
      default:
        url = import.meta.env.VITE_THUB_WEB_DEMO_URL;
        break;
    }
    window.open(`${url}/signup`, "_blank");
  };
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:pl-16 lg:pr-16">
        <div className="w-full lg:w-auto flex justify-center items-center">
          <img
            className="gif-anime object-contain max-w-full h-auto border border-transparent rounded-3xl shadow-lg"
            src={
              isDarkMode ? feature_second_gif_dark : feature_second_gif_light
            }
            alt="gif"
          />
        </div>
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark mt-5">Features 2</p>
          <h3 className="text-4xl sm:text-4xl mt-5 dark:text-primary-dark text-primary">
            Smarter Data. Sharper Actions.
          </h3>
          <h4 className="text-3xl sm:text-3xl mt-2 dark:text-white">
            Harness the Power of Vector Search and Voice Intelligence.
          </h4>

          <p className="my-5 dark:text-secondary-dark">
            Pinecone. Faiss. Weaviate. Qdrant. All integrated. All blazing fast.
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
                <p className="dark:text-secondary-dark">
                  Real-time semantic and voice search and discovery
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
                  Lightning-fast document, voice, and media retrieval
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
                  Efficient similarity search across text, audio, and images
                </p>
              </div>
            </li>
          </ul>

          <h4 className="text-3xl sm:text-3xl mt-6 dark:text-white">
            From raw data to real insight—THub delivers.
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
      </div>
    </section>
  );
}

export default Features_Anime_Two;
