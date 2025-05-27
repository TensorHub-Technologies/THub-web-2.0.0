import { useSelector } from "react-redux";
import dark_app_image from "../../assets/icons/home-icons/dark-app.png";
import light_app_image from "../../assets/icons/home-icons/light-app.png";
import ragdark from "../../assets/icons/usecase-icons/rag_dark.png";
import raglite from "../../assets/icons/usecase-icons/rag_lite.png";
import tuningdark from "../../assets/icons/usecase-icons/tuning_dark.png";
import tuninglite from "../../assets/icons/usecase-icons/tuning_lite.png";
import docsdark from "../../assets/icons/usecase-icons/docs_dark.png";
import docslite from "../../assets/icons/usecase-icons/docs_lite.png";
import descdark from "../../assets/icons/usecase-icons/desc_dark.png";
import desclite from "../../assets/icons/usecase-icons/desc_lite.png";
import productdark from "../../assets/icons/usecase-icons/product_dark.png";
import productlite from "../../assets/icons/usecase-icons/product_lite.png";
import sqldark from "../../assets/icons/usecase-icons/sql_dark.png";
import sqllite from "../../assets/icons/usecase-icons/sql_lite.png";
import customerdark from "../../assets/icons/usecase-icons/customer_dark.png";
import customerlite from "../../assets/icons/usecase-icons/customer_lite.png";

import { useState } from "react";

// import RaftComponent from "./RaftComponent";
// import SqlComponent from "./SqlComponent";
// import RecommenderComponent from "./RecommenderComponent";
// import CustomerEngagementComponent from "./CustomerEngagementComponent";
// import DocumentGenerationComponent from "./DocumentGenerationComponent";
// import DescriptionGenerationComponent from "./DescriptionGenerationComponent";

const UsecaseHome = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const [activeComponent, setActiveComponent] = useState("");

  console.log(activeComponent, "activeComponent");

  const COMPONENT_URLS = {
    agents:
      "http://localhost:3000/chatbot/3c7f6af7-ca21-4018-8a80-77e8bb26c788",
    rag: "http://localhost:3000/rag/dashboard",
    raft: "http://localhost:3000/raft/interface",
    sql: "http://localhost:3000/sql/query",
    recommender: "http://localhost:3000/recommender/system",
    "customer-engagement": "http://localhost:3000/customer-engagement/portal",
    "document-generation": "http://localhost:3000/document-generation/tool",
    "description-generation": "http://localhost:3000/description-generation/ai",
  };

  const handleClick = (componentName) => {
    if (COMPONENT_URLS[componentName]) {
      // Open link in new tab
      window.open(
        COMPONENT_URLS[componentName],
        "_blank",
        "noopener,noreferrer",
      );

      // Optional: Show brief feedback in current view
      setActiveComponent(`${componentName}-opened`);

      // Optional: Auto-close feedback after 2 seconds
      setTimeout(() => {
        setActiveComponent(null);
      }, 2000);
    } else {
      // For components without URLs (like RagBot), show inline
      setActiveComponent(componentName);
    }
  };

  return (
    <div className="border-red-400 dark:bg-secondary mt-4">
      <div className="text-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="dark:text-white text-secondary text-3xl md:text-4xl lg:text-5xl font-bold w-full max-w-4xl">
            Tools for Tomorrow
          </h1>
          <h2 className="dark:text-white text-secondary mt-5 mb-12 text-2xl md:text-3xl lg:text-4xl font-bold w-full max-w-4xl">
            The Future of{" "}
            <span className="text-primary dark:text-primary-dark">
              Artificial Intelligence
            </span>{" "}
            is Yours
          </h2>
        </div>
      </div>

      <section className="px-5 py-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Agents */}
          <div className="flex flex-col items-start text-left w-full h-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? productdark : productlite}
                alt="drag and drop"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Agents for Every Task
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Support. Analysis. Audits. Agents as tireless as you.
            </p>
            <div className="flex items-center mt-6 group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("agents")}
              >
                Try Agents
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 2 - RAG */}
          <div className="flex flex-col items-start text-left w-full h-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? ragdark : raglite}
                alt="low code"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Smarter Apps, Instantly
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Data retrieval that thinks ahead. Brilliance, built in.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("rag")}
              >
                Try RAG
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 3 - RAFT */}
          <div className="flex flex-col items-start text-left w-full h-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? tuningdark : tuninglite}
                alt="drag and drop"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Fine-Tune with Flair
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Precision, a drag away. Performance, perfected.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("raft")}
              >
                Try RAFT
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 4 - SQL */}
          <div className="flex flex-col items-start text-left w-full h-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? sqldark : sqllite}
                alt="sql management"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              SQL, Simplified
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Queries flow fast. Results, real-time.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("sql")}
              >
                Try SQL
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 5 - Recommender */}
          <div className="flex flex-col items-start text-left w-full h-full mt-6">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? dark_app_image : light_app_image}
                alt="automated data pipeline"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Recommendations That Wow
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Personal. Perfect. Delight in every suggestion.
            </p>
            <div className="flex items-center mt-2 group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("recommender")}
              >
                Try Recommender
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 6 - Customer Engagement */}
          <div className="flex flex-col items-start text-left w-full h-full mt-6">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? customerdark : customerlite}
                alt="customer engagement"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Know Your Customers
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Powerful insights that truly connect, engagement that genuinely
              transforms.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("customer-engagement")}
              >
                Try Customer Engagement
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 7 - Document Generation */}
          <div className="flex flex-col items-start text-left w-full h-full mt-6">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? docsdark : docslite}
                alt="document generation"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Documents, Done
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Automatic. Accurate. Time, saved.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("document-generation")}
              >
                Try Document Generation
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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

          {/* Card 8 - Description Generation */}
          <div className="flex flex-col items-start text-left w-full h-full mt-6">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? descdark : desclite}
                alt="description generation"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white mt-5">
              Descriptions That Captivate
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs flex-grow">
              Words that sell, crafted instantly.
            </p>
            <div className="flex items-center mt-auto group">
              <button
                className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] group-hover:underline"
                onClick={() => handleClick("description-generation")}
              >
                Try Description Generation
              </button>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]">
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
    </div>
  );
};

export default UsecaseHome;
