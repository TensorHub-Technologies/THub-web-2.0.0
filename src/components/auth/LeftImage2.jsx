import LeftImg from "../../assets/images/screen-8.png";
import darkImage from "../../assets/images/screen-5.png";
import { useSelector } from "react-redux";

const LeftImage2 = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div className="min-h-screen m-6 py-24 px-10 border border-secondary-dark rounded-2xl flex flex-col dark:bg-[#171825] md:block hidden">
      <h2 className="text-secondary dark:text-background text-center mb-4 -ml-12">
        Unlock the Power of <br className="hidden xl:block " />
        <span className="text-primary dark:text-primary-dark">THub</span> GenAI
        Builder Tool.
      </h2>
      <div className="dark:mt-8 flex justify-center -mt-14 -ml-10 dark:ml-2">
        <img
          src={isDarkMode ? darkImage : LeftImg}
          alt="leftimage"
          className="h-[750px] w-[900px] dark:h-[650px]"
        />
      </div>
    </div>
  );
};

export default LeftImage2;
