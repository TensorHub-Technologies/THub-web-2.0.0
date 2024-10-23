import dark_mission from "../../assets/icons/about/mission_dark.png";
import light_mission from "../../assets/icons/about/mission_lite.png";
import dark_journey from "../../assets/icons/about/journey_new_dark.png";
import light_journey from "../../assets/icons/about/journey_new_lite.png";
import dark_future from "../../assets/icons/about/future_new_dark.png";
import lite_future from "../../assets/icons/about/future_new_lite.png";
import { useSelector } from "react-redux";

function Journey() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section className="px-5 py-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-start text-left gap-5 w-full">
          <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
            <img
              src={isDarkMode ? dark_mission : light_mission}
              alt="low code"
              className="h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold dark:text-white">Mission</h4>
          <p className="text-md dark:text-secondary-dark max-w-xs">
            At THub, our mission is to simplify AI workflows, empowering
            businesses to deploy AI-driven applications that create measurable
            impact. We are committed to building a scalable, adaptable, and
            accessible platform that drives AI transformation across industries,
            helping businesses unlock the full potential of their data.
          </p>
        </div>
        <div className="flex flex-col items-start text-left gap-5 w-full">
          <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
            <img
              src={isDarkMode ? dark_journey : light_journey}
              alt="drag and drop"
              className="h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold dark:text-white">Our Journey</h4>
          <p className="text-md dark:text-secondary-dark max-w-xs">
            THub was founded with a singular mission: to provide AI solutions
            that solve real business problems in a fast, efficient, and scalable
            manner. As businesses continue to evolve, we aim to be at the
            forefront of AI innovation, helping our clients leverage the
            potential of AI in document processing, vector databases, and
            Generative AI workflows. Our platform offers seamless integration
            and customization, ensuring that AI works for your unique business
            requirements.
          </p>
        </div>
        <div className="flex flex-col items-start text-left gap-5 w-full">
          <div className="w-12 h-12 border border-primary bg-slate-200 dark:bg-slate-800 dark:border-slate-950 p-2 rounded-lg flex items-center justify-center">
            <img
              src={isDarkMode ? dark_future : lite_future}
              alt="automated data pipeline"
              className="h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold dark:text-white">Our Future</h4>
          <p className="text-md dark:text-secondary-dark max-w-xs">
            As we move forward, THub plans to venture into new frontiers of
            quantum computing in the coming years. We remain committed to
            driving AI innovation and helping businesses achieve breakthroughs
            by delivering AI-driven insights and operational improvements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;
