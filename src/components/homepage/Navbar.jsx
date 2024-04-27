import { useContext } from "react";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
    toast.success("Signout Successfully");
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          style={({isActive}) => {
            return isActive
              ? {background: "#189b9c", color: "white", fontWeight: "700"}
              : {};
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTouristSpot"
          style={({isActive}) => {
            return isActive
              ? {background: "#189b9c", color: "white", fontWeight: "700"}
              : {};
          }}
        >
          All Tourist Spot
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addTouristSpot"
              style={({isActive}) => {
                return isActive
                  ? {background: "#189b9c", color: "white", fontWeight: "700"}
                  : {};
              }}
            >
              Add Tourist Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myList"
              style={({isActive}) => {
                return isActive
                  ? {background: "#189b9c", color: "white", fontWeight: "700"}
                  : {};
              }}
            >
              My List
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="bg-gray-200">
        <div className="navbar w-11/12 lg:w-3/4 mx-auto p-4">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="pr-2 text-[#0a517e] lg:hidden pt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-base mt-3 z-[10] p-2 shadow bg-base-100 w-52 rounded-md "
              >
                {navItems}
              </ul>
            </div>
            <div className="btn p-0 bg-transparent border-none shadow-none hover:bg-transparent">
              <Link to="/">
                <img
                  className="w-28"
                  src="https://i.ibb.co/TRN1wFX/Screenshot-2024-04-26-210302-removebg-preview.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-4 menu-horizontal px-1 text-base">
              {navItems}
            </ul>
          </div>

          <div className="navbar-end ">
            {user ? (
              <div>
                {user.photoURL ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={user.photoURL}
                      className="rounded-[100%] w-12"
                      alt="Photo"
                      title={user.displayName}
                    />
                    <Link
                      className="tooltip cursor-pointer"
                      onClick={handleSignOut}
                      data-tip="Sign Out"
                    >
                      <RiLogoutCircleLine className="text-3xl text-[#0a517e] hover:text-[#189b9c]"></RiLogoutCircleLine>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <img
                      src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                      className="rounded-[100%] w-12"
                      alt=""
                    />
                    <Link
                      className="tooltip cursor-pointer"
                      onClick={handleSignOut}
                      data-tip="Sign Out"
                    >
                      <RiLogoutCircleLine className="text-3xl text-[#0a517e] hover:text-[#189b9c]"></RiLogoutCircleLine>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="tooltip" data-tip="Login">
                <Link
                  className="text-xl flex items-center gap-2 "
                  to="/logreg/login"
                >
                  <IoMdLogIn className="text-3xl text-[#0a517e] hover:text-[#189b9c]"></IoMdLogIn>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
