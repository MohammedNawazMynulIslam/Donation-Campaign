import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="container mx-auto mt-12">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
