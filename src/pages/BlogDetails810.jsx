import { useState } from "react";
import ShareButtons from "../components/sharebuttons/ShareButtons";
import mahadevProfile from "../assets/images/team/mahadev.png";

const BlogDetails810 = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const agents = [
    {
      icon: "📋",
      title: "Contract Parser Agent",
      text: "Extracts contract data including items, rebate terms and SLA clauses directly from the procurement database.",
    },
    {
      icon: "💰",
      title: "Spend Analyzer Agent",
      text: "Compares purchase orders and invoices against contracted prices to detect price variance leakage.",
    },
    {
      icon: "🏷️",
      title: "Rebate Analyzer Agent",
      text: "Calculates rebate eligibility and identifies rebates that should have been claimed but were not.",
    },
    {
      icon: "⚠️",
      title: "Penalty Analyzer Agent",
      text: "Evaluates supplier performance against SLA commitments and calculates penalty exposure.",
    },
    {
      icon: "📊",
      title: "Leakage Summary Agent",
      text: "Aggregates results from all agents and calculates total leakage exposure.",
    },
    {
      icon: "💬",
      title: "General Query Agent",
      text: "Allows procurement teams to ask natural language questions about contract data.",
    },
  ];

  return (
    <div className="text-justify dark:bg-secondary px-4 sm:px-8">
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
            {/* TITLE */}

            <div className="row justify-center mb-5">
              <div className="lg:w-full">
                <h2 className="text-black dark:text-secondary-dark font-medium text-center">
                  The Hidden Tax: How a Multi-Agent AI System Catches Contract
                  Leakage Before It Costs You Millions
                </h2>
              </div>
            </div>

            {/* AUTHOR */}

            <div className="row justify-center mt-8">
              <div className="lg:w-8/12 mx-auto">
                <div className="flex flex-wrap justify-between items-center mb-6 gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={mahadevProfile}
                      alt="Author"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className="font-medium text-black dark:text-secondary-dark">
                      TensorHub Technologies
                    </p>
                  </div>

                  <ul className="list-none flex items-center text-sm space-x-4 text-black dark:text-secondary-dark">
                    <li>Mar 15 2026</li>
                    <li>8 Min. Read</li>
                  </ul>
                </div>

                <article className="font-medium text-black dark:text-secondary-dark space-y-8">
                  {/* STATS */}

                  <div className="grid md:grid-cols-4 bg-black text-white rounded-lg overflow-hidden">
                    <div className="text-center p-5 border-r border-gray-700">
                      <h3 className="text-pink-500 text-3xl font-bold">9.2%</h3>
                      <p className="text-sm opacity-70">
                        Average contract value lost to leakage
                      </p>
                    </div>

                    <div className="text-center p-5 border-r border-gray-700">
                      <h3 className="text-pink-500 text-3xl font-bold">30x</h3>
                      <p className="text-sm opacity-70">
                        Faster deployment with THub
                      </p>
                    </div>

                    <div className="text-center p-5 border-r border-gray-700">
                      <h3 className="text-pink-500 text-3xl font-bold">40%+</h3>
                      <p className="text-sm opacity-70">
                        Operational cost savings
                      </p>
                    </div>

                    <div className="text-center p-5">
                      <h3 className="text-pink-500 text-3xl font-bold">6</h3>
                      <p className="text-sm opacity-70">
                        Specialized AI agents
                      </p>
                    </div>
                  </div>

                  {/* INTRO */}

                  <h4 className="text-xl font-bold">
                    The Problem No Procurement Team Talks About
                  </h4>

                  <p>
                    Enterprise contracts are expensive to negotiate,
                    labour-intensive to manage, and often under-monitored once
                    signed. Suppliers invoice off-contract prices, rebates go
                    unclaimed, and SLA penalties remain unenforced.
                  </p>

                  <blockquote className="border-l-4 border-pink-500 pl-4 italic bg-gray-100 p-4">
                    Most organisations don’t know how much they’re losing — not
                    because the data doesn’t exist, but because nobody has
                    connected it fast enough.
                  </blockquote>

                  {/* CALL OUT */}

                  <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
                    <h3 className="text-4xl font-bold text-pink-400">$14M+</h3>
                    <p>
                      Estimated annual leakage recovered after deploying
                      TensorHub’s contract intelligence agent.
                    </p>
                  </div>

                  {/* LEAKAGE TYPES */}

                  <h4 className="text-xl font-bold">
                    Three Types of Contract Leakage
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-t-4 border-pink-500 border p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">💸</div>
                      <h5 className="font-semibold">Price Variance</h5>
                      <p className="text-sm">
                        Spend exceeds contracted unit price due to invoice
                        errors.
                      </p>
                    </div>

                    <div className="border-t-4 border-pink-500 border p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">🏷️</div>
                      <h5 className="font-semibold">Uncaptured Rebates</h5>
                      <p className="text-sm">
                        Spend thresholds reached but rebates never claimed.
                      </p>
                    </div>

                    <div className="border-t-4 border-pink-500 border p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">⚠️</div>
                      <h5 className="font-semibold">SLA Penalties</h5>
                      <p className="text-sm">
                        Supplier breaches occur but penalties are never applied.
                      </p>
                    </div>
                  </div>

                  {/* PIPELINE */}

                  <h4 className="text-xl font-bold">The Six-Agent Pipeline</h4>

                  <div className="flex flex-wrap justify-between gap-4 bg-gray-100 p-6 rounded-lg">
                    {[
                      "Start",
                      "Contract Parser",
                      "Spend Analyzer",
                      "Rebate Analyzer",
                      "Penalty Analyzer",
                      "Risk Scoring",
                      "General Query",
                    ].map((step) => (
                      <div
                        key={step}
                        className="flex flex-col items-center text-sm"
                      >
                        <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center mb-2">
                          ⚙️
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>

                  {/* AGENTS */}

                  <h4 className="text-xl font-bold">Agent Roles Explained</h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    {agents.map((agent, index) => (
                      <div
                        key={index}
                        className="border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg"
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex items-center gap-3 p-4">
                          <span className="text-xl">{agent.icon}</span>
                          <h5 className="font-semibold flex-1">
                            {agent.title}
                          </h5>
                          <span>{openCard === index ? "▲" : "▼"}</span>
                        </div>

                        {openCard === index && (
                          <div className="border-t p-4 text-sm">
                            {agent.text}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* TABLE */}

                  <h4 className="text-xl font-bold">Example Leakage Report</h4>

                  <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-full text-sm">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="p-3 text-left">Contract</th>
                          <th className="p-3 text-left">Vendor</th>
                          <th className="p-3 text-left">Price Variance</th>
                          <th className="p-3 text-left">Rebate</th>
                          <th className="p-3 text-left">Penalty</th>
                          <th className="p-3 text-left">Total Leakage</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">CNT-0041</td>
                          <td className="p-3">Acme Industrial</td>
                          <td className="p-3 text-pink-500">$84,200</td>
                          <td className="p-3 text-pink-500">$32,000</td>
                          <td className="p-3 text-pink-500">$18,500</td>
                          <td className="p-3 font-bold">$134,700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* CTA */}

                  <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center p-10 rounded-xl">
                    <h3 className="text-3xl font-bold mb-4">
                      See It Running on Your Contracts
                    </h3>

                    <p className="mb-6">
                      We’ll walk you through a live demo of the Contract Leakage
                      Agent connected to your procurement data.
                    </p>

                    <button className="bg-pink-500 px-6 py-3 rounded-lg">
                      Request Demo →
                    </button>
                  </div>
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

export default BlogDetails810;
