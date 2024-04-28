import Banner from "./Banner";
import CountrySection from "./CountrySection";
import OurService from "./OurService";
import TouristSpotSection from "./TouristSpotSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TouristSpotSection></TouristSpotSection>
      <div className="bg-gray-100 py-1">
        <CountrySection></CountrySection>
        <OurService></OurService>
      </div>
    </div>
  );
};

export default Home;
