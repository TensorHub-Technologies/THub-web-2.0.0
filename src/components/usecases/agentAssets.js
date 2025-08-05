// Agent Logos
import startUpIdeaLogo from "../../assets/agent-logos/startup-idea-agent.png";
import codeReviewAgent from "../../assets/agent-logos/code-review-agent.png";
import competetitorAnalysisAgent from "../../assets/agent-logos/competitor_analysis_agent.png";
import projectPlanningAgent from "../../assets/agent-logos/project_planning_agent.png";
import insuranceUnderwritingLogo from "../../assets/agent-logos/insurance-underwriting-agent.png";
import productComparisonAgent from "../../assets/agent-logos/product_comparison_agent.png";
import softwareDevelopmentAgent from "../../assets/agent-logos/software_development_agent.png";
import financialAnalysisAgent from "../../assets/agent-logos/Financial_Analyst_Agent.png";

// Tools
import textSplitter from "../../assets/tools/textsplitter.svg";
import openAIEmbeddings from "../../assets/tools/openaiEmbedding.svg";
import conversationalRetrievalQAChain from "../../assets/tools/qa.svg";
import chatopenAI from "../../assets/tools/openai.svg";
import qdrant from "../../assets/tools/qdrant.png";
import bufferMemory from "../../assets/tools/buffermemory.svg";
import inMemoryCache from "../../assets/tools/inMemory.svg";
import serpApi from "../../assets/tools/serp.svg";
import supervisorAgent from "../../assets/tools/supervisor.svg";
import worker from "../../assets/tools/worker.svg";
import customTool from "../../assets/tools/customtool.svg";
import agentMemoryLogo from "../../assets/custom-tools/AgentMemoryLogo.jsx";
import seqAgent from "../../assets/tools/Agent_dark.png";
import start from "../../assets/tools/start.svg";
// import seqAgent from "../../assets/tools/seqAgent.png";
import sqlllmNode from "../../assets/tools/llmNode.svg";
import seqState from "../../assets/tools/state.svg";
import seqloop from "../../assets/tools/loop.svg";
import seqEnd from "../../assets/tools/end.svg";
import seqCondition from "../../assets/tools/condition.svg";
import cheerio from "../../assets/tools/cheerio.svg";

// Exporting as grouped objects
export const agentLogos = {
  startUpIdeaLogo,
  codeReviewAgent,
  competetitorAnalysisAgent,
  projectPlanningAgent,
  insuranceUnderwritingLogo,
  productComparisonAgent,
  softwareDevelopmentAgent,
  financialAnalysisAgent,
};
export const toolIcons = {
  textSplitter: { type: "image", icon: textSplitter },
  openAIEmbeddings: { type: "image", icon: openAIEmbeddings },
  conversationalRetrievalQAChain: {
    type: "image",
    icon: conversationalRetrievalQAChain,
  },
  chatopenAI: { type: "image", icon: chatopenAI },
  qdrant: { type: "image", icon: qdrant },
  bufferMemory: { type: "image", icon: bufferMemory },
  inMemoryCache: { type: "image", icon: inMemoryCache },
  serpApi: { type: "image", icon: serpApi },
  supervisorAgent: { type: "image", icon: supervisorAgent },
  worker: { type: "image", icon: worker },
  customTool: { type: "image", icon: customTool },
  agentMemoryLogo: { type: "component", icon: agentMemoryLogo }, // JSX component
  seqAgent: { type: "image", icon: seqAgent },
  sqlllmNode: { type: "image", icon: sqlllmNode },
  seqState: { type: "image", icon: seqState },
  start: { type: "image", icon: start },
  seqloop: { type: "image", icon: seqloop },
  seqEnd: { type: "image", icon: seqEnd },
  seqCondition: { type: "image", icon: seqCondition },
  cheerio: { type: "image", icon: cheerio },
};
