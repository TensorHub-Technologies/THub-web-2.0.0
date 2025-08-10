import UsecaseHome from "./UsecasesHome";
import "../../index.css";
import { useSelector } from "react-redux";

const Usecase = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div
      className={`${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"} relative`}
    >
      <div className="text-center py-5">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Use Cases
            </h2>
            <p className="text-black dark:text-white mt-1">Home / UseCases</p>
          </div>
          <h1 className="dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Build
            <span className="dark:text-primary-dark text-primary">
              &nbsp; Agents, Multi Agents, RAG Systems
            </span>
            &nbsp; Faster, The Future of
            <span className="dark:text-primary-dark text-primary">
              &nbsp;GenAI{" "}
            </span>{" "}
            <br />
            Builder Tools
          </h1>
        </div>
      </div>
      <UsecaseHome />
    </div>
  );
};

export default Usecase;
