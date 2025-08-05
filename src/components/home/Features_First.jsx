import { useSelector } from "react-redux";
import dark_app_image from "../../assets/icons/home-icons/dark-app.png";
import light_app_image from "../../assets/icons/home-icons/light-app.png";
import dragdark from "../../assets/icons/home-icons/drag_dark.svg";
import draglite from "../../assets/icons/home-icons/drag_lite.svg";
import pipedark from "../../assets/icons/home-icons/pipe_dark.svg";
import pipelite from "../../assets/icons/home-icons/pipe_lite.svg";

function Features_First() {
  // let url;
  // const theme = localStorage.getItem("isDarkMode") === "true" ? "dark" : "lite";
  // const hostname = window.location.hostname;
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  // switch (hostname) {
  //   case "localhost":
  //     url = `http://localhost:8080/?theme=${theme}`;
  //     break;
  //   case "thub-web-demo-378678297066.europe-west1.run.app":
  //     url = `https://demo.thub.tech/`;
  //     break;
  //   default:
  //     url = `https://app.thub.tech/?theme=${theme}`;
  //     break;
  // }

  return (
    <section className={`px-5 py-4 lg:px-16v`}>
      {/* Features Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Agents. RAG. Fine-Tuning. All in One Place.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify">
              Forget complexity. THub gives you everything you need to build
              powerful GenAI workflows—without writing a single line of code.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dragdark : draglite}
              alt="drag and drop"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Drag. Drop. Done.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify mt-9">
              Your ideas. Your flow. Your way. No-code. Low-code. No limits.
              Design apps visually—just drag, drop, and deploy.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? pipedark : pipelite}
              alt="automated data pipeline"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Turn Data Into Actions.
            </h4>
            <p className="text-lg dark:text-secondary-dark  text-start">
              Structured.&nbsp; Semi-Structured.&nbsp; Unstructured. With THub’s
              automated data pipeline, your data flows where it matters—into
              action.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <a href={url} target="_blank">
          <button
            type="button"
            className="text-white dark:text-secondary bg-primary hover:bg-blue-900 font-lg rounded-lg text-lg px-5 py-2.5 me-2  dark:bg-primary-dark dark:hover:bg-pink-600 focus:outline-none"
          >
            Try a demo
          </button>
        </a>
      </div> */}
    </section>
  );
}

export default Features_First;
