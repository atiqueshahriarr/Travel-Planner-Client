import PropTypes from "prop-types";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const TouristSpotCard = ({touristSpot}) => {
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
    userName,
  } = touristSpot;

  const VisitorsPerYear = parseInt(totalVisitorsPerYear);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // When 50% of the component is in view
  });

  return (
    <div className="p-4 border rounded-2xl">
      <div
        className="bg-gray-100 rounded-xl flex justify-center tooltip"
        data-tip={userName}
      >
        <img
          src={imageUrl}
          alt=""
          className="h-[250px] w-full shadow-md rounded-xl p-4  hover:border-4"
        />
      </div>

      <h3 className="my-3 text-xl font-medium">
        {touristsSpotName}{" "}
        <span className="text-sm text-black">
          {" "}
          (Prefarable for - {seasonality})
        </span>
      </h3>
      <h4 className="border-b border-dashed pb-4 font-medium">
        {countryName},
        <span className="ml-1 font-normal text-sm ">{location}</span>
      </h4>

      <div className="pt-2 flex justify-between font-medium">
        <p>$ {averageCost} Per Person</p>
        <p>{travelTime} Days</p>
      </div>
      <div
        ref={ref}
        className="text-center text-2xl font-semibold text-[#0a517e]"
      >
        {inView && <CountUp start={0} end={VisitorsPerYear} duration={4} />}+
        <span className="text-sm text-black"> Visitors per year</span>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={`/touristDetails/${_id}`}
          className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.array,
};

export default TouristSpotCard;
