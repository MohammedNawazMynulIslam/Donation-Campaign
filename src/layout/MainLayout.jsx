import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-48">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
