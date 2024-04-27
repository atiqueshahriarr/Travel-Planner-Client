import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../homepage/TouristSpotCard";

const AllTouristSpot = () => {
  const loaderData = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(loaderData);
  const handleCostSort = (e) => {
    const selectChoice = e.target.value;
    if (selectChoice == "ascending") {
      fetch("http://localhost:5000/touristSpots/ascSort")
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else if (selectChoice == "descending") {
      fetch("http://localhost:5000/touristSpots/desSort")
        .then((res) => res.json())
        .then((data) => setTouristSpots(data));
    } else {
      setTouristSpots(loaderData);
    }
  };

  return (
    <div>
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
        <div className="flex justify-end">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleCostSort}
          >
            <option disabled selected>
              Sorted By?
            </option>
            <option value="ascending">Average Cost - Ascending Order</option>
            <option value="descending">Average Cost - Descending Order</option>
          </select>
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

export default AllTouristSpot;
