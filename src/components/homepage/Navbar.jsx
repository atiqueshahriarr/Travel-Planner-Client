import { useContext, useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  console.log(user);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeChange = (e) => {
    console.log(e.target.checked);
    const newTheme = e.target.checked ? "dracula" : "light";
    setTheme(newTheme);
  };
  console.log(theme);

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
              ? {background: "#3672B7", color: "white", fontWeight: "700"}
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
              ? {background: "#3672B7", color: "white", fontWeight: "700"}
              : {};
          }}
        >
          All Tourists Spot
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addTouristSpot"
              style={({isActive}) => {
                return isActive
                  ? {background: "#3672B7", color: "white", fontWeight: "700"}
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
                  ? {background: "#3672B7", color: "white", fontWeight: "700"}
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
      <div className="shadow-xl">
        <div className="navbar w-11/12 lg:w-3/4 mx-auto p-4">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="pr-2 text-white lg:hidden pt-1"
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
            <div className="">
              <Bounce>
                <Link to="/" className="flex items-center">
                  <div>
                    <img className="w-12" src="iconLogo.png" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-xl ml-2 text-[#EE3F36]">
                      travel{" "}
                      <span className="block text-[#3672B7]">planner</span>
                    </p>
                  </div>
                </Link>
              </Bounce>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-4 menu-horizontal px-1 text-base text-white">
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
                      <RiLogoutCircleLine className="text-3xl text-[#F6BC1C] hover:text-[#EE3F36]"></RiLogoutCircleLine>
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
                      <RiLogoutCircleLine className="text-3xl text-[#F6BC1C] hover:text-[#EE3F36]"></RiLogoutCircleLine>
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
                  <IoMdLogIn className="text-3xl text-[#F6BC1C] hover:text-[#009144]"></IoMdLogIn>
                </Link>
              </div>
            )}
            <div className="pl-2">
              <label className="cursor-pointer grid place-items-center">
                <input
                  onChange={handleThemeChange}
                  type="checkbox"
                  checked={theme === "dracula"}
                  value="dracula"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
