import ShareButtons from "../components/sharebuttons/ShareButtons";

// Replace these with actual image imports in your project
// import financeAuditHero from "../assets/images/blog/finance_audit_hero.png";
// import authorProfile from "../assets/images/team/author.png";

const BlogDetails8 = () => {
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
                  Finance & Accounting Audits Reimagined: The TensorHub Approach
                </h2>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[21/9] rounded-4 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              {/* Replace with actual image once available */}
              {/* <img
                src={financeAuditHero}
                alt="Finance Audit AI"
                className="w-full h-full object-contain"
              /> */}
              <p className="text-gray-400 italic">[ Hero Image Placeholder ]</p>
            </div>

            {/* Author and Meta Info */}
            <div className="row justify-center mt-8">
              <div className="lg:w-8/12 mx-auto">
                <div className="flex flex-wrap justify-between items-center mb-6 gap-6">
                  <div className="flex items-center gap-4">
                    {/* Replace with actual author image */}
                    {/* <img
                      src={authorProfile}
                      alt="Author"
                      className="w-8 h-8 object-cover rounded-full"
                    /> */}
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <p className="font-medium mb-0 text-black dark:text-secondary-dark">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/tensorhub/"
                        rel="noreferrer"
                      >
                        TensorHub Team
                      </a>
                    </p>
                  </div>
                  <ul className="list-none flex items-center text-sm space-x-4 text-black dark:text-secondary-dark">
                    <li>Thu Feb 19 2025</li>
                    <li>6 Min. Read</li>
                  </ul>
                </div>

                {/* Blog Introduction */}
                <h4 className="text-black dark:text-secondary-dark font-medium mb-5 text-justify text-2xl">
                  What If Your Audit Never Slept — And Caught Fraud Before the
                  Money Was Gone?
                </h4>
                <p className="font-medium mb-5 text-justify text-black dark:text-secondary-dark space-y-6">
                  Traditional finance audits catch fraud after the money&apos;s
                  gone. By the time duplicate invoices surface in a year-end
                  review, capital has leaked for months. By the time revenue
                  leakage appears in quarterly reconciliation, customer trust
                  has eroded.{" "}
                  <strong>
                    TensorHub moves financial audits from post-mortem analysis
                    to real-time intervention.
                  </strong>{" "}
                  Powered by agentic AI that never sleeps, TensorHub
                  continuously scans 100% of your transactions, correlates data
                  across systems, and flags anomalies before they become losses.
                </p>

                {/* Main Article */}
                <article className="blog-post font-medium mb-0 text-justify text-black dark:text-secondary-dark space-y-6">
                  {/* Section 1 */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    The Finance Audit Challenge: Four Critical Vulnerabilities
                  </h4>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🧾 Accounts Payable Audit: The Duplicate Invoice Problem
                  </h4>
                  <p>
                    Finance teams process thousands of invoices monthly.
                    Duplicate invoices slip through when vendors resubmit, when
                    invoice numbers vary slightly, or when amounts match
                    legitimate recurring charges. Overpayments drain cash flow
                    while GST/VAT mismatches create compliance exposure. Manual
                    spot-checking can&apos;t scale to catch these errors across
                    high-volume AP operations.
                  </p>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📉 Accounts Receivable Audit: Revenue at Risk
                  </h4>
                  <p>
                    Revenue leakage happens in plain sight. Invoices sit
                    uncollected past terms, aging into bad debt. Delayed
                    collections impact cash flow and working capital. Credit
                    note misuse by sales teams erodes margins when discounts
                    exceed approval thresholds. Each leak seems minor
                    individually, but collectively they represent material
                    revenue loss.
                  </p>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📒 General Ledger Audit: The Control Weakness Indicator
                  </h4>
                  <p>
                    Unusual journal entries often signal deeper problems:
                    end-of-period adjustments that manipulate financials,
                    backdated postings that circumvent approval workflows, or
                    patterns that suggest fraud. These entries hide among
                    thousands of legitimate transactions, visible only when
                    someone knows exactly what pattern to seek.
                  </p>

                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🧾 Expense Audit: Policy vs. Reality
                  </h4>
                  <p>
                    Expense policy violations range from innocent mistakes to
                    deliberate fraud. Claims submitted without proper
                    documentation, duplicate reimbursements for the same
                    expense, or fraudulent receipts all create financial and
                    compliance risk. Detecting these patterns across hundreds of
                    employees and thousands of monthly claims overwhelms
                    traditional review processes.
                  </p>

                  {/* Comparison Table */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🔄 The TensorHub Difference: Agentic AI That Never Sleeps
                  </h4>
                  <p>
                    TensorHub doesn&apos;t just store financial data; it deploys
                    autonomous agents that continuously scan your ERP systems
                    24/7. Traditional audit software waits for a human to
                    initiate reports. Agentic AI watches every transaction,
                    learns normal patterns, and flags anomalies in real time.
                  </p>

                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Feature
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Traditional Audit
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            TensorHub AI Audit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Frequency
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Quarterly / Annual
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Continuous (Real-time)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Coverage
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Sample-Based (5–10%)
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            100% Transaction Analysis
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Detection
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Historical (Post-Loss)
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Real-time (Pre-Loss)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Method
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Manual Rules
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ML Pattern Recognition
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Integration
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Separate Systems
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Cross-System Correlation
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* How It Works */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🛠 How TensorHub Works: A Step-by-Step Walkthrough
                  </h4>

                  {/* Step 1 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    ⚙️ Step 1: Continuous ERP Scanning
                  </h4>
                  <p>
                    TensorHub connects directly to your financial systems via
                    low-code connectors — ERP systems (SAP/Oracle/Tally) for
                    transaction data, the GST portal for tax compliance
                    verification, and bank statements for payment
                    reconciliation. The platform doesn&apos;t wait for month-end
                    close. It scans continuously, creating a live view of every
                    financial transaction flowing through your organization.
                  </p>

                  {/* Step 2 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🔍 Step 2: Duplicate Invoice Detection Using Isolation
                    Forest
                  </h4>
                  <p>
                    The AI executes its first agentic action: detecting
                    duplicate invoice patterns using machine learning. It
                    analyzes invoice numbers with slight variations, identical
                    amounts from the same vendor within suspicious timeframes,
                    same line items with different dates, and vendor bank
                    account changes that might indicate fraud.
                  </p>
                  <p className="mt-3">
                    <strong>Real-World Example:</strong> Vendor &quot;ABC
                    Supplies&quot; submitted three invoices over two months —
                    #4782 for $8,450 (Jan 15), #4782A for $8,450 (Feb 3), and
                    #4782-REV for $8,450 (Feb 28, pending). The numbers varied
                    slightly. The amounts matched exactly. Manual review would
                    likely approve all three. TensorHub caught the pattern:
                  </p>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Alert Detail
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Pattern Identified
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            3 invoices, same amount, same vendor, 45-day span
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Already Paid
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $16,900 (loss)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Prevented
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $8,450 (saved)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Audit Trail
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Different AP clerks processed each (systematic
                            issue)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Recommended Action
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Vendor outreach to clarify invoicing process
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3">
                    This is Isolation Forest ML in action: the algorithm
                    doesn&apos;t need predefined rules for what makes invoices
                    &quot;suspicious.&quot; It learns what normal vendor
                    behavior looks like, then flags outliers that deviate from
                    established patterns.
                  </p>

                  {/* Step 3 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📊 Step 3: Revenue Leakage Detection via AR Aging Analysis
                  </h4>
                  <p>
                    While scanning AP transactions, TensorHub simultaneously
                    identifies revenue leakage in accounts receivable —
                    analyzing invoice aging patterns, payment velocity trends,
                    credit note issuance compliance, and collection
                    effectiveness by customer segment and sales rep.
                  </p>
                  <p className="mt-3">
                    <strong>Real-World Example:</strong> Customer &quot;XYZ
                    Corporation&quot; historically paid in 30 days, never
                    exceeding 45. Their last four invoices aged beyond 90 days —
                    $127,000 outstanding. Cross-referencing CRM data revealed a
                    sales rep issued $34,000 in credit notes (without CFO
                    approval, violating the $10,000 threshold) while in active
                    &quot;relationship restructure&quot; discussions.
                  </p>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Revenue Leakage Alert
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            At-Risk Revenue
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $127,000 (potential bad debt)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Policy Violation
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $34,000 in unauthorized credit notes
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Projected Annual Leakage
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $180,000 from this account alone
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Recommended Action
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            CFO/Sales Director intervention, credit hold
                            consideration
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Step 4 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    🏦 Step 4: Cross-Validation with GST Portal and Bank
                    Statements
                  </h4>
                  <p>
                    TensorHub&apos;s third agentic action runs continuously:
                    cross-validating transactions across external systems. It
                    monitors GST amounts vs. portal filings, ERP payments vs.
                    bank deposits, vendor GST number authenticity, and
                    reconciliation gaps.
                  </p>
                  <p className="mt-3">
                    <strong>Real-World Example:</strong> Monthly GST
                    reconciliation showed $45,000 collected vs. $38,000 reported
                    — a $7,000 variance across 23 invoices. Root cause: an ERP
                    upgrade changed GST posting logic for one product category
                    without notifying finance. TensorHub flagged it before the
                    tax authority did.
                  </p>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Compliance Alert
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Compliance Risk
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $7,000 GST collected but not remitted
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Affected Transactions
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            23 invoices across 14 customers
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Root Cause
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ERP configuration issue in Product Category 7
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Annual Exposure Prevented
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $84,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Step 5 */}
                  <h4 className="text-lg font-bold mt-6 mb-3">
                    📋 Step 5: Auto-Generated Audit Exception Reports
                  </h4>
                  <p>
                    At month-end, TensorHub automatically compiles complete
                    audit exception reports — no waiting for auditors to request
                    documentation. Every flagged anomaly arrives with supporting
                    evidence, who/what/why documentation, management responses,
                    and corrective actions taken.
                  </p>

                  <h4 className="text-lg font-semibold mt-10 mb-4 border-b border-gray-300 pb-1">
                    📝 Sample Audit Exception Report Output
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300 text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Audit Area
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Findings
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Financial Impact
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Accounts Payable
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            3 duplicate invoice attempts detected; 1 paid, 2
                            prevented
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $8,450 loss | $16,900 saved
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Accounts Receivable
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            5 high-risk accounts flagged; 2 escalated to
                            collections
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $340,000 at-risk revenue
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            General Ledger
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            7 unusual journal entries reviewed; 2 required
                            management explanation
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            Control weakness flagged
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            GST Compliance
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            1 systemic issue identified and corrected
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            $84,000 annual exposure prevented
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3">
                    These reports arrive ready for external auditor review,
                    complete with evidence trails, management commentary, and
                    corrective action documentation. What traditionally took
                    weeks of preparation now happens automatically.
                  </p>

                  {/* Agentic AI Advantage */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🧠 The Agentic AI Advantage: From Reactive to Predictive
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Capability
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            What It Does
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Isolation Forest ML
                          </td>
                          <td className="py-3 px-4 border-b">
                            Detects anomalies without predefined rules by
                            learning what &quot;normal&quot; looks like for your
                            specific business
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Cross-System Correlation
                          </td>
                          <td className="py-3 px-4 border-b">
                            Connects data silos (ERP, GST portal, bank
                            statements) to reveal patterns invisible within any
                            single system
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Continuous Scanning
                          </td>
                          <td className="py-3 px-4 border-b">
                            Monitors 100% of transactions in real time rather
                            than sampling 5–10% quarterly
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Human-in-Loop Approvals
                          </td>
                          <td className="py-3 px-4 border-b">
                            Flags exceptions but requires human judgment for
                            escalation — AI augments, not replaces, professional
                            judgment
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Before vs After */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🕒 Before vs. After: What Changes with TensorHub
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Audit Task
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            Before TensorHub
                          </th>
                          <th className="py-3 px-4 border-b font-semibold text-left">
                            After TensorHub
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Duplicate Invoice Detection
                          </td>
                          <td className="py-3 px-4 border-b">
                            Manual spot-checks; quarterly at best
                          </td>
                          <td className="py-3 px-4 border-b">
                            Real-time ML detection; 100% coverage
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Revenue Leakage
                          </td>
                          <td className="py-3 px-4 border-b">
                            Discovered at write-off stage
                          </td>
                          <td className="py-3 px-4 border-b">
                            Flagged before debt becomes uncollectible
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">GST Compliance</td>
                          <td className="py-3 px-4 border-b">
                            Discovered during auditor visit
                          </td>
                          <td className="py-3 px-4 border-b">
                            Caught and corrected proactively
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            Audit Report Preparation
                          </td>
                          <td className="py-3 px-4 border-b">
                            2–4 weeks of manual documentation
                          </td>
                          <td className="py-3 px-4 border-b">
                            Auto-generated, always audit-ready
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b">
                            ERP Integration
                          </td>
                          <td className="py-3 px-4 border-b">
                            Separate, siloed systems
                          </td>
                          <td className="py-3 px-4 border-b">
                            Pre-built low-code connectors (SAP, Oracle, Tally)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Final Thoughts */}
                  <h4 className="text-xl font-bold mt-8 mb-4">
                    🔚 Final Thoughts: Can CFOs Afford to Audit with Quarterly
                    Spot-Checks?
                  </h4>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    Finance teams can&apos;t manually review every invoice,
                    every journal entry, every receivable aging. The volume is
                    too high, the patterns too complex, the risks too costly.
                    TensorHub transforms financial audits from periodic sampling
                    to continuous assurance.
                  </p>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    Duplicate invoices get caught before payment. Revenue
                    leakage gets flagged before write-off. Compliance gaps get
                    closed before auditor findings. Powered by Isolation Forest
                    ML, cross-system correlation, and full audit trails,
                    TensorHub gives CFOs the one thing traditional audits
                    can&apos;t: visibility before the loss.
                  </p>
                  <p className="text-justify text-black dark:text-secondary-dark space-y-4">
                    In an era where financial integrity is non-negotiable, the
                    future of financial auditing isn&apos;t just automated —
                    it&apos;s intelligent, continuous, and predictive. And with
                    TensorHub, it&apos;s available now.
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

export default BlogDetails8;
