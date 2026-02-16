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
    {
      id: "5d564b77-ee3c-4aaa-91aa-f121cdfcfd04",
      name: "Expense Audit Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.financialAnalysisAgent,
      tools: {
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Chat OpenAI": toolIcons.chatopenAI,
        "Custom Tool": toolIcons.customTool,
        MCP: toolIcons.customMcp,
        Postgres: toolIcons.postgres,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "This agent pulls data from PostgreSQL and performs financial audit and generate report.",
      agentUrl: `${APP_BASE_URL}/chatbot/8ab6fc13-56d3-4c84-8cd2-5fa90043faea`,
    },
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
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Competitor Analysis Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "The Competitor Analysis Agent is an AI-driven assistant that continuously monitors, extracts, and analyzes competitive intelligence from public sources such as websites, press releases, financial filings, job postings, social media, and news. It helps strategy, product, and sales teams stay informed on market movements, product updates, pricing strategies, and emerging threats.",
      agentUrl: `${APP_BASE_URL}/chatbot/43bc784a-1f63-4354-9c1c-0a887fd87a53`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Partnership Optimisation Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Evaluates vendor and partner performance using cost, reliability, and ROI metrics.Recommends actions to strengthen high-value partnerships and optimize contracts.",
      agentUrl: `${APP_BASE_URL}/chatbot/d217cede-01fc-4b66-a3de-593ae5a33710`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Accounts Payable Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Automates invoice validation, payment tracking, and vendor reconciliation workflows. Helps prevent late payments, errors, and duplicate invoice processing",
      agentUrl: `${APP_BASE_URL}/chatbot/f7070161-747c-45d6-a402-ae58bc6633b1`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Accounts Receivables Audit Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Tracks incoming payments, detects overdue invoices, and identifies revenue leakage risks. Provides insights to improve cash flow and strengthen collections.",
      agentUrl: `${APP_BASE_URL}/chatbot/a89ac6fa-7a65-4e54-9167-bfcf48eb3202`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "PO vs GRN vs Invoice Audit Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Performs 3-way matching between Purchase Orders, Goods Receipt Notes, and Invoices. Flags mismatches, quantity issues, and billing discrepancies before payment.",
      agentUrl: `${APP_BASE_URL}/chatbot/9931e502-f663-49ba-8a86-6d623f749759`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Contract Leakage Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Scans contracts to identify missed discounts, unused benefits, or non-compliant billing. Helps recover lost value and ensure vendors follow agreed terms.",
      agentUrl: `${APP_BASE_URL}/chatbot/5743913f-472d-4202-ad4e-76b4f5a17fe7`,
    },
    {
      id: "3282cd95-4df4-4758-9766-a9cb862eed83",
      name: "Price Variation Audit Agent",
      tenantId: "9bf57af6-4020-4e53-951d-647d2db86070",
      icon: agentLogos.competetitorAnalysisAgent,
      tools: {
        "Chat OpenAI": toolIcons.chatopenAI,
        "Agent Memory": toolIcons.agentMemoryLogo,
        "In Memory Cache": toolIcons.inMemoryCache,
        "Custom Tool": toolIcons.customTool,
        "Supervisor Agent": toolIcons.supervisorAgent,
        "Worker Agent": toolIcons.worker,
        "Serp API": toolIcons.serpApi,
      },
      workspaceUid: "9bf57af6-4020-4e53-951d-647d2db86070",
      description:
        "Detects unusual price changes across invoices, vendors, or time periods. Highlights potential fraud, errors, or negotiation opportunities.",
      agentUrl: `${APP_BASE_URL}/chatbot/9f9a02f3-e1c1-438a-9156-293a0c2bd11c`,
    },
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
