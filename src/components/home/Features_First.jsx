import { useSelector } from "react-redux";
import dark_app_image from "../../assets/icons/home-icons/dark-app.png";
import light_app_image from "../../assets/icons/home-icons/light-app.png";
import dragdark from "../../assets/icons/home-icons/drag_dark.svg";
import draglite from "../../assets/icons/home-icons/drag_lite.svg";
import pipedark from "../../assets/icons/home-icons/pipe_dark.svg";
import pipelite from "../../assets/icons/home-icons/pipe_lite.svg";

function Features_First() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section className={`px-5 py-4 lg:px-16v `}>
      {/* Features Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 h-52">
        {/* Feature 1 */}
        <div className="gap-5 w-full relative rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-xl shadow-2xl px-3 pt-3 border border-white/20 dark:border-white/10 ">
          <div className="flex items-center gap-5">
            <div className="w-16 h-20  p-2 rounded-lg flex-shrink-0 ">
              <img
                src={isDarkMode ? dark_app_image : light_app_image}
                alt="low code"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-bold dark:text-white ">
              Agents. RAG. Fine-Tuning. All in One Place.
            </h4>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-extralight dark:text-secondary-dark text-justify">
              Forget complexity. THub gives you everything you need to build
              powerful GenAI workflows—without writing a single line of code.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="gap-5 w-full relative rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-xl shadow-2xl px-3 pt-3 border border-white/20 dark:border-white/10 ">
          <div className="flex items-center gap-5">
            <div className="w-16 h-20  p-2 rounded-lg flex-shrink-0 ">
              <img
                src={isDarkMode ? dragdark : draglite}
                alt="drag and drop"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-bold dark:text-white ">
              Drag. Drop. Done.
            </h4>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-extralight dark:text-secondary-dark text-justify">
              Your ideas. Your flow. Your way. No-code. Low-code. No limits.
              Design apps visually—just drag, drop, and deploy.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="gap-5 w-full relative rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-xl shadow-2xl px-3 pt-3 border border-white/20 dark:border-white/10 ">
          <div className="flex items-center gap-5">
            <div className="w-16 h-20  p-2 rounded-lg flex-shrink-0 ">
              <img
                src={isDarkMode ? pipedark : pipelite}
                alt="automated data pipeline"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-bold dark:text-white ">
              Turn Data Into Actions.
            </h4>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-extralight dark:text-secondary-dark text-justify">
              Structured.&nbsp; Semi-Structured.&nbsp; Unstructured. With THub’s
              automated data pipeline, your data flows where it matters—into
              action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features_First;
