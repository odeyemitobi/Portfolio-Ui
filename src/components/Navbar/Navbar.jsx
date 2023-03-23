import React from "react";
import "../../components/components.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-5">
      <ul className="flex justify-end cursor-pointer">
        <li className="px-6 py-4 text-xl font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
          >
            Home
          </NavLink>
        </li>
        <li className="px-6 py-4 text-xl font-medium">
          <NavLink
            to="/work"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
          >
            Works
          </NavLink>
        </li>
        <li className="px-6 py-4 text-xl font-medium">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="px-6 py-4 text-xl font-medium">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
