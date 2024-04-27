import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./components/authProvider/AuthProvider.jsx";
import PrivateRoute from "./components/authProvider/PrivateRoute.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/homepage/Home.jsx";
import TouristCardDetails from "./components/homepage/TouristCardDetails.jsx";
import AddTouristSpot from "./components/Layout/AddTouristSpot.jsx";
import MyList from "./components/Layout/MyList.jsx";
import AllTouristSpot from "./components/loginRegister/AllTouristSpot.jsx";
import Login from "./components/loginRegister/Login.jsx";
import LogReg from "./components/loginRegister/LogReg.jsx";
import Register from "./components/loginRegister/Register.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logreg",
        element: <LogReg></LogReg>,
        children: [
          {
            path: "/logreg/login",
            element: <Login></Login>,
          },
          {
            path: "/logreg/register",
            element: <Register></Register>,
          },
        ],
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/touristDetails/:id",
        element: (
          <PrivateRoute>
            <TouristCardDetails></TouristCardDetails>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/touristSpot/${params.id}`),
      },

      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
