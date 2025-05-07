import ShareButtons from "../components/sharebuttons/ShareButtons";
import reactFlowDiagram from "../assets/images/blog/Project_planingreactflow-diagram.png";
import projectPlaningMail from "../assets/images/blog/project_planings.jpg";
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
                    <li>Tue Apr 29 2025</li>
                    <li>5 Min. Read</li>
                  </ul>
                </div>

                {/* Blog Introduction */}
                <h4 className="text-black dark:text-secondary-dark font-medium mb-5 text-justify text-2xl">
                  End-to-End Automation with THub&apos;s Multi-Agent Model: From
                  Research to Stakeholder Communication Using GenAI
                </h4>
                <p className="font-medium mb-5 text-justify text-black dark:text-secondary-dark space-y-6">
                  In today&apos;s fast-paced innovation environment, tasks like
                  researching, planning, tech analysis, and stakeholder
                  communication are essential—but incredibly time-consuming.
                  Imagine if{" "}
                  <strong>a team of intelligent agents could take over</strong>,
                  each performing its task like a specialist. With{" "}
                  <strong>THub&apos;s Multi-Agent GenAI Model</strong>, this is
                  now a reality. You can fully automate your entire
                  workflow—from market research to structured documentation,
                  from deep tech selection to final stakeholder
                  communication—using LLM agents. Let&apos;s break down how this
                  works and why it&apos;s a game-changer.
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
                      Crawls the web for the latest market trends, competitor
                      benchmarks, emerging technologies, and consumer behavior.
                    </li>
                    <li>Summarizes findings into an organized document.</li>
                    <li>Adds links to sources, visuals, and key stats.</li>
                    <li>
                      🧠{" "}
                      <em>Think of this as your AI-powered market analyst.</em>
                    </li>
                  </ul>

                  {/* Agent 2 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🧱 Agent 2: Structure & Framework Builder
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Takes the output from Agent 1 and draws a clear structure
                      for the full report.
                    </li>
                    <li>
                      Defines sections: Executive Summary, Scope, RACI Matrix,
                      Timeline, Budget, and Tech Feasibility.
                    </li>
                    <li>
                      Adds visuals like Gantt charts, RACI diagrams, and
                      component breakdowns.
                    </li>
                    <li>
                      🧠 <em>Your AI content strategist and PMO architect.</em>
                    </li>
                  </ul>

                  {/* Agent 3 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🔬 Agent 3: Technical Feasibility & Stack Recommendation
                    Agent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Researches the best tech stack based on your goals (cost,
                      scalability, security).
                    </li>
                    <li>
                      Evaluates tools, compares vendors, and scores platforms.
                    </li>
                    <li>
                      Outputs a detailed technical document with architecture
                      diagrams, pros/cons, budget estimates, and timelines.
                    </li>
                    <li>
                      🧠 <em>This is your AI tech consultant.</em>
                    </li>
                  </ul>

                  {/* Agent 4 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📧 Agent 4: Communication & Stakeholder Notification Agent
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Takes the final compiled report and writes personalized
                      emails to stakeholders (engineering, marketing, finance,
                      leadership).
                    </li>
                    <li>
                      Summarizes key actions and includes attachments or drive
                      links.
                    </li>
                    <li>Schedules meetings or follow-ups if needed.</li>
                    <li>
                      🧠{" "}
                      <em>
                        Your intelligent assistant who knows who needs to know
                        what.
                      </em>
                    </li>
                  </ul>

                  {/* Email example image after Agent 4 */}
                  <div className="my-8">
                    <img
                      src={projectPlaningMail}
                      alt="THub Email Communication Example"
                      className="w-full h-auto object-contain rounded-lg shadow-md"
                    />
                    <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
                      Figure 2: Example of Stakeholder Communication Generated
                      by Agent 4
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

                  {/* Workflow Produces Section */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🖼️ What the Workflow Produces
                  </h4>
                  <p>
                    Your multi-agent team doesn&apos;t just stop at writing. It
                    builds a complete professional-grade project brief with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      📊 Visuals (RACI matrix, timelines, budget pie charts)
                    </li>
                    <li>🗂️ Structured documentation ready for presentation</li>
                    <li>
                      📧 Personalized stakeholder emails with key action points
                    </li>
                    <li>
                      🏗️ Architecture diagrams & vendor analysis for engineers
                    </li>
                  </ul>
                  <p>All without writing a single document manually.</p>

                  {/* Why THub is the Best Platform */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🌐 Why THub Is the Best Platform for Multi-Agent Automation
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      ✅ <strong>No-Code Interface</strong>: Define agents and
                      trigger flows visually
                    </li>
                    <li>
                      🧠 <strong>LLM-Powered Intelligence</strong>: Agents
                      reason, plan, and improve over time
                    </li>
                    <li>
                      🔌 <strong>Integrates with Everything</strong>: Notion,
                      Slack, Google Drive, Jira, HubSpot, and more
                    </li>
                    <li>
                      🔄 <strong>Fully Automated</strong>: Set it and let your
                      AI team get to work
                    </li>
                    <li>
                      📈 <strong>Scalable</strong>: Whether it&apos;s a 1-page
                      doc or a full market entry report, THub handles it
                    </li>
                  </ul>
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
