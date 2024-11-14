import { useSelector } from "react-redux";

const ComparisonTable = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const tableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "transparent",
    color: isDarkMode ? "white" : "black",
    textAlign: "left",
  };

  const tableDataStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  };
  const data = [
    { feature: "Flexibility in Reasoning", aiAgents: "✅", rpa: "❌" },
    { feature: "Granular State-Based Approach", aiAgents: "❌", rpa: "✅" },
    { feature: "RPA Approach", aiAgents: "❌", rpa: "✅" },
    { feature: "Human-in-the-Loop (HITL)", aiAgents: "✅", rpa: "❌" },
    { feature: "Cost Management", aiAgents: "✅", rpa: "✅" },
    { feature: "Optimizing Latency", aiAgents: "✅", rpa: "❌" },
    { feature: "Dynamic Action Sequences", aiAgents: "✅", rpa: "❌" },
    { feature: "Seamless Tool Introduction", aiAgents: "✅", rpa: "❌" },
    { feature: "Explainability & Observability", aiAgents: "✅", rpa: "✅" },
    { feature: "Conversational Orientation", aiAgents: "✅", rpa: "❌" },
    { feature: "Adaptive Capabilities", aiAgents: "✅", rpa: "❌" },
    { feature: "Contextual Awareness", aiAgents: "✅", rpa: "❌" },
    { feature: "Real-Time Decision Making", aiAgents: "✅", rpa: "❌" },
    { feature: "Unstructured Data Handling", aiAgents: "✅", rpa: "❌" },
    { feature: "Goal-Oriented Behavior", aiAgents: "✅", rpa: "❌" },
    { feature: "Scalability Across Environments", aiAgents: "✅", rpa: "❌" },
    { feature: "Proactive Engagement", aiAgents: "✅", rpa: "❌" },
    {
      feature: "Tool Interoperability & Flexibility",
      aiAgents: "✅",
      rpa: "✅",
    },
    { feature: "No-/Low-Code IDEs", aiAgents: "✅", rpa: "✅" },
    {
      feature: "Dynamic Adaptability to Unseen Scenarios",
      aiAgents: "✅",
      rpa: "❌",
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ borderCollapse: "collapse", width: "100%", minWidth: "500px" }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Feature</th>
            <th style={tableHeaderStyle}>LLM & Tools-Driven AI Agents</th>
            <th style={tableHeaderStyle}>Traditional RPA (Chains/Flows)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  index % 2 === 0 ? "transparent" : "transparent",
              }}
            >
              <td style={tableDataStyle}>{row.feature}</td>
              <td style={tableDataStyle}>{row.aiAgents}</td>
              <td style={tableDataStyle}>{row.rpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
