import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../homepage/TouristSpotCard";

const AllTouristSpot = () => {
  const loaderData = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(loaderData);
  const handleCostSort = (e) => {
    const selectChoice = e.target.value;
    if (selectChoice == "ascending") {
      fetch("https://travel-planner-server-site.vercel.app/touristSpots/ascSort")
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else if (selectChoice == "descending") {
      fetch("https://travel-planner-server-site.vercel.app/touristSpots/desSort")
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else {
      setTouristSpots(loaderData);
    }
  };

  return (
    <div>
      <div className="w-11/12 lg:w-3/4 mx-auto mt-16 space-y-2">
        <div className="text-center space-y-4 flex flex-col items-center">
          <h3 className="text-3xl font-bold">
            Explore the World: Discover Our All Tourist Destinations
          </h3>
          <p className="font-medium text-[#4e4e4e] max-w-screen-md">
            Embark on a global journey of discovery through our curated tourist
            spots. From iconic landmarks to hidden gems, find enriching
            experiences that inspire.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <select className="select  w-full max-w-72" onChange={handleCostSort}>
            <option disabled selected>
              Sorted By?
            </option>
            <option value="ascending">Average Cost - Ascending Order</option>
            <option value="descending">Average Cost - Descending Order</option>
          </select>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpots._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
        <div className="flex justify-center pb-4">
          <Link
            to="/"
            className="bg-[#6ab8fa] hover:bg-[#189b9c] px-8 py-3 rounded-xl font-bold text-white text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
