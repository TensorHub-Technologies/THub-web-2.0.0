// import assests
import bg_sand from "../../assets/images/light-hero.jpg";
import workspace_image_light from "../../assets/screens/top-2.png";
import workspace_image_dark from "../../assets/screens/top-1.png";
import arrow_light from "../../assets/svgs/curve-arrow-light.svg";
import arrow_dark from "../../assets/svgs/curve-arrow-dark.svg";
import blurryImage from "@/assets/svgs/blurry-shape-4.svg";

// import hooks
import { useSelector } from "react-redux";

function FooterImage() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  return (
    <section className="min-h-screen flex justify-center items-center py-20">
      <div
        className="relative bg-cover bg-center w-[90%] max-w-7xl rounded-2xl  dark:border dark:border-gray-800 overflow-hidden "
        style={{
          backgroundImage: `url(${isDarkMode ? blurryImage : bg_sand})`,
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen  mt-16  text-center px-6 sm:px-0">
          <h1 className="text-4xl md:text-4xl font-extrabold text-secondary dark:text-white leading-snug mb-2">
            Using{" "}
            <span className="text-primary dark:text-primary-dark">THub</span>{" "}
            you can save hours each week
          </h1>
          <h1 className="text-4xl md:text-4xl font-extrabold text-secondary leading-snug dark:text-white">
            creating long-form content.
          </h1>

          <button className="px-5 py-3 bg-primary dark:bg-primary-dark dark:text-secondary text-white rounded-lg text-lg my-8  transition">
            Get Started Free
          </button>
          {/* arrow image */}
          <img
            className="absolute z-0 w-12 h-16 "
            src={isDarkMode ? arrow_dark : arrow_light}
            alt="arrow image"
            style={{ top: "28%", left: "58%", transform: "translateX(-50%)" }}
          />
          {/* THub Mockup Image */}
          <img
            src={isDarkMode ? workspace_image_dark : workspace_image_light}
            alt="THub Workspace Mockup"
            className="w-11/12 max-w-4xl shadow-lg rounded-lg border-2 border-primary dark:border-primary-dark"
          />
        </div>
      </div>
    </section>
  );
}

export default FooterImage;
