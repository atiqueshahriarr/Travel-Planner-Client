import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../authProvider/AuthProvider";

const AddTouristSpot = () => {
  const {user} = useContext(AuthContext);
  const {displayName, email} = user;

  const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const imageUrl = e.target.imageUrl.value;
    const touristsSpotName = e.target.touristsSpotName.value;
    const countryName = e.target.countryName.value;
    const location = e.target.location.value;
    const shortDescription = e.target.shortDescription.value;
    const averageCost = e.target.averageCost.value;
    const seasonality = e.target.seasonality.value;
    const travelTime = e.target.travelTime.value;
    const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;
    const spotInfo = {
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
    };
    console.log(spotInfo);

    fetch("http://localhost:5000/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log(data.insertedId);
          // e.target.reset();
          toast.success("Data added successfully");
        }
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#0a517e] via-[#6ab8fa] to-[#189b9c]">
      <div className="flex items-center justify-center min-h-screen py-6">
        <div className="bg-white w-4/5 lg:w-2/4 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center text-3xl font-bold mb-6">
            Tourist Spot Information
          </h3>
          <form onSubmit={handleAddTouristSpot}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="imageUrl"
                  type="text"
                  placeholder="Enter image URL"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="touristsSpotName"
                  type="text"
                  placeholder="Enter tourists spot name"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="countryName"
                  type="text"
                  placeholder="Enter country name"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="col-span-2">
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="shortDescription"
                  type="text"
                  placeholder="Enter short description"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="averageCost"
                  type="number"
                  placeholder="Enter average cost"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="seasonality"
                  type="text"
                  placeholder="Enter seasonality (winter/summer)"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="travelTime"
                  type="number"
                  placeholder="Enter travel time (days)"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="totalVisitorsPerYear"
                  type="number"
                  placeholder="Enter total visitors per year"
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="userEmail"
                  type="email"
                  placeholder="Enter email address"
                  defaultValue={email}
                  required
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="userName"
                  type="text"
                  placeholder="Enter name"
                  defaultValue={displayName}
                  required
                />
              </div>
            </div>

            <div className="flex mt-4 justify-center">
              <input
                type="submit"
                value="Add Spot"
                className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white"
              />
            </div>
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
