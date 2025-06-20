import { useSelector } from "react-redux";
import { RiSendPlaneLine } from "react-icons/ri";
import screen3 from "../../assets/screens/screen-3.png";
import screen1 from "../../assets/screens/screen-1.jpg";
import screen8 from "../../assets/screens/screen-8.png";
import screen6 from "../../assets/screens/screen-6.jpg";

import Accordion from "../home/Accordion";

const UsecasesDetails = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-10 mt-20">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          Writing Blog Content
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Writing Blog Content</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
          <div className="w-full lg:w-[40rem]">
            <h3 className="text-4xl sm:text-5xl mt-2 dark:text-white">
              Complete a blog entry in half the time.
            </h3>
            <p className="my-5 dark:text-secondary-dark">
              With a few clicks of a button, you can create a whole outline,
              opening paragraph, and body for your blog.
            </p>

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
          </div>

          <div className="w-full lg:w-auto  dark:-mt-10 -mt-28">
            <img
              className="gif-anime object-contain max-w-full h-auto"
              src={isDarkMode ? screen3 : screen8}
              alt="gif"
            />
          </div>
        </div>
      </div>

      <hr className="my-4 border-t border-secondary-dark mx-12 shadow-secondary-dark" />
      <div className="border-red-400 dark:bg-secondary">
        <div className="text-center py-5">
          <div className="pt-5 pb-10 lg:pt-2 lg:pb-15 dark:bg-secondary">
            <div className="container">
              {/* Content Section */}
              <div className="row justify-center mt-2">
                <div className="lg:w-8/12 mx-auto">
                  <div>
                    <h3 className="text-4xl sm:text-5xl dark:text-white text-start mb-10">
                      How to use AI blog post generator to speed up your writing
                      process.
                    </h3>
                    <p className="font-medium mb-5 text-left text-black dark:text-secondary-dark space-y-6">
                      The inability to write. Everyone has been there. Even the
                      most seasoned and well-versed writers and content
                      producers endure mental gaps. Nulla Lorem mollit cupidatat
                      irure. Laborum magna nulla duis ullamco cillum dolor.
                      Voluptate exercitation incididunt aliquip deserunt
                      reprehenderit elit laborum.
                    </p>
                    <article className="blog-post  font-medium mb-0 text-left text-black dark:text-secondary-dark space-y-6">
                      <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor
                        cupidatat incididunt.
                      </p>

                      <div>
                        <h4 className="dark:text-background text-background-dark">
                          <span className="text-primary dark:text-primary-dark">
                            Step 1:{" "}
                          </span>
                          Write Higher Converting Posts
                        </h4>

                        <p>
                          Everyone has been there. Even the most seasoned and
                          well-versed writers and content producers endure
                          mental gaps. Nulla Lorem mollit cupidatat irure.
                          Laborum magna nulla duis ullamco cillum dolor.
                          Voluptate anyone exercitation incididunt aliquip
                          deserunt reprehenderit elit laborum.
                        </p>
                        <br />
                        <p>
                          Aliqua id fugiat nostrud irure ex duis ea quis id quis
                          ad et. Sunt qui esse pariatur duis deserunt mollit
                          dolore cillum minim tempor enim. Elit aute irure
                          tempor cupidatat incididunt.
                        </p>
                        <br />

                        <div className="relative rounded-4 overflow-hidden w-130 h-120">
                          <img
                            src={isDarkMode ? screen1 : screen6}
                            alt="Article Image"
                            className=""
                          />
                        </div>
                        <br />
                      </div>

                      <div>
                        <h4 className="dark:text-background text-background-dark">
                          <span className="text-primary dark:text-primary-dark">
                            Step 2:{" "}
                          </span>
                          Start creating powerful content, for blog post
                        </h4>

                        <p>
                          Everyone has been there. Even the most seasoned and
                          well-versed writers and content producers endure
                          mental gaps. Nulla Lorem mollit cupidatat irure.
                          Laborum magna nulla duis ullamco cillum dolor.
                          Voluptate anyone exercitation incididunt aliquip
                          deserunt reprehenderit elit laborum.{" "}
                        </p>
                        <br />

                        <div className="relative rounded-4 overflow-hidden w-130 h-120">
                          <img
                            src={isDarkMode ? screen1 : screen6}
                            alt="Article Image"
                            className=""
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="dark:text-background text-background-dark">
                          <span className="text-primary dark:text-primary-dark">
                            Step 3:{" "}
                          </span>
                          Start creating powerful content, for blog post
                        </h4>
                        <p>
                          Everyone has been there. Even the most seasoned and
                          well-versed writers and content producers endure
                          mental gaps. Nulla Lorem mollit cupidatat irure.
                          Laborum magna nulla duis ullamco cillum dolor.
                          Voluptate anyone exercitation incididunt aliquip
                          deserunt reprehenderit elit laborum.
                        </p>
                        <br />

                        <p>
                          Fugiat nostrud irure ex duis ea quis id quis ad et.
                          Sunt qui esse pariatur duis deserunt mollit dolore
                          cillum minim tempor enim. Elit aute irure tempor
                          cupidatat incididunt.{" "}
                        </p>
                        <br />

                        <div className="relative rounded-4 overflow-hidden w-130 h-120">
                          <img
                            src={isDarkMode ? screen1 : screen6}
                            alt="Article Image"
                            className=""
                          />
                        </div>
                        <br />

                        <p>
                          THub has been there. Even the most seasoned and
                          well-versed writers and content producers endure
                          mental gaps. Nulla Lorem mollit cupidatat irure.
                          Laborum magna.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion />

      {/* <FooterImage /> */}
    </div>
  );
};

export default UsecasesDetails;
