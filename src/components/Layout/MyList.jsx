import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
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
        fetch(
          `https://travel-planner-server-site.vercel.app/touristSpots/${id}`,
          {
            method: "DELETE",
          }
        )
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
    <Fade>
      <Helmet>
        <title>Travel Panner | My List</title>
      </Helmet>
      <div className="shadow-lg mb-1">
        <div className="w-10/12 lg:w-3/4 mx-auto min-h-[500px]">
          <div className="text-center space-y-4 flex flex-col items-center py-10 ">
            <h3 className="text-3xl font-bold text-[#3672B7]">
              My Tourist Spot List
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="bg-[#bbe8f2] text-black">
                  <th>Tourist Spot</th>
                  <th>Country Name</th>
                  <th className="hidden md:block">Average Cost</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myTouristSpots.map((myTouristSpot) => (
                  <tr key={myTouristSpot._id}>
                    <td>{myTouristSpot.touristsSpotName}</td>
                    <td>{myTouristSpot.countryName}</td>

                    <td className="hidden md:block">
                      $ {myTouristSpot.averageCost}
                    </td>
                    <td>
                      <FaEdit
                        className="text-xl text-[#F6BC1C] hover:text-[#009144] hover:text-2xl"
                        onClick={() => handleUpdateSpot(myTouristSpot._id)}
                      ></FaEdit>
                    </td>
                    <td>
                      <MdDeleteForever
                        className="text-xl text-[#F6BC1C] hover:text-[#EE3F36] hover:text-2xl"
                        onClick={() => handleDeleteSpot(myTouristSpot._id)}
                      ></MdDeleteForever>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MyList;
