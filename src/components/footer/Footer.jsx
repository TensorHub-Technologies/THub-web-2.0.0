import { Link } from "react-router-dom";
import ThubLogo from "../../assets/images/THub.svg";
import StripeBackground from "../../assets/images/shapes/stripe-colored.svg";
import { RiSendPlaneLine } from "react-icons/ri";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 text-black">
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

      <div className="relative z-20 mx-auto w-full max-w-screen-xl">
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
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-lg font-bold text-gray-900  dark:text-white mr-4">
              THub
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium">
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Sign in
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Register
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-lg font-bold text-gray-900  dark:text-white mr-[152px]">
              Use Cases
            </h2>
            <ul className="text-secondary dark:text-secondary-dark font-medium">
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark"
                >
                  Retrieval Augmented Generation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Retrieval Augmented Fine Tuning{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Recommender System
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Document Summarization
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-primary dark:hover:text-primary-dark dark:text-secondary-dark"
                >
                  Product Description
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center mb-16 ">
            <h2 className="mb-2 text-lg font-bold text-gray-900  dark:text-white mr-40">
              News & Update
            </h2>
            <div className="w-full max-w-sm">
              <div className="flex items-center">
                <div className="relative w-full">
                  <input
                    id="message-input"
                    type="text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border rounded-lg border-r-0 border-gray-300 text-secondary-dark dark:text-gray-400 block w-full py-3 px-4"
                    placeholder="Enter you email"
                  />
                </div>
                <button
                  className="flex-shrink-0  border-r-0 inline-flex items-center py-3 px-4 bg-primary rounded-e-lg  text-background"
                  type="button"
                >
                  <span id="send-icon">
                    <RiSendPlaneLine size={24} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex columns-5 mt-6 mr-24">
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaDribbble className="w-5 h-5" />
                <span className="sr-only">Dribbble account</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram account</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 flex justify-center">
          <span className="text-sm text-secondary">
            © 2024 TensorHub Technologies Private Limited. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
