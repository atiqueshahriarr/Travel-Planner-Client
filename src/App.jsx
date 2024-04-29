import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/homepage/Footer";
import Navbar from "./components/homepage/Navbar";

function App() {
  return (
    <>
      <div className="fixed w-full z-10 bg-[#282A36]">
        <Navbar></Navbar>
      </div>
      <div className="relative top-[88px]">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
