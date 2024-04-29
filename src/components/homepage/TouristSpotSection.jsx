import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";
const TouristSpotSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("https://travel-planner-server-site.vercel.app/touristSpots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);

  let sixTouristSpot = touristSpots;
  if (sixTouristSpot.length > 6) {
    sixTouristSpot = touristSpots.slice(0, 6);
  }
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto mt-16 space-y-8 mb-10">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#009144]">
          Explore the Wonders of Southeast Asia
        </h3>
        <p className=" max-w-screen-lg">
          Unforgettable journey through the mesmerizing landscapes and vibrant
          cultures. Start your adventure today and let the wonders of this
          enchanting region captivate your imagination.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sixTouristSpot.map((touristSpot) => (
          <TouristSpotCard
            key={sixTouristSpot._id}
            touristSpot={touristSpot}
          ></TouristSpotCard>
        ))}
      </div>
      <div className="flex justify-center my-4">
        {touristSpots.length > 6 ? (
          <div>
            <Link
              to="/allTouristSpot"
              className="bg-[#6ab8fa] hover:bg-[#189b9c] px-8 py-3 rounded-xl font-bold text-white text-center"
            >
              See More
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TouristSpotSection;
