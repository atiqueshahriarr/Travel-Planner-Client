import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountrySection = () => {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto mt-20 space-y-8 mb-12">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold">
          Discover South Asia: A Cultural Mosaic
        </h3>
        <p className="font-medium text-[#4e4e4e] max-w-screen-lg">
          Explore on a journey through South Asia, where vibrant cultures,
          breathtaking landscapes, and rich history come together to create an
          unforgettable experience. Discover the beauty and diversity of this
          enchanting region.
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
