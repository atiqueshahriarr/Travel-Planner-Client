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
    <div className="w-11/12 lg:w-3/4 mx-auto mt-10 space-y-8 mb-12">
      <div className="text-center space-y-4 flex flex-col items-center">
        <div>
          <h3 className="text-3xl font-bold">
            Travel Planner: <span className="text-[#6ab8fa]">{text}</span>
            <span className="text-[#189b9c]">
              <Cursor cursorStyle="_"></Cursor>
            </span>
          </h3>
        </div>
      </div>
      <JackInTheBox>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className=" md:w-2/6">
            <img
              className="w-full"
              src="https://i.ibb.co/TRN1wFX/Screenshot-2024-04-26-210302-removebg-preview.png"
              alt=""
            />
          </div>
          <div className=" md:w-1/2">
            <h3 className="text-2xl font-bold">
              World Best Travel Agency Company in 2024.
            </h3>
            <p className="text-justify my-3">
              TravelPlanner, crowned as the worlds leading travel agency in
              2024, offers expertly curated journeys tailored to your desires.
              Experience seamless planning and embark on unforgettable
              adventures with confidence.
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
            <div className=" bg-[#6ab8fa] hover:bg-[#189b9c] py-2 w-fit px-5 rounded-lg mt-4 ml-4">
              <Link
                to="/allTouristSpot"
                className="  font-bold text-white text-center"
              >
                Find Spots
              </Link>
            </div>
          </div>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default AboutTravelPlanner;
