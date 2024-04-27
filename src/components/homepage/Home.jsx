import { useEffect, useState } from "react";
import Banner from "./Banner";
import TouristSpotCard from "./TouristSpotCard";

const Home = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 lg:w-3/4 mx-auto mt-16 space-y-8">
        <div className="text-center space-y-4 flex flex-col items-center">
          <h3 className="text-3xl font-bold">
            Explore the Wonders of Southeast Asia
          </h3>
          <p className="font-medium text-[#4e4e4e] max-w-screen-md">
            Embark on an unforgettable journey through the mesmerizing
            landscapes and vibrant cultures of Southeast Asia. Start your
            adventure today and let the wonders of this enchanting region
            captivate your imagination.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpots._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
