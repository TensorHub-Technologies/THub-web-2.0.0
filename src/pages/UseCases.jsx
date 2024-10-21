import Usecase from "../components/usecases/Usecases";
import Accordion from "../components/home/Accordion";
import FooterImage from "../components/home/FooterImage";

const Usecases = () => {
  return (
    <div className="dark:bg-secondary">
      <Usecase />
      <Accordion />
      <FooterImage />
    </div>
  );
};

export default Usecases;
