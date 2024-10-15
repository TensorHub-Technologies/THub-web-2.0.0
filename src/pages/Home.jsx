import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import Features_Anime_One from "../components/home/Features_Anime_One";
import Features_Anime_Three from "../components/home/Features_Anime_Three";
import Features_Anime_Two from "../components/home/Features_Anime_Two";
import Features_First from "../components/home/Features_First";
import Pricing_Plan from "../components/home/Pricing_Plan";
import "../pages/MainHome.css";

const Home = () => {
  return (
    <div className="w-full min-h-screen dark:bg-secondary" id="banner-main">
      <Banner />
      <Features_First />
      <Features_Anime_One />
      <Features_Anime_Two />
      <Features_Anime_Three />
      <Pricing_Plan />
      <Accordion />
    </div>
  );
};

export default Home;
