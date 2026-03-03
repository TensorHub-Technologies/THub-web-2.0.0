import { Link } from "react-router-dom";
import ThubLogo from "../../assets/images/THub.svg";
import "../../index.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import chatgpt from "../../assets/images/chatgpt.png";
import perplexity from "../../assets/images/perplexity-ai.png";
import google from "../../assets/images/google-gemini.png";
import claude from "../../assets/images/claude.png";
import grok from "../../assets/images/gork.png";

const Footer = () => {
  // let url;
  // const hostname = window.location.hostname;
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  // switch (hostname) {
  //   case "localhost":
  //     url = import.meta.env.VITE_THUB_WEB_URL;
  //     break;
  //   case "https://thub-web.calmisland-c4dd80be.westus2.azurecontainerapps.io":
  //     url = import.meta.env.VITE_THUB_WEB_DEMO_URL;
  //     break;
  //   default:
  //     // url = import.meta.env.VITE_THUB_WEB_APP_URL;
  //     break;
  // }

  return (
    <footer
      className={`relative z-10 text-black border-t border-gray-400 ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <div className="relative z-20 mx-auto w-full max-w-screen-xl px-4">
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Company Info */}
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={ThubLogo} className="h-8 w-32 mb-4" alt="THub Logo" />
            <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">
              A Magical Tool to Build Generative AI Apps without coding
              knowledge.
            </p>

            {/* ✅ ADD THIS BLOCK */}
            <div className="mt-4">
              <p className="text-xs text-secondary dark:text-gray-400 mb-2 font-medium">
                Ask AI about THub
              </p>
              <div className="flex gap-2 flex-wrap">
                {[
                  {
                    label: "ChatGPT",
                    href: "https://chat.openai.com/?q=What+is+THub+by+TensorHub+Technologies%3F+Please+explain+what+it+does+and+its+key+features.",
                    bg: "#10a37f",
                    icon: chatgpt,
                  },
                  {
                    label: "Perplexity",
                    href: "https://www.perplexity.ai/?q=What+is+THub+by+TensorHub+Technologies%3F+Please+explain+what+it+does+and+its+key+features.",
                    bg: "#ffff",
                    icon: perplexity,
                  },
                  {
                    label: "Grok",
                    href: "https://grok.com/?q=What+is+THub+by+TensorHub+Technologies%3F+Please+explain+what+it+does+and+its+key+features.",
                    bg: "#000000",
                    icon: grok,
                  },
                  {
                    label: "Claude",
                    href: "https://claude.ai/new?q=What+is+THub+by+TensorHub+Technologies%3F+Please+explain+what+it+does+and+its+key+features.",
                    bg: "#CC785C",
                    icon: claude,
                  },
                  {
                    label: "Gemini",
                    href: "https://www.google.com/search?udm=50&aep=11&q=What+is+THub+by+TensorHub+Technologies%3F+Please+explain+what+it+does+and+its+key+features..",
                    bg: "#f4f4f6",
                    icon: google,
                  },
                ].map(({ label, href, bg, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask ${label} about THub`}
                    title={label}
                    style={{ backgroundColor: bg }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:brightness-95 active:scale-95"
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
            {/* ✅ END OF ADDED BLOCK */}
          </div>

          {/* THub Links */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-secondary dark:text-white">
              THub
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <a
                  href={`${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href={`${url}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Register
                </a>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          {/* <div>
            <h2 className="mb-4 text-lg font-bold text-secondary dark:text-white">
              Use Cases
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Retrieval Augmented Generation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Retrieval Augmented Fine Tuning
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Recommender System
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Document Summarization
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Policies */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-secondary dark:text-white">
              Usage & Policies
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/policy"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/aipolicy"
                  className="text-sm transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:translate-x-1 inline-block"
                >
                  AI Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mr-4">
            <h2 className="mb-4 text-lg font-bold text-secondary dark:text-white">
              News & Updates
            </h2>
            <div className="w-full">
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  className="flex-1 px-1.5 py-2 dark:bg-white text-secondary dark:text-black border border-secondary-dark rounded-l-md shadow-sm placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary-dark focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark text-sm"
                  placeholder="Enter your email"
                />
                <button
                  className="flex-shrink-0 bg-primary dark:bg-primary-dark text-background dark:text-secondary px-2  py-3 rounded-r-md hover:opacity-90 transition-opacity"
                  type="button"
                  aria-label="Subscribe"
                >
                  <RiSendPlaneLine size={20} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Link
                to="#"
                className="text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/102053952"
                className="text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61564135198933"
                className="text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </Link>
              <Link
                to="https://x.com/TensorH90867"
                className="text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 py-4">
          <p className="text-center text-sm text-secondary dark:text-secondary-dark">
            © {new Date().getFullYear()} TensorHub Technologies Private Limited
            <span className="mx-4"></span>
            🚀 Innovation from Bharath, powering the 🌍 World ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
