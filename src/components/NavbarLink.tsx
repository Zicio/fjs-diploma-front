import { ListItem } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavbarLink: FC<{ path: string; name: string }> = ({ path, name }) => {
  return (
    <ListItem
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active-link" : "")}
        style={{ padding: "0 10px", textDecoration: "none", color: "white" }}
      >
        {name}
      </NavLink>
    </ListItem>
  );
};

export default NavbarLink;
