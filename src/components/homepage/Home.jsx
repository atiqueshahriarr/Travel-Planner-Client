import { Helmet } from "react-helmet";
import AboutTravelPlanner from "./AboutTravelPlanner";
import Banner from "./Banner";
import CountrySection from "./CountrySection";
import GetInTouch from "./GetInTouch";
import OurService from "./OurService";
import TouristSpotSection from "./TouristSpotSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Travel Planner | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="shadow-lg">
        <AboutTravelPlanner></AboutTravelPlanner>
      </div>
      <div className="shadow-lg">
        <TouristSpotSection></TouristSpotSection>
        <CountrySection></CountrySection>
      </div>
      <div className="shadow-lg">
        <OurService></OurService>
      </div>
      <div className="shadow-lg mb-1">
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

export default Home;
