import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar/NavBar";
import Banner from "../Pages/Header/Banner/Banner";
import backgroundImage from "../assets/image/Rectangle 4281.png";

const MainLayout = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[70vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="">
        <NavBar />
        <Banner />
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
