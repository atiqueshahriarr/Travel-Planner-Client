import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CountryWiseSpotCard from "./CountryWiseSpotCard";

const CountryTouristSpot = () => {
  const {countryName} = useParams();
  console.log(countryName);

  const allSpotData = useLoaderData();
  console.log(allSpotData);

  const [specificSpots, setSpecificSpots] = useState(allSpotData);

  useEffect(() => {
    const spots = specificSpots.filter(
      (specificSpot) => specificSpot.countryName == countryName
    );
    setSpecificSpots(spots);
    console.log(spots);
  }, []);

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto mt-16 space-y-2">
      <div className="text-center space-y-4 flex flex-col items-center mb-8">
        <h3 className="text-3xl font-bold">
          {countryName} - All Tourist Spots
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
        {specificSpots.length > 0 ? (
          <div>
            {specificSpots.map((country) => (
              <CountryWiseSpotCard
                key={country._id}
                country={country}
              ></CountryWiseSpotCard>
            ))}
          </div>
        ) : (
          <div className="text-center space-y-4 flex flex-col items-center pb-72 text-xl text-red-500 font-bold">
            Currenty no tourist spot is availabe in {countryName}.
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryTouristSpot;
