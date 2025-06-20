import AgentCard from "../cards/AgentCard";
import props from "prop-types";
// images
import startUpIdeaLogo from "../../assets/agent-logos/startup-idea-agent.png";
import codeReviewAgent from "../../assets/agent-logos/code-review-agent.png";
import competetitorAnalysisAgent from "../../assets/agent-logos/competitor_analysis_agent.png";
import projectPlanningAgent from "../../assets/agent-logos/project_planning_agent.png";
import insuranceUnderwritingLogo from "../../assets/agent-logos/insurance-underwriting-agent.png";
import productComparisonAgent from "../../assets/agent-logos/product_comparison_agent.png";
import softwareDevelopmentAgent from "../../assets/agent-logos/software_development_agent.png";
import financialAnalysisAgent from "../../assets/agent-logos/Financial_Analyst_Agent.png";

const UsecaseHome = () => {
  const chatFlowData = [
    {
      id: "e49090f8-566a-4a66-a006-64af2325627f",
      name: "Customer Support and Sales Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: insuranceUnderwritingLogo,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description: "Workflow for RAG on Music and Arts website.",
      agentUrl:
        "https://demo.thub.tech/chatbot/e49090f8-566a-4a66-a006-64af2325627f",
    },
    {
      id: "7358dce3-838e-40f6-aea6-4f6ee5cd5c22",
      name: "Project Planning Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: projectPlanningAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Project Planning Agent is an AI-driven assistant that helps teams design, schedule, and manage projects with greater speed and accuracy. It automates the creation of project charters, timelines, resource allocation plans, and risk assessments by synthesizing inputs from requirement documents, stakeholder interviews, and historical data.",
      agentUrl:
        "https://demo.thub.tech/chatbot/7358dce3-838e-40f6-aea6-4f6ee5cd5c22",
    },
    {
      id: "d6266541-acae-4fea-8f0b-18c887ba130e",
      name: "Startup Idea Generator Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: startUpIdeaLogo,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Startup Idea Generator Agent is an AI-powered brainstorming assistant designed to help entrepreneurs, innovators, and venture studios discover unique and viable startup ideas. It analyzes market trends, user pain points, emerging technologies, and successful business models to generate validated startup concepts across industries.",
      agentUrl:
        "https://demo.thub.tech/chatbot/d6266541-acae-4fea-8f0b-18c887ba130e",
    },
    {
      id: "3e63c8ad-ea5b-4897-b7d0-0cfbf38424d5",
      name: "Product Comparison Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: productComparisonAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Product Comparison Agent is an AI-powered assistant that automates side-by-side evaluations of competing products based on features, pricing, specifications, customer reviews, and third-party benchmarks. Ideal for sales teams, procurement units, or end-users, it delivers objective, data-driven comparisons to aid faster and smarter decision-making.",
      agentUrl:
        "https://demo.thub.tech/chatbot/3e63c8ad-ea5b-4897-b7d0-0cfbf38424d5",
    },
    {
      id: "7d8b5e28-6805-4d2a-b4c7-85008dc94b27",
      name: "Investment Analysis Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: financialAnalysisAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Investment Analysis Agent is an AI-powered assistant that streamlines financial due diligence by analyzing company reports, market trends, investor presentations, news, and financial statements. It assists analysts and fund managers in identifying opportunities, assessing risks, and generating investment memos with data-driven insights.",
      agentUrl:
        "https://demo.thub.tech/chatbot/7d8b5e28-6805-4d2a-b4c7-85008dc94b27",
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Competitor Analysis Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: competetitorAnalysisAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Competitor Analysis Agent is an AI-driven assistant that continuously monitors, extracts, and analyzes competitive intelligence from public sources such as websites, press releases, financial filings, job postings, social media, and news. It helps strategy, product, and sales teams stay informed on market movements, product updates, pricing strategies, and emerging threats.",
      agentUrl:
        "https://demo.thub.tech/chatbot/3282cd95-4df4-4758-9766-a9cb862eed83",
    },
    // {
    //   id: "ac291b9a-6ed1-40ec-b857-6fddb9c1299a",
    //   name: "Insurance Underwriting Agent",
    //   icon: insuranceUnderwritingLogo,
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Insurance Underwriting Agent is an AI-powered assistant that automates the underwriting process by analyzing customer data, medical history, policy documents, and risk factors.",
    //   agentUrl:
    //     "https://demo.thub.tech/chatbot/ac291b9a-6ed1-40ec-b857-6fddb9c1299a",
    // },
    {
      id: "5b3484d7-deb1-498c-b91b-aefd9199df75",
      name: "Code Review Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: codeReviewAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Code Review Agent is an AI-powered assistant designed to automatically analyze, review, and provide feedback on source code across multiple languages.",
      agentUrl:
        "https://demo.thub.tech/chatbot/5b3484d7-deb1-498c-b91b-aefd9199df75",
    },
    {
      id: "953d0151-5356-41e3-9e79-ba8b429d064a",
      name: "Software Development Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: softwareDevelopmentAgent,
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Software Development Agent is an AI-powered assistant that accelerates the end-to-end software development lifecycle—from requirements gathering to code generation, testing, and deployment. It supports product managers, developers, and DevOps teams by automating repetitive tasks, improving code quality, and ensuring faster delivery cycles.",
      agentUrl:
        "https://demo.thub.tech/chatbot/953d0151-5356-41e3-9e79-ba8b429d064a",
    },
  ];

  return (
    <div className="border-red-400 dark:bg-secondary mt-8">
      <section className="px-5 pb-10 lg:px-20">
        <div className="mb-4">
          <p className="font-sans text-2xl dark:text-white">Agents Gallery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chatFlowData.map(({ id, name, description, agentUrl, icon }) => (
            <AgentCard
              key={id}
              title={name}
              logo={icon}
              description={description}
              agentUrl={agentUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

UsecaseHome.propTypes = {
  isDarkMode: props.bool,
  activeComponent: props.string,
  title: props.string,
  description: props.string,
  buttonText: props.string,
  agentUrl: props.string,
  setActiveComponent: props.func,
};

export default UsecaseHome;
