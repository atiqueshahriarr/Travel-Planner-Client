import { NavLink, Outlet } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const LogReg = () => {
  return (
    <div>
      <div className="min-h-screen mb-1 shadow-lg">
        <div className="flex items-center justify-center min-h-screen py-6">
          <div className=" bg-gradient-to-b from-[#1762b8]  to-[#487ead] w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
            <div
              role="tablist"
              className="tabs tabs-bordered flex font-semibold"
            >
              <NavLink
                to="/logreg/login"
                className="flex-1 text-center "
                style={({isActive}) => {
                  return isActive
                    ? {
                        background: "#6ab8fa",
                        color: "white",
                        fontWeight: "700",
                      }
                    : {};
                }}
              >
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-xl md:text-2xl my-2 text-white"
                  aria-label="Login"
                  checked
                />
              </NavLink>
              <div role="tabpanel" className="tab-content p-10">
                <Login></Login>
              </div>

              <NavLink
                to="/logreg/register"
                className="flex-1 text-center"
                style={({isActive}) => {
                  return isActive
                    ? {
                        background: "#6ab8fa",
                        color: "white",
                        fontWeight: "700",
                      }
                    : {};
                }}
              >
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-xl md:text-2xl my-2 text-black"
                  aria-label="Register"
                  checked
                />
              </NavLink>
              <div role="tabpanel" className="tab-content p-10">
                <Register></Register>
              </div>
            </div>

            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogReg;
