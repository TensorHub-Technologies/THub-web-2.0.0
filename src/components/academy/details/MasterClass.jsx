import { useState } from "react";
import ContactForm from "../../contact/ContactForm.jsx";

const MasterClassGenAI = () => {
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
          MasterClass in GenAI Details
        </h2>
        <div className="card-container border-2 border-gray-300 rounded-lg p-5 shadow-lg dark:border-gray-700 bg-white dark:bg-secondary my-5">
          {/* Card for Topic 1 */}
          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic1")}
            >
              Introduction to Generative AI
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
                    GenAI - Tools & Integration
                    <br />
                    GenAI Introduction
                    <br />
                    Type of Gen AI Models – Text, Image, Video, Audio, 3D
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic1 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic1 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of generative AI, its
                        applications, and impact across industry and business
                        function
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 2 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700 "
                    onClick={() => toggleDropdown("subtopic2")}
                  >
                    Generative AI Industry Impact & Use Cases
                    <br />
                    GenAI Productivity Impact by Sector
                    <br />
                    GenAI Productivity Impact across Business Functions
                    <br />
                    GenAI Impact in Finance, Product Management, Marketing,
                    Coding
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic2 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic2 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of generative AI, its
                        applications, and impact across industry and business
                        function
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Card for Topic 2 */}
          <div className="card rounded-lg mb-4 overflow-hidden">
            <div
              className="card-header p-4 cursor-pointer flex justify-between items-center text-black dark:text-[white] bg-white dark:bg-secondary  border border-gray-200 rounded-lg shadow dark:border-gray-700"
              onClick={() => toggleDropdown("topic2")}
            >
              Prompt Engineering Fundamentals
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
                    Introduction to Prompt Engineering <br />
                    What is Prompt Engineering
                    <br />
                    Key Elements of Prompt Engineering
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the basics of crafting effective prompts and
                        their importance in model performance
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 4 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700 "
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Prompt Engineering Techniques
                    <br />
                    One-Shot and Few Shot Prompts
                    <br />
                    Chain-of-Thoughts Prompting
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the basics of crafting effective prompts and
                        their importance in model performance.
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtopic 5 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 shadow dark:border-gray-700 "
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Prompt Frameworks
                    <br />
                    RTF, TAG, BAB, CARE, RISE Frameworks
                    <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the basics of crafting effective prompts and
                        their importance in model performance.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default MasterClassGenAI;
