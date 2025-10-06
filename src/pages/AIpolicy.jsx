import { useSelector } from "react-redux";

const AIpolicy = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div
      className={`mt-16 min-h-screen ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            AI Acceptable Use Policy (AUP){" "}
          </h1>
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Last Modified: September 2025
          </p>
        </div>
        {/* Introduction */}
        <div className="mb-8">
          <p
            className={`mb-6 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            This AI Acceptable Use Policy (&quot;Policy&quot;) governs how
            customers and authorized users may use THub, the low-code/no-code
            Agentic AI platform provided by Tensorhub Technologies Private
            Limited (&quot;Tensorhub,&quot; &quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;).
          </p>
          <p
            className={`mb-6 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub is incorporated in Chennai, India and serves customers
            globally. By accessing or using THub, you agree to this Policy,
            which is incorporated into our Terms of Use.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            1. Purpose of this Policy
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            This Policy is designed to:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Ensure responsible and ethical use of THub and its integrated AI
            capabilities.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Protect against misuse that could result in harm, bias, or
            regulatory non-compliance.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Provide clear guidance for enterprise customers, partners, and
            developers.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            2. Scope of Services Covered
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            This Policy applies to the use of THub and its integrations with
            third-party services such as:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Large Language Models (LLMs)
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Vector Databases and Embedding Models
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Model Context Protocol (MCP)
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Agent-to-Agent (A2A) communication protocols
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Customer-provided API keys and connectors
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            3. Acceptable Use
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            You may use THub for:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Building and deploying Agentic AI applications for legitimate
            business purposes.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Automating workflows with human-in-the-loop (HITL) validation where
            appropriate.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Research, prototyping, and production deployments in compliance with
            applicable laws.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Enhancing business processes in manufacturing, supply chain,
            e-commerce, finance, and related industries.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4. Prohibited Uses
          </h2>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            You agree not to use THub to:
          </p>

          <h3
            className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.1 Illegal or Harmful Purposes
          </h3>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Violate any law, regulation, or intellectual property rights.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Generate or distribute content that is harmful, violent,
            discriminatory, or illegal.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Develop or deploy weapons, mass surveillance, or systems intended to
            cause physical, psychological, or financial harm.
          </p>

          <h3
            className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.2 Deceptive or Misleading Uses
          </h3>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Spread misinformation, fake news, or impersonate individuals or
            organizations.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Manipulate markets, elections, or public opinion using AI-generated
            outputs.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Misrepresent AI-generated content as human-authored without
            disclosure in sensitive contexts.
          </p>

          <h3
            className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.3 Data Misuse
          </h3>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Input or process personal data without appropriate consent or legal
            basis.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Circumvent data protection laws (GDPR, DPDP Act, CCPA/CPRA, etc.).
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Ingest or expose sensitive data in violation of confidentiality
            agreements.
          </p>

          <h3
            className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.4 Technical Misuse
          </h3>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Interfere with platform security or attempt to bypass usage
            restrictions.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Reverse-engineer, decompile, or attempt to extract source code or
            model weights.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Overload the system through denial-of-service (DoS) or abusive
            automated calls.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            5. Customer Responsibilities
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Validation: Independently verify AI outputs before relying on them
            for business-critical or regulated decisions.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Compliance: Ensure Customer Data and use of THub comply with
            applicable local and international laws.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Human Oversight: Maintain human accountability and review where AI
            decisions may impact safety, rights, or compliance.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Third-Party Terms: Respect and comply with the terms of any
            third-party AI or data providers integrated into THub.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            6. Monitoring and Enforcement
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub may:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Monitor usage patterns (in aggregate/anonymized form) to detect
            abuse.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Suspend or terminate accounts that violate this Policy.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Report illegal activity to authorities where legally required.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            7. Disclaimer
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            AI-generated outputs may be probabilistic, biased, incomplete, or
            inaccurate. Tensorhub does not guarantee the correctness,
            completeness, or fitness of outputs generated through THub or
            third-party AI tools. Customers are responsible for appropriate
            validation and risk management.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            8. Changes to this Policy
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub may update this Policy periodically. Changes will be
            effective upon posting at https://thub.tech. Continued use of THub
            after changes indicates acceptance.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            9. Contact Us
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            If you have questions about this Policy or want to report misuse,
            contact us:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub Technologies Private Limited
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Chennai, Tamil Nadu, India
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            📧 Email: admin@thub.tech
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            🌐 Website: https://thub.tech
          </p>
        </section>
      </div>
    </div>
  );
};

export default AIpolicy;
