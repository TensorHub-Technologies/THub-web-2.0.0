import { useState } from "react";
import ContactForm from "../../contact/ContactForm.jsx";

const Leadership = () => {
  // State to manage dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    topic1: false,
    topic2: false,
    subtopic1: false,
    subtopic2: false,
    subtopic3: false,
    subtopic4: false,
    subtopic5: false,
  });

  const toggleDropdown = (id) => {
    setDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-4 bg-background dark:bg-background-dark">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-center  text-primary dark:text-primary-dark">
          GenAI For Leaders and CxO&apos;s Details
        </h2>
        <div className="card-container border-2 border-gray-300 rounded-lg p-5 shadow-lg dark:border-gray-700 bg-white dark:bg-secondary my-5">
          {/* Card for Topic 1 */}
          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic1")}
            >
              Integration of ChatGPT with Business Applications
              <span className="chevron  text-primary dark:text-primary-dark">
                {dropdowns.topic1 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic1 && (
              <div className="dropdown-content">
                {/* Subtopic 1 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic1")}
                  >
                    Integration Capability of ChatGPT
                    <br />
                    Introduction to ChatGPT Models and its Capability
                    <br />
                    GPT API Overview
                    <br />
                    GPT Integration with Microsoft Copilot
                    <br />
                    GPT Integration with Salesforce Einstein
                    <br />
                    GPT Integration with Microsoft Teams
                    <br />
                    GPT Integration with eCommerce like Shopify
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic1 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic1 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of ChatGPT and
                        integration capability with other applications.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 2 */}
              </div>
            )}
          </div>

          {/* Card for Topic 2 */}
          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic2")}
            >
              OpenAI Custom GPT Models
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic2 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic2 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Overview of Custom GPT Models
                    <br />
                    Content Writer GPT
                    <br />
                    Image Generation GPT
                    <br />
                    PPT GPT
                    <br />
                    Data Analysis GPT
                    <br />
                    Image Generation GPT
                    <br />
                    Data Analysis GPT
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about custom GPT models available and create your
                        own custom GPT models.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic3")}
            >
              Advanced Prompt Engineering and Fine Tunning Techniques
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic3 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic3 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Advanced Prompt Engineering
                    <br />
                    Self Consistency, Knowledge Generation Prompting
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about advanced prompt engineering techniques, Fine
                        Tunning LLMs and understand when & how to use prompt
                        engineering & LLM.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Hyperparameter Tuning & Domain Adaptation
                    <br />
                    Transfer Learning
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about advanced prompt engineering techniques, Fine
                        Tunning LLMs and understand when & how to use prompt
                        engineering & LLM.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 5 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Overview of Fine-Tuning
                    <br />
                    Purpose & Benefits, Fine-Tuning Methods
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about advanced prompt engineering techniques, Fine
                        Tunning LLMs and understand when & how to use prompt
                        engineering & LLM.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic4")}
            >
              Impact of GenAI in Leadership & Management
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic4 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic4 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Impact in Industries and Business Mode
                    <br />
                    Industries most impacted by AI
                    <br />
                    Future of these industries
                    <br />
                    AI Impact in Business Mode
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about advanced prompt engineering techniques, Fine
                        Tunning LLMs and understand when & how to use prompt
                        engineering & LLM.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Leadership in the Age of AI
                    <br />
                    Impact of AI on Leadership
                    <br />
                    Aspects of Leadership Impacted by AI Next-Gen Leadership
                    Qualities
                    <br />
                    Managing Teams & Organization with GenAI
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about advanced prompt engineering techniques, Fine
                        Tunning LLMs and understand when & how to use prompt
                        engineering & LLM.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic5")}
            >
              Generative AI for Sales & Marketing
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic5 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic5 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Using Generative AI for content creation (product
                    descriptions, social media posts, ..)
                    <br />
                    AI-powered chatbots for customer engagement and support
                    <br />
                    Personalized marketing campaigns with AI-generated content
                    <br />
                    Case study of Generative AI in Sales & Marketing
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn different use cases in sales & marketing function.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic5")}
            >
              Generative AI for Sales & Marketing
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic5 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic5 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Using Generative AI for content creation (product
                    descriptions, social media posts, ..)
                    <br />
                    AI-powered chatbots for customer engagement and support{" "}
                    <br />
                    Personalized marketing campaigns with AI-generated content
                    <br />
                    Case study of Generative AI in Sales & Marketing
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn different use cases in sales & marketing function.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic6")}
            >
              Ethics & Regulations Consideration
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic6 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic6 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Ethics and Sustainability AI
                    <br />
                    Current and Upcoming Regulations
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the ethical consideration and data privacy
                        law for AI.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
              </div>
            )}
          </div>

          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic7")}
            >
              Live Project
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic7 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic7 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Building Generative AI Apps using
                    <br />
                    Low Code No Code Platform
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the ethical consideration and data privacy
                        law for AI.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}

                {/* Subtopic 5 */}
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Leadership;
