import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
const CountryCard = ({country}) => {
  const {loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const {imageURL, countryName, shortDescription} = country;

  return (
    <div className="p-4 border rounded-2xl">
      <div className="bg-gray-100 rounded-xl flex justify-center">
        <img
          src={imageURL}
          alt=""
          className="h-[250px] w-full shadow-md rounded-xl p-4  hover:border-4"
        />
      </div>

      <h3 className="my-3 text-xl font-medium">{countryName}</h3>

      <div className="pt-2">
        <p>{shortDescription}</p>
      </div>

      {/* <div className="flex justify-center mt-4">
        <Link
          to={`/touristDetails/${_id}`}
          className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white text-center"
        >
          View Details
        </Link>
      </div> */}
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.array,
};

export default CountryCard;
