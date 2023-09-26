import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar/NavBar";
import Banner from "../Pages/Header/Banner/Banner";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <div className="container mx-auto">
          <img
            src="https://i.ibb.co/gFdt8Qm/Rectangle-4281.png"
            style={{ opacity: 0.1 }}
          />
        </div>
        <Banner />
      </div>
      <div className="py-10 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
