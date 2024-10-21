import { useSelector } from "react-redux";
import LeftImg from "../../assets/images/screen-8.png";
import darkImage from "../../assets/images/screen-5.png";

const About = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark mt-5">
            About Thub.
          </p>

          <p className="my-5 dark:text-secondary-dark">
            At TensorHub, we are at the forefront of the AI revolution, helping
            businesses harness the power of Generative AI to transform
            unstructured data into meaningful outcomes. Our low-code/no-code
            platform streamlines AI workflows, making cutting-edge AI
            technologies accessible to enterprises of all sizes.
          </p>

          <p className="my-5 dark:text-secondary-dark">
            With a user-friendly drag-and-drop interface, automated data
            pipelines, and seamless integration with top vector databases and
            Large Language Models (LLMs), THub enables organizations to
            accelerate innovation while simplifying AI adoption. We believe in
            empowering teams to build AI-driven solutions without the technical
            hurdles traditionally associated with AI implementation. Vision
          </p>

          <p className="my-5 dark:text-secondary-dark">
            Our vision is to democratize AI for businesses worldwide, making
            advanced technology accessible to every organization, from startups
            to global enterprises. We aim to lead the AI revolution by enabling
            companies to leverage AI for smarter decision-making, operational
            efficiency, and data-driven innovation.
          </p>
        </div>

        <div className="w-full lg:w-auto flex justify-center items-center">
          <img
            className="gif-anime object-contain max-w-full h-auto"
            src={isDarkMode ? darkImage : LeftImg}
            alt="gif"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
