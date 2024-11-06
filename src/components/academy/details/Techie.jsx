import { useState } from "react";
import ContactForm from "../../contact/ContactForm.jsx";

const Techie = () => {
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
    <div className="p-4 bg-background dark:bg-background-dark mt-20">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-center  text-primary dark:text-primary-dark">
          GenAI For Techies Details
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
                    Overview of Generative AI <br />
                    Definition and History <br />
                    Key Applications (e.g., Text Generation, Image Synthesis,
                    Music Composition)
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic1 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic1 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of generative AI, its
                        applications, and future directions.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic2")}
                  >
                    Types of Generative Models <br />
                    GANs, VAEs , Autoregressive Models
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic2 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic2 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of generative AI, its
                        applications, and future directions.
                      </div>
                    </div>
                  )}
                </div>
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic3")}
                  >
                    Impact and Future of Generative AI <br />
                    Current Trends, Ethical Considerations, Future Directions
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic3 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic3 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain a comprehensive understanding of generative AI, its
                        applications, and future directions.
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
              NLP Fundamental
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic2 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic2 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Basics of Natural Language Processing <br />
                    Language Models and their Evolution <br />
                    Key Concepts and Terminologies
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Acquire fundamental knowledge of NLP concepts, tasks,
                        and real-world applications.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Core NLP Tasks <br />
                    Tokenization, POS Tagging, Named Entity Recognition <br />
                    Parsing, Sentiment Analysis
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Acquire fundamental knowledge of NLP concepts, tasks,
                        and real-world applications.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    NLP Applications <br />
                    Text Classification, Machine Translation <br />
                    Question Answering, Text Summarization <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Acquire fundamental knowledge of NLP concepts, tasks,
                        and real-world applications.
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
              Transformers and Attention Mechanism
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic3 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic3 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Introduction to Transformers <br />
                    Evolution from RNNs and LSTMs <br />
                    Key Innovations in Transformers
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and significance of
                        transformers and the self-attention mechanism.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Self-Attention Mechanism <br />
                    How Self-Attention Works <br />
                    Importance in Capturing Context
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and significance of
                        transformers and the self-attention mechanism.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    Transformer Architecture
                    <br />
                    Encoder-Decoder Structure, Multi-Head Attention,
                    Position-wise Feed-Forward Networks
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and significance of
                        transformers and the self-attention mechanism.
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
              onClick={() => toggleDropdown("topic4")}
            >
              Foundation Models
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic4 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic4 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Overview of Foundation Models <br />
                    BERT, T5, GPT ..
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about various foundation models, their
                        architectures, and their practical use cases.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Architecture and Training <br />
                    Differences and Similarities
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about various foundation models, their
                        architectures, and their practical use cases.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    Applications and Use Cases <br />
                    Fine-Tuning for Specific Tasks <br />
                    Advantages and Limitations
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about various foundation models, their
                        architectures, and their practical use cases.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic7")}
                  >
                    Future of Foundation Models <br />
                    Emerging Trends <br />
                    Research Directions
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic7 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic7 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about various foundation models, their
                        architectures, and their practical use cases.
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
              Prompt Engineering Fundamentals
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic5 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic5 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Deep Dive into Advanced Technique <br />
                    Conditional Prompting <br />
                    Dynamic Prompt Generation
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Explore advanced techniques in prompt engineering for
                        more sophisticated AI applications
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Tools and Frameworks <br />
                    Leveraging OpenAI’s & Prompt Engineering Tools <br />
                    Integrating Prompts into Applications
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Explore advanced techniques in prompt engineering for
                        more sophisticated AI applications.
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
              Project
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic6 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic6 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Case Studies and Practical Applications <br />
                    Develop a chatbot that can assist users with common tasks
                    using a foundation model <br />
                    Dynamic Prompt Generation
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Apply learned concepts in a practical project,
                        developing a Gen AI application using prompt engineering
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
              Fine-Tuning Generative Models
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic7 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic7 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Overview of Fine-Tuning
                    <br />
                    Purpose and Benefits
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the techniques and benefits of fine-tuning
                        generative models for specific tasks
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Fine-Tuning Techniques <br />
                    Hyperparameter TuningDomain Adaptation <br />
                    Transfer Learning
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the techniques and benefits of fine-tuning
                        generative models for specific tasks.
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
              onClick={() => toggleDropdown("topic8")}
            >
              Fine-Tuning GPT Models
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic8 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic8 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Introduction to GPT Models <br />
                    Architecture and Capabilities
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the process and tools for fine-tuning GPT
                        models to enhance their performance
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Fine-Tuning Methods <br />
                    Dataset Selection and Preparation <br />
                    Training Process Practical Considerations <br />
                    Challenges and Best Practices
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the process and tools for fine-tuning GPT
                        models to enhance their performance.
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
              onClick={() => toggleDropdown("topic9")}
            >
              Introduction to Vector Database
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic9 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic9 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Vector Databases Overview <br />
                    Definition and Use Cases
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain foundational knowledge of vector databases and
                        their applications in similarity search.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Core Concepts <br />
                    Vector Representations, Similarity Search
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain foundational knowledge of vector databases and
                        their applications in similarity search.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Popular Vector Databases <br />
                    Examples and Comparisons
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Gain foundational knowledge of vector databases and
                        their applications in similarity search.
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
              onClick={() => toggleDropdown("topic10")}
            >
              Introduction to LangChain
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic10 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic10 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    LangChain Overview
                    <br />
                    Purpose and Applications <br />
                    Introduction Langchain, LangSmith & LangGraph
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Explore the features and capabilities of LangChain for
                        building GenAI applications
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Building Applications with LangChain <br />
                    Key Features, Packages and Capabilities
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Explore the features and capabilities of LangChain for
                        building GenAI applications.
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
              onClick={() => toggleDropdown("topic11")}
            >
              Introduction to LlamaIndex
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic11 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic11 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    LlamaIndex Overview <br />
                    Definition and Key Features
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the key features and practical uses of
                        LlamaIndex.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Applications and Use Cases <br />
                    Packages and CapabilitiesExamples
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the key features and practical uses of
                        LlamaIndex.
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
              onClick={() => toggleDropdown("topic12")}
            >
              Introduction to LLM Agents
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic12 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic12 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Understanding LLM Agents <br />
                    Types of LLM Agents <br />
                    Building and Implementing LLM Agents
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about the types, importance, and implementation of
                        LLM agents.
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
              onClick={() => toggleDropdown("topic13")}
            >
              Retrieval Augmented Generation (RAG)
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic13 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic13 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    RAG Overview <br />
                    RAG Architecture <br />
                    Applications and Use Cases <br />
                    Hands-On Demo
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and practical applications
                        of Retrieval Augmented Generation.
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
              onClick={() => toggleDropdown("topic12")}
            >
              Project
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic12 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic12 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    RAG on PDF Documents & Structured Data
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Apply learned concepts to implement a functional RAG
                        system on PDF documents and structured data.
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
              onClick={() => toggleDropdown("topic14")}
            >
              Understanding Hugging Face Models & Hub
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic14 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic14 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Introduction to Hugging Face <br />
                    Overview of Hugging Face & Ecosystem
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the Hugging Face ecosystem and its key
                        components. Learn how to navigate the Hugging Face Hub,
                        use models in applications, and participate in the
                        community.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Hugging Face Models <br />
                    Pre-trained Models, Model Fine-Tuning, Model Performance and
                    Benchmarks
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the Hugging Face ecosystem and its key
                        components. Learn how to navigate the Hugging Face Hub,
                        use models in applications, and participate in the
                        community.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    Hugging Face Hub <br />
                    Navigating & Using Models from the Hub
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the Hugging Face ecosystem and its key
                        components. Learn how to navigate the Hugging Face Hub,
                        use models in applications, and participate in the
                        community.
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
              onClick={() => toggleDropdown("topic15")}
            >
              Introduction to Open-Source Models - Llama 3 & Mistral
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic15 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic15 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Introduction to Open-Source Models <br />
                    Overview of Open-Source Models
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the importance and benefits of open-source
                        models in AI.Gain insights into the features,
                        architecture, use cases, and performance of Llama 3 and
                        Mistral.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Llama 3 & Mistral <br />
                    Introduction to Llama 3 & Mistral <br />
                    Use Cases and Applications <br />
                    Performance and Capabilities
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the importance and benefits of open-source
                        models in AI.Gain insights into the features,
                        architecture, use cases, and performance of Llama 3 and
                        Mistral.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    Fine-Tuning Open-Source Models <br />
                    Steps for Fine-Tuning Llama 3 and Mistral <br />
                    Tools and Frameworks for Fine-Tuning
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the importance and benefits of open-source
                        models in AI.Gain insights into the features,
                        architecture, use cases, and performance of Llama 3 and
                        Mistral.
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
              onClick={() => toggleDropdown("topic16")}
            >
              AWS Bedrock
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic16 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic16 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Overview of AWS Bedrock <br />
                    Introduction to AWS Bedrock <br />
                    Key Features and Capabilities <br />
                    Comparison with Other AI Services <br />
                    Benefits of Using AWS Bedrock <br />
                    Setting Up AWS Bedrock <br />
                    Integrating AI Models with AWS Bedrock <br />
                    Advanced Features and Customization <br />
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the features and capabilities of AWS Bedrock.
                        Learn how to set up and configure AWS Bedrock. Gain
                        practical experience in integrating AI models with AWS
                        Bedrock. Explore advanced features, including
                        fine-tuning and performance optimization.
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
              onClick={() => toggleDropdown("topic17")}
            >
              Azure OpenAI Services
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic17 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic17 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Overview of Azure OpenAI Services <br />
                    Definition and Key Features <br />
                    Benefits of Using Azure for OpenAI
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the features and capabilities of Azure OpenAI
                        Services. Learn how to set up and configure Azure OpenAI
                        Services. Gain practical experience in integrating
                        OpenAI models with Azure. Explore advanced features,
                        including fine-tuning and performance optimization.
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
              onClick={() => toggleDropdown("topic18")}
            >
              Image Generation and Advanced Models
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic18 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic18 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Introduction to Image Generation and GANs <br />
                    Overview of Image Generation <br />
                    Generative Adversarial Networks (GANs)
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and training process of GANs
                        and explore their applications in image generation.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic5")}
                  >
                    Transformer-Based Computer Vision Models Introduction to
                    Vision Transformers (ViTs) <br />
                    Applications of Vision Transformers
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic5 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic5 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about Vision Transformers, their advantages over
                        traditional CNNs, and their applications in various
                        computer vision tasks.
                      </div>
                    </div>
                  )}
                </div>

                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic6")}
                  >
                    Diffusion Models Overview of Diffusion Models & its
                    Application
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic6 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic6 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about Vision Transformers, their advantages over
                        traditional CNNs, and their applications in various
                        computer vision tasks.
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
              onClick={() => toggleDropdown("topic19")}
            >
              Building GenAI Apps with Low Code No Code platform
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic19 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic19 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Overview of Low Code Platform <br />
                    Setting Up Credentials <br />
                    Create a Workflow <br />
                    Experimenting with different Tools, LLM, Vector Store .
                    <br />
                    Building different types of GenAI apps like autonomous
                    agents, RAG .
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn to use Low code No code platform to build GenAI
                        apps faster.
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
              onClick={() => toggleDropdown("topic20")}
            >
              Project
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic20 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic20 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Hands-On Exercise to build GenAI apps like RAG, Querying
                    from SQL Database,
                    <br />
                    Autonomous Agents .Setting Up Credentials.
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Apply learned concepts to build production ready RAG on
                        documents, SQL database . using low code platform.
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
              onClick={() => toggleDropdown("topic21")}
            >
              Introduction to LLM Agents
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic21 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic21 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Understanding LLM Agents <br />
                    Types of LLM Agents <br />
                    Building and Implementing LLM Agents.
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn about the types, importance, and implementation of
                        LLM agents.{" "}
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
              onClick={() => toggleDropdown("topic22")}
            >
              Retrieval Augmented Generation (RAG)
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic22 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic22 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    RAG Overview <br />
                    RAG Architecture <br />
                    Applications and Use Cases <br />
                    Hands-On Demo
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Understand the architecture and practical applications
                        of Retrieval Augmented Generation.
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
              onClick={() => toggleDropdown("topic23")}
            >
              RAG Optimization and Multimodal RAG
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic23 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic23 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    Optimizing RAG <br />
                    Multimodal RAG <br />
                    Hands-On Demo
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Learn techniques for optimizing RAG systems and
                        integrating multiple data modalities.
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
              onClick={() => toggleDropdown("topic24")}
            >
              Project
              <span className="chevron text-primary dark:text-primary-dark">
                {dropdowns.topic24 ? "▼" : "➤"}
              </span>
            </div>
            {dropdowns.topic24 && (
              <div className="dropdown-content">
                {/* Subtopic 3 */}
                <div className="subtopic mt-2">
                  <div
                    className="subtopic-header p-3 rounded-lg flex justify-between items-center cursor-pointer text-black dark:text-[white] bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    onClick={() => toggleDropdown("subtopic4")}
                  >
                    RAG on PDF Documents & Structured Data
                    <span className="chevron text-primary dark:text-primary-dark">
                      {dropdowns.subtopic4 ? "▼" : "➤"}
                    </span>
                  </div>
                  {dropdowns.subtopic4 && (
                    <div className="learning-outcomes  text-black dark:text-[white]">
                      <div className="outcome mt-1 pl-2">
                        Apply learned concepts to implement a functional RAG
                        system on PDF documents and structured data.
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

export default Techie;
