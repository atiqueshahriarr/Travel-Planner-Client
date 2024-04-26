import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
      <title>Page Not Found </title>

      <h3 className="text-5xl lg:text-9xl font-semibold text-red-800">
        404 Error
      </h3>
      <h3 className="text-2xl lg:text-3xl font-medium">
        This page doesnot exist.
      </h3>
      <p className="text-base font-normal mt-8">Lets get you back.</p>
      <Link to={"/"}>
        <button className="bg-green-600 text-white font-medium px-5 py-2">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
