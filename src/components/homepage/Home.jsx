import AboutTravelPlanner from "./AboutTravelPlanner";
import Banner from "./Banner";
import CountrySection from "./CountrySection";
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
    </div>
  );
};

export default Home;
