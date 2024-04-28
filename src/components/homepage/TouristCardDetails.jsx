import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link, useLoaderData } from "react-router-dom";

const TouristCardDetails = () => {
  const loaderData = useLoaderData();
  const {
    imageUrl,
    touristsSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    userEmail,
    userName,
  } = loaderData;

  console.log(loaderData);
  const VisitorsPerYear = parseInt(totalVisitorsPerYear);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // When 50% of the component is in view
  });

  return (
    <div className="w-11/12 lg:w-3/4  mx-auto">
      <div className="grid grid-cols-1 my-6">
        <div className=" flex flex-col justify-center items-center">
          <h3 className="text-3xl font-bold my-4">{touristsSpotName}</h3>
          <img
            src={imageUrl}
            alt=""
            className=" w-4/5 lg:w-3/5 shadow-xl rounded-xl mb-6"
          />
        </div>
        <div
          ref={ref}
          className="text-center text-4xl font-semibold text-[#0a517e]"
        >
          {inView && <CountUp start={0} end={VisitorsPerYear} duration={4} />}+
          <span className="text-sm text-black"> Visitors per year</span>
        </div>
        <div className="space-y-2">
          <p className="font-medium">
            <span className="font-bold text-lg">Location: </span> {countryName},{" "}
            {location}
          </p>
          <p className="text-justify pb-3">
            <span className="font-bold text-lg">Description: </span>
            {shortDescription}
          </p>

          <div className="border-y-2">
            <table>
              <tr className="h-7">
                <td>Average Cost</td>
                <td>:</td>
                <td className="pl-2 font-bold">
                  ${averageCost}
                  <span className="text-sm font-semibold"> /Person</span>
                </td>
              </tr>
              <tr className="h-7">
                <td>Seasonality</td>
                <td>:</td>
                <td className="pl-2 font-bold">{seasonality}</td>
              </tr>
              <tr className="h-7">
                <td>Travel Time</td>
                <td>:</td>
                <td className="pl-2 font-bold">{travelTime} days</td>
              </tr>
            </table>
          </div>
          <p className="pb-6">
            <span className="font-bold text-lg">Created By:</span>
            <ul className="ml-10">
              <li className="list-disc font-semibold">Name: {userName}</li>
              <li className="list-disc font-semibold">Email: {userEmail}</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 mb-10">
        <Link to={"/"}>
          <button className="bg-[#6ab8fa] hover:bg-[#189b9c] w-56 py-3 rounded-xl font-bold text-white">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristCardDetails;
