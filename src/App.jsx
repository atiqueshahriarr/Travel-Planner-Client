import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/homepage/Footer";
import Navbar from "./components/homepage/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
