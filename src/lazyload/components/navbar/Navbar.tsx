import { NavLink } from "react-router-dom";
import logo from "../../../logo.svg";
import { routes } from "../../../route/routes";

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="React-logo" />
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={routes.lazy}
          >
            Shopping
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={routes.lazy2}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={routes.lazy3}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
