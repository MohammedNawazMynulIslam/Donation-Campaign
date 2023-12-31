import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const NavBar = () => {
  return (
    <div className="">
      <nav className="flex flex-row lg:flex justify-between items-center py-12 px-36">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* Donation */}
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline "
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>

          {/*Statistics */}
          <li>
            <NavLink
              to="/statistic"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
