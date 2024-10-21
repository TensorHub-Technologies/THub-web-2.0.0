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

const Usecase = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-5">
        <h3 className="text-secondary text-3xl font-bold dark:text-background">
          Use Cases
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Use Cases</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="dark:text-primary-dark text-primary my-10 text-3xl md:text-4xl lg:text-5xl font-bold">
            THub Use Cases
          </h1>
          <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Write Better Content Faster, The Future Of AI <br />
            Writing Tools is Here
          </h1>
        </div>
      </div>
      <section className="px-5 py-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? ragdark : raglite}
                alt="low code"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Retrieval-Augmented Generation
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Use THub&apos;s low-code/no-code features to quickly build a
              Retrieval-Augmented Generation application.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try RAG
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? tuningdark : tuninglite}
                alt="drag and drop"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Retrieval-Augmented Fine Tuning
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Leverage THub&apos;s drag-and-drop features to set up a
              Retrieval-Augmented Fine Tuning workflow.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try RAFT
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? dark_app_image : light_app_image}
                alt="automated data pipeline"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Recommender Systems
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Use THub to build a recommender system that leverages the power of
              the integrated LLMs and vector databases.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try Recommender Systems
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? docsdark : docslite}
                alt="low code"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Document Summarization
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Leverage THub&apos;s low-code/no-code features to create a
              document summarization application smoothly.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try Document Summarization
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
      <section className="px-5 py-10 lg:px-20">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? descdark : desclite}
                alt="low code"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Product Description
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Use THub to build a product description application that leverages
              the integrated LLMs and vector databases.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try Product Description
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? productdark : productlite}
                alt="drag and drop"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">Agents</h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Leverage THub to build a product catalog application that
              leverages the integrated LLMs and vector databases.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try Product Catalog
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? sqldark : sqllite}
                alt="automated data pipeline"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Query SQL Database
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Leverage THub to create a system that can query SQL databases and
              perform and enhance data analytics smoothly.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try SQL Database
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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
          <div className="flex flex-col items-start text-left gap-5 w-full">
            <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
              <img
                src={isDarkMode ? customerdark : customerlite}
                alt="low code"
                className="h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">
              Customer Support
            </h4>
            <p className="text-md dark:text-secondary-dark max-w-xs">
              Use THub to build customer support GenAI apps. Enhance user
              experience with personalized, AI-driven interactions.
            </p>
            <div className="flex items-center mt-0 group">
              <p className="text-[#11121c] dark:text-secondary-dark cursor-pointer group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90]  group-hover:underline">
                Try Customer Support
              </p>
              <div className="w-4 ml-2 text-[#11121c] dark:text-secondary-dark group-hover:text-[#3c5ba4] dark:group-hover:text-[#e22a90] ">
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

export default Usecase;
