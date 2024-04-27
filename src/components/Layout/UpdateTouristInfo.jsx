import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateTouristInfo = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const {
    _id,
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
  console.log(_id);
  const handleUpdateInfo = (e) => {
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
    const updateInfo = {
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
    console.log(updateInfo);

    fetch(`http://localhost:5000/touristSpots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated tourist information");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#0a517e] via-[#6ab8fa] to-[#189b9c]">
      <div className="flex items-center justify-center min-h-screen py-6">
        <div className="bg-white w-4/5 lg:w-2/4 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center text-3xl font-bold mb-6">
            Update Tourist Spot Information
          </h3>
          <form onSubmit={handleUpdateInfo}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="imageUrl"
                  type="text"
                  placeholder="Enter image URL"
                  required
                  defaultValue={imageUrl}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="touristsSpotName"
                  type="text"
                  placeholder="Enter tourists spot name"
                  required
                  defaultValue={touristsSpotName}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="countryName"
                  type="text"
                  placeholder="Enter country name"
                  required
                  defaultValue={countryName}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  required
                  defaultValue={location}
                />
              </div>

              <div className="col-span-2">
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="shortDescription"
                  type="text"
                  placeholder="Enter short description"
                  required
                  defaultValue={shortDescription}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="averageCost"
                  type="number"
                  placeholder="Enter average cost"
                  required
                  defaultValue={averageCost}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="seasonality"
                  type="text"
                  placeholder="Enter seasonality (winter/summer)"
                  required
                  defaultValue={seasonality}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="travelTime"
                  type="number"
                  placeholder="Enter travel time (days)"
                  required
                  defaultValue={travelTime}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  name="totalVisitorsPerYear"
                  type="number"
                  placeholder="Enter total visitors per year"
                  required
                  defaultValue={totalVisitorsPerYear}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="userEmail"
                  type="email"
                  placeholder="Enter email address"
                  required
                  defaultValue={userEmail}
                />
              </div>

              <div>
                <input
                  className="block px-5 py-2 border-2 w-full mt-2"
                  name="userName"
                  type="text"
                  placeholder="Enter name"
                  required
                  defaultValue={userName}
                />
              </div>
            </div>

            <div className="flex mt-4 justify-center">
              <input
                type="submit"
                value="Update Info"
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

export default UpdateTouristInfo;
