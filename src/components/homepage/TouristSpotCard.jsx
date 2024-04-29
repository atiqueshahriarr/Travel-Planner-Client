import PropTypes from "prop-types";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const TouristSpotCard = ({touristSpot}) => {
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

  const {
    _id,
    imageUrl,
    touristsSpotName,
    countryName,
    location,
    averageCost,
    seasonality,
    totalVisitorsPerYear,
    travelTime,
  } = touristSpot;

  const VisitorsPerYear = parseInt(totalVisitorsPerYear);
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // When 50% of the component is in view
  });

  return (
    <Fade cascade>
      <div className="p-4 border border-[#F6BC1C] rounded-lg">
        <div className=" rounded-xl flex justify-center relative">
          <img
            src={imageUrl}
            alt=""
            className="h-[250px] w-full shadow-md rounded-xl p-4  hover:border"
          />
          <span className="text-sm text-white px-4 rounded-s-md absolute top-6 right-4 bg-[#EE3F36] bg-opacity-60">
            (Prefarable for - {seasonality})
          </span>
        </div>

        <h3 className="my-2 text-xl font-bold text-[#3672B7]">
          {touristsSpotName}{" "}
        </h3>
        <h4 className="border-b border-dashed pb-4 font-medium">
          {countryName},
          <span className="ml-1 font-normal text-sm">{location}</span>
        </h4>

        <div className="pt-2 flex justify-between font-medium">
          <p>
            ${averageCost}
            <span className="text-xs font-normal">/Person</span>
          </p>
          <p>{travelTime} Days</p>
        </div>
        <div ref={ref} className="text-center text-xl font-bold text-[#EE3F36]">
          {inView && <CountUp start={0} end={VisitorsPerYear} duration={2} />}+
          <span className="text-sm text-[#F6BC1C]"> Visitors/year</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to={`/touristDetails/${_id}`}
            className="bg-[#6ab8fa] hover:bg-[#3672B7] w-2/4 py-2 rounded-xl font-bold text-white text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </Fade>
  );
};

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.array,
};

export default TouristSpotCard;
