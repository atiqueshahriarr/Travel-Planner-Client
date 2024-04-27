import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/AuthProvider";

const MyList = () => {
  const loaderData = useLoaderData();
  const {user} = useContext(AuthContext);
  const {email} = user;
  const navigate = useNavigate();

  const [touristSpots] = useState(loaderData);
  const myLists = touristSpots.filter(
    (myTouristSpot) => myTouristSpot.userEmail == email
  );
  const [myTouristSpots, setMyTouristSpots] = useState(myLists);

  const handleUpdateSpot = (id) => {
    navigate(`/updateTouristInfo/${id}`);
  };

  const handleDeleteSpot = (id) => {
    Swal.fire({
      title: "Are you sure to delete this one?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristSpots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log("Deleted Successfully");
              Swal.fire({
                title: "Deleted!",
                text: "Your tourist spot has been deleted.",
                icon: "success",
              });
              const remainingSpots = myTouristSpots.filter(
                (myTouristSpot) => myTouristSpot._id != id
              );
              setMyTouristSpots(remainingSpots);
            }
          });
      }
    });

    console.log(id);
  };

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
                    onClick={() => handleUpdateSpot(myTouristSpot._id)}
                  ></FaEdit>
                </th>
                <th>
                  <MdDeleteForever
                    className="text-xl hover:text-red-600 hover:text-2xl"
                    onClick={() => handleDeleteSpot(myTouristSpot._id)}
                  ></MdDeleteForever>
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
