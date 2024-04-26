import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form>
        <label htmlFor="text" className="block mt-6">
          Name
        </label>
        <input
          className="block px-5 py-2  border-b-2 w-full mt-2 "
          name="username"
          type="text"
          placeholder="Type username"
        />

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

        <label htmlFor="photoUrl" className="block mt-6">
          PhotoUrl
        </label>
        <input
          className="block px-5 py-2  border-b-2 w-full mt-2 "
          name="photoUrl"
          type="text"
          placeholder="Type photo url link"
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

        <div className="flex mt-4 justify-center">
          <input
            type="submit"
            value="REGISTER"
            className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white"
          />
        </div>
      </form>

      <div className="flex flex-col items-center justify-center  mt-6">
        <p className="mt-2">
          Are have an account?{" "}
          <span className="text-blue-500 hover:font-semibold">
            <Link to="/logreg/login">Please Login.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
