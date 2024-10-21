import { useSelector } from "react-redux";
import LeftImg from "../../assets/images/screen-8.png";
import darkImage from "../../assets/images/screen-5.png";

const Mission = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row gap-10 p-8 lg:p-16 mt-[-88px] pb-20">
        <div className="w-full lg:w-auto flex justify-center items-center">
          <img
            className="gif-anime object-contain max-w-full h-auto"
            src={isDarkMode ? darkImage : LeftImg}
            alt="gif"
          />
        </div>
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark my-5">
            What We Offer
          </p>

          <ul className="list-disc flex flex-col gap-3">
            <li className="flex gap-2">
              <div className="w-7 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  <strong>Generative AI Pipelines: </strong>
                  Design, test, and evaluate AI pipelines to manage unstructured
                  data sources with ease.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-7 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  <strong>No-Code/Low-Code Environment: </strong>
                  Build AI solutions with our intuitive, drag-and-drop interface
                  that requires minimal coding knowledge.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-7 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  <strong>Flexible Integrations: </strong>
                  THub integrates with top cloud providers and databases like
                  Google Cloud, AWS, Azure, Pinecone, Weaviate, and more.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-7 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  <strong>Customizable Solutions: </strong>
                  From document review to data extraction, our platform supports
                  tailored AI applications across industries{" "}
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="w-7 pt-1 dark:text-white">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.75 9 3.75 3.75 7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="dark:text-secondary-dark">
                  <strong>Enterprise-Grade Capabilities: </strong>
                  Whether you’re a startup or a large enterprise, we offer
                  customizable, scalable solutions with secure deployments.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
