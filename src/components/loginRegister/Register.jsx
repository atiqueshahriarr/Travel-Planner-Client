import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
  const {createUser, updateCreateUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    console.log(name, email, photoUrl, password);
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }

    const passCheck = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!passCheck.test(password)) {
      toast.error("Password should be at least one upper and lower case");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateCreateUser(name, photoUrl)
          .then(() => {
            toast.success("Added Username & PhotoUrl");
          })
          .catch((error) => {
            console.log(error.message);
          });
        e.target.reset();
        toast.success("Successfully Registered");
        setTimeout(() => {
          navigate("/");
        }, 1500);
        const user = {name, email, photoUrl};
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.warn("Email already exist");
      });
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="text" className="block mt-6">
          Name
        </label>
        <input
          className="block px-5 py-2  border-b-2 w-full mt-2 "
          name="username"
          type="text"
          placeholder="Type Name"
          required
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
            type={showPassword ? "text" : "password"}
            placeholder="Type password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="hover:cursor-pointer absolute right-3 top-5 text-gray-500"
          >
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>

        <div className="flex mt-4 justify-center">
          <input
            type="submit"
            value="REGISTER"
            className="bg-[#6ab8fa] hover:bg-[#189b9c] w-2/4 py-2 rounded-xl font-bold text-white"
          />
        </div>
      </form>
      <ToastContainer></ToastContainer>
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
