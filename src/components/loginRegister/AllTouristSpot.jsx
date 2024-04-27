import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../homepage/TouristSpotCard";

const AllTouristSpot = () => {
  const loaderData = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(loaderData);
  const handleCostSort = () => {};
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
          <div className="dropdown dropdown-open">
            <div tabIndex={0} role="button" className="btn m-1">
              Sorted By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link onClick={handleCostSort}>Average Cost</Link>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
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
