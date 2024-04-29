import { JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AboutTravelPlanner = () => {
  const [text] = useTypewriter({
    words: [
      "Your Ultimate Adventure Partner",
      "Crafting Memorable Journeys",
      "Crafting Your Perfect Getaway",
      "Making Memories, One Journey at a Time",
    ],
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 60,
    delay: 2000,
  });
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto mt-10 space-y-8 pb-16">
      <div className="text-center space-y-4 flex flex-col items-center">
        <div>
          <h3 className="text-3xl font-bold text-[#3672B7]">
            Travel Planner: <span className="text-[#6ab8fa]">{text}</span>
            <span>
              <Cursor
                cursorStyle="_"
                cursorColor="#3672B7
              "
              ></Cursor>
            </span>
          </h3>
        </div>
      </div>
      <JackInTheBox>
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
          <div className=" lg:w-2/6">
            <div className="flex items-center my-10 md:my-0">
              <div>
                <img className="w-24" src="iconLogo.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-6xl ml-2 text-[#EE3F36]">
                  travel <span className="block text-[#3672B7]">planner</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2">
            <h3 className="text-2xl font-bold my-2">
              World Best Travel Agency{" "}
              <span className="text-[#3672B7]">in 2024.</span>
            </h3>
            <p className="text-justify my-4">
              <span className="text-lg italic font-bold text-[#3672B7]">
                TravelPlanner,
              </span>{" "}
              crowned as the worlds leading travel agency in 2024, offers
              expertly curated journeys tailored to your desires. Experience
              seamless planning and embark on unforgettable adventures with
              confidence. Our personalized service, expert guidance, and
              meticulous attention to detail ensure that every aspect of your
              trip is crafted to perfection, allowing you to focus on creating
              lasting memories.
            </p>
            <div className="ml-4">
              <li>
                <span className="font-semibold">
                  Personalized Itineraries:{" "}
                </span>
                Tailored travel plans for your preferences.
              </li>
              <li>
                <span className="font-semibold">Expert Guidance:</span> Insider
                tips from dedicated specialists.
              </li>
              <li>
                <span className="font-semibold">24/7 Support:</span> Assistance
                anytime, anywhere.
              </li>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className=" bg-[#6ab8fa] hover:bg-[#3672B7] py-2 w-fit px-5 rounded-lg mt-4 ml-4">
                <Link
                  to="/allTouristSpot"
                  className="  font-bold text-white text-center"
                >
                  Find Spots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default AboutTravelPlanner;
