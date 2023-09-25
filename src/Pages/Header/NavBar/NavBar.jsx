import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="">
        <div className="flex justify-between">
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
                    ? "text-[#FF444A] font-bold "
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
                    ? "text-[#FF444A] font-bold "
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
                    ? "text-[#FF444A] font-bold "
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
