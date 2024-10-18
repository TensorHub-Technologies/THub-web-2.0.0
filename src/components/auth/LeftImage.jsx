import LeftImg from "../../assets/images/screen-8.png";
import darkImage from "../../assets/images/screen-5.png";
import { useSelector } from "react-redux";

const LeftImage = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div className="py-28 px-20 mx-10 my-6 border border-secondary-dark rounded-2xl flex flex-col  dark:bg-[#171825]">
      <h2 className="text-secondary dark:text-background text-center mb-4">
        Unlock the Power of <br className="d-none d-xl-block" />
        <span className="text-primary dark:text-primary-dark">THub </span> GenAI
        Builder Tool.
      </h2>
      <div className="dark:mt-12 flex justify-center">
        <img
          src={isDarkMode ? darkImage : LeftImg}
          alt="leftimage"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LeftImage;
