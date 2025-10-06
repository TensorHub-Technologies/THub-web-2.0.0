import { useSelector } from "react-redux";

const Terms = () => {
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
            Terms of Use
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
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            These Terms of Use (the &quot;Terms&quot;) are between the entity or
            individual using the products and services described herein
            (&quot;Customer&quot; or &quot;you&quot;) and Tensorhub Technologies
            Private Limited, a company incorporated under the Companies Act,
            2013 in Chennai, India (&quot;Tensorhub,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            By accessing or using our platform https://thub.tech (&quot;THub
            Platform&quot;) or any related products and services (collectively,
            the &quot;Services&quot;), you agree to be bound by these Terms. If
            you are accepting these Terms on behalf of a company or other legal
            entity, you represent that you have the authority to bind such
            entity.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            These Terms apply unless a separate written agreement has been
            signed between you and Tensorhub, in which case that agreement will
            govern.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            1. Scope of Terms
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            1.1 General. These Terms govern your initial and subsequent use of
            the THub Platform, including add-ons, enhancements, or plugins.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            1.2 Partners/Resellers. If you access the Services through partners,
            distributors, or managed service providers (&quot;Partners&quot;),
            these Terms apply to your use. Tensorhub&apos;s obligations are only
            those expressly stated herein.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            2. Services Covered
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            These Terms apply to Tensorhub&apos;s low-code/no-code platform
            THub, which enables customers to build Agentic AI applications using
            third-party services such as LLMs, Vector Databases, Embedding
            Models, Model Context Protocol (MCP), and Agent-to-Agent (A2A)
            protocols via API key integrations.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            3. Account Registration
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            You may need to register for a THub account to access Services. You
            agree to provide accurate and complete information and are
            responsible for all activities under your account.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4. Orders and Use
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.1 Direct Orders. Your order form (&quot;Order&quot;) specifies
            your authorized scope of use, such as activity volume, number of
            agents, or instances.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            4.2 Reseller Orders. If purchased via a Partner, your scope of use
            will be defined by the Partner&apos;s order with Tensorhub.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            5. Authorized Users
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            You may permit employees, contractors, or affiliates to use the
            Services on your behalf (&quot;Authorized Users&quot;). You are
            responsible for compliance by all Authorized Users.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            6. License and Restrictions
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            6.1 License. Subject to these Terms, Tensorhub grants you a limited,
            non-exclusive, non-transferable license to use the Services during
            the subscription term.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            6.2 Restrictions. Except as expressly permitted, you will not:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Rent, lease, sublicense, or provide access to third parties.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Reverse engineer, disassemble, or derive source code.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Circumvent usage limits or license mechanisms.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Use the Services to build competing products.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Remove proprietary notices or disseminate performance data without
            consent.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            7. Customer Data
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            7.1 Ownership. You own all content you input or generate through the
            Services (&quot;Customer Data&quot;), including prompts,
            instructions, contextual data, and outputs. Tensorhub does not claim
            ownership of Customer Data.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            7.2 Responsibility. You must ensure that your use of Services and
            Customer Data complies with all applicable laws and these Terms.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            7.3 Third-Party Services. When using third-party LLMs, APIs, or
            databases, their privacy and terms apply. Tensorhub is not
            responsible for third-party terms or performance.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            8. Beta Features
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub may release features in beta or trial form (&quot;Beta
            Features&quot;). Beta Features are provided AS IS and at your own
            risk.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            9. Security
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Each party will maintain reasonable security measures. Tensorhub
            implements safeguards to protect personal data, but you acknowledge
            no system is completely secure.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            10. Updates
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub may release updates, patches, or feature enhancements. You
            agree to implement necessary security updates.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            11. Financial Terms
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            11.1 Fees. You agree to pay all fees as per your Order. Payments are
            due in the agreed currency and are non-refundable unless otherwise
            stated.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            11.2 Taxes. Fees exclude applicable taxes, which you must bear
            unless an exemption applies.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            12. Ownership and Feedback
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub retains all intellectual property rights in THub and
            related technology. You own your Customer Data and any applications
            you build. If you provide feedback, Tensorhub may freely use it to
            improve its products.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            13. Confidentiality
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Both parties agree to keep confidential information secret and use
            it only for purposes permitted under these Terms, subject to legal
            disclosure obligations.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            14. Term and Termination
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            These Terms continue while you have a valid subscription unless
            terminated earlier:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Either party may terminate with 30 days&apos; notice of material
            breach if uncured.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Either party may terminate if the other becomes insolvent or ceases
            operations.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Upon termination, your license ends, and you must stop using
            Services.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Sections on confidentiality, ownership, indemnity, limitation of
            liability, and governing law survive termination.
          </p>
        </section>

        {/* Section 15 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            15. Warranties and Disclaimers
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub warrants it has the authority to enter into these Terms.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Disclaimer: The Services are provided &quot;AS IS&quot;. Tensorhub
            does not guarantee outputs from third-party LLMs, embeddings, or
            integrations, which may be incomplete, inaccurate, or unreliable.
          </p>
        </section>

        {/* Section 16 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            16. Indemnification
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            By Tensorhub: We will defend you against third-party claims alleging
            that THub infringes IP rights, subject to limitations.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            By Customer: You will defend Tensorhub against claims arising from
            your Customer Data, Customer Products, or unlawful use of Services.
          </p>
        </section>

        {/* Section 17 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            17. Limitation of Liability
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            To the maximum extent permitted by law:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Neither party is liable for indirect or consequential damages.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub&apos;s total liability will not exceed the fees you paid
            in the 12 months before the claim.
          </p>
        </section>

        {/* Section 18 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            18. Miscellaneous
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Independent Parties: The parties are independent contractors.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Assignment: You may not transfer rights under these Terms without
            Tensorhub&apos;s consent.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Force Majeure: Neither party is liable for delays due to events
            beyond reasonable control.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Severability: If a clause is invalid, the rest remains enforceable.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Waiver: Failure to enforce a right does not waive it.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Governing Law: These Terms are governed by the laws of India.
            Disputes will be subject to the exclusive jurisdiction of courts in
            Chennai, Tamil Nadu.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Language: These Terms are in English.
          </p>
        </section>

        {/* Section 19 */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19. Responsible Use of AI
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19.1 Customer Responsibility. You acknowledge that the Services
            enable you to build workflows and applications that rely on
            third-party Artificial Intelligence (AI) systems (including Large
            Language Models, Vector Databases, Embedding Models, MCP, and
            Agent-to-Agent protocols). You are solely responsible for:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Reviewing and validating AI-generated outputs before use in
            business-critical or regulated decisions.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Ensuring that your use of the Services complies with applicable
            laws, including but not limited to data privacy, intellectual
            property, financial regulations, and industry-specific compliance.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Implementing appropriate safeguards for human-in-the-loop review
            where accuracy, safety, or ethics are critical.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19.2 Accuracy and Limitations. You understand that:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            AI-generated results may be probabilistic, incomplete, biased, or
            inaccurate.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub does not guarantee correctness, completeness, or fitness
            of AI outputs.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            You should not rely solely on AI outputs for decisions without
            independent validation.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19.3 Prohibited Uses. You agree not to use the Services to:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Generate or disseminate harmful, illegal, discriminatory, or
            misleading content.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Develop weapons, surveillance systems, or applications intended to
            cause physical or psychological harm.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Violate intellectual property rights, privacy laws, or
            confidentiality obligations.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Engage in unfair trade practices, misinformation, or manipulation of
            markets.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19.4 Compliance with Ethical Standards. Customers are expected to
            adopt fairness, accountability, transparency, and human oversight
            when deploying applications built on THub. Tensorhub reserves the
            right to suspend or terminate accounts engaged in irresponsible or
            unlawful use of AI.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            19.5 Disclaimer on AI Reliance. You acknowledge that THub integrates
            with third-party AI providers (LLMs, APIs, databases). Tensorhub is
            not responsible for the behavior, performance, or data practices of
            these third-party tools, and your use of them is subject to their
            respective terms.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Contact Us
          </h2>
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

export default Terms;
