import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email" className="block mt-6">
          Email
        </label>
        <input
          className="block px-5 py-2  border-b-2 w-full mt-2 "
          name="email"
          type="email"
          placeholder="Type email address"
          required
        />

        <label htmlFor="password" className="block mt-6">
          Password
        </label>
        <div className="flex relative">
          <input
            className="block px-5 py-2 border-b-2 w-full mt-2"
            name="password"
            type="password"
            placeholder="Type password"
            required
          />
        </div>
        <a className="text-right mt-2 hover:cursor-pointer hover:underline hover:text-blue-600">
          Forgot Password?
        </a>
        <div className="flex mt-4 justify-center">
          <input
            type="submit"
            value="LOGIN"
            className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white"
          />
        </div>
      </form>

      <div className="flex flex-col items-center justify-center  mt-6">
        <p>Or</p>

        <div className="flex gap-4 mt-4">
          <FcGoogle className="text-4xl hover:text-5xl hover:cursor-pointer"></FcGoogle>
          <FaGithub className="text-4xl hover:text-5xl hover:cursor-pointer"></FaGithub>
        </div>
        <ToastContainer />
        <p className="mt-4">
          Are you new here?{" "}
          <span className="text-blue-500 hover:font-semibold">
            <Link to="/logreg/register">Create an account.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
