import { useSelector } from "react-redux";
import LeftImg from "../../assets/images/screen-8.png";
import darkImage from "../../assets/images/screen-5.png";

const Founder = () => {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark mt-5">
            Founding Team Ganapathy Shankar Founder & CEO
          </p>

          <p className="my-5 dark:text-secondary-dark">
            With over 28 years of experience in the technology industry,
            Ganapathy Shankar is a seasoned leader who has worked across the
            domains of
            <strong>
              ERP, Business Intelligence (BI), Data Science, AI/ML, NLP,{" "}
            </strong>
            and <strong>Generative AI.</strong> Ganapathy has held leadership
            positions at prestigious companies such as{" "}
            <strong>HCL, Hexaware, Accenture, </strong>and
            <strong> Birlasoft,</strong> leading global teams, managing
            multimillion-dollar revenues, and building transformative solutions.
            His expertise spans across consulting startups and enterprises,
            spearheading AI-led digital transformations, and developing five
            innovative products from scratch, three of which are already in the
            market. Ganapathy holds a degree in engineering, an MBA, and has
            completed several executive programs including{" "}
            <strong> Chief Digital Officer </strong> and{" "}
            <strong> AI in Healthcare. </strong> As a passionate technologist
            and educator, Ganapathy continues to lead{" "}
            <strong> corporate and EduTech training programs </strong> for
            emerging technologies like <strong> Generative AI.</strong>
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

export default Founder;
