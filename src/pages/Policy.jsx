import { useSelector } from "react-redux";

const Policy = () => {
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
            Privacy Policy
          </h1>
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Last Modified: September 2025
          </p>
        </div>
        {/* Overview */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Overview
          </h2>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            This Privacy Policy describes how Tensorhub Technologies Private
            Limited (referred to as &quot;Tensorhub,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares your
            personal information. This Privacy Policy applies to information
            that we collect when you visit our website https://thub.tech
            (&quot;THub Platform&quot;), interact with the features of our Site,
            communicate with us through email, advertising, or social media
            campaigns, or when you use our products and services
            (&quot;Services&quot;).
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            By accessing or using our Site or Services, you agree to this
            Privacy Policy.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Tensorhub Technologies Private Limited is incorporated in Chennai,
            India (Registrar of Companies, Tamil Nadu), and we serve customers
            globally through our partners.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Our Services allow customers to build Agentic AI applications using
            third-party tools such as Large Language Models (LLMs), Vector
            Databases, Embedding Models, Model Context Protocol (MCP), and
            Agent-to-Agent (A2A) communication protocols. In certain cases,
            customers provide their own API keys for connecting to these
            services. We act as a service provider and processor in handling
            such data, while customers remain in control of their own data use
            policies.
          </p>
        </section>

        {/* Personal Information We Collect */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Personal Information We Collect
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We may collect the following categories of personal information:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Identifiers: Name, email address, account credentials, IP address,
            device identifiers.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Contact Information: Email, phone number, business address.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Commercial Information: Records of services purchased, usage
            history, or considered services.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Financial Information: Payment information when you transact with us
            (collected via secure payment processors).
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Technical Information: Device data, browser type, operating system,
            crash logs, and cookies.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Geolocation: Derived from IP addresses for security and service
            optimization.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Usage Data: Interactions with our website, platform, APIs, and
            connected third-party services.
          </p>
        </section>

        {/* How We Collect Personal Information */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            How We Collect Personal Information
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Directly from you: When you register, subscribe, or interact with
            our platform.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Automatically: Through cookies, log files, or tracking technologies.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Third-Party Services: If you connect external tools (e.g., LLMs,
            databases, cloud platforms) via API keys, certain usage metadata may
            be collected.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Partners: Through resellers, distributors, or global channel
            partners.
          </p>
        </section>

        {/* How We Use Personal Information */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            How We Use Personal Information
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We use your information to:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Provide, support, and improve our Site and Services.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Enable you to build and deploy Agentic AI applications using THub.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Communicate with you regarding updates, product features, and
            events.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Manage billing, account services, and customer support.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Ensure platform security and prevent fraud.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Conduct internal research, testing, and development.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Comply with legal obligations and enforce our rights.
          </p>
        </section>

        {/* How We Share Personal Information */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            How We Share Personal Information
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We may share your personal information with:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Service Providers: Cloud infrastructure, analytics, customer
            support, and payment processors.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Technology Partners: LLM providers, vector DBs, and API service
            providers that you authorize.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Marketing &amp; Analytics Providers: For communications, campaigns,
            and usage analytics.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Legal Authorities: When required by law or to enforce legal rights.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Corporate Transactions: In connection with mergers, acquisitions, or
            restructuring.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            With Consent: Where you explicitly authorize sharing.
          </p>
        </section>

        {/* International Data Transfer */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            International Data Transfer
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            As Tensorhub serves global customers, your data may be transferred
            outside India. Where applicable, we use contractual safeguards such
            as Standard Contractual Clauses (SCCs), the EU–US Data Privacy
            Framework, or equivalent mechanisms to ensure adequate protection.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Your Rights
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Depending on your jurisdiction (India, EEA, UK, US states with data
            privacy laws), you may have rights to:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Access your personal data.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Request correction or deletion.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Restrict or object to processing.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Port your data to another provider.
          </p>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Opt-out of marketing communications.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Requests can be made by contacting us at admin@thub.tech.
          </p>
        </section>

        {/* GDPR Compliance */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            GDPR (European Union &amp; UK) Compliance
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            If you are located in the European Economic Area (EEA), the UK, or
            Switzerland, you have the following rights under the General Data
            Protection Regulation (GDPR):
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right of Access &amp; Portability
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Rectification
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Erasure (&quot;Right to be Forgotten&quot;)
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Restrict Processing
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Object (including to marketing)
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Data Portability
          </p>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We process your data based on:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Consent you provide.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Performance of a contract (e.g., delivering THub Services).
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Legitimate interests (e.g., service improvement, fraud prevention).
          </p>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Legal obligations.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            GDPR requests: privacy@thub.tech
          </p>
        </section>

        {/* India DPDP Act Compliance */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            India Digital Personal Data Protection Act (DPDP Act, 2023)
            Compliance
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            For users in India, we comply with the DPDP Act, 2023, including:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Consent-based processing of personal data.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Access &amp; Correction of data.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Erasure subject to legal obligations.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Grievance Redressal through our DPO.
          </p>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Cross-border transfers allowed per applicable rules.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Data Protection Officer (India): privacy@thub.tech
          </p>
        </section>

        {/* U.S. State Privacy Rights */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            U.S. State Privacy Rights (CCPA/CPRA and others)
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            If you are a resident of California, Colorado, Connecticut,
            Virginia, Utah, or any U.S. state with data protection laws, you may
            have the following rights:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Know: What personal information we collect, use, share, or
            sell.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Access: A copy of personal information collected in the
            last 12 months.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Delete: Request deletion of your personal information,
            subject to exceptions.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Correct: Update inaccurate personal information.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Opt-Out: Of &quot;sale&quot; or &quot;sharing&quot; of
            personal information, including cross-context behavioral
            advertising.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Right to Limit Use of Sensitive Information: Restrict how sensitive
            personal data is used.
          </p>
          <p
            className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Freedom from Discrimination: Exercise rights without discrimination.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            How to Exercise Rights: Contact us at privacy@thub.tech.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We will verify your identity before fulfilling requests. Authorized
            agents may also submit requests on your behalf.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Data Security
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We implement reasonable technical and organizational safeguards
            including encryption, access controls, and monitoring. However, no
            system is fully secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Data Retention
          </h2>
          <p
            className={`mb-3 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We retain personal information only as long as necessary to:
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Provide services to you.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Fulfill legal or compliance obligations.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Resolve disputes and enforce agreements.
          </p>
        </section>

        {/* Your Choices */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Your Choices
          </h2>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Account Settings: Update your information via your THub account.
          </p>
          <p
            className={`mb-2 leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Cookies: Manage via browser settings.
          </p>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Marketing Communications: Opt-out via unsubscribe links or by
            emailing us.
          </p>
        </section>

        {/* Changes to this Policy */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Changes to this Policy
          </h2>
          <p
            className={`leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            We may update this Privacy Policy periodically. Changes will be
            posted on our website with the updated &quot;Last Updated&quot;
            date. Continued use of our Services after changes indicates
            acceptance.
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
            If you have questions about our privacy practices, please contact
            us:
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

export default Policy;
