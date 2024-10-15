import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import Features_First from "../components/home/Features_First";
import "../pages/MainHome.css";

const Home = () => {
  return (
    <div className="w-full min-h-screen dark:bg-secondary" id="banner-main">
      <Banner />
      <Features_First />
      <Accordion />
    </div>
  );
};

export default Home;
