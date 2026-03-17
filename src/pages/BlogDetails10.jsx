import { useState, useEffect } from "react";
import ShareButtons from "../components/sharebuttons/ShareButtons";
import contract_leakage from "../assets/images/blog/contract_leakage.png";
import authorProfile from "../assets/images/blog/ganapathi _profile.jpg";

const BlogDetails10 = () => {
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      const bar = document.getElementById("thub-reading-bar");
      if (bar) bar.style.width = progress + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCard = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  return (
    <>
      <div
        id="thub-reading-bar"
        className="fixed top-0 left-0 h-[3px] bg-[#E22A90] w-0 z-[200] transition-all duration-100"
      ></div>

      <div className="text-justify border-red-400 dark:bg-secondary px-4 sm:px-8">
        <div className="text-center py-5">
          <h3 className="text-secondary text-3xl font-bold dark:text-background font-['Lexend']">
            Blog Posts
          </h3>
          <div className="mt-2 mb-5 font-['Outfit']">
            <span className="dark:text-secondary-dark">Home / </span>
            <span className="text-secondary-dark">Blog Posts</span>
          </div>

          <section className="pt-5 pb-10 lg:pt-2 lg:pb-15 dark:bg-secondary">
            <div className="container">
              {/* Header Section */}
              <div className="row justify-center mb-5">
                <div className="lg:w-full">
                  <h2 className="text-black dark:text-secondary-dark font-medium mb-0 text-center font-['Lexend'] text-3xl">
                    The Hidden Tax: How a Multi-Agent AI System Catches Contract
                    Leakage Before It Costs You Millions
                  </h2>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-800">
                <img
                  src={contract_leakage}
                  alt="Contract Leakage AI"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Author and Meta Info */}
              <div className="row justify-center mt-8 text-left">
                <div className="lg:w-8/12 mx-auto">
                  <div className="flex flex-wrap justify-between items-center mb-10 gap-6 border-b border-[#e8e8e8] dark:border-gray-800 pb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src={authorProfile}
                        alt="Ganapathy Shankar"
                        className="w-10 h-10 object-cover rounded-full bg-gray-200"
                      />
                      <p className="font-medium mb-0 text-black dark:text-secondary-dark font-['Outfit'] text-[15px]">
                        Ganapathy Shankar
                      </p>
                    </div>
                    <ul className="list-none flex items-center text-sm space-x-4 text-black dark:text-secondary-dark font-['Outfit'] font-medium mb-0">
                      <li>Tue Mar 16 2026</li>
                      <li>8 Min. Read</li>
                    </ul>
                  </div>

                  {/* Blog Introduction */}
                  <p className="font-['Outfit'] text-[20px] font-light text-black dark:text-secondary-dark mb-9 leading-[1.7] italic opacity-85">
                    A step-by-step look at the six-agent pipeline TensorHub
                    built to detect price variances, uncaptured rebates, and
                    unenforced SLA penalties — in real time.
                  </p>

                  {/* Main Article */}
                  <article className="blog-post font-medium mb-0 text-justify text-black dark:text-secondary-dark font-['Outfit']">
                    <h2 className="font-['Lexend',Trebuchet_MS,sans-serif] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-6 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      The Problem No Procurement Team Talks About
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Enterprise contracts are expensive to negotiate,
                      labour-intensive to manage, and almost universally
                      under-monitored once signed. Across industries —
                      manufacturing, logistics, retail, financial services — a
                      consistent pattern emerges: the terms get agreed, the ink
                      dries, and then the leakage begins.
                    </p>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Suppliers invoice at off-contract prices. Volume
                      thresholds that unlock rebates are crossed without anyone
                      claiming the discount. SLA breaches accumulate, but
                      penalty clauses sit in PDF drawers rather than finance
                      systems. Each gap seems small in isolation. At scale,
                      across dozens of active contracts and hundreds of SKUs,
                      the compound loss is staggering.
                    </p>

                    <blockquote className="border-l-4 border-[#E22A90] my-9 py-4 px-7 bg-[#F5F5F5] dark:bg-gray-900 rounded-r-lg text-[21px] italic text-[#52289F] dark:text-[#a074ec]">
                      &quot;Most organisations don&apos;t know how much
                      they&apos;re losing — not because the data doesn&apos;t
                      exist, but because nobody has connected it at speed.&quot;
                    </blockquote>

                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      This is precisely the problem the TensorHub Contract
                      Leakage Agent was built to solve. Not a dashboard. Not a
                      report. An active, multi-agent AI system that queries your
                      live procurement database, analyses every dimension of
                      leakage, scores risk, and delivers a consolidated picture
                      — on demand, in minutes.
                    </p>

                    <div className="bg-[#3C5BA4] text-white rounded-xl py-7 px-9 my-11 font-['Outfit'] text-[19px] leading-[1.6]">
                      <strong className="text-[40px] font-bold block text-[#E22A90] leading-[1.1] mb-2">
                        $14M+
                      </strong>
                      Estimated annual leakage recovered in Year 1 for a
                      mid-market manufacturer after deploying a contract
                      intelligence agent built on THub — across 47 active
                      supplier contracts.
                    </div>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      Three Types of Leakage the Agent Hunts
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Before walking through the architecture, it helps to name
                      what we&apos;re actually looking for. Contract leakage
                      manifests in three distinct but compounding forms:
                    </p>

                    {/* Leakage Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-9">
                      <div className="bg-white dark:bg-gray-900 border border-[#e0e0e0] dark:border-gray-800 border-t-4 border-t-[#E22A90] rounded-lg py-5 px-4 text-center">
                        <div className="text-[28px] mb-2.5">💸</div>
                        <div className="font-['Outfit'] text-[14px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mb-2">
                          Price Variance Leakage
                        </div>
                        <div className="text-[13px] text-[#666] dark:text-gray-400 leading-[1.5]">
                          Actual spend on a SKU exceeds the contracted unit
                          price. Happens through invoice errors, price
                          escalation clauses being triggered silently, or
                          procurement teams bypassing approved vendors.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-900 border border-[#e0e0e0] dark:border-gray-800 border-t-4 border-t-[#E22A90] rounded-lg py-5 px-4 text-center">
                        <div className="text-[28px] mb-2.5">🏷️</div>
                        <div className="font-['Outfit'] text-[14px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mb-2">
                          Uncaptured Rebates
                        </div>
                        <div className="text-[13px] text-[#666] dark:text-gray-400 leading-[1.5]">
                          Volume or annual spend thresholds in rebate terms are
                          crossed but never claimed. Suppliers rarely notify
                          buyers — the burden is on the buyer to track and
                          trigger rebate requests.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-900 border border-[#e0e0e0] dark:border-gray-800 border-t-4 border-t-[#E22A90] rounded-lg py-5 px-4 text-center">
                        <div className="text-[28px] mb-2.5">⚠️</div>
                        <div className="font-['Outfit'] text-[14px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mb-2">
                          Unenforced SLA Penalties
                        </div>
                        <div className="text-[13px] text-[#666] dark:text-gray-400 leading-[1.5]">
                          Delivery time, quality rate, and service response
                          commitments are breached. Penalty clauses exist in the
                          contract but are never calculated or invoiced,
                          effectively subsidising poor supplier performance.
                        </div>
                      </div>
                    </div>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      The Six-Agent Pipeline: Architecture Overview
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      The TensorHub Contract Leakage Agent is not a monolithic
                      model trying to do everything. It is a purpose-built
                      multi-agent pipeline where each agent has exactly one job
                      — and passes its output downstream as context for the next
                      specialised reasoning step.
                    </p>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Built on the THub low-code agentic AI orchestration
                      platform, the entire flow was assembled without writing a
                      single line of backend infrastructure code. Connections to
                      PostgreSQL, agent sequencing, memory management, and
                      output routing are all configured visually in the Agent
                      Studio.
                    </p>

                    {/* Pipeline Flow */}
                    <div className="bg-[#F5F5F5] dark:bg-gray-900 rounded-2xl py-10 px-9 my-12 overflow-x-auto">
                      <div className="font-['Lexend'] text-[18px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mb-8 text-center uppercase tracking-[1px]">
                        Agent Pipeline — Contract Leakage Detection Flow
                      </div>
                      <div className="flex items-stretch min-w-[700px] pb-2">
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#e8f0fe] dark:bg-blue-900/30">
                            🚀
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Start
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            Chat / Form Input
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#fff3e0] dark:bg-orange-900/30">
                            📋
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Contract Parser
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            DB Extraction
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#fce4ec] dark:bg-pink-900/30">
                            💰
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Spend Analyzer
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            Price Variance
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#f3e5f5] dark:bg-purple-900/30">
                            🏷️
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Rebate Analyzer
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            Uncaptured Rebates
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#e8f5e9] dark:bg-green-900/30">
                            ⚠️
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Penalty Analyzer
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            SLA Breaches
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative after:content-['→'] after:absolute after:-right-3.5 after:top-5 after:text-[20px] after:text-[#52289F] dark:after:text-gray-500 after:font-bold after:z-10">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#e3f2fd] dark:bg-blue-900/30">
                            📊
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            Risk Scoring
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            Summary Agent
                          </div>
                        </div>
                        <div className="flex-1 min-w-[110px] flex flex-col items-center relative cursor-text">
                          <div className="w-[52px] h-[52px] rounded-xl flex justify-center items-center text-[22px] mb-2.5 shrink-0 bg-[#f5f5f5] dark:bg-gray-800">
                            💬
                          </div>
                          <div className="font-['Outfit'] text-[11px] font-medium text-[#141414] dark:text-gray-300 text-center leading-[1.3]">
                            General Query
                          </div>
                          <div className="font-['Outfit'] text-[10px] text-[#888] text-center mt-1">
                            Follow-up Q&A
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Click any agent below to see exactly what it does — and
                      why the sequence matters.
                    </p>

                    {/* Agent Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                      {/* Parser */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "parser" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("parser")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#fff3e0] dark:bg-orange-900/30">
                            📋
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            Contract Parser Agent
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "parser" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "parser" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> Read-only database
                              extraction. Queries the live PostgreSQL database
                              and surfaces every active contract, line item,
                              rebate term, and SLA clause in structured markdown
                              tables.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Connects to PostgreSQL via MCP tool
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Runs a multi-join query across vendors,
                                contracts, contract_items, rebate_terms,
                                sla_terms
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Outputs four structured tables — no analysis, no
                                filtering beyond Active status
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Provides accurate record counts for downstream
                                agents
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Spend Analyzer */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "spend" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("spend")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#fce4ec] dark:bg-pink-900/30">
                            💰
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            Spend Analyzer Agent
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "spend" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "spend" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> Cross-references actual
                              purchase order data with contracted unit prices at
                              SKU level. Identifies every instance where
                              invoiced cost exceeds the agreed contracted price.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Queries actual spend from PO/invoice tables
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Compares against contracted_price per SKU and
                                vendor
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Calculates variance amount and variance
                                percentage
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Flags high-variance line items for escalation
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Rebate Analyzer */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "rebate" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("rebate")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#f3e5f5] dark:bg-purple-900/30">
                            🏷️
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            Rebate Analyzer Agent
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "rebate" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "rebate" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> Evaluates whether
                              cumulative spend per contract has crossed rebate
                              thresholds. Calculates the dollar value of rebates
                              that should have been claimed but weren&apos;t.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Aggregates total spend per contract_id
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Compares against rebate_threshold values in
                                rebate_terms
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Calculates eligible rebate amount using
                                rebate_percentage and cap
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Reports unclaimed rebate by rebate_type (Volume,
                                Annual, Quarterly)
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Penalty Analyzer */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "penalty" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("penalty")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#e8f5e9] dark:bg-green-900/30">
                            ⚠️
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            Penalty Clause Analyzer Agent
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "penalty" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "penalty" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> Evaluates supplier
                              performance against SLA commitments. Computes
                              financial penalties for missed delivery times,
                              quality rates, and service levels.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Queries actual performance metrics from delivery
                                / service data
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Compares against expected_value in sla_terms per
                                contract
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Calculates penalty using penalty_rate and
                                penalty_basis (per_day, per_percentage)
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Flags SLA breaches and total unenforced penalty
                                exposure
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Risk Scoring */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "risk" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("risk")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#e3f2fd] dark:bg-blue-900/30">
                            📊
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            Leakage Summary & Risk Scoring
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "risk" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "risk" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> Consolidates outputs from
                              all upstream agents into a unified leakage report.
                              Assigns a risk score to each contract and
                              prioritises action by dollar exposure.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Aggregates spend variance, uncaptured rebates,
                                and unenforced penalties per contract
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Calculates Total Leakage Exposure (TLE) per
                                vendor
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Produces a risk-ranked contract list with
                                colour-coded severity
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Recommends immediate, near-term, and strategic
                                actions
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* General Query */}
                      <div
                        className={`border border-[#e8e8e8] dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(60,91,164,0.12)] hover:translate-y-[-2px] bg-white dark:bg-gray-900 ${openCard === "query" ? "shadow-[0_8px_32px_rgba(60,91,164,0.12)]" : ""}`}
                        onClick={() => toggleCard("query")}
                      >
                        <div className="p-4 sm:p-5 flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] shrink-0 bg-[#f5f5f5] dark:bg-gray-800">
                            💬
                          </div>
                          <div className="font-['Outfit'] text-[15px] font-medium text-[#141414] dark:text-white leading-[1.3]">
                            General Query Agent
                          </div>
                          <div
                            className={`ml-auto text-[#3C5BA4] dark:text-[#6a90e9] text-[18px] transition-transform shrink-0 ${openCard === "query" ? "rotate-180" : ""}`}
                          >
                            ▾
                          </div>
                        </div>
                        {openCard === "query" && (
                          <div className="px-5 pb-5 border-t border-[#f0f0f0] dark:border-gray-800 pt-3">
                            <p className="text-[14px] text-[#555] dark:text-gray-400 mt-3 leading-[1.6]">
                              <strong>Role:</strong> An always-available
                              conversational agent for follow-up queries.
                              Procurement teams can drill down on specific
                              vendors, contracts, or time periods without
                              re-running the full pipeline.
                            </p>
                            <ul className="list-none p-0 mt-3 space-y-2">
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Handles ad-hoc natural language queries on
                                contract data
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Retains full conversation memory within session
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Supports filtered lookups by vendor, category,
                                or country
                              </li>
                              <li className="text-[13px] text-[#444] dark:text-gray-300 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#E22A90] before:font-bold">
                                Routes complex queries back through specialist
                                agents when needed
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      What the Data Looks Like in Practice
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      To ground this in reality, here&apos;s the kind of output
                      the Risk Scoring Agent produces. Each row in the table
                      below represents a single active contract — ranked by
                      Total Leakage Exposure across all three leakage types.
                    </p>

                    <div className="my-9 overflow-x-auto rounded-lg border border-[#e0e0e0] dark:border-gray-800">
                      <table className="w-full border-collapse text-[13px]">
                        <thead>
                          <tr>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Contract ID
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Vendor
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Category
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Price Variance (↑)
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Uncaptured Rebate
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              SLA Penalty Exposure
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Total Leakage
                            </th>
                            <th className="bg-[#3C5BA4] text-white font-['Lexend'] text-[12px] font-medium p-3 text-left whitespace-nowrap border-b border-[#3C5BA4]">
                              Risk
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white dark:bg-gray-900 border-b border-[#f0f0f0] dark:border-gray-800">
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              CNT-0041
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Acme Industrial
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Electronics
                            </td>
                            <td className="p-3 text-[#E22A90] font-semibold">
                              $84,200
                            </td>
                            <td className="p-3 text-[#E22A90] font-semibold">
                              $32,000
                            </td>
                            <td className="p-3 text-[#E22A90] font-semibold">
                              $18,500
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <strong>$134,700</strong>
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <span className="inline-block py-0.5 px-2 rounded font-medium text-[11px] bg-[#fef0f0] text-[#c0392b]">
                                HIGH
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-[#F5F5F5] dark:bg-black/30 border-b border-[#f0f0f0] dark:border-gray-800">
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              CNT-0027
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Beta Logistics
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Logistics
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $12,400
                            </td>
                            <td className="p-3 text-[#E22A90] font-semibold">
                              $67,000
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $4,100
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <strong>$83,500</strong>
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <span className="inline-block py-0.5 px-2 rounded font-medium text-[11px] bg-[#fef0f0] text-[#c0392b]">
                                HIGH
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-white dark:bg-gray-900 border-b border-[#f0f0f0] dark:border-gray-800">
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              CNT-0033
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Gamma Supplies
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Manufacturing
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $8,900
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $11,200
                            </td>
                            <td className="p-3 text-[#E22A90] font-semibold">
                              $41,000
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <strong>$61,100</strong>
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <span className="inline-block py-0.5 px-2 rounded font-medium text-[11px] bg-[#fef0f0] text-[#c0392b]">
                                MEDIUM
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-[#F5F5F5] dark:bg-black/30">
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              CNT-0015
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Delta Components
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              Electronics
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $3,200
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $8,800
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              $2,400
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <strong>$14,400</strong>
                            </td>
                            <td className="p-3 text-[#141414] dark:text-gray-300">
                              <span className="inline-block py-0.5 px-2 rounded font-medium text-[11px] bg-[#edfaf1] text-[#27ae60]">
                                LOW
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[13px] font-light text-[#888] text-center mt-[-16px] mb-7">
                      Illustrative output from the Leakage Summary & Risk
                      Scoring Agent. Real data is pulled live from your
                      PostgreSQL procurement database.
                    </p>

                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      In a real deployment, this table spans all active
                      contracts — ranked highest to lowest — so procurement
                      leaders can immediately prioritise which supplier
                      relationships need attention this quarter.
                    </p>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      The Risk Score: Moving Beyond a Spreadsheet
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      One of the most powerful outputs of the pipeline is a
                      composite risk score per contract — not just a dollar
                      total, but a weighted rating that accounts for leakage
                      severity, trend direction, and contract duration
                      remaining.
                    </p>

                    <div className="bg-gradient-to-br from-[#52289F] to-[#3C5BA4] rounded-xl p-8 my-10 text-white flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                      <div className="shrink-0 w-[120px] text-center">
                        <div
                          className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-2 relative"
                          style={{
                            background:
                              "conic-gradient(#E22A90 0% 72%, rgba(255,255,255,0.15) 72%)",
                          }}
                        >
                          <div className="w-[74px] h-[74px] bg-[#52289F] rounded-full flex items-center justify-center font-['Libre_Bodoni'] text-[22px] font-bold text-[#E22A90]">
                            72
                          </div>
                        </div>
                        <div className="font-['Outfit'] text-[12px] opacity-75">
                          Risk Score / 100
                        </div>
                      </div>
                      <div>
                        <h3 className="font-['Lexend'] text-[20px] text-white mb-2.5 font-medium">
                          Contract CNT-0041 · Acme Industrial
                        </h3>
                        <p className="text-[15px] opacity-85 m-0 leading-[1.6] text-white/85">
                          High composite risk. Price variance trending upward
                          over 3 consecutive quarters. Volume rebate threshold
                          crossed but not claimed for two periods. Delivery SLA
                          breached 14 times with $18,500 in unenforced
                          penalties.
                        </p>
                        <div className="flex gap-3 flex-wrap mt-3.5">
                          <span className="bg-[#E22A90]/20 border border-[#E22A90]/40 text-[#ffb3db] text-[12px] font-medium py-1 px-3 rounded-full">
                            Immediate escalation
                          </span>
                          <span className="bg-[#E22A90]/20 border border-[#E22A90]/40 text-[#ffb3db] text-[12px] font-medium py-1 px-3 rounded-full">
                            Rebate claim: Q1 + Q2
                          </span>
                          <span className="bg-[#E22A90]/20 border border-[#E22A90]/40 text-[#ffb3db] text-[12px] font-medium py-1 px-3 rounded-full">
                            Penalty invoice required
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      Built on THub — No Backend Code Required
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      The entire six-agent pipeline described above was
                      configured, tested, and deployed in THub&apos;s Agent
                      Studio — a visual low-code environment where each agent is
                      a node, connections define data flow, and system prompts
                      are written in plain language.
                    </p>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      The PostgreSQL integration runs through THub&apos;s Model
                      Context Protocol (MCP) tool layer. Agents query the live
                      database using exactly the SQL they need, without any
                      custom API layer to maintain. Memory, state, and
                      conversation context are managed by the platform
                      automatically.
                    </p>

                    <blockquote className="border-l-4 border-[#E22A90] my-9 py-4 px-7 bg-[#F5F5F5] dark:bg-gray-900 rounded-r-lg text-[21px] italic text-[#52289F] dark:text-[#a074ec]">
                      &quot;Our customers build vertical AI agents like this in
                      days — not months — and deploy them directly into
                      production procurement workflows without a dedicated AI
                      engineering team.&quot;
                    </blockquote>

                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      The Condition Agent at the end of the flow routes users to
                      the General Query Agent for follow-up conversations, or
                      returns them to the start for a full pipeline refresh. The
                      entire system is stateful within a session, meaning
                      follow-up questions like{" "}
                      <em>
                        &quot;show me only the vendors with SLA breaches above
                        $20,000&quot;
                      </em>{" "}
                      are handled instantly without re-running the database
                      extraction.
                    </p>

                    <h2 className="font-['Lexend'] text-[26px] font-medium text-[#3C5BA4] dark:text-[#6a90e9] mt-14 mb-4 pb-2.5 border-b-2 border-[#F5F5F5] dark:border-gray-800">
                      What This Means for Enterprise Procurement Teams
                    </h2>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      Contract leakage is not a data problem — the data already
                      exists in your systems. It is a reasoning problem:
                      connecting the contracted terms to the actual behaviour at
                      scale, in real time, without manual effort.
                    </p>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      A six-person procurement team managing 120 active
                      contracts cannot manually cross-reference every invoice
                      against every SKU-level contracted price, track cumulative
                      spend toward every rebate threshold, and monitor supplier
                      performance against every SLA metric simultaneously. A
                      well-designed agent pipeline can — every time a user
                      triggers a review, in minutes.
                    </p>
                    <p className="text-[20px] font-normal text-[#141414] dark:text-gray-300 mb-6 leading-[1.75]">
                      The economics are straightforward. At typical enterprise
                      contract volumes, recovering even 3–4% of contract value
                      through leakage detection more than covers the cost of
                      deployment. For organisations managing hundreds of
                      millions in annual supplier spend, the opportunity is
                      material.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-8 mb-10">
            <ShareButtons />
          </div>

          {/* Author Bio */}
          <div className="lg:w-8/12 mx-auto border-t border-[#e8e8e8] dark:border-gray-800 pb-20 pt-8">
            <p className="font-['Outfit'] text-[15px] text-[#52289F] dark:text-[#a074ec] leading-[1.6] m-0 text-left">
              <strong>TensorHub Technologies</strong>
              <br />
              Low Code Agentic AI Orchestration Platform
              <br />
              <em className="text-[#141414] dark:text-gray-300 text-[14px] not-italic">
                Low code platform enabling enterprises to 30x faster build and
                deploy vertical AI agents for Audits, SCM, and Manufacturing —
                saving 40%+ in operational costs.
              </em>
              <br />
              <br />
              <a
                href="#"
                className="text-[#3C5BA4] dark:text-[#6a90e9] no-underline"
              >
                thub.tech
              </a>{" "}
              &nbsp;·&nbsp;
              <a
                href="#"
                className="text-[#3C5BA4] dark:text-[#6a90e9] no-underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails10;
