import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavbarLink: FC<{ path: string; name: string }> = ({ path, name }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {name}
    </NavLink>
  );
};

export default NavbarLink;
