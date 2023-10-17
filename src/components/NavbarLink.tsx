import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavbarLink: FC<{ path: string; name: string }> = ({ path, name }) => {
  return (
    <li className="hover:text-[color:var(--text-color)]">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
