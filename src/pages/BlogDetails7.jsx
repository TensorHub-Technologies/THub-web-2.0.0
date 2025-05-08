import ShareButtons from "../components/sharebuttons/ShareButtons";
import reactFlowDiagram from "../assets/images/blog/Project_planingreactflow-diagram.png.png";
import projectPlaningMail from "../assets/images/blog/project_planing_mail.png";
import mahadevProfile from "../assets/images/team/mahadev.png";
import projectplaning from "../assets/images/blog/project_planing.png";

const BlogDetails7 = () => {
  return (
    <div className="text-justify border-red-400 dark:bg-secondary px-4 sm:px-8">
      <div className="text-center py-5">
        <h3 className="text-secondary text-3xl font-bold dark:text-background">
          Blog Posts
        </h3>
        <div className="mt-2 mb-5">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Blog Posts</span>
        </div>

        <section className="pt-5 pb-10 lg:pt-2 lg:pb-15 dark:bg-secondary">
          <div className="container">
            {/* Header Section */}

            <div className="row justify-center mb-5">
              <div className="lg:w-full">
                <h2 className="text-black dark:text-secondary-dark font-medium mb-0 text-center">
                  End-to-End Project Planing Automation with THub&apos;s
                  Multi-Agent Model{" "}
                </h2>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[21/9] rounded-4 overflow-hidden">
              <img
                src={projectplaning}
                alt="RAG AI Image"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Author and Meta Info */}
            <div className="row justify-center mt-8">
              <div className="lg:w-8/12 mx-auto">
                <div className="flex flex-wrap justify-between items-center mb-6 gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={mahadevProfile}
                      alt="Author"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className="font-medium mb-0 text-black dark:text-secondary-dark">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/mahadev-bamma/"
                      >
                        Mahadev Bamma
                      </a>
                    </p>
                  </div>
                  <ul className="list-none flex items-center text-sm space-x-4 text-black dark:text-secondary-dark">
                    <li>Tue May 6 2025</li>
                    <li>5 Min. Read</li>
                  </ul>
                </div>

                {/* Blog Introduction */}
                <h4 className="text-black dark:text-secondary-dark font-medium mb-5 text-justify text-2xl">
                  What If You Could Assign a Team of AI Agents to Create an
                  Entire Project Plan for You?
                </h4>
                <p className="font-medium mb-5 text-justify text-black dark:text-secondary-dark space-y-6">
                  In today&apos;s high-stakes innovation ecosystem, project
                  timelines are shrinking, expectations are soaring, and
                  flawless execution is non-negotiable. Yet, core project tasks
                  like market research, compliance checks, tech stack
                  evaluation, stakeholder updates, and documentation remain
                  slow, manual, and resource-intensive.
                  <strong>
                    {" "}
                    What if a team of AI agents supervised and specialized could
                    create your entire project plan?{" "}
                  </strong>
                  That&apos;s exactly what{" "}
                  <strong>
                    THub&apos;s Worker-Supervisor Multi-Agent Model
                  </strong>{" "}
                  delivers. Designed to emulate a real-world project team
                  structure, this model assigns supervisory agents to manage and
                  delegate tasks to specialized worker agents, automating the
                  full project planning lifecycle from research and feasibility
                  to architecture, execution timelines, and stakeholder
                  communication.
                </p>

                {/* Workflow Diagram Image after intro */}
                <div className="my-8">
                  <img
                    src={reactFlowDiagram}
                    alt="THub Workflow Diagram"
                    className="w-full h-auto object-contain rounded-lg shadow-md"
                  />
                  <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
                    Figure 1: THub&apos;s Multi-Agent Workflow Overview
                  </p>
                </div>

                {/* Agent Details */}
                <article className="blog-post font-medium mb-0 text-justify text-black dark:text-secondary-dark space-y-6">
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    Introduction to THub&apos;s Multi-Agent Model
                  </h4>
                  <p>
                    THub&apos;s Multi-Agent GenAI Model represents a
                    revolutionary approach to workflow automation by deploying a
                    team of specialized AI agents working in concert to complete
                    complex project flows. Unlike traditional automation tools
                    that handle isolated tasks, this model creates a seamless
                    chain of intelligent agents that each specialize in a
                    specific part of the project lifecycle, from initial
                    research to final documentation and stakeholder
                    communication.
                  </p>

                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🔄 The 4-Agent Workflow: A Real-World Breakdown
                  </h4>

                  {/* Agent 1 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    👨‍💻 Agent 1: Deep Internet Research Agent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <b>Function</b>: Market, Legal & Competitor Research
                    </li>
                    <li>
                      Crawls the web for real-time data from public sources,
                      regulatory portals, patents, and technical blogs.
                    </li>
                    <li>Summarizes findings into an organized document.</li>
                    <li>
                      Extracts actionable insights, compliance requirements,
                      emerging technologies, and key competitors.
                    </li>
                    <li>
                      {" "}
                      Outputs a well-organized, referenced document with source
                      links, summary tables, and optional visuals
                    </li>
                    <li>
                      🧠{" "}
                      <em>
                        Think of this agent as your 24/7 Analyst + Legal
                        Assistant.
                      </em>
                    </li>
                  </ul>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🧱 Agent 2: Structure & Framework Builder
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <b>Function</b>: Project Planning and Document Design
                    </li>
                    <li>
                      Converts raw insights into structured, professional-grade
                      planning documents
                    </li>
                    <li>
                      Auto-generates components like:
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Executive Summary</li>
                        <li>Scope & Deliverables</li>
                        <li>RACI Matrix</li>
                        <li>Budget & Timeline Sections</li>
                        <li>Gantt Charts & Stakeholder Maps</li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        🧠 This is your AI-powered PMO and document architect.
                      </p>
                    </li>
                  </ul>

                  {/* Project Structure Table */}
                  {/* Agent Generated Output */}
                  <h4 className="text-lg font-semibold mt-10 mb-4 border-b border-gray-300 pb-1">
                    📝 Agent Generated Output
                  </h4>

                  <h5 className="text-md font-semibold mb-2">
                    📊 Project Structure: Brain Tumor Detection and Prediction
                    Using Deep Learning
                  </h5>
                  <h6 className="text-sm font-medium mb-1">
                    1. Work Breakdown Structure (WBS)
                  </h6>

                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Module No.
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Module Name
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Key Tasks
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Owner
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Planned Completion Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            1
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Project Initiation & Planning
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Requirements gathering, stakeholder alignment,
                            resource planning
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            PM/Lead
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-04-01
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            2
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Data Acquisition & Preparation
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Collect datasets (BraTS, TCIA), data cleaning,
                            annotation, preprocessing
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Data Scientist
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-05-15
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            3
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Exploratory Data Analysis (EDA)
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Statistical analysis, data visualization, class
                            balance, outlier detection
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Data Scientist
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-04-22
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            4
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Model Selection & Architecture
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Literature review, select CNN/U-Net/ensemble, design
                            model architecture
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ML Engineer
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-04-29
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            5
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Model Development
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Implement models, training pipelines, hyperparameter
                            tuning
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ML Engineer
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-05-19
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            6
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Model Validation & Testing
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Cross-validation, test set evaluation, compare with
                            radiologist benchmarks
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ML Engineer
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-07-02
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            7
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Explainability & XAI Integration
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Integrate explainable AI modules (Grad-CAM, SHAP),
                            generate interpretability reports
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ML Engineer
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            2025-07-09
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Timeline & Gantt Chart (Summary) */}
                    <h6 className="text-sm font-medium mt-6 mb-1">
                      2. Timeline & Gantt Chart (Summary)
                    </h6>

                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto border border-gray-300 text-sm">
                        <thead className="bg-gray-100 text-left">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2">
                              Phase
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Start
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              End
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Duration (weeks)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Initiation & Planning
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-01
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-05
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Data Acquisition & Prep
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-06
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-15
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              EDA
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-16
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-22
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Model Selection & Architecture
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-23
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-29
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Model Development
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-08-30
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-09-19
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              3
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Validation & Testing
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-09-20
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-10-02
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Explainability Integration
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-10-03
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-20-09
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Compliance Review
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-10-10
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-11-16
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Integration & Deployment
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-11-17
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-11-30
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Training & Documentation
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-11-01
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-11-07
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Monitoring & Maintenance
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-12-08
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Ongoing
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Ongoing
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              Closure & Handover
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-12-15
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              2025-12-21
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Agent 3 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🔬 Agent 3: Technical Feasibility & Stack Recommendation
                    Agent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Function:</strong> Architecture, Tooling & Tech
                      Alignment
                    </li>
                    <li>
                      Takes your constraints (budget, scale, security,
                      time-to-market)
                    </li>
                    <li>
                      Recommends the right:
                      <ul className="list-disc pl-6">
                        <li>Cloud provider (AWS vs. GCP vs. Azure)</li>
                        <li>Frameworks & databases</li>
                        <li>Licensing models</li>
                      </ul>
                    </li>
                    <li>
                      Outputs:
                      <ul className="list-disc pl-6">
                        <li>Technical Architecture Diagram</li>
                        <li>Vendor Comparison Matrix</li>
                        <li>Feasibility Report</li>
                      </ul>
                    </li>
                    <li>
                      🧠{" "}
                      <em>
                        Your AI Solution Architect—risk-aware, budget-sensitive.
                      </em>
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-10 mb-4 border-b border-gray-300 pb-1">
                    📝 Agent Generated Output
                  </h4>

                  <h5 className="text-md font-semibold mt-4 mb-2">
                    3. Tech Stack Recommendation
                  </h5>

                  {/* 3.1 Frontend */}
                  <h6 className="font-semibold mt-3">3.1. Frontend</h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Option</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">React.js</td>
                        <td className="border px-2 py-1">
                          Mature, component-based, strong ecosystem, fast
                          rendering
                        </td>
                        <td className="border px-2 py-1">
                          Steeper learning curve for XAI
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Streamlit</td>
                        <td className="border px-2 py-1">
                          Rapid prototyping, easy integration with Python models
                        </td>
                        <td className="border px-2 py-1">
                          Less customizable, less robust
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Angular</td>
                        <td className="border px-2 py-1">
                          Enterprise support, strong structure
                        </td>
                        <td className="border px-2 py-1">
                          Heavier, overkill for MVP
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> Start with Streamlit for
                    MVP and rapid clinical feedback, migrate to React.js for
                    production.
                  </p>

                  {/* 3.2 Backend */}
                  <h6 className="font-semibold mt-3">3.2. Backend</h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Option</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">FastAPI</td>
                        <td className="border px-2 py-1">
                          Fast, async, great for ML APIs, OpenAPI support
                        </td>
                        <td className="border px-2 py-1">
                          Less mature than Flask
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Flask</td>
                        <td className="border px-2 py-1">
                          Simple, widely used in ML, good documentation
                        </td>
                        <td className="border px-2 py-1">
                          Less scalable, sync only
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Django</td>
                        <td className="border px-2 py-1">
                          Full-featured, ORM, admin, security
                        </td>
                        <td className="border px-2 py-1">
                          Heavier, more boilerplate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> FastAPI for lightweight,
                    high-performance ML API serving.
                  </p>

                  {/* 3.3 Deep Learning Framework */}
                  <h6 className="font-semibold mt-3">
                    3.3. Deep Learning Framework
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Option</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">PyTorch</td>
                        <td className="border px-2 py-1">
                          Flexible, dynamic graph, strong in research
                        </td>
                        <td className="border px-2 py-1">
                          Slightly less mature for production (but improving)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">TensorFlow</td>
                        <td className="border px-2 py-1">
                          Production-ready, TensorFlow Serving, TFX
                        </td>
                        <td className="border px-2 py-1">
                          Steeper learning curve
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">MONAI</td>
                        <td className="border px-2 py-1">
                          Medical imaging focused, PyTorch-based, SOTA
                        </td>
                        <td className="border px-2 py-1">Smaller community</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> PyTorch + MONAI for model
                    development and medical imaging utilities.
                  </p>

                  {/* 3.4 Model Architectures */}
                  <h6 className="font-semibold mt-3">
                    3.4. Model Architectures
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Model</th>
                        <th className="border px-2 py-1">Use Case</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">U-Net</td>
                        <td className="border px-2 py-1">Image segmentation</td>
                        <td className="border px-2 py-1">
                          SOTA for medical, easy to train
                        </td>
                        <td className="border px-2 py-1">
                          Limited for 3D data
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">3D U-Net</td>
                        <td className="border px-2 py-1">
                          3D MRI segmentation
                        </td>
                        <td className="border px-2 py-1">
                          Handles volumetric data
                        </td>
                        <td className="border px-2 py-1">
                          More compute intensive
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">ResNet</td>
                        <td className="border px-2 py-1">Classification</td>
                        <td className="border px-2 py-1">
                          Robust, transfer learning
                        </td>
                        <td className="border px-2 py-1">Large, may overfit</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Ensemble</td>
                        <td className="border px-2 py-1">Robustness</td>
                        <td className="border px-2 py-1">Improves accuracy</td>
                        <td className="border px-2 py-1">
                          Complex to implement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> 3D U-Net for segmentation,
                    ResNet for classification, ensemble for final inference.
                  </p>

                  {/* 3.5 Database */}
                  <h6 className="font-semibold mt-3">3.5. Database</h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Option</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">PostgreSQL</td>
                        <td className="border px-2 py-1">
                          Relational, ACID, scalable
                        </td>
                        <td className="border px-2 py-1">
                          Not for large files
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">MongoDB</td>
                        <td className="border px-2 py-1">
                          Flexible, handles metadata
                        </td>
                        <td className="border px-2 py-1">
                          Not ACID for all ops
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">S3-compatible</td>
                        <td className="border px-2 py-1">
                          Store images (object storage)
                        </td>
                        <td className="border px-2 py-1">Needs extra setup</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> S3-compatible object
                    storage for images, PostgreSQL for metadata.
                  </p>

                  {/* 3.6 Cloud & Infrastructure */}
                  <h6 className="font-semibold mt-3">
                    3.6. Cloud & Infrastructure
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Option</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">AWS/GCP</td>
                        <td className="border px-2 py-1">
                          GPU instances, managed storage
                        </td>
                        <td className="border px-2 py-1">
                          Cost, compliance config
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Azure</td>
                        <td className="border px-2 py-1">
                          Healthcare compliance, ML Studio
                        </td>
                        <td className="border px-2 py-1">
                          Less community in ML
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">On-prem</td>
                        <td className="border px-2 py-1">
                          Data privacy, full control
                        </td>
                        <td className="border px-2 py-1">
                          Maintenance, scaling
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> Use AWS or GCP for
                    development/training, on-prem or VPC for deployment.
                  </p>

                  {/* 3.7 DevOps & CI/CD */}
                  <h6 className="font-semibold mt-3">3.7. DevOps & CI/CD</h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Tool</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">Docker</td>
                        <td className="border px-2 py-1">
                          Portability, reproducibility
                        </td>
                        <td className="border px-2 py-1">
                          Needs orchestration
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Kubernetes</td>
                        <td className="border px-2 py-1">
                          Scalability, auto-scaling
                        </td>
                        <td className="border px-2 py-1">Complex setup</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">GitHub Actions</td>
                        <td className="border px-2 py-1">
                          Integrated with repo, easy CI
                        </td>
                        <td className="border px-2 py-1">
                          Limited for on-prem
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> Docker for
                    containerization, GitHub Actions for CI, Kubernetes for
                    production scaling.
                  </p>

                  {/* 3.8 Testing & Quality Assurance */}
                  <h6 className="font-semibold mt-3">
                    3.8. Testing & Quality Assurance
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Tool</th>
                        <th className="border px-2 py-1">Advantages</th>
                        <th className="border px-2 py-1">Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">PyTest</td>
                        <td className="border px-2 py-1">
                          Pythonic, easy to use
                        </td>
                        <td className="border px-2 py-1">None significant</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Great Expectations</td>
                        <td className="border px-2 py-1">Data validation</td>
                        <td className="border px-2 py-1">Extra setup</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">TensorBoard</td>
                        <td className="border px-2 py-1">Model monitoring</td>
                        <td className="border px-2 py-1">Visualization only</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Recommendation:</strong> PyTest for code, Great
                    Expectations for data, TensorBoard for models.
                  </p>

                  {/* 3.9 Security & Compliance */}
                  <h6 className="font-semibold mt-3">
                    3.9. Security & Compliance
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Area</th>
                        <th className="border px-2 py-1">Implementation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">Encryption</td>
                        <td className="border px-2 py-1">
                          At rest (AES256), in transit (TLS)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Access Control</td>
                        <td className="border px-2 py-1">RBAC, IAM policies</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Audit</td>
                        <td className="border px-2 py-1">
                          CloudTrail (AWS), GCP Audit Logs
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Compliance</td>
                        <td className="border px-2 py-1">
                          HIPAA, GDPR modules
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* 3.10 Monitoring & Observability */}
                  <h6 className="font-semibold mt-3">
                    3.10. Monitoring & Observability
                  </h6>
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="border px-2 py-1">Aspect</th>
                        <th className="border px-2 py-1">Tool</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">Metrics</td>
                        <td className="border px-2 py-1">
                          Prometheus and dashboards
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Logging</td>
                        <td className="border px-2 py-1">
                          ELK Stack and search
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Alerting</td>
                        <td className="border px-2 py-1">Error monitoring</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📧 Agent 4: Communication & Stakeholder Notification Agent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Function:</strong> Team Updates, Email Drafts,
                      Meeting Scheduling
                    </li>
                    <li>
                      Drafts and personalizes emails for:
                      <ul className="list-disc pl-6">
                        <li>Legal</li>
                        <li>Engineering</li>
                        <li>Finance</li>
                        <li>Marketing</li>
                        <li>Leadership</li>
                      </ul>
                    </li>
                    <li>Summarizes final deliverables and action items</li>
                    <li>
                      Optionally integrates with Google Calendar or Slack to:
                      <ul className="list-disc pl-6">
                        <li>Schedule review meetings</li>
                        <li>Share final docs via Google Drive or Notion</li>
                      </ul>
                    </li>
                    <li>
                      🧠{" "}
                      <em>
                        The AI Executive Assistant you never had—zero follow-up
                        needed.
                      </em>
                    </li>
                  </ul>

                  <div className="my-8">
                    <img
                      src={projectPlaningMail}
                      alt="Agent 4 Generated Communication Example"
                      className="w-full h-auto object-contain rounded-lg shadow-md"
                    />
                    <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
                      Figure 3: Example of Communication Generated by Agent 4
                    </p>
                  </div>

                  {/* Visual Summary Table */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    💡 Visual Summary of the Multi-Agent Flow
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Agent
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Task
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Output
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            1. Research Agent
                          </td>
                          <td className="py-3 px-4 border-b">
                            Market & competitor research
                          </td>
                          <td className="py-3 px-4 border-b">
                            Structured insights & data
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            2. Structure Agent
                          </td>
                          <td className="py-3 px-4 border-b">
                            Drafts report layout & diagrams
                          </td>
                          <td className="py-3 px-4 border-b">
                            Full structured documentation
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            3. Tech Research Agent
                          </td>
                          <td className="py-3 px-4 border-b">
                            Recommends stack & feasibility
                          </td>
                          <td className="py-3 px-4 border-b">
                            Tech analysis + architecture diagrams
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">4. Mail Agent</td>
                          <td className="py-3 px-4 border-b">
                            Communicates with stakeholders
                          </td>
                          <td className="py-3 px-4 border-b">
                            Summary emails + attachments
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🕒 Before vs. After: What Changes with THub
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Task
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Before THub
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            After THub
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b">Research</td>
                          <td className="py-3 px-4 border-b">
                            Manual, slow, incomplete
                          </td>
                          <td className="py-3 px-4 border-b">
                            AI-curated insights in minutes
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">Planning</td>
                          <td className="py-3 px-4 border-b">
                            Siloed and inconsistent
                          </td>
                          <td className="py-3 px-4 border-b">
                            Unified, visual, stakeholder-ready
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">Tech Decisions</td>
                          <td className="py-3 px-4 border-b">
                            Prone to bias and error
                          </td>
                          <td className="py-3 px-4 border-b">
                            Data-driven, cost-aligned
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">Communication</td>
                          <td className="py-3 px-4 border-b">
                            Scattered and reactive
                          </td>
                          <td className="py-3 px-4 border-b">
                            Automated, clear, and scheduled
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">Timeline</td>
                          <td className="py-3 px-4 border-b">3–5 weeks</td>
                          <td className="py-3 px-4 border-b">&lt; 1 hour</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Why THub is the Best Platform */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🔚 Final Thoughts: Why THub Is Your Go-To Platform for
                    Multi-Agent Automation
                  </h4>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    THub isn’t just another AI tool—it’s a full-fledged no-code
                    automation platform built for scale, speed, and
                    intelligence. With its intuitive visual interface, even
                    non-technical users can design and deploy multi-agent
                    workflows that think, plan, and execute like real teams.
                  </p>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    Powered by advanced LLMs, THub agents continuously learn and
                    improve, while integrating seamlessly with your favorite
                    tools like Notion, Slack, Google Drive, Jira, and HubSpot.
                  </p>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    From one-pagers to full-scale strategic reports, THub adapts
                    to your needs and delivers with unmatched efficiency.
                    Whether you&apos;re a startup founder or a project manager
                    at a global enterprise, THub gives you the power of an
                    entire team—automated, optimized, and always on.
                  </p>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    Let THub handle the heavy lifting so you can focus on what
                    really matters: innovation, impact, and execution.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <ShareButtons />
      </div>
    </div>
  );
};

export default BlogDetails7;
