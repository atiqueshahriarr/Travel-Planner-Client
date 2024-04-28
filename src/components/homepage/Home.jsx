import AboutTravelPlanner from "./AboutTravelPlanner";
import Banner from "./Banner";
import CountrySection from "./CountrySection";
import GetInTouch from "./GetInTouch";
import OurService from "./OurService";
import TouristSpotSection from "./TouristSpotSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutTravelPlanner></AboutTravelPlanner>
      <div className="bg-gray-100 py-1">
        <TouristSpotSection></TouristSpotSection>
        <CountrySection></CountrySection>
      </div>
      <OurService></OurService>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
