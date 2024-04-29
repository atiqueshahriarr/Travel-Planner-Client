import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../homepage/TouristSpotCard";

const AllTouristSpot = () => {
  const loaderData = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(loaderData);
  const handleCostSort = (e) => {
    const selectChoice = e.target.value;
    if (selectChoice == "ascending") {
      fetch(
        "https://travel-planner-server-site.vercel.app/touristSpots/ascSort"
      )
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else if (selectChoice == "descending") {
      fetch(
        "https://travel-planner-server-site.vercel.app/touristSpots/desSort"
      )
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else {
      setTouristSpots(loaderData);
    }
  };

  return (
    <Bounce>
      <Helmet>
        <title>Trave Planner | Tourist Spots</title>
      </Helmet>
      <div className=" shadow-lg mb-1">
        <div className="w-10/12 lg:w-3/4 mx-auto pt-10 space-y-2">
          <div className="text-center space-y-4 flex flex-col items-center">
            <h3 className="text-3xl font-bold  text-[#3672B7]">
              Discover Our All Tourist Destinations
            </h3>
            <p className=" max-w-screen-md">
              Embark on a global journey of discovery through our curated
              tourist spots. From iconic landmarks to hidden gems, find
              enriching experiences that inspire.
            </p>
          </div>
          <div className="flex justify-center md:justify-end py-2">
            <select
              className="select w-full max-w-44 border select-bordered "
              onChange={handleCostSort}
            >
              <option disabled selected>
                Sorted By?
              </option>
              <option value="ascending">Cost: Low to High</option>
              <option value="descending">Cost: High to Low</option>
            </select>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
            {touristSpots.map((touristSpot) => (
              <TouristSpotCard
                key={touristSpots._id}
                touristSpot={touristSpot}
              ></TouristSpotCard>
            ))}
          </div>
          <div className="flex justify-center pb-16">
            <Link
              to="/"
              className="bg-[#6ab8fa] hover:bg-[#3672B7] px-8 py-3 rounded-xl font-bold text-white text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default AllTouristSpot;
