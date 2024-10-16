import Pricing_Plan from "../components/home/Pricing_Plan";
import Accordion from "../components/home/Accordion";
const Pricing = () => {
  return (
    <div className="dark:bg-black">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Pricing & Plan
        </h2>
        <p className="text-gray-500 mt-1">Home / Pricing</p>
      </div>
      <Pricing_Plan />
      <Accordion />
    </div>
  );
};

export default Pricing;
