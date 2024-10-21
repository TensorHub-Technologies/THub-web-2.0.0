import dark_app_image from "../../assets/icons/home-icons/dark-app.png";
import light_app_image from "../../assets/icons/home-icons/light-app.png";
import dragdark from "../../assets/icons/home-icons/drag_dark.svg";
import draglite from "../../assets/icons/home-icons/drag_lite.svg";
import pipedark from "../../assets/icons/home-icons/pipe_dark.svg";
import pipelite from "../../assets/icons/home-icons/pipe_lite.svg";
import { useSelector } from "react-redux";

function Features_First() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section className="px-5 py-10 lg:px-20">
      <div className="flex justify-center text-center">
        <h1 className="dark:text-white py-10 text-3xl md:text-4xl lg:text-5xl font-bold w-[50rem]">
          Build Multi Agents & GenAI Apps at Rapid Pace Across Your Favorite
          LLMs
        </h1>
      </div>

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
              No Code-Low Code Platform
            </h4>
            <p className="text-lg dark:text-secondary-dark">
              Build production-ready GenAI apps at scale & speed with a no
              code-low code platform.
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
              Drag & Drop Features
            </h4>
            <p className="text-lg dark:text-secondary-dark">
              Simply drag & drop data loaders, LLMs, agents, chains, and
              embedding models to build your custom GenAI Apps.
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
              Automated Data Pipeline
            </h4>
            <p className="text-lg dark:text-secondary-dark">
              Build end-to-end pipelines for structured, semi-structured, and
              unstructured data all in one platform.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-primary hover:bg-blue-900 font-lg rounded-lg text-lg px-5 py-2.5 me-2 mt-5 dark:bg-primary-dark dark:hover:bg-pink-600 focus:outline-none"
        >
          Try a demo
        </button>
      </div>
    </section>
  );
}

export default Features_First;
