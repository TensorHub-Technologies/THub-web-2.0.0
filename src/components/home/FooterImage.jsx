import bg_sand from "../../assets/images/bg/light-hero.jpg";
import workspace_image_light from "../../assets/screens/top-2.png";
import workspace_image_dark from "../../assets/screens/top-1.png";
import blurryImage from "../../assets/svgs/blurry-shape-4.svg";
import { useSelector } from "react-redux";

function FooterImage() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <section className="relative">
      <div className="flex justify-center relative">
        {/* Image container */}
        <div className="w-[90%] h-auto dark:border dark:border-gray-700">
          {isDarkMode ? (
            <img
              className="object-contain rounded-2xl"
              src={blurryImage}
              alt="blurry image"
            />
          ) : (
            <img
              className="object-contain rounded-2xl"
              src={bg_sand}
              alt="bg sand image"
            />
          )}
        </div>

        {/* Text overlay */}
        <div className="absolute flex flex-col top-10 gap-3 ">
          <h1 className="text-[2.5rem] font-bold text-black text-center dark:text-white mt-10 dark:mt-0">
            Using{" "}
            <span className="text-primary dark:text-primary-dark">THub</span>{" "}
            you can save hours each week
          </h1>
          <h1 className="text-4xl font-bold text-black text-center dark:text-white">
            creating long-form content.
          </h1>
          <div className="flex items-center justify-center dark:mt-0 mt-4">
            <button
              type="button"
              className="text-white w-40   bg-primary hover:bg-blue-900 font-lg rounded-lg text-lg px-3 py-2.5 me-2 dark:bg-primary-dark dark:hover:bg-pink-600 focus:outline-none"
            >
              Get Started Free
            </button>
          </div>
          <div className="absolute top-[16rem] border-2 rounded-lg border-primary dark:top-40 dark:border-primary-dark overflow-hidden h-auto flex justify-center">
            <img
              className="object-contain max-h-full max-w-full"
              src={isDarkMode ? workspace_image_dark : workspace_image_light}
              alt="workspace image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterImage;
