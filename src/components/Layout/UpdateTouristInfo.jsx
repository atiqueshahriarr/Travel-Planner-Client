import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateTouristInfo = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const {
    _id,
    imageUrl,
    touristsSpotName,
    location,
    shortDescription,
    averageCost,
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

    fetch(`https://travel-planner-server-site.vercel.app/touristSpots/${_id}`, {
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
            navigate("/myList");
          }, 1000);
        }
      });
  };

  return (
    <div className="mb-1 shadow-lg">
      <Helmet>
        <title>Travel Panner | Update Spot</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen py-10">
          <div
            className="w-4/5 md:w-3/5 lg:w-2/4 rounded-lg mx-auto p-10 h-5/6  text-white
          bg-gradient-to-b from-[#1762b8]  to-[#487ead] 
        "
          >
            <h3 className="text-center text-2xl md:text-3xl font-bold mb-6">
              Update Tourist Spot Information
            </h3>
            <form onSubmit={handleUpdateInfo}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="imageUrl"
                    type="text"
                    placeholder="Image URL"
                    required
                    defaultValue={imageUrl}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="touristsSpotName"
                    type="text"
                    placeholder="Tourist spot name"
                    required
                    defaultValue={touristsSpotName}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <select
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="countryName"
                  >
                    <option disabled selected>
                      Select Country
                    </option>
                    <option value="Bangladesh" className="text-black">
                      Bangladesh
                    </option>
                    <option className="text-black" value="Thailand">
                      Thailand
                    </option>
                    <option className="text-black" value="Indonesia">
                      Indonesia
                    </option>
                    <option className="text-black" value="Malaysia">
                      Malaysia
                    </option>
                    <option className="text-black" value="Vietnam">
                      Vietnam
                    </option>
                    <option className="text-black" value="Cambodia">
                      Cambodia
                    </option>
                  </select>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="location"
                    type="text"
                    placeholder="Location"
                    required
                    defaultValue={location}
                  />
                </div>

                <div className="col-span-2">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="shortDescription"
                    type="text"
                    placeholder="Short description"
                    required
                    defaultValue={shortDescription}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    name="averageCost"
                    type="number"
                    placeholder="Average cost"
                    required
                    defaultValue={averageCost}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <select
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="seasonality"
                  >
                    <option disabled selected>
                      Select Season
                    </option>
                    <option className="text-black" value="Winter">
                      Winter
                    </option>
                    <option className="text-black" value="Spring">
                      Spring
                    </option>
                    <option className="text-black" value="Summer">
                      Summer
                    </option>
                  </select>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    name="travelTime"
                    type="number"
                    placeholder="Travel time (days)"
                    required
                    defaultValue={travelTime}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    name="totalVisitorsPerYear"
                    type="number"
                    placeholder="Total visitors per year"
                    required
                    defaultValue={totalVisitorsPerYear}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="userEmail"
                    type="email"
                    placeholder="Email address"
                    required
                    defaultValue={userEmail}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input
                    className="block px-5 py-2 border w-full mt-2 bg-transparent rounded-md border-[#9ccaff]"
                    name="userName"
                    type="text"
                    placeholder="Name"
                    required
                    defaultValue={userName}
                  />
                </div>
              </div>

              <div className="flex mt-4 justify-center">
                <input
                  type="submit"
                  value="Update Info"
                  className="bg-[#6ab8fa] hover:bg-[#3672B7] w-2/4 py-2 rounded-xl font-bold text-white"
                />
              </div>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTouristInfo;
