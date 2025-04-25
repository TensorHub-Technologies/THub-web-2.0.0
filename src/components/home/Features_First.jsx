import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import dark_app_image from "../../assets/icons/home-icons/dark-app.png";
import light_app_image from "../../assets/icons/home-icons/light-app.png";
import dragdark from "../../assets/icons/home-icons/drag_dark.svg";
import draglite from "../../assets/icons/home-icons/drag_lite.svg";
import pipedark from "../../assets/icons/home-icons/pipe_dark.svg";
import pipelite from "../../assets/icons/home-icons/pipe_lite.svg";

function Features_First() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section className="px-5 py-4 lg:px-16">
      <ul className="flex flex-col items-center lg:justify-center lg:flex-row lg:gap-8  dark:text-secondary-dark list-disc">
        <li>Agentic Workflows</li>
        <li>Build Agent and GenAI Apps 30X faster</li>
        <li>Build RAG Systems</li>
        <li>Build Retrieval Augmented Fine Tuning</li>
      </ul>

      {/* Heading Section */}
      <div className="flex justify-center text-center mt-10">
        <h1 className="dark:text-white text-secondary text-3xl md:text-4xl lg:text-5xl font-bold w-[60rem]">
          One Platform. Infinite Possibilities
        </h1>
      </div>
      <div className="flex justify-center text-center mt-1">
        <h2
          className="dark:text-white text-secondary mt-5 mb-12  text-2xl md:text-3xl lg:text-4xl font-bold w-[60rem]"
          style={{ lineHeight: "4rem" }}
        >
          Build{" "}
          <span className="text-primary dark:text-primary-dark">
            {" "}
            Multi Agents
          </span>{" "}
          & <span className="text-primary dark:text-primary-dark">
            GenAI
          </span>{" "}
          Apps at Rapid Pace Across Your Favorite LLMs
        </h2>
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
              Turn Data Into Decisions.
            </h4>
            <p className="text-lg dark:text-secondary-dark  text-start">
              Structured.&nbsp; Semi-Structured.&nbsp; Unstructured. With THub’s
              automated data pipeline, your data flows where it matters—into
              action.
            </p>
          </div>
        </div>
        {/* feature 4 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Build Agents that Work Like You Do.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify">
              Autonomous Agents. Multi-Agents. From support to strategy—let them
              think, decide, and act.
            </p>
          </div>
        </div> */}
        {/* feature 5 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
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
        </div> */}
        {/* feature 6 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Create with Intelligence.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify mt-9">
              Agents.RAG. RAFT. Recommenders. Whatever your use case, build apps
              with real-world impact in minutes.
            </p>
          </div>
        </div> */}
        {/* feature 7 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              From Text to Task. Instantly.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify mt-6">
              Document generation. Description writing. Speed up everything you
              used to do manually.
            </p>
          </div>
        </div> */}
        {/* feature 8 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              Powered by Possibility.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify mt-6">
              <ul className="list-disc ml-3">
                <li>250+ tools</li>
                <li>OpenAI, Gemini, Claude, and more</li>
                <li>Pinecone. Weaviate. Faiss. Qdrant.</li>
                <li>Train. Tune. Embed. Query. All in THub.</li>
              </ul>
            </p>
          </div>
        </div> */}
        {/* feature 9 */}
        {/* <div className="lg:flex gap-5 items-start w-full">
          <div className="w-16 h-16 border border-primary bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-950 p-2 rounded-lg flex-shrink-0">
            <img
              src={isDarkMode ? dark_app_image : light_app_image}
              alt="low code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold dark:text-white">
              For Makers. For Teams. For Enterprises.
            </h4>
            <p className="text-lg dark:text-secondary-dark text-justify">
              <p>
                <b>Free</b> – Try and explore.
              </p>
              <p>
                <b>Pro</b> – Build with teams.
              </p>
              <p>
                <b>Enterprise</b> – Scale without limits.
              </p>
              <p>
                <b>Start Free. Build Big. Cancel Anytime.</b>
              </p>
            </p>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white dark:text-secondary bg-primary hover:bg-blue-900 font-lg rounded-lg text-lg px-5 py-2.5 me-2 mt-10 dark:bg-primary-dark dark:hover:bg-pink-600 focus:outline-none"
          onClick={() => handleClick()}
        >
          Try a demo
        </button>
      </div>
    </section>
  );
}

export default Features_First;
