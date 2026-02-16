import AgentCard from "../cards/AgentCard";
import props from "prop-types";

// images
import { agentLogos, toolIcons } from "./agentAssets";
import "./Cards.css";
import "../home/Home.css";

const UsecaseHome = () => {
  const { hostname } = window.location;

  const APP_BASE_URL =
    hostname === "localhost"
      ? "http://localhost:8080"
      : hostname.includes("calmisland")
        ? import.meta.env.VITE_THUB_WEB_DEMO_URL ||
          "https://thub-app.calmisland-c4dd80be.westus2.azurecontainerapps.io"
        : import.meta.env.VITE_THUB_WEB_APP_URL ||
          "https://thub-app.calmisland-c4dd80be.westus2.azurecontainerapps.io";

  const chatFlowData = [
    // {
    //   id: "701c21ea-1e25-4870-a512-847ab7bab5dc",
    //   name: "Insurance Sales Audit Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.financialAnalysisAgent,
    //   tools: {
    //     "Supervisor Agent": toolIcons.supervisorAgent,
    //     "Worker Agent": toolIcons.worker,
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //     "Custom Tool": toolIcons.customTool,
    //     "MCP": toolIcons.customMcp,
    //     "Cheerio": toolIcons.cheerio,
    //     "Qdrant": toolIcons.qdrant,
    //     "Text Splitter": toolIcons.textSplitter,
    //     "OpenAI Embeddings": toolIcons.openAIEmbeddings,
    //     "Retriever Tool":toolIcons.retrievertool,
    //     "Postgres":toolIcons.postgres
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "This agent audit insurance policy sales data, checks GST rates with govt portal and check for the correctness of all the data.",
    //   agentUrl:
    //     "https://thub-app.calmisland-c4dd80be.westus2.azurecontainerapps.io/chatbot/701c21ea-1e25-4870-a512-847ab7bab5dc",
    // },

    // {
    //   id: "e49090f8-566a-4a66-a006-64af2325627f",
    //   name: "Customer Support & Sales Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.insuranceUnderwritingLogo,
    //   tools: {
    //     "Text Splitter": toolIcons.textSplitter,
    //     "OpenAI Embeddings": toolIcons.openAIEmbeddings,
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //     "Conversational Retrieval QA Chain":
    //       toolIcons.conversationalRetrievalQAChain,
    //     Qdrant: toolIcons.qdrant,
    //     "Buffer Memory": toolIcons.bufferMemory,
    //     Cheerio: toolIcons.cheerio,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description: "Workflow for RAG on Music and Arts website.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/b45cf381-1404-4d44-a8ed-8f29960a82fa`,
    // },
    // {
    //   id: "d4b95519-bb06-4b8c-82dc-9ece64daceae",
    //   name: "Project Planning Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.projectPlanningAgent,
    //   tools: {
    //     "Supervisor Agent": toolIcons.supervisorAgent,
    //     "Worker Agent": toolIcons.worker,
    //     "Serp API": toolIcons.serpApi,
    //     "Custom Tool": toolIcons.customTool,
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Project Planning Agent is an AI-driven assistant that helps teams design, schedule, and manage projects with greater speed and accuracy. It automates the creation of project charters, timelines, resource allocation plans, and risk assessments by synthesizing inputs from requirement documents, stakeholder interviews, and historical data.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/77124ec9-cd27-4574-afcf-b30e489d996b`,
    // },
    {
      id: "5d564b77-ee3c-4aaa-91aa-f121cdfcfd04",
      name: "Expense Finance Audit Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.financialAnalysisAgent,
      tools: {
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Chat OpenAI": toolIcons.chatopenAI,
        "Custom Tool": toolIcons.customTool,
        MCP: toolIcons.customMcp,
        Postgres: toolIcons.postgres,
        // "Cheerio": toolIcons.cheerio,
        // "Qdrant": toolIcons.qdrant,
        // "Text Splitter": toolIcons.textSplitter,
        // "OpenAI Embeddings": toolIcons.openAIEmbeddings,
        // "Retriever Tool":toolIcons.retrievertool,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "This agent pulls data from PostgreSQL and performs financial audit and generate report.",
      agentUrl: `${APP_BASE_URL}/chatbot/8ab6fc13-56d3-4c84-8cd2-5fa90043faea`,
    },
    // {
    //   id: "49d59ecc-e0b6-41a9-b1c3-c7ebe9068029",
    //   name: "Startup Idea Generator Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.startUpIdeaLogo,
    //   tools: {
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //     "In Memory Cache": toolIcons.inMemoryCache,
    //     "Serp API": toolIcons.serpApi,
    //     "Supervisor Agent": toolIcons.supervisorAgent,
    //     "Worker Agent": toolIcons.worker,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Startup Idea Generator Agent is an AI-powered brainstorming assistant designed to help entrepreneurs, innovators, and venture studios discover unique and viable startup ideas. It analyzes market trends, user pain points, emerging technologies, and successful business models to generate validated startup concepts across industries.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/45f23e58-9c2b-47b5-9a60-4b8f686ea358`,
    // },
    {
      id: "b1c07a97-e6e3-4925-b851-013f9492ffae",
      name: "Product Comparison Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.productComparisonAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Custom Tool": toolIcons.customTool,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Product Comparison Agent is an AI-powered assistant that automates side-by-side evaluations of competing products based on features, pricing, specifications, customer reviews, and third-party benchmarks. Ideal for sales teams, procurement units, or end-users, it delivers objective, data-driven comparisons to aid faster and smarter decision-making.",
      agentUrl: `${APP_BASE_URL}/chatbot/8ea6f784-a132-458f-a4e1-d639aa3e3a61`,
    },
    {
      id: "7d8b5e28-6805-4d2a-b4c7-85008dc94b27",
      name: "Investment Analysis Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.financialAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Investment Analysis Agent is an AI-powered assistant that streamlines financial due diligence by analyzing company reports, market trends, investor presentations, news, and financial statements. It assists analysts and fund managers in identifying opportunities, assessing risks, and generating investment memos with data-driven insights.",
      agentUrl: `${APP_BASE_URL}/chatbot/d3e38fd4-8556-428e-98b8-678eec821455`,
    },
    // {
    //   id: "3282cd95-4df4-4758-9766-a9cb862eed83",
    //   name: "Competitor Analysis Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.competetitorAnalysisAgent,
    //   tools: {
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //     "Agent Memory": toolIcons.agentMemoryLogo,
    //     "In Memory Cache": toolIcons.inMemoryCache,
    //     "Custom Tool": toolIcons.customTool,
    //     "Supervisor Agent": toolIcons.supervisorAgent,
    //     "Worker Agent": toolIcons.worker,
    //     "Serp API": toolIcons.serpApi,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Competitor Analysis Agent is an AI-driven assistant that continuously monitors, extracts, and analyzes competitive intelligence from public sources such as websites, press releases, financial filings, job postings, social media, and news. It helps strategy, product, and sales teams stay informed on market movements, product updates, pricing strategies, and emerging threats.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/43bc784a-1f63-4354-9c1c-0a887fd87a53`,
    // },
    // {
    //   id: "5b3484d7-deb1-498c-b91b-aefd9199df75",
    //   name: "Code Review Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.codeReviewAgent,
    //   tools: {
    //     "Seq Start": toolIcons.start,
    //     "Seq LLM Node": toolIcons.sqlllmNode,
    //     "Sequential Agent": toolIcons.seqAgent,
    //     "Sequential Condition": toolIcons.seqCondition,
    //     "Agent Memory": toolIcons.agentMemoryLogo,
    //     "Sequential State": toolIcons.seqState,
    //     "Sequential Loop": toolIcons.seqloop,
    //     "Sequential End": toolIcons.seqEnd,
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Code Review Agent is an AI-powered assistant designed to automatically analyze, review, and provide feedback on source code across multiple languages.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/b2f19729-0c8e-4113-a326-d9fe3d29345b`,
    // },
    // {
    //   id: "953d0151-5356-41e3-9e79-ba8b429d064a",
    //   name: "Software Development Agent",
    //   tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   icon: agentLogos.softwareDevelopmentAgent,
    //   tools: {
    //     "Chat OpenAI": toolIcons.chatopenAI,
    //     "In Memory Cache": toolIcons.inMemoryCache,
    //     "Supervisor Agent": toolIcons.supervisorAgent,
    //     "Worker Agent": toolIcons.worker,
    //   },
    //   workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
    //   description:
    //     "The Software Development Agent is an AI-powered assistant that accelerates the end-to-end software development lifecycle—from requirements gathering to code generation, testing, and deployment. It supports product managers, developers, and DevOps teams by automating repetitive tasks, improving code quality, and ensuring faster delivery cycles.",
    //   agentUrl: `${APP_BASE_URL}/chatbot/c0bae397-de44-4821-ac2e-ea20697ecf29`,
    // },
  ];

  return (
    <div className={` `}>
      <section className={`pb-10 flex-row `}>
        <div className="mb-4 px-4">
          <p className="font-sans text-2xl dark:text-white">Agents Gallery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {chatFlowData.map(
            ({ id, name, description, agentUrl, icon, tools, toolName }) => (
              <AgentCard
                key={id}
                title={name}
                logo={icon}
                description={description}
                agentUrl={agentUrl}
                tools={tools}
                toolName={toolName}
              />
            ),
          )}
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
