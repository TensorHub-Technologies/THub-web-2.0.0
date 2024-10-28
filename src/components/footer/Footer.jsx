import { Link } from "react-router-dom";
import ThubLogo from "../../assets/images/THub.svg";
import StripeBackground from "../../assets/images/shapes/stripe-colored.svg";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-10 text-black dark:bg-secondary border-t border-gray-200 dark:border-gray-700">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${StripeBackground})`,
          filter: "blur(100px)",
          zIndex: -1,
          inset: "0",
          content: "",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="">
            <img
              src={ThubLogo}
              className="h-8 w-32 mb-5 mr-40"
              alt="THub Logo"
            />
            <ul className="text-secondary dark:text-gray-400 font-medium">
              <li className="mb-2">
                <p className="">
                  A Magical Tool to Build Generative AI Apps without coding
                  knowledge.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  items-center">
            <h2 className="mb-2 text-lg font-bold text-secondary  dark:text-white mr-4">
              THub
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="auth/login"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Sign in
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="auth/register"
                  className="transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1"
                >
                  Register
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center ">
            <h2 className="mb-2 text-lg font-bold text-secondary  dark:text-white text-start">
              Use Cases
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium">
              <li className="mb-2">
                <Link
                  to="#"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1"
                >
                  Agents
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="#"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1"
                >
                  Retrieval Augmented Generation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Retrieval Augmented Fine Tuning
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Recommender System
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" transition-all duration-300 hover:text-primary dark:hover:text-primary-dark hover:ml-1 dark:text-secondary-dark"
                >
                  Document Summarization
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h2 className="mb-2 text-lg font-bold text-secondary  dark:text-white">
              News & Update
            </h2>
            <div className="w-full max-w-sm">
              <div className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    className="px-3 py-3 dark:bg-secondary text-secondary dark:text-background border rounded-e-none border-e-0 shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark focus:right-0 block w-full rounded-md text-lg focus:ring-1"
                    placeholder="Enter you email"
                  />
                </div>
                <button
                  className="flex-shrink-0 dark:bg-primary-dark dark:text-secondary  border-r-0 inline-flex items-center px-4 bg-primary rounded-e-lg  text-background"
                  type="button"
                >
                  <span id="send-icon" className="py-[14px]">
                    <RiSendPlaneLine size={26} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex columns-5 mt-6 mr-24">
              <Link
                to="#"
                className="text-gray-500 hover:text-secondary dark:hover:text-white"
              >
                <FiGithub className="w-5 h-5" />
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="https://www.linkedin.com/company/102053952"
                className="text-gray-500 hover:text-secondary dark:hover:text-white ms-5"
              >
                <FaLinkedinIn className="w-5 h-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61564135198933"
                className="text-gray-500 hover:text-secondary dark:hover:text-white ms-5"
              >
                <FiFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-secondary dark:hover:text-white ms-5"
              >
                <FaXTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter page</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-2">
          <p className="text-sm text-secondary dark:text-secondary-dark">
            © TensorHub Technologies Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
