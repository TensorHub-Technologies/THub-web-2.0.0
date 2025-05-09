import { useNavigate } from "react-router-dom";
import rag_ai from "../../assets/images/blog/rag_aii.png";
import evo_rag from "../../assets/images/blog/evo_rag.png";
import type1 from "../../assets/images/blog/type1_rag.png";
import type2 from "../../assets/images/blog/type2_rag.png";
import type3 from "../../assets/images/blog/type3_rag.png";
import level from "../../assets/images/blog/levels.png";
import voicebot from "../../assets/images/blog/voicebot.png";
import projectplaning from "../../assets/images/blog/project_planing.png";

const Blogs = () => {
  const navigate = useNavigate();
  const handleClick = (callback) => {
    callback();
  };

  return (
    <div className="border-red-400 dark:bg-secondary py-5 mt-20">
      <div className="text-center">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          Blog Posts
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Blog Posts</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-8 lg:mx-10 my-8 sm:my-10 lg:my-14">
        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => {
            handleClick(() => navigate("/blog/7"));
          }}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={projectplaning}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark mt-5">
              Project Planing Automation Agent
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                4 Min Read{" "}
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Tue Apr 29 2025
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => {
            handleClick(() => navigate("/voicebot"));
          }}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={voicebot}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark mt-5">
              The Rise of &nbsp; Voice Bots
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                5 Min Read{" "}
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Mar 06 2025
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => handleClick(() => navigate("/blog/6"))}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={level}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              Understanding the 5 Levels of AI Agents
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                3 Min Read
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Nov 14 2024
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => handleClick(() => navigate("/blog/5"))}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={type3}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              Types of RAG Part-3
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                4 Min Read
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Nov 14 2024
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => handleClick(() => navigate("/blog/4"))}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={type2}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              Types of RAG Part-2
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                5 Min Read
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Nov 14 2024
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => handleClick(() => navigate("/blog/3"))}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={type1}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              Types of RAG Part-1
            </h5>
            <div className="flex items-center mb-12"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                5 Min Read
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Wed Nov 13 2024
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => handleClick(() => navigate("/blog/2"))}
        >
          <img
            className="p-8 rounded-t-lg w-[550px]"
            src={evo_rag}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              The Evolution and Impact of Retrieval-Augmented (RAG)
            </h5>
            <div className="flex items-center mb-4"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                3 Min Read
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Jul 04 2024
              </h4>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
          onClick={() => {
            handleClick(() => navigate("/blog/1"));
          }}
        >
          <img
            className="p-5 rounded-t-lg w-[550px]"
            src={rag_ai}
            alt="product image"
          />
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark">
              Understanding Retrieval-Augmented Generation (RAG)
            </h5>
            <div className="flex items-center mb-4"></div>
            <div className="flex items-center justify-between">
              <h4 className="text-secondary dark:text-secondary-dark">
                2 Min Read{" "}
              </h4>
              <h4 className="text-secondary dark:text-secondary-dark">
                Thu Jul 04 2024
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
