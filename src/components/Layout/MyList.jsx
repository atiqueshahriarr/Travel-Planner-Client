import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const MyList = () => {
  const loaderData = useLoaderData();
  const {user} = useContext(AuthContext);
  const {email} = user;
  console.log(email);
  const [myTouristSpots, setMyTouristSpots] = useState(loaderData);

  useEffect(() => {
    const myLists = myTouristSpots.filter(
      (myTouristSpot) => myTouristSpot.userEmail == email
    );
    setMyTouristSpots(myLists);
  }, []);

  const handleDeleteSpot = () => {};

  return (
    <div className="w-11/12 lg:w-3/4  mx-auto">
      <div className="text-center space-y-4 flex flex-col items-center mt-10 mb-6">
        <h3 className="text-3xl font-bold">My Tourist Spot List</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Tourist Spot Name</th>
              <th>Country Name</th>
              <th>Visitors Per Year</th>
              <th>Average Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myTouristSpots.map((myTouristSpot) => (
              <tr key={myTouristSpot._id}>
                <th>{myTouristSpot.touristsSpotName}</th>
                <th>{myTouristSpot.countryName}</th>
                <th>{myTouristSpot.totalVisitorsPerYear}</th>
                <th>$ {myTouristSpot.averageCost}</th>
                <th>
                  <FaEdit
                    className="text-xl hover:text-[#6ab8fa] hover:text-2xl"
                    onClick={handleDeleteSpot}
                  ></FaEdit>
                </th>
                <th>
                  <MdDeleteForever className="text-xl hover:text-red-600 hover:text-2xl"></MdDeleteForever>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
