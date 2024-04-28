import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryWiseSpotCard = ({country}) => {
  console.log(country);
  const {
    _id,
    imageUrl,
    touristsSpotName,
    location,
    averageCost,
    seasonality,
    shortDescription,
  } = country;

  const description = shortDescription.slice(0, 100);

  return (
    <div className=" bg-white rounded-xl overflow-hidden border-2 shadow-md">
      <div className="px-6 py-4">
        <div className="bg-gray-100 rounded-xl flex justify-center relative">
          <img
            src={imageUrl}
            alt=""
            className="h-[250px] w-full shadow-md rounded-xl p-4"
          />
          <p className="text-white text-base font-bold bg-blue-600 px-3 rounded-lg mb-2 absolute top-8 right-8 ">
            ${averageCost}
          </p>
          <p className="text-white text-sm font-medium bg-blue-600 bg-opacity-70 px-3  mb-2 absolute bottom-6 left-4 ">
            Preferable for - {seasonality}
          </p>
        </div>

        <div className="mt-2 px-2">
          <p className="font-bold text-xl">
            {touristsSpotName}, <span className="text-sm">{location}</span>
          </p>
          <p className="text-gray-600 text-base text-justify my-2">
            {description}
            <Link
              className="font-bold hover:text-blue-600"
              to={`/touristDetails/${_id}`}
            >
              Read More...
            </Link>
          </p>
        </div>
      </div>
      <div className="px-6 pb-4 flex justify-center">
        <Link
          to={`/touristDetails/${_id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
CountryWiseSpotCard.propTypes = {
  country: PropTypes.array,
};
export default CountryWiseSpotCard;
