import Accordion from "../components/home/Accordion";
import Features_Anime_One from "../components/home/Features_Anime_One";
import Features_Anime_Three from "../components/home/Features_Anime_Three";
import Features_Anime_Two from "../components/home/Features_Anime_Two";
import Pricing_Plan from "../components/home/Pricing_Plan";
import Hero from "../components/home/Hero";
import LogoSlider from "../components/home/LogoSlider";
import "../index.css";

const Home = () => {
  console.log("*** env: ", import.meta.env.VITE_URL);
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div
      className="w-full min-h-screen dark:bg-secondary bg-[#FEFEFE]"
      id="banner-main"
    >
      <Hero />
      <Features_Anime_One />
      <Features_Anime_Two />
      <Features_Anime_Three />
      <LogoSlider />
      <Pricing_Plan />
      <Accordion />
      {/* <FooterImage /> */}
    </div>
  );
};

export default Home;
