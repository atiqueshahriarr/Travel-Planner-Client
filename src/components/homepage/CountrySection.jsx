import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountrySection = () => {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://travel-planner-server-site.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto mt-16 space-y-8 pb-16">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#F6BC1C]">
          Discover South Asia: A Cultural Mosaic
        </h3>
        <p className=" max-w-screen-lg">
          Explore on a journey through South Asia, where vibrant cultures and
          breathtaking landscapes come together to create an unforgettable
          experience.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <CountryCard key={countries._id} country={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default CountrySection;
