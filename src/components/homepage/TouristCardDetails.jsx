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
    <div className="shadow-lg mb-1">
      <div className="w-10/12 lg:w-3/4 mx-auto py-10">
        <div className="grid grid-cols-1">
          <div className=" flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold mb-4 text-[#3672B7]">
              {touristsSpotName}
            </h3>
            <div
              className="hero h-[280px] md:h-[400px] lg:h-[550px] xl:h-[600px] bg-cover shadow-xl rounded-lg mb-6"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            >
              <div className="hero-overlay bg-opacity-40 rounded-lg"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="bg-black  px-4  py-2 rounded-lg  bg-opacity-30">
                    <div
                      ref={ref}
                      className="text-center text-3xl md:text-5xl font-bold text-[#EE3F36]"
                    >
                      {inView && (
                        <CountUp start={0} end={VisitorsPerYear} duration={4} />
                      )}
                      +
                      <span className="text-base md:text-lg text-[#F6BC1C]">
                        Visitors/year
                      </span>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">
              <span className="font-bold text-lg text-[#3672B7]">
                Location:{" "}
              </span>{" "}
              {countryName}, {location}
            </p>
            <p className="text-justify pb-3">
              <span className="font-bold text-lg text-[#3672B7]">
                Description:{" "}
              </span>
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
              <span className="font-bold text-lg text-[#3672B7]">
                Created By:
              </span>
              <ul className="ml-10">
                <li className="list-disc font-semibold">Name: {userName}</li>
                <li className="list-disc font-semibold">Email: {userEmail}</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 mb-10">
          <Link to={"/"}>
            <button className="bg-[#6ab8fa] hover:bg-[#3672B7] w-56 py-3 rounded-xl font-bold text-white">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristCardDetails;
