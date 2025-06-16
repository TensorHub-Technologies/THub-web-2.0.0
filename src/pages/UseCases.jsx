import Usecase from "../components/usecases/Usecases";
import Accordion from "../components/home/Accordion";

const Usecases = () => {
  return (
    <div className="dark:bg-secondary">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-secondary text-3xl font-bold dark:text-background">
          Use Cases
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Use Cases</span>
        </div>
      </div>

      <Usecase />
      <Accordion />
      {/* <FooterImage /> */}
    </div>
  );
};

export default Usecases;
